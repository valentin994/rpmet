<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { inView, animate } from 'motion';
	import { page } from '$app/stores';
	import { hr } from '$lib/i18n/hr';
	import { en } from '$lib/i18n/en';
	import { company } from '$lib/data/company';
	import Divider from '../../../components/Divider.svelte';

	$: lang = $page.params.lang === 'en' ? 'en' : 'hr';
	$: t = (lang === 'en' ? en : hr).zbrinjavanje;
	$: prefix = lang === 'en' ? '/en' : '';

	const tileColors = [
		'bg-primary-deep',
		'bg-copper',
		'bg-primary-deep',
		'bg-copper',
		'bg-primary-deep',
		'bg-copper'
	];

	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let header;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let list;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let howWrap;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let ctaWrap;

	onMount(() => {
		inView(header, () => {
			animate(header, { x: [100, 0], opacity: [0, 1] }, { duration: 0.8, easing: 'ease-in' });
		});

		inView(list, () => {
			animate(list, { opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});

		inView(howWrap, () => {
			animate(howWrap, { y: [50, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});

		inView(ctaWrap, () => {
			animate(ctaWrap, { y: [50, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
	});
</script>

<svelte:head>
	<meta name="description" content={t.seo.description} />
	<meta name="keywords" content={t.seo.keywords} />
	<meta name="author" content="RP MET d.o.o." />
	<link rel="canonical" href={`https://rp-met.hr${prefix}/zbrinjavanje`} />
	<link rel="alternate" hreflang="hr" href="https://rp-met.hr/zbrinjavanje" />
	<link rel="alternate" hreflang="en" href="https://rp-met.hr/en/zbrinjavanje" />
	<link rel="alternate" hreflang="x-default" href="https://rp-met.hr/zbrinjavanje" />
	<title>{t.seo.title}</title>
</svelte:head>
<div class="py-8 bg-[url('/kantasm.avif')] md:bg-[url('/kante.jpg')] bg-cover bg-no-repeat">
	<div class="px-4 md:px-20 lg:px-48 flex items-end flex-col justify-center min-h-[500px]">
		<div bind:this={header} class="lg:max-w-[500px] bg-paper/95 p-4 md:p-8 rounded-md shadow-md">
			<h1 class="text-3xl lg:text-5xl font-display font-medium text-primary-deep">
				{t.heroHeading}
			</h1>
		</div>
	</div>
</div>
<Divider className="max-w-16 mx-auto my-8 md:my-16" />

<div class="px-4 md:px-20 lg:px-48 pb-16">
	<div bind:this={list} class="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
		{#each t.categories as category, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				on:click={() => goto(`${prefix}/kontakt`)}
				class="cursor-pointer {tileColors[
					i
				]} shadow-xl rounded-md relative overflow-hidden z-10 hover:z-20 text-paper min-h-[200px] lg:min-h-[220px] hover:brightness-110 hover:scale-105 transition-all duration-200 ease-in flex flex-col items-center justify-start pt-10 group"
			>
				<svg
					class="w-12 h-12 mb-4 text-paper/85 flex-shrink-0"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{#if i === 0}
						<path
							d="M9 3h6v3l1.5 1.5V21a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7.5L9 6V3z"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linejoin="round"
						></path>
						<path d="M9 3h6" stroke="currentColor" stroke-width="1.5"></path>
					{:else if i === 1}
						<path
							d="M3 8l9-4 9 4-9 4-9-4z"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linejoin="round"
						></path>
						<path
							d="M3 8v9l9 4 9-4V8"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linejoin="round"
						></path>
						<path d="M12 12v9" stroke="currentColor" stroke-width="1.5"></path>
					{:else if i === 2}
						<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"></circle>
						<circle cx="12" cy="12" r="5.5" stroke="currentColor" stroke-width="1.2"></circle>
						<circle cx="12" cy="12" r="2.2" stroke="currentColor" stroke-width="1"></circle>
					{:else if i === 3}
						<rect
							x="3"
							y="14"
							width="7"
							height="4"
							rx="0.5"
							stroke="currentColor"
							stroke-width="1.5"
						></rect>
						<rect
							x="10"
							y="14"
							width="7"
							height="4"
							rx="0.5"
							stroke="currentColor"
							stroke-width="1.5"
						></rect>
						<rect
							x="6.5"
							y="9"
							width="7"
							height="4"
							rx="0.5"
							stroke="currentColor"
							stroke-width="1.5"
						></rect>
						<rect
							x="14"
							y="9"
							width="4"
							height="4"
							rx="0.5"
							stroke="currentColor"
							stroke-width="1.5"
						></rect>
					{:else if i === 4}
						<path
							d="M7 4h10l-1 15a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2L7 4z"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linejoin="round"
						></path>
						<path d="M7.5 8h9" stroke="currentColor" stroke-width="1"></path>
					{:else}
						<rect
							x="6"
							y="6"
							width="12"
							height="12"
							rx="1.5"
							stroke="currentColor"
							stroke-width="1.5"
						></rect>
						<path
							d="M9 6V3M15 6V3M9 21v-3M15 21v-3M6 9H3M6 15H3M21 9h-3M21 15h-3"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
						></path>
					{/if}
				</svg>
				<h1
					class="px-4 min-h-[3.5rem] flex items-center justify-center text-xl font-display font-bold uppercase text-center"
				>
					{category.title}
				</h1>
				<p
					class="p-4 text-center lg:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in font-extrabold"
				>
					{category.desc}
				</p>
			</div>
		{/each}
	</div>

	<div bind:this={howWrap} class="pt-16">
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
									d="M4 4h16v12H8l-4 4V4z"
									stroke="#B5652D"
									stroke-width="1.5"
									stroke-linejoin="round"
								></path>
							{:else if i === 1}
								<rect
									x="6"
									y="3"
									width="12"
									height="18"
									rx="1.5"
									stroke="#B5652D"
									stroke-width="1.5"
								></rect>
								<path
									d="M9 8h6M9 12h6M9 16h4"
									stroke="#B5652D"
									stroke-width="1.5"
									stroke-linecap="round"
								></path>
							{:else}
								<rect x="2" y="9" width="11" height="7" rx="1" stroke="#B5652D" stroke-width="1.5"
								></rect>
								<path
									d="M13 11h4l3 3v2h-7z"
									stroke="#B5652D"
									stroke-width="1.5"
									stroke-linejoin="round"
								></path>
								<circle cx="6.5" cy="18" r="1.5" stroke="#B5652D" stroke-width="1.5"></circle>
								<circle cx="17" cy="18" r="1.5" stroke="#B5652D" stroke-width="1.5"></circle>
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
