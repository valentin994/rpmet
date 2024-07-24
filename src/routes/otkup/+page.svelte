<script>
	import { goto } from "$app/navigation";
    import { inView, animate } from "motion";
    import { onMount } from "svelte";
    /**
	 * @type {import("motion").ElementOrSelector}
	 */
    let heading;
    /**
	 * @type {import("motion").ElementOrSelector}
	 */
    let account
    /**
	 * @type {import("motion").ElementOrSelector}
	 */
    let metal
    /**
	 * @type {import("motion").ElementOrSelector}
	 */
    let cijena;
    /**
	 * @type {import("motion").ElementOrSelector}
	 */
    let firstImg
    /**
	 * @type {import("motion").ElementOrSelector}
	 */
    let secondImg
    /**
	 * @type {import("motion").ElementOrSelector}
	 */
    let thirdImg
    /**
	 * @type {import("motion").ElementOrSelector}
	 */
    let fourthImg;

    onMount(() => {
        inView(heading, () => {
            animate(heading, {x: [-100, 0], opacity: [0,1]}, {duration: 0.7, easing: "ease-in"})
        })
        inView(account, () => {
            animate(account, {y: [100, 0], opacity: [0,1]}, {duration: 0.7, easing: "ease-in"})
        })
        inView(metal, () => {
            animate(metal, {y: [100, 0], opacity: [0,1]}, {duration: 0.7, easing: "ease-in"})
        })
        inView(cijena, () => {
            animate(cijena, {y: [100, 0], opacity: [0,1]}, {duration: 0.7, easing: "ease-in"})
        })

        inView(firstImg, () => {
            animate(firstImg, {x: [-100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in"});
            animate(secondImg, {x: [100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay: 0.2});
            animate(thirdImg, {x: [-100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay: 0.4});
            animate(fourthImg, {x: [100, 0], opacity: [0, 1]}, {duration: 0.7, easing: "ease-in", delay: 0.3});
        })
    })
</script>
<div class="px-4 md:px-20 lg:px-48">
    <div class="flex flex-col lg:flex-row py-16">
        <div class="w-full">
            <h1 bind:this={heading} class="text-primary text-3xl text-center lg:text-5xl mx-auto">Otkupljujemo sve vrste metalnog otpada</h1>
        </div>
    </div>

<div class="grid lg:grid-cols-2 gap-2 pb-16">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div bind:this={firstImg} on:click={() => goto("/kontakt")} class="cursor-pointer bg-[url('/bakar_legure.jpg')] shadow-xl rounded-md
            relative
            before:content-['']
            overflow-hidden
            z-10
            hover:z-20
            before:absolute
            before:inset-0
            before:block
            before:transition-all 
            before:duration-500
            before:bg-gray-700
            before:opacity-50
            before:lg:opacity-25
            before:hover:opacity-50
            before:z-[-5]
        text-gray-50  min-h-[250px] lg:min-h-[500px] bg-cover hover:scale-105 transition-all duration-200 ease-in flex flex-col justify-center items-center group">
        <h1 class="text-2xl lg:text-4xl font-bold lg:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">OBOJENI METALI</h1>
        <p class="p-8 text-center lg:text-xl lg:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in font-extrabold">Bakar i njegove legure, legure aluminija, nikal i njegove legure, legure olova, legure kositra.</p>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div bind:this={secondImg} on:click={() => goto("/kontakt")} class="cursor-pointer bg-[url('/inox.jpg')] rounded-md 
        shadow-xl 
        relative
        before:content-['']
        overflow-hidden
        z-10
        before:absolute
        before:inset-0
        before:block
        before:transition-all 
        before:duration-500
        before:bg-gray-700
        before:opacity-50
        before:lg:opacity-25
        before:hover:opacity-50
        before:z-[-5]
        text-gray-50 bg-cover hover:scale-105 transition-all min-h-[250px] lg:min-h-[500px] duration-200 ease-in flex flex-col justify-center items-center group
        ">
            <h1 class="text-2xl lg:text-4xl font-bold lg:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in uppercase">ČELIK I nehrdajući čelik</h1>
            <p class="p-8 lg:text-xl lg:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in font-extrabold">Željezo i inox.</p>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div bind:this={thirdImg} on:click={() => goto("/kontakt")} class="cursor-pointer bg-[url('/el_otpad.jpg')] rounded-md
        shadow-xl 
        relative
        before:content-['']
        overflow-hidden
        z-10
        before:absolute
        before:inset-0
        before:block
        before:transition-all 
        before:duration-500
        before:bg-gray-700
        before:opacity-50
        before:lg:opacity-25
        before:hover:opacity-50
        before:z-[-5]
        text-gray-50 bg-cover hover:scale-105 transition-all min-h-[250px] lg:min-h-[500px] duration-200 ease-in flex flex-col justify-center items-center group
        ">
            <h1 class="text-2xl lg:text-4xl font-bold lg:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in uppercase">Elektronički otpad</h1>
            <p class="p-8 lg:text-xl lg:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in font-extrabold text-center">Bijela tehnika, procesori, matične pločice, RAM, tiskane pločice 'PCB', mobiteli, itd.</p>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div bind:this={fourthImg} on:click={() => goto("/kontakt")} class="cursor-pointer bg-[url('/tungsten.jpeg')] rounded-md
        shadow-xl 
        relative
        before:content-['']
        overflow-hidden
        z-10
        before:absolute
        before:inset-0
        before:block
        before:transition-all 
        before:duration-500
        before:bg-gray-700
        before:opacity-50
        before:lg:opacity-25
        before:hover:opacity-50
        before:z-[-5]
        text-gray-50 bg-cover hover:scale-105 transition-all duration-200 ease-in min-h-[250px] lg:min-h-[500px] flex flex-col justify-center items-center group
        ">
            <h1 class="text-2xl lg:text-4xl font-bold lg:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in uppercase">SPECIJALNI MATERIJALI</h1>
            <p class="p-8 lg:text-xl lg:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in font-extrabold text-center">Specijalne legure koje sadrže rijetke metale na bazi nikla njegove legure, molija, wolframa, kobalta (HSS, Hard metal, Inkonel, Hatselloy, itd.)</p>
    </div>
</div>
    <div class="flex flex-col justify-between lg:flex-row text-xl md:text-xl text-gray-500 text-center pt-8 pb-16">
        <div bind:this={account} class="flex flex-col justify-center items-center w-full h-full pb-4">
            <svg class="max-w-24" fill="#a3cc90" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path></g></svg>
            <p class="py-8 px-2">Otkupljujemo otpad od fizičkih i pravnih osoba. Fizičkim osobama isplaćujemo otkup u gotovini ili putem transakcijskog računa.</p>
        </div>
        <div bind:this={metal} class="flex flex-col justify-center items-center w-full h-full pb-4">
            <svg class="max-w-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#a3cc90" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#a3cc90" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <p class="py-8 px-2">Metalni otpad otkupljujemo na našoj lokaciji te organiziramo prijevoz otpada do našeg skladišta. Posjedujemo kamione za prijevoz sekundarnih sirovina i kontejnere za odlaganje metala.</p>
        </div>
        <div bind:this={cijena} class="flex flex-col justify-center items-center w-full h-full pb-4">
            <svg class="max-w-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 17V17.5V18" stroke="#a3cc90" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 6V6.5V7" stroke="#a3cc90" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5" stroke="#a3cc90" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#a3cc90" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            <p class="py-8 px-2">Cijena ovisi o količini, čistoći te o tome radi li se o jednorodnoj leguri ili o više legura pomiješanih zajedno.</p>
        </div>
    </div>
</div>
