<script>
	import { animate, inView } from 'motion';
	import Recycle from '$lib/assets/recycle.svg';
	import Dollar from '$lib/assets/dollar.svg';
	import Kanta from '$lib/assets/kanta.svg';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { hr } from '$lib/i18n/hr';
	import { en } from '$lib/i18n/en';
	import { company } from '$lib/data/company';
	import Divider from '../../components/Divider.svelte';

	$: lang = $page.params.lang === 'en' ? 'en' : 'hr';
	$: t = (lang === 'en' ? en : hr).home;
	$: prefix = lang === 'en' ? '/en' : '';

	const icons = [Kanta, Dollar, Recycle];

	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let hero;
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
	let statsWrap;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let whyWrap;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let ctaWrap;

	/** @type {number[]} */
	let statValues = [];
	$: statValues = t ? t.trustStats.map(() => 0) : [];

	function animateStats() {
		t.trustStats.forEach((stat, i) => {
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
			animate(heading, { opacity: [0, 1], x: [-100, 0] }, { duration: 1, easing: 'ease-in' });
		});
		inView(hero, () => {
			animate(hero, { opacity: [0, 1], y: [100, 0] }, { duration: 1, easing: 'ease-in' });
		});
		inView(cardsWrap, () => {
			animate(cardsWrap, { opacity: [0, 1], y: [100, 0] }, { duration: 1, easing: 'ease-in' });
		});
		inView(
			statsWrap,
			() => {
				animate(statsWrap, { opacity: [0, 1], y: [50, 0] }, { duration: 0.7, easing: 'ease-in' });
				animateStats();
			},
			{ amount: 0.5 }
		);
		inView(whyWrap, () => {
			animate(whyWrap, { opacity: [0, 1], y: [100, 0] }, { duration: 1, easing: 'ease-in' });
		});
		inView(ctaWrap, () => {
			animate(ctaWrap, { opacity: [0, 1], y: [50, 0] }, { duration: 0.7, easing: 'ease-in' });
		});
	});
</script>

<svelte:head>
	<meta name="author" content="RP MET d.o.o." />
	<meta name="description" content={t.seo.description} />
	<meta name="keywords" content={t.seo.keywords} />
	<link rel="canonical" href={`https://rp-met.hr${prefix}/`} />
	<link rel="alternate" hreflang="hr" href="https://rp-met.hr/" />
	<link rel="alternate" hreflang="en" href="https://rp-met.hr/en" />
	<link rel="alternate" hreflang="x-default" href="https://rp-met.hr/" />
	<title>{t.seo.title}</title>
</svelte:head>

<div class="flex bg-[url('/firma.avif')] bg-cover bg-no-repeat">
	<div class="px-4 md:px-20 py-40 md:py-80 lg:px-48">
		<h1
			bind:this={heading}
			class="text-3xl md:text-4xl p-4 rounded max-w-[500px] text-left text-paper font-display font-bold bg-primary-deep/90"
		>
			{t.heroHeading}
		</h1>
		<a
			href={`${prefix}/kontakt`}
			class="inline-block mt-6 px-6 py-3 rounded-md bg-copper text-paper font-display font-bold hover:bg-copper/90 transition-colors"
		>
			{t.heroCta}
		</a>
	</div>
</div>

<div bind:this={statsWrap} class="px-4 md:px-20 lg:px-48 py-16 bg-ink/5">
	<div class="flex flex-col md:flex-row justify-center gap-8 md:gap-20">
		{#each t.trustStats as stat, i}
			<div class="text-center">
				<p class="font-mono text-4xl md:text-5xl text-primary-deep font-semibold tabular-nums">
					{statValues[i] ?? 0}{stat.suffix}
				</p>
				<p class="text-ink/70 font-display uppercase tracking-wide text-sm mt-1">{stat.label}</p>
			</div>
		{/each}
	</div>
</div>

<div bind:this={hero} class="px-4 md:px-20 lg:px-48 pt-8">
	<Divider className="max-w-16 mx-auto" />
	<h1
		class="text-2xl md:text-3xl text-primary-deep font-display font-extrabold text-center py-8 mt-4"
	>
		{t.servicesEyebrow}
	</h1>
	<div bind:this={cardsWrap} class="flex flex-col lg:flex-row text-center pb-12 mb-12 gap-4">
		{#each t.services as service, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div on:click={() => goto(`${prefix}/kontakt`)} class="px-4 w-full cursor-pointer">
				<div
					class="flex flex-col h-full align-middle justify-center border border-ink/10 rounded-md shadow-md p-4 bg-white/50 hover:bg-white my-4 transition-colors"
				>
					<div class="flex justify-center">
						<img class="max-w-16" src={icons[i]} alt={service.title} />
					</div>
					<h1 class="text-2xl text-ink font-display py-2 font-extrabold">{service.title}</h1>
					<p class="text-md font-light text-ink/70 px-4 md:px-12 pb-2">{service.desc}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<div bind:this={whyWrap} class="px-4 md:px-20 lg:px-48 pb-16">
	<Divider className="max-w-16 mx-auto mb-8" />
	<h2 class="text-center text-ink/50 font-display font-bold tracking-tight">{t.whyEyebrow}</h2>
	<h1
		class="text-center text-primary-deep font-display font-extrabold text-2xl md:text-3xl mb-10 mt-2"
	>
		{t.whyTitle}
	</h1>
	<div class="grid md:grid-cols-2 gap-4">
		{#each t.why as item, i}
			<div class="flex gap-4 items-start border border-ink/10 rounded-md shadow-md p-6 bg-white/50">
				<svg
					class="w-10 h-10 flex-shrink-0"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{#if i === 0}
						<circle cx="12" cy="12" r="9" stroke="#6E9761" stroke-width="2" />
						<path
							d="M9.5 8.5h3a1.75 1.75 0 1 1 0 3.5h-3m0 0h3.5a1.75 1.75 0 1 1 0 3.5h-3.5M12 7v1m0 8v1"
							stroke="#6E9761"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
					{:else if i === 1}
						<path
							d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3z"
							stroke="#6E9761"
							stroke-width="2"
							stroke-linejoin="round"
						/>
						<path
							d="M9 12l2 2 4-4"
							stroke="#6E9761"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					{:else if i === 2}
						<circle cx="8.5" cy="8.5" r="3" stroke="#6E9761" stroke-width="2" />
						<circle cx="16" cy="9.5" r="2.5" stroke="#6E9761" stroke-width="2" />
						<path
							d="M2.5 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5"
							stroke="#6E9761"
							stroke-width="2"
							stroke-linecap="round"
						/>
					{:else}
						<rect x="2" y="8" width="11" height="8" rx="1" stroke="#6E9761" stroke-width="2" />
						<path
							d="M13 11h4l3 3v2h-7z"
							stroke="#6E9761"
							stroke-width="2"
							stroke-linejoin="round"
						/>
						<circle cx="6.5" cy="18" r="1.5" stroke="#6E9761" stroke-width="1.5" />
						<circle cx="17" cy="18" r="1.5" stroke="#6E9761" stroke-width="1.5" />
					{/if}
				</svg>
				<div>
					<h3 class="text-lg font-display font-bold text-ink">{item.title}</h3>
					<p class="text-ink/70 font-light">{item.desc}</p>
				</div>
			</div>
		{/each}
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
