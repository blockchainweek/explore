<script>
	import { compareAsc, addDays, addMinutes  } from 'date-fns';
	import { goto } from '$app/navigation';
	import ItemLogo from '$lib/components/ItemLogo.svelte';
	import { format, toDate } from 'date-fns-tz';
	import { config } from '$lib/bbw';

	export let data;
	export let highlightDay = false;

	const startDate = '2024-05-18';
	const endDate = '2024-05-27';
	const segmentMinutes = 60;
	const bundle = data.bundle;

	let popupWidth;
	let timelineWidth;
	let selectedSegment = null;

	$: selectedSegmentEvents = selectedSegment
		? selectedSegment.data.events.map((e) => {
				return [eventDetail(e[0]), e[1]];
		  })
		: [];

	const days = [];
	let currentDate = startDate;
	while (compareAsc(toDate(currentDate, { timeZone: config.tz }), toDate(endDate, { timeZone: config.tz })) <= 0) {
		days.push(format(toDate(currentDate, { timeZone: config.tz }), 'yyyy-MM-dd', { timeZone: config.tz }));
		currentDate = addDays(toDate(currentDate, { timeZone: config.tz }), 1);
	}

	const segments = [];
	let currentSegment = '00:00';	
	for (let hour = 0; hour < 24; hour++) {
		const segment = `${String(hour).padStart(2, '0')}:00`;
		segments.push(segment);
	}

	const timelineData = {};
	for (const day of days) {
		for (const segment of segments) {
			const score = 0;
			timelineData[[day, segment].join(';')] = {
				score,
				events: []
			};
		}
	}

	function updateTimelineEvent(time, eventId, attendees, eventSegmentId) {
		for (const day of days) {
			for (const segment of segments) {
				const sstart = toDate(`${day}T${segment}`, { timeZone: config.tz });
				const send = toDate(addMinutes(sstart, segmentMinutes), { timeZone: config.tz });
				if (compareAsc(sstart, time.end) < 0 && compareAsc(send, time.start) > 0) {
					const baseScore = attendees
						? attendees > 3000
							? 3000
							: attendees < 200
							? 200
							: attendees
						: 0;
					const target = timelineData[[day, segment].join(';')];
					target.score += baseScore || 0;
					target.events.push([eventId, eventSegmentId]);
				}
			}
		}
	}

	const defaultTimes = '09:00-18:00';
	for (const event of bundle.events) {
		for (let i = 0; i < event.segments.length; i++) {
			const eventSegment = event.segments[i];
			const [tstart, tend] = (eventSegment.times || defaultTimes).split('-');
			const time = {
				start: toDate(`${eventSegment.date}T${tstart}`, { timeZone: config.tz }),
				end: toDate(
					`${
						tend <= tstart
							? format(addDays(toDate(eventSegment.date, { timeZone: config.tz}), 1), 'yyyy-MM-dd', { timeZone: config.tz })
							: eventSegment.date
					}T${tend}`
					, { timeZone: config.tz }
				)
			};
			updateTimelineEvent(time, event.id, eventSegment.ecap || event.attendees, i);
		}
	}

	const segmentsMax = Math.max(...Object.keys(timelineData).map((k) => timelineData[k].score));
	for (const sgm of Object.keys(timelineData)) {
		const it = timelineData[sgm];
		it.perc = it.score / (segmentsMax / 100);
	}

	function makeSelected(day, segment, keys) {
		const baseDate = toDate(`${day}T${segment}`);
		const title =
		format(baseDate, 'EEEE MMMM d | HH:mm - ', { timeZone: config.tz }) +
		format(addMinutes(baseDate, segmentMinutes), 'HH:mm', { timeZone: config.tz });
		return (event) => {
			selectedSegment = {
				day,
				segment,
				data: keys,
				event,
				title
			};
		};
	}

	function makeClick(day, segment, keys) {
		const start = toDate(`${day}T${segment}`, { timeZone: config.tz });
		const end = addMinutes(start, segmentMinutes);
		goto(`/${data.params.entry}/day/${day}?start=${start.toISOString()}&end=${end.toISOString()}`);
	}

	function hiddenSelected() {
		selectedSegment = null;
	}

	function eventDetail(id) {
		return bundle.events.find((e) => e.id === id);
	}
</script>

<div class="w-full mb-10 relative">
	{#if selectedSegment}
		<div
			class="absolute top-[81px] w-[300px] border dark:border-gray-400 bg-white dark:bg-bbw-dark dark:text-gray-200 z-50 py-2 px-4 {selectedSegment
				? 'hidden md:block'
				: 'hidden'}"
			style="left: {selectedSegment.event.layerX + popupWidth < timelineWidth
				? selectedSegment.event.layerX
				: selectedSegment.event.layerX - popupWidth}px;"
			bind:clientWidth={popupWidth}
		>
			<div class="uppercase bbw-text-color-secondary text-lg">{selectedSegment.title}</div>
			{#if selectedSegmentEvents.length > 0}
				<div class="text-xl mt-4">
					{#each selectedSegmentEvents as [item, segmentId]}
						<div class="flex gap-2 items-center mb-1">
							<div class="">
								<ItemLogo {item} width="h-8" />
							</div>
							<div class="">
								{item.shortname || item.name}{#if item.hidden}*{/if}
								{#if item.segments[segmentId].title}
									- {item.segments[segmentId].title}
								{/if}
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<div class="text-lg mt-4 bbw-text-color-secondary">No events</div>
			{/if}
		</div>
	{/if}
	<div
		class="flex text-center text-gray-400 text-sm items-end h-10"
		bind:clientWidth={timelineWidth}
	>
		{#each days as day}
			<div
				class="mb-1 uppercase {highlightDay && highlightDay !== day
					? 'text-gray-400 text-lg'
					: 'text-bbw-navy text-lg'}"
				style="width: {1 / (days.length / 100)}%;"
			>
				<a href="/24/day/{format(toDate(day, { timeZone: config.tz }), 'yyyy-MM-dd', { timeZone: config.tz })}"
					><span class="hidden md:inline-block">{format(toDate(day, { timeZone: config.tz }), 'eee ', { timeZone: config.tz })}</span>
					{format(toDate(day, { timeZone: config.tz }), 'd', { timeZone: config.tz })}</a
				>
			</div>
		{/each}
	</div>
	<div class="w-full border {highlightDay ? 'border-gray-300' : 'border-bbw-navy'} flex">
		{#each days as day, i}
			<div
				class="h-10 flex flex-grow hover:bg-bbw-yellow/20"
				style="width: {1 / (days.length / 100)}%; {highlightDay && highlightDay === day
					? 'border: 1px solid rgb(0, 36, 225);'
					: !highlightDay
					? 'border-right: 1px solid rgb(0, 36, 225);'
					: days.length - i > 1
					? 'border-right: 1px solid silver;'
					: ''}"
			>
				{#each segments as segment}
					<div
						id="{day}-{segment}"
						data-events={timelineData[[day, segment].join(';')].events}
						data-score={timelineData[[day, segment].join(';')].score}
						class="md:hover:border md:hover:border-bbw-yellow flex-grow cursor-pointer"
						style="width: {1 / (segments.length / 50)}%; background-color: rgba({!highlightDay ||
						highlightDay === day
							? '0, 36, 225'
							: '115, 115, 115'}, {timelineData[[day, segment].join(';')].perc}%);"
						on:click={makeClick(day, segment, timelineData[[day, segment].join(';')])}
						on:mouseenter={makeSelected(day, segment, timelineData[[day, segment].join(';')])}
						on:mouseleave={hiddenSelected}
					/>
				{/each}
			</div>
		{/each}
	</div>
</div>
