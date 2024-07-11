<script>
    import PlavaKanta from "$lib/assets/plava_kanta.png"
    import { inView, animate } from "motion";
    import { onMount } from "svelte";

    let about, plava_kanta;
    let osnovni, uprava, radno_vrijeme;
    let oib, mbroj, mbs, iban, swift, direktor, radni, subota, nedjelja; 

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
        inView(mbroj, ()=> {
            animate(mbroj, {x:[-100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay: 0.2})
        })
        inView(mbs, ()=> {
            animate(mbs, {x:[-100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay:0.4})
        })
        inView(iban, ()=> {
            animate(iban, {x:[-100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay: 0.6})
        })
        inView(swift, ()=> {
            animate(swift, {x:[-100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay: 0.8})
        })


        inView(direktor, ()=> {
            animate(direktor, {x:[100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in"})
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
    })
</script>
<div class="px-8 md:px-20 xl:px-60 pt-8">
    <div class="flex justify-between flex-col lg:flex-row ">
        <div bind:this={about} class="flex flex-col justify-center md:pr-12 py-2 lg:max-w-[50%]">
            <h2 class="text-gray-400 font-bold">O NAMA</h2>
            <h1 class="text-primary font-light text-3xl">RP Metal</h1>
            <p class="text-gray-600 py-4 text-xl">Tvrtka RP MET d.o.o osnovana je 2016. Registrirana je pri trgovačkom sudu u Bjelovaru. Uprava se nalazi u Bjelovaru i skladište se nalazi u Velikoj Gorici Ul. Stjepana Fabijančića Jape 164. Posjedujemo kamione za prijevoz sekundarnih sirovina, kontejnere za odlaganje metala, škare za rezanje metala. Otkpljujemo metalni otpad koji sortiramo i pripremamo za reciklažu i novi proces proizvodnje.</p>
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
        </div>
        <div class="flex flex-col justify-center">
            <h1 bind:this={uprava} class="text-2xl md:text-3xl text-primary font-semibold pb-4 pt-8 text-center md:text-left">ČLANOVI UPRAVE I DIREKTOR</h1>
            <div bind:this={direktor} class="">
                <p class="text-lg md:text-xl text-gray-600 font-thin border-l-4 border-primary pl-2">Dubravko <span class="text-gray-500 font-medium">Cvetek</span></p>
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

