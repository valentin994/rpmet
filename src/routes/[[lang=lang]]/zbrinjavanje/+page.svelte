<script>
	import Electronic from '$lib/assets/electronic.avif';
	import Grad from '$lib/assets/gradevina.avif';
	import Staklo from '$lib/assets/staklo.avif';
	import Paper from '$lib/assets/paper.avif';
	import Drvo from '$lib/assets/drvo.avif';
	import Guma from '$lib/assets/gume.avif';

	import { onMount } from 'svelte';
	import { inView, animate } from 'motion';
	import { page } from '$app/stores';
	import { hr } from '$lib/i18n/hr';
	import { en } from '$lib/i18n/en';
	import Divider from '../../../components/Divider.svelte';

	$: lang = $page.params.lang === 'en' ? 'en' : 'hr';
	$: t = (lang === 'en' ? en : hr).zbrinjavanje;
	$: prefix = lang === 'en' ? '/en' : '';

	/** @type {Record<string, string>} */
	const images = {
		guma: Guma,
		paper: Paper,
		drvo: Drvo,
		grad: Grad,
		staklo: Staklo,
		electronic: Electronic
	};

	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let header;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let list;

	onMount(() => {
		inView(header, () => {
			animate(header, { x: [100, 0], opacity: [0, 1] }, { duration: 0.8, easing: 'ease-in' });
		});

		inView(list, () => {
			animate(list, { y: [100, 0], opacity: [0, 1] }, { duration: 0.8, easing: 'ease-in' });
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

<div bind:this={list} class="px-4 md:px-20 lg:px-48 pb-16">
	<div class="grid md:grid-cols-3 gap-6">
		{#each t.categories as category}
			<div
				class="pl-4 border border-ink/10 shadow-md bg-white rounded-md h-32 cursor-pointer hover:bg-ink/5 transition-colors"
			>
				<div class="flex align-middle justify-between h-full">
					<p class="flex flex-col justify-center text-xl md:text-2xl text-ink/70">
						{category.title}
					</p>
					<div class="w-36">
						<img
							class="rounded-r-md object-cover h-full"
							src={images[category.image]}
							alt={category.title}
						/>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
