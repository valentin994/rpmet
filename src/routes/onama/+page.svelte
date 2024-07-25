<script>
    import PlavaKanta from "$lib/assets/plava_kanta.avif"
    import Europe from "$lib/assets/europe.avif"
    import { inView, animate } from "motion";
    import { onMount } from "svelte";
    import { browser } from '$app/environment';
    import clickOutside from "svelte-outside-click";

    $: if (browser) document.body.classList.toggle("noscroll", isModalOpen);
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

    onMount(() => {
        inView(about, ()=> {
            animate(about, {x:[-100, 0], opacity: [0, 1]}, {duration: 1, easing: "ease-in"})
        })
        inView(plava_kanta, ()=> {
            animate(plava_kanta, {x:[100, 0], opacity: [0, 1]}, {duration: 1, easing: "ease-in"})
        })

        inView(osnovni, ()=> {
            animate(osnovni, {opacity: [0, 1]}, {duration: 0.7, easing: "ease-in"})
        })
        inView(uprava, ()=> {
            animate(uprava, {opacity: [0, 1]}, {duration: 0.7, easing: "ease-in"})
        })
        inView(radno_vrijeme, ()=> {
            animate(radno_vrijeme, {opacity: [0, 1]}, {duration: 0.7, easing: "ease-in"})
        })

        inView(oib, ()=> {
            animate(oib, {x:[-100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in"})
        })
        inView(oib, ()=> {
            animate(mbroj, {x:[-100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay: 0.2})
        })
        inView(oib, ()=> {
            animate(mbs, {x:[-100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay:0.4})
        })
        inView(oib, ()=> {
            animate(iban, {x:[-100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay: 0.6})
        })
        inView(oib, ()=> {
            animate(ibanSecond, {x:[-100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay: 0.8})
        })
        inView(oib, ()=> {
            animate(swift, {x:[-100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay: 1})
        })
        inView(oib, ()=> {
            animate(swift_second, {x:[-100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay: 1.2})
        })
        inView(oib, ()=> {
            animate(temeljniKapital, {x:[-100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay: 1.4})
        })


        inView(direktor, ()=> {
            animate(direktor, {x:[100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in"})
        })
        inView(dominik, ()=> {
            animate(dominik, {x:[100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in"})
        })
        inView(radni, ()=> {
            animate(radni, {x:[100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay: 0.2})
        })
        inView(subota, ()=> {
            animate(subota, {x:[100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay:0.4})
        })
        inView(nedjelja, ()=> {
            animate(nedjelja, {x:[100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay: 0.6})
        })

        inView(recikliraj, () => {
            animate(recikliraj, {y:[50,0], opacity: [0,1]}, {duration: 0.7, easing:"ease-in"})
        })

        inView(reciklirajText, () => {
            animate(reciklirajText, {y:[25,0], opacity: [0,1]}, {duration: 0.7, easing:"ease-in"})
        })

        inView(listaFirst, () => {
            animate(listaFirst, {x:[25,0], opacity: [0,1]}, {duration: 0.7, easing:"ease-in"})
        })
        inView(listaFirst, () => {
            animate(listaSecond, {x:[25,0], opacity: [0,1]}, {duration: 0.7, easing:"ease-in", delay: 0.1})
        })
        inView(listaFirst, () => {
            animate(listaThird, {x:[25,0], opacity: [0,1]}, {duration: 0.7, easing:"ease-in", delay: 0.2})
        })
        inView(listaFirst, () => {
            animate(listaFourth, {x:[25,0], opacity: [0,1]}, {duration: 0.7, easing:"ease-in", delay: 0.3})
        })

        inView(misija, () => {
            animate(misija, {x:[-50,0], opacity: [0,1]}, {duration: 0.7, easing:"ease-in"})
        })
        inView(vizija, () => {
            animate(vizija, {x:[50,0], opacity: [0,1]}, {duration: 0.7, easing:"ease-in"})
        })
    })
    let isModalOpen = false;
	// @ts-ignore
    // @ts-ignore
    function handleWindowKeyDown(event) {
		if (event.key === 'Escape') {
			isModalOpen = false;	
		}
	}
    function handleClick(){
        if(isModalOpen){
        console.log("fjsdk")
        }
    }
    function toggleModal(){
        isModalOpen = true
    }
</script>
<svelte:head>
    <meta name="keywords" content="recikliranje, zbrinjavanje otpada, ekološke usluge, upravljanje otpadom, RP MET d.o.o.">
    <meta name="author" content="RP MET d.o.o.">
    <meta name="description" content="Saznajte više o tvrtki RP MET d.o.o., stručnjaku za recikliranje i zbrinjavanje otpada. Nudimo ekološke usluge i rješenja za učinkovito upravljanje otpadom.">
    <link rel="canonical" href="https://rp-met.hr/onama">
    <title>O nama | RP MET</title>
</svelte:head>
<div class="px-8 md:px-20 xl:px-60 pt-8">
    <div class="flex justify-between flex-col lg:flex-row ">
        <div bind:this={about} class="flex flex-col justify-center md:pr-12 py-2 lg:max-w-[50%]">
            <h2 class="text-gray-400 font-bold">O NAMA</h2>
            <h1 class="text-primary font-light text-3xl">RP Metal</h1>
            <p class="text-gray-600 py-4 text-xl">Tvrtka RP MET d.o.o. osnovana je 2016. godine i registrirana pri Trgovačkom sudu u Bjelovaru. Sjedište uprave nalazi se u Bjelovaru, dok je naše skladište smješteno u Velikoj Gorici, na adresi Ul. Stjepana Fabijančića Jape 164. Posjedujemo kamione za prijevoz sekundarnih sirovina, kontejnere za odlaganje metala te škare za rezanje metala. Otkupljujemo metalni otpad koji potom sortiramo i pripremamo za reciklažu, omogućujući novi ciklus proizvodnje.</p>
        </div>
        <div bind:this={plava_kanta} class="flex flex-col justify-center py-2">
            <img class="" src={PlavaKanta} alt="Plava kanta" />
        </div>
    </div>
</div>
<hr class="w-8 h-2 mx-auto my-8 bg-primary border-0 rounded md:my-12">
<div class="px-8 md:px-20 xl:px-60 py-8 md:pt-16 md:pb-24 bg-gray-300/25">
    <div class="flex flex-col md:flex-row justify-between">
        <div class="flex flex-col justify-center">
            <h1 bind:this={osnovni} class="text-2xl md:text-3xl text-primary font-semibold pb-4 text-center md:text-left">OSNOVNI PODACI</h1>
            <div bind:this={oib} class="">
                <p class="text-lg md:text-xl text-gray-600 font-thin border-l-4 border-primary pl-2">OIB: <span class="text-gray-500 font-medium">00122099518</span></p>
            </div>
            <div bind:this={mbroj} class="pt-1">
                <p class="text-lg md:text-xl text-gray-600 font-thin border-l-4 border-primary pl-2">Matični broj: <span class="text-gray-500 font-medium">4593502</span></p>
            </div>
            <div bind:this={mbs} class="pt-1">
                <p class="text-lg md:text-xl text-gray-600 font-thin border-l-4 border-primary pl-2">MBS: <span class="text-gray-500 font-medium">010098590</span></p>
            </div>
            <div bind:this={iban} class="pt-1">
                <p class="text-lg md:text-xl text-gray-600 font-thin border-l-4 border-primary pl-2">IBAN: <span class="text-gray-500 font-medium">HR6224840081135224571</span></p>
            </div>
            <div bind:this={swift} class="pt-1">
                <p class="text-lg md:text-xl text-gray-600 font-thin border-l-4 border-primary pl-2">SWIFT: <span class="text-gray-500 font-medium">RZBHHR2X</span></p>
            </div>
            <div bind:this={ibanSecond} class="pt-1">
                <p class="text-lg md:text-xl text-gray-600 font-thin border-l-4 border-primary pl-2">IBAN: <span class="text-gray-500 font-medium">HR8723400091111270142</span></p>
            </div>
            <div bind:this={swift_second} class="pt-1">
                <p class="text-lg md:text-xl text-gray-600 font-thin border-l-4 border-primary pl-2">SWIFT: <span class="text-gray-500 font-medium">PBZGHR2X</span></p>
            </div>
            <div bind:this={temeljniKapital} class="pt-1">
                <p class="text-lg md:text-xl text-gray-600 font-thin border-l-4 border-primary pl-2">Temeljni kapital: <span class="text-gray-500 font-medium">€ 2.654,45</span></p>
            </div>
        </div>
        <div class="flex flex-col justify-center">
            <h1 bind:this={uprava} class="text-2xl md:text-3xl text-primary font-semibold pb-4 pt-8 text-center md:text-left">OSOBE OVLASTENE ZA ZASTUPANJE</h1>
            <div bind:this={direktor} class="">
                <p class="text-lg md:text-xl text-gray-600 font-thin border-l-4 border-primary pl-2">Dubravko <span class="text-gray-500 font-medium">Cvetek</span></p>
            </div>

            <div bind:this={dominik} class="pt-1">
                <p class="text-lg md:text-xl text-gray-600 font-thin border-l-4 border-primary pl-2">Dominik <span class="text-gray-500 font-medium">Cvetek</span></p>
            </div>

            <h1 bind:this={radno_vrijeme} class="text-2xl md:text-3xl text-primary font-semibold pt-8 pb-4 text-center md:text-left">RADNO VRIJEME</h1>
            <div bind:this={radni} class="">
                <p class="text-lg md:text-xl text-gray-600 font-thin border-l-4 border-primary pl-2">Radni dan: <span class="text-gray-500 font-medium">08-16h</span></p>
            </div>
            <div bind:this={subota} class="pt-1">
                <p class="text-lg md:text-xl text-gray-600 font-thin border-l-4 border-primary pl-2">Subota: <span class="text-gray-500 font-medium">08-12h</span></p>
            </div>
            <div bind:this={nedjelja} class="pt-1">
                <p class="text-lg md:text-xl text-gray-600 font-thin border-l-4 border-primary pl-2">Nedjelja: <span class="text-gray-500 font-medium">Ne radimo!</span></p>
            </div>
        </div>
    </div>
</div>
<hr class="w-8 h-2 mx-auto mt-8 bg-primary border-0 rounded md:mt-12">
<div class="px-8 md:px-20 xl:px-60 py-8 md:pt-16 md:pb-24">
    <h1 bind:this={recikliraj} class="text-2xl mx-auto md:text-4xl text-primary font-extrabold">RECIKLIRAJ I PROFITIRAJ</h1>
    <div class="flex flex-col md:flex-row grow pt-4 md:text-xl">
        <div bind:this={reciklirajText} class="w-full md:pr-28 mb-4">
            <p class="text-gray-700">Odvojeno sakupljanje otpada i recikliranje temelji su modernog upravljanja otpadom jer na taj način štedimo prirodne resurse, smanjujemo gomilanje otpada na odlagalištima i štitimo okoliš. RP MET d.o.o. je tvrtka specijalizirana za trgovanje i preradu metalnog otpada. Posjedujemo škare za rezanje metala te strojeve za obradu bakrenih kablova. Otkupljujemo metalni otpad koji potom sortiramo i pripremamo za reciklažu, omogućujući novi proces proizvodnje.</p>
        </div>
        <div class="flex flex-col w-full items-end justify-center">
            <div bind:this={listaFirst} class="flex w-full ">
                <svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-primary"><path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path></svg>
                <p class="text-gray-700 align-top my-auto">Recikliranje pridonosi očuvanju vrijednih prirodnih resursa.</p> 
            </div>
            <div bind:this={listaSecond} class="flex w-full">
                <svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-primary"><path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path></svg>
                <p class="text-gray-700 align-top my-auto">Recikliranje štedi energiju.</p> 
            </div>
            <div bind:this={listaThird} class="flex w-full">
                <svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-primary"><path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path></svg>
                <p class="text-gray-700 align-top my-auto">Recikliranje smanjuje gomilanje otpada na odlagalištima.</p> 
            </div>
            <div bind:this={listaFourth} class="flex w-full">
                <svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-primary"><path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path></svg>
                <p class="text-gray-700 align-top my-auto">Recikliranjem štedimo novac i otvaramo nova radna mjesta.</p> 
            </div>
        </div>
    </div>
    <div class="flex flex-col md:flex-row pt-8">
        <div class="flex flex-col md:pr-8 w-full lg:pr-32 mb-2">
            <div bind:this={misija} class="w-full border border-gray-200 bg-white hover:bg-gray-100/25 shadow-md rounded-md pt-4 px-4 md:px-8 pb-8 h-full">
                <h2 class="text-2xl md:text-4xl tracking-widest text-primary font-light pb-2">MISIJA</h2>
                <p class="md:text-xl font-light">Pružati građanima i tvrtkama pouzdanog i nezamjenjivog partnera u području reciklaže i gospodarenju otpadom.</p>
            </div>
        </div>
        <div bind:this={vizija} class="flex flex-col w-full md:pr-8 lg:pr-32 mb-2">
            <div class="w-full border border-gray-200 bg-white shadow-md rounded-md hover:bg-gray-100/25 pt-4 px-4 md:px-8 pb-8 h-full">
                <h2 class="text-2xl md:text-4xl tracking-widest font-light text-primary pb-2">VIZIJA</h2>
                <p class="md:text-xl font-light">Naš cilj je postati vodeća tvrtka u trgovini metalnim otpadom u regiji te konkurentan partner u uslugama reciklaže svih vrsta otpada.</p>
            </div>
        </div>
    </div>
    <div>
        <p class="text-gray-500 pt-8 italic">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            Imamo sve potrebne dozvole za preradu metalnog otpada i sakupljanje raznog otpada. Upisani smo pod brojem za sakupljanje: <span on:click={toggleModal} class="underline cursor-pointer text-blue-300">UP/I-351-02/24-02/1</span>, dozvola za preradu: UP/I-351-02/24-01/1, trgovac otpadom TRG-484 i prijevoznik otpadom PRV-3191.
        </p>
    </div>
</div>
<div class="bg-white flex flex-col lg:flex-row justify-between p-16 border-t">
    <div class="mb-16 mx-auto lg:my-auto">
        <img src="https://hamagbicro.hr/wp-content/uploads/2017/08/logo-hamag.png" alt="HAMAG" />
    </div>
    <div class="mb-16 mx-auto lg:my-auto md:max-w-[300px]">
        <img class="" src={Europe} alt="EU" />
    </div>
    <div class="mx-auto lg:my-auto">
        <img class="" src="https://strukturnifondovi.hr/wp-content/uploads/2018/05/ESIF-Logo.png" alt="EU" />
    </div>
</div>

{#if isModalOpen}
<div id="modelConfirm" class={`fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ${isModalOpen ? "block" : ""}`}>
    <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-xl">

        <div class="flex justify-end p-2">
            <button on:click={() => isModalOpen = false} type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
            <div class="h-[500px] md:h-[800px]" use:clickOutside={handleClick}>
                <iframe src="/dozvola_upis_u_ocevidnik.pdf" width="100%" height="100%" title="PDF"/>
            </div>
    </div>
</div>
{/if}
<svelte:window on:keydown|preventDefault={handleWindowKeyDown} />
