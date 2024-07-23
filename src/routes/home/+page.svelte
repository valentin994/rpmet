<script>
    import { inView, animate } from "motion";
    import { onMount } from "svelte";
    import Recycle from "$lib/assets/recycle.svg"
    /**
	 * @type {import("motion").ElementOrSelector}
	 */
    let group;
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
		inView(group, () => {
			setTimeout(() => {
				// @ts-ignore
				animate((progress) => (bakar.innerHTML = Math.round(progress * 300)), {
					duration: 2,
					easing: 'ease-out'
				});

				// @ts-ignore
				animate((progress) => (aluminij.innerHTML = Math.round(progress * 500)), {
					duration: 2,
					easing: 'ease-out'
				});
				// @ts-ignore
				animate((progress) => (zeljezo.innerHTML = Math.round(progress * 800)), {
					duration: 2,
					easing: 'ease-out'
				});
			}, 1000);
		});
    })
</script>
<div class="px-8 md:px-20 lg:px-48">
	<h1 class="text-3xl text-primary text-center pt-8 pb-4 font-extrabold">RP Metal in numbers</h1>
	<div class="flex py-4 justify-center">
		<img class="max-w-40 md:max-w-32" src={Recycle} alt="Recycle" />
	</div>
	<div bind:this={group} class="flex flex-col md:flex-row justify-center">
		<div class="flex flex-col pt-8 px-4 text-center md:px-12">
			<h1 class="text-2xl font-semibold text-gray-500">Copper</h1>
			<div class="flex flex-col md:flex-row justify-evenly">
				<p class="text-3xl font-bold text-primary" bind:this={bakar}>0</p>
				<p class="text-2xl text-gray-300 font-light">t/y</p>
			</div>
		</div>
		<div class="flex flex-col pt-8 px-4 text-center md:px-12">
			<h1 class="text-2xl font-semibold text-gray-500">Aluminium</h1>
			<div class="flex flex-col md:flex-row justify-evenly">
				<p class="text-3xl font-bold text-primary" bind:this={aluminij}>0</p>
				<p class="text-2xl text-gray-300 font-light">t/y</p>
			</div>
		</div>
		<div class="flex flex-col pt-8 px-4 text-center md:px-12">
			<h1 class="text-2xl font-semibold text-gray-500">Iron</h1>
			<div class="flex flex-col md:flex-row justify-evenly">
				<p class="text-3xl font-bold text-primary" bind:this={zeljezo}>0</p>
				<p class="text-2xl text-gray-300 font-light">t/y</p>
			</div>
		</div>
	</div>
    <hr class="w-8 h-2 mx-auto my-8 bg-primary border-0 rounded md:my-16">
</div>
