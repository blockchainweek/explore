<script>
	import { config } from '$lib/bbw';
	import { formatDistanceToNow } from 'date-fns';

	export let item;
	export let col;
	export let bundle;

	let cc = Object.keys(config.collections).find((c) => config.collections[c].model === col);
	let showSource = false;
</script>

<div class="w-full dark:text-gray-600">
	<div class="max-w-7xl mx-auto mt-5 md:mt-10 pt-10">
		<div class="mx-4 xl:mx-0">
			<div class="pt-0">
				<div class="bg-gray-100 dark:bg-gray-600 p-4 text-lg text-gray-600 dark:text-gray-200">
					<div>
						<em
							>This page is automatically generated using a structured dataset which can be consumed
							as a single <a
								href="https://duplicity6-sulfur-objet0-air1.protocol.berlin/24/index.json"
								class="underline hover:no-underline"
								target="_blank"
								rel="noreferrer">JSON file</a
							>. The source data is a GitHub repository at
							<a
								href="https://github.com/blockchainweek/data"
								class="underline hover:no-underline"
								target="_blank"
								rel="noreferrer">blockchainweek/data</a
							>. Go ahead and submit PRs!</em
						>
					</div>
				</div>
				{#if showSource}
					<h2 class="text-2xl uppercase font-bold mt-10 text-gray-500">JSON source-code</h2>
					<div
						class="mt-4 font-mono whitespace-pre-wrap p-4 rounded-md bg-slate-200 text-sm text-black"
					>
						{JSON.stringify(item, null, 2)}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<div class="w-full dark:text-gray-400 bg-bbw-navy pb-20">
	<div class="max-w-7xl mx-auto mt-5 md:mt-10">
		<div class="mx-4 xl:mx-0">
			<div class="pt-2">
				{#if bundle}
					<div class="mt-4 text-white">
						<div class="mt-2">
							Last update: <a
								href="https://github.com/blockchainweek/data/commits/main"
								target="_blank"
								class="underline hover:no-underline"
								rel="noreferrer">{formatDistanceToNow(new Date(bundle.__time || null))} ago</a
							>
							({bundle.__tag}) &nbsp;|&nbsp;
							<a
								href="https://github.com/blockchainweek/explore"
								class="underline hover:no-underline"
								target="_blank"
								rel="noreferrer">bbw-explore {__VERSION__}</a
							>
							{#if item}
								&nbsp;|&nbsp; ID: <a
									href="https://github.com/blockchainweek/data/tree/main/data/24/{cc}/{item.id}"
									class="underline hover:no-underline"
									target="_blank"
									rel="noreferrer">{item.id}</a
								>
								[{cc}] &nbsp;|&nbsp;
								<button
									class="cursor-pointer underline hover:no-underline"
									on:click={() => {
										showSource = !showSource;
										return false;
									}}>Toggle JSON source</button
								>
							{/if}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
