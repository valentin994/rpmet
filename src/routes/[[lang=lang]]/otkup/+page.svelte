<script>
	import { goto } from '$app/navigation';
	import { inView, animate } from 'motion';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { hr } from '$lib/i18n/hr';
	import { en } from '$lib/i18n/en';
	import Divider from '../../../components/Divider.svelte';

	$: lang = $page.params.lang === 'en' ? 'en' : 'hr';
	$: t = (lang === 'en' ? en : hr).otkup;
	$: prefix = lang === 'en' ? '/en' : '';

	const images = [
		"bg-[url('/bakar_legure.avif')]",
		"bg-[url('/inox.avif')]",
		"bg-[url('/el_otpad.avif')]",
		"bg-[url('/tungsten.avif')]"
	];

	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let heading;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let account;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let metal;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let cijena;
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
	let gradesWrap;

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
		inView(account, () => {
			animate(account, { y: [100, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
		inView(metal, () => {
			animate(metal, { y: [100, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
		inView(cijena, () => {
			animate(cijena, { y: [100, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
		inView(cardsWrap, () => {
			animate(cardsWrap, { opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
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
	<div class="flex flex-col lg:flex-row py-16">
		<div class="w-full">
			<h1
				bind:this={heading}
				class="text-primary-deep font-display font-bold text-3xl text-center lg:text-5xl mx-auto"
			>
				{t.heroHeading}
			</h1>
		</div>
	</div>

	<div bind:this={cardsWrap} class="grid lg:grid-cols-2 gap-2 pb-16">
		{#each t.categories as category, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				on:click={() => goto(`${prefix}/kontakt`)}
				class="cursor-pointer {images[
					i
				]} shadow-xl rounded-md relative before:content-[''] overflow-hidden z-10 hover:z-20 before:absolute before:inset-0 before:block before:transition-all before:duration-500 before:bg-ink before:opacity-50 before:lg:opacity-25 before:hover:opacity-50 before:z-[-5] text-paper min-h-[250px] lg:min-h-[500px] bg-cover hover:scale-105 transition-all duration-200 ease-in flex flex-col justify-center items-center group"
			>
				<h1
					class="text-2xl lg:text-4xl font-display font-bold lg:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in uppercase"
				>
					{category.title}
				</h1>
				<p
					class="p-8 text-center lg:text-xl lg:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in font-extrabold"
				>
					{category.desc}
				</p>
			</div>
		{/each}
	</div>
	<div
		class="flex flex-col justify-between lg:flex-row text-xl md:text-xl text-ink/60 text-center pt-8 pb-16"
	>
		<div bind:this={account} class="flex flex-col justify-center items-center w-full h-full pb-4">
			<svg class="max-w-24" fill="#6E9761" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
				><path
					d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"
				></path></svg
			>
			<p class="py-8 px-2">{t.infoBlocks[0]}</p>
		</div>
		<div bind:this={metal} class="flex flex-col justify-center items-center w-full h-full pb-4">
			<svg class="max-w-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
				><path
					d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
					stroke="#6E9761"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
				<path
					d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
					stroke="#6E9761"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path></svg
			>
			<p class="py-8 px-2">{t.infoBlocks[1]}</p>
		</div>
		<div bind:this={cijena} class="flex flex-col justify-center items-center w-full h-full pb-4">
			<svg class="max-w-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
				><path d="M12 17V17.5V18" stroke="#6E9761" stroke-width="1.5" stroke-linecap="round"></path>
				<path d="M12 6V6.5V7" stroke="#6E9761" stroke-width="1.5" stroke-linecap="round"></path>
				<path
					d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5"
					stroke="#6E9761"
					stroke-width="1.5"
					stroke-linecap="round"
				></path>
				<path
					d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
					stroke="#6E9761"
					stroke-width="1.5"
					stroke-linecap="round"
				></path></svg
			>
			<p class="py-8 px-2">{t.infoBlocks[2]}</p>
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
	<div class="flex flex-col gap-10">
		{#each t.gradeCategories as category}
			<div>
				<h3 class="text-lg md:text-xl font-display font-semibold text-primary-deep mb-3">
					{category.title}
				</h3>
				<div class="overflow-x-auto border border-ink/10 rounded-md">
					<table class="w-full text-left font-mono text-sm">
						<thead>
							<tr class="bg-ink/5 text-ink/60 uppercase text-xs">
								<th class="px-4 py-2 font-semibold">{t.gradeColumns.name}</th>
								<th class="px-4 py-2 font-semibold">{t.gradeColumns.description}</th>
							</tr>
						</thead>
						<tbody>
							{#each category.rows as row}
								<tr class="border-t border-ink/10">
									<td class="px-4 py-2 text-ink font-medium whitespace-nowrap">{row.name}</td>
									<td class="px-4 py-2 text-ink/70">{row.description}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		{/each}
	</div>
</div>
