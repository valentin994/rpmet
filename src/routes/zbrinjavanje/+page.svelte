<script>
    import Electronic from "$lib/assets/electronic.jpg";
    import Grad from "$lib/assets/gradevina.jpg";
    import Staklo from "$lib/assets/staklo.jpg";
    import Paper from "$lib/assets/paper.jpg";
    import Drvo from "$lib/assets/drvo.jpg";
    import Guma from "$lib/assets/gume.jpg";

    import { onMount } from "svelte";
    import { inView, animate } from "motion";

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
            animate(header, { x: [100, 0], opacity: [0, 100] }, { duration: 0.8, easing: "ease-in"})
        })

        inView(list, () => {
            animate(list, { y: [100, 0], opacity: [0, 100] }, { duration: 0.8, easing: "ease-in"})
        })
    })

</script>
<div  class="py-8 bg-[url('/kanta_sm.jpg')] md:bg-[url('/kante.jpg')] bg-cover bg-no-repeat">
    <div class="px-4 md:px-20 lg:px-48 flex items-end flex-col justify-center min-h-[500px]">
        <div bind:this={header} class="lg:max-w-[500px] bg-gray-50/95 p-4 md:p-8 rounded-md shadow-md">
            <h1 class="text-3xl lg:text-5xl text-primary">
                Zbrinjavanje otpada vršimo uz naknadu ili bez naknade ovisno o kojem se otpadu radi.
            </h1>
        </div>
    </div>
</div>
<hr class="w-8 h-2 mx-auto my-8 bg-primary border-0 rounded md:my-16">

<div bind:this={list} class="px-4 md:px-20 lg:px-48 pb-16">
    <div class="grid md:grid-cols-3 gap-6">
        <div class="pl-4 border shadow-md bg-300/25 rounded-md h-32 cursor-pointer hover:bg-gray-100/95">
            <div class="flex align-middle justify-between h-full">
                <p class="flex flex-col justify-center text-xl md:text-2xl text-gray-600">Otpadna plastika i guma</p>
                <div class="w-36 ">
                    <img class="rounded-r-md object-fit h-full" src={Guma} alt="Gume" />
                </div>
            </div>
        </div>

        <div class="pl-4 border shadow-md bg-300/25 rounded-md h-32 cursor-pointer hover:bg-gray-100/95">
            <div class="flex align-middle justify-between h-full">
                <p class="flex flex-col justify-center text-xl md:text-2xl text-gray-600">Otpadni papir i karton</p>
                <div class="w-36 flex flex-col">
                    <img class="rounded-r-md object-fit h-full" src={Paper} alt="Papir" />
                </div>
            </div>
        </div>
        <div class="pl-4 border shadow-md bg-300/25 rounded-md h-32 cursor-pointer hover:bg-gray-100/95">
            <div class="flex align-middle justify-between h-full">
                <p class="flex flex-col justify-center text-xl md:text-2xl text-gray-600">Otpadno drvo</p>
                <div class="w-36 flex flex-col">
                    <img class="rounded-r-md object-cover h-full" src={Drvo} alt="Drvo" />
                </div>
            </div>
        </div>
        <div class="pl-4 border shadow-md bg-300/25 rounded-md h-32 cursor-pointer hover:bg-gray-100/95">
            <div class="flex align-middle justify-between h-full">
                <p class="flex flex-col justify-center text-xl md:text-2xl text-gray-600">Građevinski otpad</p>
                <div class="w-36 flex flex-col">
                    <img class="rounded-r-md object-cover h-full" src={Grad} alt="Gradevinski otpad" />
                </div>
            </div>
        </div>
        <div class="pl-4 border shadow-md bg-300/25 rounded-md h-32 cursor-pointer hover:bg-gray-100/95">
            <div class="flex align-middle justify-between h-full">
                <p class="flex flex-col justify-center text-xl md:text-2xl text-gray-600">Otpadno staklo</p>
                <div class="w-36 flex flex-col">
                    <img class="rounded-r-md object-cover h-full" src={Staklo} alt="Staklo" />
                </div>
            </div>
        </div>
        <div class="pl-4 border shadow-md bg-300/25 rounded-md h-32 cursor-pointer hover:bg-gray-100/95">
            <div class="flex align-middle justify-between h-full">
                <p class="flex flex-col justify-center text-xl md:text-2xl text-gray-600">Elektronički otpad</p>
                <div class="w-36 flex flex-col">
                    <img class="rounded-r-md object-cover h-full" src={Electronic} alt="Elektronicki otpad" />
                </div>
            </div>
        </div>
    </div>
</div>
