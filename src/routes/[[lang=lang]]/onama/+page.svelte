<script>
	import PlavaKanta from '$lib/assets/plava_kanta.avif';
	import Europe from '$lib/assets/europe.avif';
	import Hamag from '$lib/assets/logo-hamag.png';
	import StrukturniFondovi from '$lib/assets/logo-animated.gif';
	import { inView, animate } from 'motion';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import clickOutside from 'svelte-outside-click';
	import { hr } from '$lib/i18n/hr';
	import { en } from '$lib/i18n/en';
	import { company } from '$lib/data/company';
	import Divider from '../../../components/Divider.svelte';

	$: lang = $page.params.lang === 'en' ? 'en' : 'hr';
	$: t = (lang === 'en' ? en : hr).onama;
	$: prefix = lang === 'en' ? '/en' : '';

	$: if (browser) document.body.classList.toggle('noscroll', isModalOpen);
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let about;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let plava_kanta;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let osnovni;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let uprava;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let radno_vrijeme;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let oib;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let mbroj;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let mbs;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let iban;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let ibanSecond;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let swift;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let swift_second;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let direktor;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let dominik;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let radni;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let subota;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let nedjelja;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let temeljniKapital;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let recikliraj;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let reciklirajText;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let listaFirst;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let listaSecond;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let listaThird;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let listaFourth;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let misija;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let vizija;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let licences;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let partners;

	onMount(() => {
		inView(about, () => {
			animate(about, { x: [-100, 0], opacity: [0, 1] }, { duration: 1, easing: 'ease-in' });
		});
		inView(plava_kanta, () => {
			animate(plava_kanta, { x: [100, 0], opacity: [0, 1] }, { duration: 1, easing: 'ease-in' });
		});

		inView(osnovni, () => {
			animate(osnovni, { x: [-100, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
		inView(uprava, () => {
			animate(uprava, { x: [100, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
		inView(radno_vrijeme, () => {
			animate(
				radno_vrijeme,
				{ x: [100, 0], opacity: [0, 1] },
				{ duration: 0.7, easing: 'ease-in' }
			);
		});

		inView(oib, () => {
			animate(oib, { x: [-100, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
		inView(oib, () => {
			animate(
				mbroj,
				{ x: [-100, 0], opacity: [0, 1] },
				{ duration: 0.7, easing: 'ease-in', delay: 0.2 }
			);
		});
		inView(oib, () => {
			animate(
				mbs,
				{ x: [-100, 0], opacity: [0, 1] },
				{ duration: 0.7, easing: 'ease-in', delay: 0.4 }
			);
		});
		inView(oib, () => {
			animate(
				iban,
				{ x: [-100, 0], opacity: [0, 1] },
				{ duration: 0.7, easing: 'ease-in', delay: 0.6 }
			);
		});
		inView(oib, () => {
			animate(
				ibanSecond,
				{ x: [-100, 0], opacity: [0, 1] },
				{ duration: 0.7, easing: 'ease-in', delay: 0.8 }
			);
		});
		inView(oib, () => {
			animate(
				swift,
				{ x: [-100, 0], opacity: [0, 1] },
				{ duration: 0.7, easing: 'ease-in', delay: 1 }
			);
		});
		inView(oib, () => {
			animate(
				swift_second,
				{ x: [-100, 0], opacity: [0, 1] },
				{ duration: 0.7, easing: 'ease-in', delay: 1.2 }
			);
		});
		inView(oib, () => {
			animate(
				temeljniKapital,
				{ x: [-100, 0], opacity: [0, 1] },
				{ duration: 0.7, easing: 'ease-in', delay: 1.4 }
			);
		});

		inView(direktor, () => {
			animate(direktor, { x: [100, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
		inView(dominik, () => {
			animate(dominik, { x: [100, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
		inView(radni, () => {
			animate(
				radni,
				{ x: [100, 0], opacity: [0, 1] },
				{ duration: 0.7, easing: 'ease-in', delay: 0.2 }
			);
		});
		inView(subota, () => {
			animate(
				subota,
				{ x: [100, 0], opacity: [0, 1] },
				{ duration: 0.7, easing: 'ease-in', delay: 0.4 }
			);
		});
		inView(nedjelja, () => {
			animate(
				nedjelja,
				{ x: [100, 0], opacity: [0, 1] },
				{ duration: 0.7, easing: 'ease-in', delay: 0.6 }
			);
		});

		inView(recikliraj, () => {
			animate(recikliraj, { y: [50, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});

		inView(reciklirajText, () => {
			animate(
				reciklirajText,
				{ y: [25, 0], opacity: [0, 1] },
				{ duration: 0.7, easing: 'ease-in' }
			);
		});

		inView(listaFirst, () => {
			animate(listaFirst, { x: [25, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
		inView(listaFirst, () => {
			animate(
				listaSecond,
				{ x: [25, 0], opacity: [0, 1] },
				{ duration: 0.7, easing: 'ease-in', delay: 0.1 }
			);
		});
		inView(listaFirst, () => {
			animate(
				listaThird,
				{ x: [25, 0], opacity: [0, 1] },
				{ duration: 0.7, easing: 'ease-in', delay: 0.2 }
			);
		});
		inView(listaFirst, () => {
			animate(
				listaFourth,
				{ x: [25, 0], opacity: [0, 1] },
				{ duration: 0.7, easing: 'ease-in', delay: 0.3 }
			);
		});

		inView(misija, () => {
			animate(misija, { x: [-50, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
		inView(vizija, () => {
			animate(vizija, { x: [50, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});

		inView(licences, () => {
			animate(licences, { y: [25, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
		inView(partners, () => {
			animate(partners, { y: [50, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
	});
	let isModalOpen = false;
	let activePdfUrl = '';
	/** @param {KeyboardEvent} event */
	function handleWindowKeyDown(event) {
		if (event.key === 'Escape') {
			isModalOpen = false;
		}
	}
	function handleClick() {
		isModalOpen = false;
	}
	/**
	 * @param {string} url
	 */
	function toggleModal(url) {
		activePdfUrl = url;
		isModalOpen = true;
	}
</script>

<svelte:head>
	<meta name="keywords" content={t.seo.keywords} />
	<meta name="author" content="RP MET d.o.o." />
	<meta name="description" content={t.seo.description} />
	<link rel="canonical" href={`https://rp-met.hr${prefix}/onama`} />
	<link rel="alternate" hreflang="hr" href="https://rp-met.hr/onama" />
	<link rel="alternate" hreflang="en" href="https://rp-met.hr/en/onama" />
	<link rel="alternate" hreflang="x-default" href="https://rp-met.hr/onama" />
	<title>{t.seo.title}</title>
</svelte:head>
<div class="px-8 md:px-20 xl:px-60 pt-8">
	<div class="flex justify-between flex-col lg:flex-row">
		<div bind:this={about} class="flex flex-col justify-center md:pr-12 py-2 lg:max-w-[50%]">
			<h2 class="text-ink/50 font-display font-bold tracking-tight">{t.eyebrow}</h2>
			<h1 class="text-primary-deep font-display font-light text-3xl">{t.title}</h1>
			<p class="text-ink/80 py-4 text-xl">{t.intro}</p>
		</div>
		<div bind:this={plava_kanta} class="flex flex-col justify-center py-2">
			<img src={PlavaKanta} alt="RP MET" />
		</div>
	</div>
</div>
<Divider className="max-w-16 mx-auto my-8 md:my-12" />
<div class="px-8 md:px-20 xl:px-60 py-8 md:pt-16 md:pb-24 bg-ink/5">
	<div class="flex flex-col md:flex-row justify-between">
		<div class="flex flex-col justify-start">
			<h1
				bind:this={osnovni}
				class="text-2xl md:text-3xl text-primary-deep font-display font-semibold pb-4 text-center md:text-left"
			>
				{t.basicData.title}
			</h1>
			<div bind:this={oib} class="font-mono">
				<p class="text-lg md:text-xl text-ink/70 font-thin border-l-4 border-primary pl-2">
					{t.basicData.oib}: <span class="text-ink font-medium">{company.oib}</span>
				</p>
			</div>
			<div bind:this={mbroj} class="pt-1 font-mono">
				<p class="text-lg md:text-xl text-ink/70 font-thin border-l-4 border-primary pl-2">
					{t.basicData.maticniBroj}: <span class="text-ink font-medium">{company.maticniBroj}</span>
				</p>
			</div>
			<div bind:this={mbs} class="pt-1 font-mono">
				<p class="text-lg md:text-xl text-ink/70 font-thin border-l-4 border-primary pl-2">
					{t.basicData.mbs}: <span class="text-ink font-medium">{company.mbs}</span>
				</p>
			</div>
			<div bind:this={iban} class="pt-1 font-mono">
				<p class="text-lg md:text-xl text-ink/70 font-thin border-l-4 border-primary pl-2">
					{t.basicData.iban}: <span class="text-ink font-medium">{company.accounts[0].iban}</span>
				</p>
			</div>
			<div bind:this={swift} class="pt-1 font-mono">
				<p class="text-lg md:text-xl text-ink/70 font-thin border-l-4 border-primary pl-2">
					{t.basicData.swift}: <span class="text-ink font-medium">{company.accounts[0].swift}</span>
				</p>
			</div>
			<div bind:this={ibanSecond} class="pt-1 font-mono">
				<p class="text-lg md:text-xl text-ink/70 font-thin border-l-4 border-primary pl-2">
					{t.basicData.iban}: <span class="text-ink font-medium">{company.accounts[1].iban}</span>
				</p>
			</div>
			<div bind:this={swift_second} class="pt-1 font-mono">
				<p class="text-lg md:text-xl text-ink/70 font-thin border-l-4 border-primary pl-2">
					{t.basicData.swift}: <span class="text-ink font-medium">{company.accounts[1].swift}</span>
				</p>
			</div>
			<div bind:this={temeljniKapital} class="pt-1 font-mono">
				<p class="text-lg md:text-xl text-ink/70 font-thin border-l-4 border-primary pl-2">
					{t.basicData.temeljniKapital}:
					<span class="text-ink font-medium">{company.temeljniKapital}</span>
				</p>
			</div>
		</div>
		<div class="flex flex-col justify-start">
			<h1
				bind:this={uprava}
				class="text-2xl md:text-3xl text-primary-deep font-display font-semibold pb-4 text-center md:text-left"
			>
				{t.management.title}
			</h1>
			<div bind:this={direktor}>
				<p class="text-lg md:text-xl text-ink/70 font-thin border-l-4 border-primary pl-2">
					{company.management[0]}
				</p>
			</div>

			<div bind:this={dominik} class="pt-1">
				<p class="text-lg md:text-xl text-ink/70 font-thin border-l-4 border-primary pl-2">
					{company.management[1]}
				</p>
			</div>

			<h1
				bind:this={radno_vrijeme}
				class="text-2xl md:text-3xl text-primary-deep font-display font-semibold pt-8 pb-4 text-center md:text-left"
			>
				{t.hours.title}
			</h1>
			<div bind:this={radni}>
				<p class="text-lg md:text-xl text-ink/70 font-thin border-l-4 border-primary pl-2">
					{t.hours.weekday}
				</p>
			</div>
			<div bind:this={subota} class="pt-1">
				<p class="text-lg md:text-xl text-ink/70 font-thin border-l-4 border-primary pl-2">
					{t.hours.saturday}
				</p>
			</div>
			<div bind:this={nedjelja} class="pt-1">
				<p class="text-lg md:text-xl text-ink/70 font-thin border-l-4 border-primary pl-2">
					{t.hours.sunday}
				</p>
			</div>
		</div>
	</div>
</div>
<Divider className="max-w-16 mx-auto mt-8 md:mt-12" />
<div class="px-8 md:px-20 xl:px-60 py-8 md:pt-16 md:pb-24">
	<h1
		bind:this={recikliraj}
		class="text-2xl mx-auto md:text-4xl text-primary-deep font-display font-extrabold"
	>
		{t.recycleProfit.title}
	</h1>
	<div class="flex flex-col md:flex-row grow pt-4 md:text-xl">
		<div bind:this={reciklirajText} class="w-full md:pr-28 mb-4">
			<p class="text-ink/80">{t.recycleProfit.text}</p>
		</div>
		<div class="flex flex-col w-full items-end justify-start">
			<div bind:this={listaFirst} class="flex w-full">
				<svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-primary-deep"
					><path
						d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
					></path></svg
				>
				<p class="text-ink/80 align-top my-auto">{t.recycleProfit.points[0]}</p>
			</div>
			<div bind:this={listaSecond} class="flex w-full">
				<svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-primary-deep"
					><path
						d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
					></path></svg
				>
				<p class="text-ink/80 align-top my-auto">{t.recycleProfit.points[1]}</p>
			</div>
			<div bind:this={listaThird} class="flex w-full">
				<svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-primary-deep"
					><path
						d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
					></path></svg
				>
				<p class="text-ink/80 align-top my-auto">{t.recycleProfit.points[2]}</p>
			</div>
			<div bind:this={listaFourth} class="flex w-full">
				<svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-primary-deep"
					><path
						d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
					></path></svg
				>
				<p class="text-ink/80 align-top my-auto">{t.recycleProfit.points[3]}</p>
			</div>
		</div>
	</div>
	<div class="flex flex-col md:flex-row pt-8">
		<div class="flex flex-col md:pr-8 w-full lg:pr-32 mb-2">
			<div
				bind:this={misija}
				class="w-full border border-ink/10 bg-white hover:bg-ink/5 shadow-md rounded-md pt-4 px-4 md:px-8 pb-8 h-full transition-colors"
			>
				<h2
					class="text-2xl md:text-4xl tracking-widest text-primary-deep font-display font-light pb-2"
				>
					{t.mission.title}
				</h2>
				<p class="md:text-xl font-light text-ink/80">{t.mission.text}</p>
			</div>
		</div>
		<div bind:this={vizija} class="flex flex-col w-full md:pr-8 lg:pr-32 mb-2">
			<div
				class="w-full border border-ink/10 bg-white shadow-md rounded-md hover:bg-ink/5 pt-4 px-4 md:px-8 pb-8 h-full transition-colors"
			>
				<h2
					class="text-2xl md:text-4xl tracking-widest font-display font-light text-primary-deep pb-2"
				>
					{t.vision.title}
				</h2>
				<p class="md:text-xl font-light text-ink/80">{t.vision.text}</p>
			</div>
		</div>
	</div>
	<div bind:this={licences}>
		<p class="text-ink/60 pt-8 italic">
			{t.licences.prefix}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<span
				on:click={() => toggleModal(company.licences.collectionPdf)}
				class="underline cursor-pointer text-primary-deep font-medium not-italic"
				>{t.licences.collectionLabel}</span
			>{t.licences.mid}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<span
				on:click={() => toggleModal(company.licences.processingPdf)}
				class="underline cursor-pointer text-primary-deep font-medium not-italic"
				>{t.licences.processingLabel}</span
			>{t.licences.suffix}
		</p>
	</div>
</div>
<div
	bind:this={partners}
	class="bg-white flex flex-col lg:flex-row justify-between p-16 border-t border-ink/10"
>
	<div class="mb-16 mx-auto lg:my-auto">
		<img src={Hamag} alt="HAMAG" />
	</div>
	<div class="mb-16 mx-auto lg:my-auto md:max-w-[300px]">
		<img src={Europe} alt="EU" />
	</div>
	<div class="mx-auto lg:my-auto">
		<img src={StrukturniFondovi} alt="EU" />
	</div>
</div>

{#if isModalOpen}
	<div id="modelConfirm" class="fixed z-50 inset-0 bg-ink/60 overflow-y-auto h-full w-full px-4">
		<div
			use:clickOutside={handleClick}
			class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-xl"
		>
			<div class="flex justify-end p-2">
				<button
					on:click={() => (isModalOpen = false)}
					type="button"
					class="text-ink/50 bg-transparent hover:bg-ink/10 hover:text-ink rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
				>
					<svg
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>
			<div class="h-[500px] md:h-[800px]">
				<iframe src={activePdfUrl} width="100%" height="100%" title="PDF" />
			</div>
		</div>
	</div>
{/if}
<svelte:window on:keydown|preventDefault={handleWindowKeyDown} />
