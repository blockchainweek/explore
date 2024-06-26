<script>
	import { page } from '$app/stores';
	import { config } from '$lib/bbw';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import SvelteMarkdown from 'svelte-markdown';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import EventTypeBadge from '$lib/components/EventTypeBadge.svelte';
	import { formatItemDate, getFlagEmoji, processItemsList } from '$lib/utils.js';
	import ItemLogo from '$lib/components/ItemLogo.svelte';
	import Disclaimer from '$lib/components/Disclaimer.svelte';

	import { compareAsc } from 'date-fns';

	export let data;

	let entry = $page.params.entry;
	let q = '';

	let total = 0;
	let scores = {};

	$: type = $page.params.type;
	$: tc = config.collections[type];
	$: items = type === 'speakers' ? processItemsList(data.bundle[type]) : data.bundle[type];

	function processItems(_items, query = {}, q = '') {
		if (!_items) return [];
		_items = [..._items];
		if (type === 'events') {
			_items = _items.sort((x, y) => (x.date > y.date ? 1 : -1));
		}
		if (type === 'events' && query.start && query.end) {
			_items = _items.filter((item) => {
				return item.segments.find((sgm) => {
					const [tstart, tend] = sgm.times.split('-');
					return (
						compareAsc(new Date(sgm.startTime), new Date(query.start)) <= 0 &&
						compareAsc(new Date(sgm.endTime), new Date(query.end)) >= 0
					);
				});
			});
		}
		if (['speakers', 'benefits', 'media-partner'].includes(type)) {
			_items = _items.sort((x, y) => (x.name.toLowerCase() > y.name.toLowerCase() ? 1 : -1));
		}
		if (type === 'places') {
			_items = _items.sort((x, y) => (x.capacity > y.capacity ? -1 : 1));
		}

		const normalize = (str) => {
			if (typeof str.replace !== 'function') {
				return str;
			}
			return str
				.normalize('NFD')
				.toLowerCase()
				.replace(/[\u0300-\u036F]/g, '');
		};

		// filters
		if (q) {
			scores = {};
			_items = _items
				.map((i) => {
					const cols = [
						['name', 50],
						['tags', 30],
						['caption', 20],
						['venueName'],
						['venueAddress'],
						['org'],
						['chains'],
						['description'],
						['twitter'],
						['country']
					];
					scores[i.id] = 0;
					for (const [c, cs = 20] of cols) {
						let ctag = typeof i[c] === 'array' ? i[c].join(', ') : i[c];
						if (typeof ctag === 'string' && normalize(ctag).match(new RegExp(normalize(q), 'si'))) {
							scores[i.id] += cs;
						}
					}
					return i;
				})
				.filter((i) => scores[i.id] > 0)
				.sort((x, y) => (scores[x.id] > scores[y.id] ? -1 : 1));
		} else {
			total = _items.filter((e) => !e.hidden).length;
		}

		return _items;
	}

	$: processedItems = processItems(items, {}, q);
	$: currentTotal = processedItems.filter((e) => !e.hidden).length;

	onMount(async () => {
		if (!config.collections[$page.params.type]) {
			const ftype = Object.keys(config.collections).find(
				(k) => config.collections[k].model === $page.params.type
			);
			if (ftype) {
				goto(`/${$page.params.entry}/${ftype}`);
			}
		}
	});
</script>

<svelte:head>
	<title>{tc?.title} | Berlin Blockchain Week 20{$page.params.entry}</title>
</svelte:head>

<Header path={false} type={$page.params.type} />

{#if tc}
	<div class="w-full">
		<div class="max-w-7xl mx-auto pt-5 md:pt-10">
			<div class="mx-4 xl:mx-0">
				<h2 class="text-2xl uppercase font-bold bbw-text-color-secondary">
					{tc.title} ({currentTotal}{#if currentTotal !== total}/{total}{/if})
				</h2>
				<div class="filter">
					<div class="filter-component">
						<label for="q"
							>Search{#if q}: "{q}"{/if}</label
						>
						<input type="text" id="q" class="w-full" bind:value={q} />
					</div>
				</div>
				<div class="text-xl mt-6 bbw-text-color-base">
					<table class="w-full table-auto">
						<thead>
							<tr class="text-left">
								{#if type === 'events'}
									<th class="text-right pr-4">📅</th>
									<th />
									<th>Name</th>
									<th class="hidden md:table-cell">📍</th>
									<th class="hidden md:table-cell">👥</th>
								{/if}
								{#if type === 'speakers'}
									<th />
									<th>Name</th>
									<th>🌎</th>
									<th class="hidden md:table-cell">🐦</th>
									<th class="hidden md:table-cell">Bio</th>
								{/if}
								{#if type === 'media-partners'}
									<th />
									<th>Name</th>
									<th>🌎</th>
									<th class="hidden md:table-cell">Description</th>
								{/if}
								{#if type === 'benefits'}
									<th />
									<th>Name</th>
									<th>Benefit</th>
								{/if}
								{#if type === 'places'}
									<th />
									<th>Name</th>
									<th>👥</th>
									<th class="hidden md:table-cell">Address</th>
								{/if}
							</tr>
						</thead>
						<tbody>
							{#each processedItems as item}
								<tr class="hover:bg-bbw-yellow/20 dark:hover:bg-bbw-white/10" id={item.id}>
									{#if type === 'events'}
										<td class="text-right pr-2 md:pr-4 text-base md:text-xl"
											>{formatItemDate(item)}</td
										>
										<td class="w-12 md:w-14">
											<a href="/{entry}/{tc.model}/{item.id}">
												<ItemLogo {item} />
											</a>
										</td>
										<td class="text-lg md:text-2xl flex items-center h-12">
											<div class="">
												{#if item.hidden}
													{item.name}*
												{:else}
													<a
														href="/{entry}/{tc.model}/{item.id}"
														class="text-bbw-navy hover:underline">{item.name}</a
													>
												{/if}
											</div>
											<div class="gap-1 items-center ml-4 hidden md:flex">
												{#each item.types as type}
													<EventTypeBadge {type} />
												{/each}
											</div>
										</td>
										<td class="hidden md:table-cell">
											{#if item.venues}
												{@html item.venues
													.map((vId) => {
														const place = data.bundle.places.find((p) => p.id === vId);
														return `<a href="/${$page.params.entry}/place/${place.id}" class=\"underline hover:no-underline\">${place.name}</a>`;
													})
													.join(', ')}
											{:else if item.venueName}
												{#if item.venueUrl}
													<a href={item.venueUrl} class="underline hover:no-underline external"
														>{item.venueName}</a
													>
												{:else if item.venueName && item.venueName !== 'TBA'}{item.venueName}{:else}<span
														class="opacity-50">TBA</span
													>{/if}
											{/if}
										</td>
										<td class="hidden md:table-cell"
											>{#if item.attendees}{item.attendees}{:else}<span class="opacity-50">TBA</span
												>{/if}</td
										>
										<td class="hidden md:table-cell">
											{#if item.languages && item.languages.length > 0}
												<div class="flex gap-1">
													{#each item.languages as lang}
														<div>{getFlagEmoji(lang)}</div>
													{/each}
												</div>
											{/if}
										</td>
									{/if}
									{#if type === 'speakers'}
										<td class="w-12 md:w-14">
											<a href="/{entry}/{tc.model}/{item.id}">
												<ItemLogo {item} img="photoUrl" rounded="rounded-full" />
											</a>
										</td>
										<td class="text-2xl h-12">
											<a href="/{entry}/{tc.model}/{item.id}" class="text-bbw-navy hover:underline"
												>{item.name}</a
											>
										</td>
										<td
											>{item.country && item.country !== 'xx'
												? getFlagEmoji(item.country, false)
												: ''}</td
										>
										<td class="hidden md:table-cell">
											{#if item.twitter}
												@<a
													href="https://twitter.com/{item.twitter}"
													class="underline hover:no-underline">{item.twitter}</a
												>
											{/if}
										</td>
										<td class="hidden md:table-cell"
											><SvelteMarkdown source={item.caption || ''} /></td
										>
									{/if}
									{#if type === 'media-partners'}
										<td class="w-20">
											<a href="/{entry}/{tc.model}/{item.id}">
												<ItemLogo {item} width="w-16" aspect="aspect-[16/9]" />
											</a>
										</td>
										<td class="text-2xl h-12">
											<a href="/{entry}/{tc.model}/{item.id}" class="text-bbw-navy hover:underline"
												>{item.name}</a
											>
										</td>
										<td>
											{#if item.languages && item.languages.length > 0}
												<div class="flex gap-1">
													{#each item.languages as lang}
														<div>{getFlagEmoji(lang)}</div>
													{/each}
												</div>
											{/if}
										</td>
										<td class="hidden md:table-cell">
											<SvelteMarkdown source={item.description} />
										</td>
									{/if}
									{#if type === 'benefits'}
										<td class="w-20">
											<a href="/{entry}/{tc.model}/{item.id}">
												<ItemLogo {item} width="w-16" aspect="aspect-[16/9]" />
											</a>
										</td>
										<td class="text-2xl h-12">
											<a href="/{entry}/{tc.model}/{item.id}" class="text-bbw-navy hover:underline"
												>{item.name}</a
											>
										</td>
										<td class="h-12">{item.slogan}</td>
									{/if}
									{#if type === 'places'}
										<td class="w-14">
											<a href="/{entry}/{tc.model}/{item.id}">
												<ItemLogo {item} img="photo" />
											</a>
										</td>
										<td class="text-2xl h-12">
											<a href="/{entry}/{tc.model}/{item.id}" class="text-bbw-navy hover:underline"
												>{item.name}</a
											>
										</td>
										<td>{item.capacity}</td>
										<td class="hidden md:table-cell">{item.address}</td>
									{/if}
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				{#if ['events', 'speakers'].includes(type)}
					<Disclaimer {type} />
				{/if}
			</div>
		</div>
	</div>
{/if}

<Footer bundle={data.bundle} />
