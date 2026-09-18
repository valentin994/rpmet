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
