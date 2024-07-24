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
    /**
	 * @type {HTMLParagraphElement}
	 */
    let copperTable;
    /**
	 * @type {HTMLParagraphElement}
	 */
    let brassTable;
    /**
	 * @type {HTMLParagraphElement}
	 */
    let steelTable;
    /**
	 * @type {HTMLParagraphElement}
	 */
    let stainlessSteelTable;
    /**
	 * @type {HTMLParagraphElement}
	 */
    let aluminiumTable;
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
        inView(copperTable, () => {
            animate(copperTable ,{y: [100, 0], opacity: [0, 100]}, {duration: 0.7, easing: "ease-in"})
        })
        inView(brassTable, () => {
            animate(brassTable ,{y: [100, 0], opacity: [0, 100]}, {duration: 0.7, easing: "ease-in"})
        })
        inView(steelTable, () => {
            animate(steelTable ,{y: [100, 0], opacity: [0, 100]}, {duration: 0.7, easing: "ease-in"})
        })
        inView(stainlessSteelTable, () => {
            animate(stainlessSteelTable ,{y: [100, 0], opacity: [0, 100]}, {duration: 0.7, easing: "ease-in"})
        })
        inView(aluminiumTable, () => {
            animate(aluminiumTable ,{y: [100, 0], opacity: [0, 100]}, {duration: 0.7, easing: "ease-in"})
        })
    })
    
    let copperScraps = [
        {name: "Cu Millbery/ bere bright", description: "With diameters ranging from 0.15mm to 2mm"},
        {name: "Cu bare bright", description: "Less than 0.15mm"},
        {name: "Cu blank II (kerze)", description: "Bare bright tubes and sheets"},
        {name: "Copper heavy and bright 99%", description: "Heavy copper"},
        {name: "Tined copper scrap", description: "Copper that has been coated with a thin layer of tin"},
        {name: "Kupfer, gemischt, Raff, alt", description: "Mixed-grade copper scrap "},
    ]

    let brassScrap = [
        {name: "Bronze", description: "Cu 70 -80 %, Sn 5 -20 %"},
        {name: "MS 63", description: "Cu 63 -65 % 35% Zinc , C-270"},
        {name: "MS 58", description: "Cu 58 % Zn 38 %, Pb 3%"},
        {name: "MS Patronen", description: "Small and big if they are all cracked"},
        {name: "Yellow brass", description: "Mixed but High-purity scrap, clean "},
        {name: "Messing mix (gemischt)", description: "Without patronne hand sorted"},
    ]

    let steelProducts = [
        {name: "HMS 1 and 2 (70/30) or E1 ", description: "Piece thickness from 3 to 6 mm"},
        {name: "HMS 1 / E3", description: "Piece thickness more than 8mm"},
        {name: "Cast Iron ", description: "Only brake shoe"},
    ]

    let stainLessSteelProducts = [
        {name: "SS 304", description: "Ni 8%, Cr 18%"},
        {name: "SS 321", description: "Ni 10%, Cr 18%"},
        {name: "SS 316", description: "Ni 10%, Cr18%, Mo 2%"},
        {name: "SS- 410", description: "Cr 11 % – 13%"},
    ]

    let aluminiumScrap = [
        {name: "Aluminum profile white/blank", description: "AlmgSi0,5"},
        {name: "Aluminum profile painted/color", description: "AlMgSi0,5 AlMg1Si1"},
        {name: "Aluminum profile with plastic", description: "AlMgSi0,5"},
        {name: "Aluminum profile mixed", description: "With iron max. 5%, plastic, glass on the corner"},
        {name: "Aluminum sheet blank ", description: ""},
        {name: "Aluminum sheet with color/painted", description: ""},
        {name: "Aluminum sheet 5000 series", description: "AlMg"},
        {name: "Aluminum turnings", description: ""},
        {name: "Aluminum wire", description: ""},
        {name: "Aluminum cast/Guss", description: ""},
        {name: "Aluminum-copper radiators", description: ""},
        {name: "Aluminum offset", description: ""},
        {name: "Aluminum PVC cables", description: ""},
        {name: "Aluminum radiators", description: ""},
        {name: "Aluminum mixed for shredder", description: ""},
    ]

</script>
<svelte:head>
    <meta name="description" content="Explore our table of products that we buy. RP MET d.o.o offers professional scrap and recycling services for various types of waste, including metal, plastic, and paper products. Contact us for more information.">
    <meta name="keywords" content="scrap recycling, waste management, metal scrap, plastic waste, paper waste, RP MET d.o.o.">
    <link rel="canonical" href="https://rp-met.hr/home">
    <title>Home | RP MET</title>
</svelte:head>
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
    <div bind:this={copperTable} class="flex justify-center pb-12">
        <table class="table-fixed w-full">
          <thead class="bg-gray-200">
            <tr class="text-primary text-lg md:text-2xl">
              <th class="text-left p-4 md:p-8 border border-white">Copper Scrap</th>
              <th class="text-left p-4 md:p-8 border border-white">Description</th>
            </tr>
          </thead>
          <tbody class="bg-gray-200/50">
            {#each copperScraps as copper}
                <tr class="text-gray-500 md:text-xl">
                    <td class="p-4 md:px-8 border-white border">{copper.name}</td>
                    <td class="p-4 md:px-8 border-white border">{copper.description}</td>
                </tr>
            {/each}
          </tbody>
        </table>
    </div>
    <div bind:this={brassTable} class="flex justify-center pb-12 ">
        <table class="table-fixed w-full">
          <thead class="bg-gray-200">
            <tr class="text-primary text-lg md:text-2xl">
              <th class="text-left p-4 md:p-8 border border-white">Brass Scrap</th>
              <th class="text-left p-4 md:p-8 border border-white">Description</th>
            </tr>
          </thead>
          <tbody class="bg-gray-200/50">
            {#each brassScrap as brass}
                <tr class="text-gray-500 md:text-xl">
                    <td class="p-4 md:px-8 border-white border">{brass.name}</td>
                    <td class="p-4 md:px-8 border-white border">{brass.description}</td>
                </tr>
            {/each}
          </tbody>
        </table>
    </div>
    <div bind:this={steelTable} class="flex justify-center pb-12 ">
        <table class="table-fixed w-full">
          <thead class="bg-gray-200">
            <tr class="text-primary text-lg md:text-2xl">
              <th class="text-left p-4 md:p-8 border border-white">Steel Products</th>
              <th class="text-left p-4 md:p-8 border border-white">Description</th>
            </tr>
          </thead>
          <tbody class="bg-gray-200/50">
            {#each steelProducts as steel}
                <tr class="text-gray-500 md:text-xl">
                    <td class="p-4 md:px-8 border-white border">{steel.name}</td>
                    <td class="p-4 md:px-8 border-white border">{steel.description}</td>
                </tr>
            {/each}
          </tbody>
        </table>
    </div>
    <div bind:this={stainlessSteelTable} class="flex justify-center pb-12 ">
        <table class="table-fixed w-full">
          <thead class="bg-gray-200">
            <tr class="text-primary text-lg md:text-2xl">
              <th class="text-left p-4 md:p-8 border border-white">Stainless Steel Products</th>
              <th class="text-left p-4 md:p-8 border border-white">Description</th>
            </tr>
          </thead>
          <tbody class="bg-gray-200/50">
            {#each stainLessSteelProducts as stainLessSteel}
                <tr class="text-gray-500 md:text-xl">
                    <td class="p-4 md:px-8 border-white border">{stainLessSteel.name}</td>
                    <td class="p-4 md:px-8 border-white border">{stainLessSteel.description}</td>
                </tr>
            {/each}
          </tbody>
        </table>
    </div>
    <div bind:this={aluminiumTable} class="flex justify-center pb-12 ">
        <table class="table-fixed w-full">
          <thead class="bg-gray-200">
            <tr class="text-primary text-lg md:text-2xl">
              <th class="text-left p-4 md:p-8 border border-white">Aluminium Scraps</th>
              <th class="text-left p-4 md:p-8 border border-white">Description</th>
            </tr>
          </thead>
          <tbody class="bg-gray-200/50">
            {#each aluminiumScrap as aluminium}
                <tr class="text-gray-500 md:text-xl">
                    <td class="p-4 md:px-8 border-white border">{aluminium.name}</td>
                    <td class="p-4 md:px-8 border-white border">{aluminium.description}</td>
                </tr>
            {/each}
          </tbody>
        </table>
    </div>
</div>
