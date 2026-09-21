<script>
	import { goto } from '$app/navigation';
	import { inView, animate } from 'motion';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { hr } from '$lib/i18n/hr';
	import { en } from '$lib/i18n/en';
	import { company } from '$lib/data/company';
	import Divider from '../../../components/Divider.svelte';

	$: lang = $page.params.lang === 'en' ? 'en' : 'hr';
	$: t = (lang === 'en' ? en : hr).otkup;
	$: prefix = lang === 'en' ? '/en' : '';

	const tileColors = ['bg-primary-deep', 'bg-copper', 'bg-primary-deep', 'bg-copper'];

	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let heading;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let cardsWrap;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let howWrap;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let statsWrap;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let gradesWrap;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let ctaWrap;

	/** @type {number[]} */
	let statValues = [];
	$: statValues = t ? t.stats.map(() => 0) : [];

	function animateStats() {
		t.stats.forEach((stat, i) => {
			animate(
				(progress) => {
					statValues[i] = Math.round(progress * stat.target);
				},
				{ duration: 1.4, easing: 'ease-out' }
			);
		});
	}

	onMount(() => {
		inView(heading, () => {
			animate(heading, { x: [-100, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
		inView(cardsWrap, () => {
			animate(cardsWrap, { opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
		inView(howWrap, () => {
			animate(howWrap, { y: [50, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
		inView(
			statsWrap,
			() => {
				animate(statsWrap, { y: [50, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
				animateStats();
			},
			{ amount: 0.5 }
		);
		inView(gradesWrap, () => {
			animate(gradesWrap, { y: [50, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
	});
</script>

<svelte:head>
	<meta name="description" content={t.seo.description} />
	<meta name="keywords" content={t.seo.keywords} />
	<meta name="author" content="RP MET d.o.o." />
	<link rel="canonical" href={`https://rp-met.hr${prefix}/otkup`} />
	<link rel="alternate" hreflang="hr" href="https://rp-met.hr/otkup" />
	<link rel="alternate" hreflang="en" href="https://rp-met.hr/en/otkup" />
	<link rel="alternate" hreflang="x-default" href="https://rp-met.hr/otkup" />
	<title>{t.seo.title}</title>
</svelte:head>
<div class="px-4 md:px-20 lg:px-48">
	<div class="py-16">
		<h1
			bind:this={heading}
			class="text-primary-deep font-display font-bold text-3xl text-center lg:text-5xl mx-auto"
		>
			{t.heroHeading}
		</h1>
	</div>

	<div bind:this={cardsWrap} class="grid md:grid-cols-2 lg:grid-cols-4 gap-2 pb-16">
		{#each t.categories as category, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				on:click={() => goto(`${prefix}/kontakt`)}
				class="cursor-pointer {tileColors[
					i
				]} shadow-xl rounded-md relative overflow-hidden z-10 hover:z-20 text-paper min-h-[200px] lg:min-h-[260px] hover:brightness-110 hover:scale-105 transition-all duration-200 ease-in flex flex-col items-center justify-start pt-10 lg:pt-12 group"
			>
				<svg
					class="w-12 h-12 lg:w-16 lg:h-16 mb-4 text-paper/85 flex-shrink-0"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{#if i === 0}
						<rect x="4" y="14" width="16" height="4" rx="1" stroke="currentColor" stroke-width="1.5"
						></rect>
						<rect x="6" y="9" width="12" height="4" rx="1" stroke="currentColor" stroke-width="1.5"
						></rect>
						<rect x="8" y="4" width="8" height="4" rx="1" stroke="currentColor" stroke-width="1.5"
						></rect>
					{:else if i === 1}
						<path
							d="M5 4h14M5 20h14M12 4v16"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
						></path>
						<path
							d="M5 4v4M19 4v4M5 16v4M19 16v4"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
						></path>
					{:else if i === 2}
						<rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5"
						></rect>
						<circle cx="9" cy="9" r="1.4" fill="currentColor"></circle>
						<circle cx="15" cy="9" r="1.4" fill="currentColor"></circle>
						<circle cx="9" cy="15" r="1.4" fill="currentColor"></circle>
						<circle cx="15" cy="15" r="1.4" fill="currentColor"></circle>
						<path d="M9 9h6M9 15h6M9 9v6M15 9v6" stroke="currentColor" stroke-width="1"></path>
					{:else}
						<path
							d="M12 3l7 4v10l-7 4-7-4V7l7-4z"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linejoin="round"
						></path>
						<circle cx="12" cy="12" r="2" fill="currentColor"></circle>
					{/if}
				</svg>
				<h1
					class="px-4 min-h-[3.5rem] lg:min-h-[4rem] flex items-center justify-center text-xl lg:text-2xl font-display font-bold uppercase text-center"
				>
					{category.title}
				</h1>
				<p
					class="p-4 text-center lg:text-base lg:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in font-extrabold"
				>
					{category.desc}
				</p>
			</div>
		{/each}
	</div>
	<div bind:this={howWrap} class="pt-8 pb-16">
		<h2 class="text-center text-ink/50 font-display font-bold tracking-tight">
			{t.howItWorksEyebrow}
		</h2>
		<h1
			class="text-center text-primary-deep font-display font-extrabold text-2xl md:text-3xl mb-10 mt-2"
		>
			{t.howItWorksTitle}
		</h1>
		<div class="grid md:grid-cols-3 gap-8">
			{#each t.howItWorks as step, i}
				<div class="flex flex-col items-start text-left">
					<div class="flex items-center gap-3 mb-3">
						<span class="font-mono text-copper text-sm font-semibold">0{i + 1}</span>
						<svg
							class="w-8 h-8 flex-shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							{#if i === 0}
								<path
									d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"
									transform="scale(0.7) translate(2, 2)"
									fill="#B5652D"
								></path>
							{:else if i === 1}
								<path
									d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
									stroke="#B5652D"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
								<path
									d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
									stroke="#B5652D"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							{:else}
								<path d="M12 17V17.5V18" stroke="#B5652D" stroke-width="1.5" stroke-linecap="round"
								></path>
								<path d="M12 6V6.5V7" stroke="#B5652D" stroke-width="1.5" stroke-linecap="round"
								></path>
								<path
									d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5"
									stroke="#B5652D"
									stroke-width="1.5"
									stroke-linecap="round"
								></path>
								<path
									d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
									stroke="#B5652D"
									stroke-width="1.5"
									stroke-linecap="round"
								></path>
							{/if}
						</svg>
					</div>
					<h3 class="text-lg font-display font-bold text-ink mb-1">{step.title}</h3>
					<p class="text-ink/70 font-light">{step.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<Divider className="max-w-16 mx-auto" />

<div bind:this={statsWrap} class="px-4 md:px-20 lg:px-48 py-16 bg-ink/5">
	<h2 class="text-center text-primary-deep font-display font-bold tracking-tight text-xl mb-8">
		{t.statsEyebrow}
	</h2>
	<div class="flex flex-col md:flex-row justify-center gap-8 md:gap-20">
		{#each t.stats as stat, i}
			<div class="text-center">
				<p class="font-mono text-4xl md:text-5xl text-primary-deep font-semibold tabular-nums">
					{statValues[i] ?? 0}<span class="text-xl align-top">{t.statsUnit}</span>
				</p>
				<p class="text-ink/70 font-display uppercase tracking-wide text-sm mt-1">{stat.label}</p>
			</div>
		{/each}
	</div>
</div>

<div bind:this={gradesWrap} class="px-4 md:px-20 lg:px-48 py-16">
	<h2 class="text-center text-ink/50 font-display font-bold tracking-tight">{t.gradesEyebrow}</h2>
	<h1 class="text-center text-primary-deep font-display font-extrabold text-2xl md:text-3xl mb-10">
		{t.gradesTitle}
	</h1>
	<div class="overflow-x-auto border border-ink/10 rounded-md">
		<table class="w-full text-left font-mono text-sm">
			<thead>
				<tr class="bg-ink/5 text-ink/60 uppercase text-xs">
					<th class="px-4 py-2 font-semibold">{t.gradeColumns.name}</th>
					<th class="px-4 py-2 font-semibold">{t.gradeColumns.description}</th>
				</tr>
			</thead>
			<tbody>
				{#each t.gradeCategories as category}
					<tr class="border-t border-ink/10 bg-ink/5">
						<th
							colspan="2"
							class="px-4 py-2 text-left text-primary-deep font-display font-semibold"
						>
							{category.title}
						</th>
					</tr>
					{#each category.rows as row}
						<tr class="border-t border-ink/10">
							<td class="px-4 py-2 text-ink font-medium whitespace-nowrap">{row.name}</td>
							<td class="px-4 py-2 text-ink/70">{row.description || '—'}</td>
						</tr>
					{/each}
				{/each}
			</tbody>
		</table>
	</div>
</div>

<div bind:this={ctaWrap} class="bg-primary-deep px-4 md:px-20 lg:px-48 py-16 text-center">
	<h1 class="text-2xl md:text-3xl text-paper font-display font-extrabold">
		{t.ctaBanner.title}
	</h1>
	<p class="text-paper/80 mt-3 max-w-xl mx-auto">{t.ctaBanner.text}</p>
	<div class="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
		<a
			href={`${prefix}/kontakt`}
			class="inline-block px-6 py-3 rounded-md bg-copper text-paper font-display font-bold hover:bg-copper/90 transition-colors"
		>
			{t.ctaBanner.button}
		</a>
		<a
			href={company.phoneHref}
			class="inline-block px-6 py-3 rounded-md border border-paper/40 text-paper font-display font-bold hover:bg-paper/10 transition-colors"
		>
			{company.phoneDisplay}
		</a>
	</div>
</div>
