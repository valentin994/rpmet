<script>
// @ts-nocheck

	import { animate, inView } from 'motion';
	import Recycle from '$lib/assets/recycle.svg';
	import Dollar from '$lib/assets/dollar.svg';
	import Kanta from '$lib/assets/kanta.svg';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let group;
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
	let recikliraj;
    /**
	 * @type {import("motion").ElementOrSelector}
	 */
    let otkup; 
    /**
	 * @type {import("motion").ElementOrSelector}
	 */
    let zbrinjavanje;
	/**
	 * @type {HTMLParagraphElement}
	 */
	let bakar;
    /**
	 * @type {HTMLParagraphElement}
	 */
    let aluminij;
    /**
	 * @type {HTMLParagraphElement}
	 */
    let zeljezo;

	onMount(() => {
		inView(heading, () => {
			animate(heading, { opacity: [0, 100], x: [-100, 0] }, { duration: 1, easing: 'ease-in' });
		});
		inView(hero, () => {
			animate(hero, { opacity: [0, 100], y: [100, 0] }, { duration: 1, easing: 'ease-in' });
		});
		inView(group, () => {
			setTimeout(() => {
				animate((progress) => (bakar.innerHTML = Math.round(progress * 300)), {
					duration: 2,
					easing: 'ease-out'
				});

				animate((progress) => (aluminij.innerHTML = Math.round(progress * 500)), {
					duration: 2,
					easing: 'ease-out'
				});
				animate((progress) => (zeljezo.innerHTML = Math.round(progress * 800)), {
					duration: 2,
					easing: 'ease-out'
				});
			}, 1000);
		});
		inView(zbrinjavanje, () => {
			animate(zbrinjavanje, { opacity: [0, 1], y: [100, 0] }, { duration: 1, easing: 'ease-in' });
		});
		inView(otkup, () => {
			animate(otkup, { opacity: [0, 1], y: [100, 0] }, { duration: 1, easing: 'ease-in' });
		});
		inView(recikliraj, () => {
			animate(recikliraj, { opacity: [0, 1], y: [100, 0] }, { duration: 1, easing: 'ease-in' });
		});
	});
</script>
<svelte:head>
    <meta name="author" content="RP MET d.o.o.">
    <meta name="description" content="Dobrodošli na RP MET d.o.o., vašeg pouzdanog partnera za recikliranje i zbrinjavanje otpada. Nudimo profesionalne usluge upravljanja otpadom i recikliranja u Zagrebu i okolici. Kontaktirajte nas za više informacija.">
    <meta name="keywords" content="recikliranje, zbrinjavanje otpada, upravljanje otpadom, sekundarne sirovine, RP MET d.o.o.">
    <link rel="canonical" href="https://rp-met.hr/">
    <title>Početna | RP MET</title>
</svelte:head>
<div class="flex bg-[url('/firma.avif')] bg-cover bg-no-repeat">
	<div class="px-4 md:px-20 py-40 md:py-80 lg:px-48">
		<h1
			bind:this={heading}
			class="text-3xl md:text-4xl p-4 rounded max-w-[500px] text-left text-gray-50 font-bold bg-primary/85"
		>
			Mi smo tvrtka specijalizirana za preradu i trgovinu metalnim otpadom.
		</h1>
	</div>
</div>
<div bind:this={hero} class="px-4 md:px-20 lg:px-48 pt-8">
	<h1 class="text-3xl md:text-3xl text-primary font-extrabold text-center py-8 mt-12">NUDIMO USLUGE</h1>
	<div class="flex flex-col lg:flex-row text-center pb-12 mb-12">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div on:click={() => goto("/kontakt")} bind:this={zbrinjavanje} class="px-4 w-full cursor-pointer">
			<div
				class="flex flex-col h-full align-middle justify-center border border-gray-200 rounded-md shadow-md p-4 bg-gray-100/25 hover:bg-gray-100/75 my-4"
			>
				<div class="flex justify-center">
					<img class="max-w-16" src={Kanta} alt="Dollar" />
				</div>
				<h1 class="text-2xl text-gray-600 py-2 font-extrabold">Zbrinjavanja</h1>
				<p class="text-md font-light text-gray-500 px-4 md:px-12 pb-2">
					Zbrinjavanje otpada vršimo uz naknadu ili bez naknade ovisno o kojem se otpadu radi.
				</p>
			</div>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div on:click={() => goto("/kontakt")} bind:this={otkup} class="px-4 w-full cursor-pointer">
			<div
 			    class="flex flex-col h-full align-middle justify-center border border-gray-200 rounded-md shadow-md bg-gray-100/25 hover:bg-gray-100/75 p-4 my-4"
			>
				<div class="flex justify-center">
					<img class="max-w-16" src={Dollar} alt="Dollar" />
				</div>
				<h1 class="text-2xl text-gray-600 py-2 font-extrabold">Otkupa</h1>
				<p class="text-md font-light text-gray-500 px-4 md:px-12 pb-2">
					Vršimo usluge otkupa po najboljim cijenama, kontaktirajte nas kako bi saznali više.
				</p>
			</div>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div on:click={() => goto("/kontakt")} bind:this={recikliraj} class="px-4 w-full cursor-pointer">
			<div
				class="flex flex-col h-full align-middle justify-center border border-gray-200 rounded-md shadow-md p-4 bg-gray-100/25 hover:bg-gray-100/75 my-4"
			>
				<div class="flex justify-center">
					<img class="max-w-16" src={Recycle} alt="Dollar" />
				</div>
				<h1 class="text-2xl text-gray text-gray-600 py-2 font-extrabold">Reciklaže</h1>
				<p class="text-md font-light text-gray-500 px-4 md:px-12 pb-2">
                    Recikliranje pomaže u očuvanju prirodnih resursa, zaštiti okoliša i smanjenju zagađenja.
				</p>
			</div>
		</div>
	</div>
</div>
