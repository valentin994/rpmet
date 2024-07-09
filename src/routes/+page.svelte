<script>
    import { animate, inView } from "motion";
    import Recycle from "$lib/assets/recycle.svg";
    import { onMount } from "svelte";
    let group, hero, heading;
    let bakar, aluminij, zeljezo;

    onMount(()=> {
        inView(heading, () => {
            animate(heading, {opacity: [0, 100], x: [-100, 0]}, {duration: 1, easing: "ease-in"})
        })
        inView(hero, () => {
            animate(hero, {opacity: [0, 100], y: [100, 0]}, {duration: 1, easing: "ease-in"})
        })
        inView(group, () => {
            setTimeout(() => {
                animate(
                (progress) => bakar.innerHTML = Math.round(progress * 300),
                { duration: 2, easing: "ease-out" }
                )

                animate(
                (progress) => aluminij.innerHTML = Math.round(progress * 500),
                { duration: 2, easing: "ease-out" }
                )
                animate(
                (progress) => zeljezo.innerHTML = Math.round(progress * 800),
                { duration: 2, easing: "ease-out" }
                )
            }, 1000)
        })
    })
  
</script>
<div class="flex bg-[url('/kantasm.jpg')] bg-cover bg-no-repeat md:bg-[url('/kante.jpg')]">
    <div class="px-4 md:px-20 py-40 md:py-80 lg:px-48">
        <h1 bind:this={heading} class="text-3xl md:text-4xl p-4 rounded max-w-[500px] text-left text-gray-50 font-bold bg-primary/85">Mi smo tvrtka specijalizirana za preradu i trgovinu metalnim otpadom.</h1>
    </div>
</div>
<div bind:this={hero} class="px-4 md:px-20 lg:px-48 pt-8">
    <h1 class="text-3xl text-primary text-center py-4 font-extrabold">RP Metal u brojkama</h1>
    <div class="flex py-4 justify-center">
        <img class="max-w-40 md:max-w-32" src={Recycle} alt="Recycle" />
    </div>
    <div bind:this={group} class="flex flex-col md:flex-row justify-center">
        <div class="flex flex-col pt-8 px-4 text-center md:px-12">
            <h1 class="text-2xl font-semibold text-gray-500">Bakar</h1>
            <div class="flex flex-col md:flex-row justify-evenly">
                <p class="text-3xl font-bold text-primary" bind:this={bakar}>0</p>
                <p class="text-2xl  text-gray-300 font-light">t/g</p>
            </div>
        </div>
        <div class="flex flex-col pt-8 px-4 text-center md:px-12">
            <h1 class="text-2xl font-semibold text-gray-500">Aluminij</h1>
            <div class="flex flex-col md:flex-row justify-evenly">
                <p class="text-3xl font-bold text-primary" bind:this={aluminij}>0</p>
                <p class="text-2xl  text-gray-300 font-light">t/g</p>
            </div>
        </div>
        <div class="flex flex-col pt-8 px-4 text-center md:px-12">
            <h1 class="text-2xl font-semibold text-gray-500">Željezo</h1>
            <div class="flex flex-col md:flex-row justify-evenly">
                <p class="text-3xl font-bold text-primary" bind:this={zeljezo}>0</p>
                <p class="text-2xl  text-gray-300 font-light">t/g</p>
            </div>
        </div>
    </div>
</div>
