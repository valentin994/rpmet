<script>
    let isMenuOpen = false;
    import { page } from '$app/stores';
    import { browser } from '$app/environment';
    import { inView, animate } from "motion";
    import { onMount } from "svelte";
    import Logo from "$lib/assets/logo.svg";
    $: if (browser) document.body.classList.toggle("noscroll", isMenuOpen);
	$: href = $page.url.pathname;
    let pocetna, onama, otkup, zbrinjavanje, kontakt;

    function toggleMenu() {
        if(!isMenuOpen){
            animate(pocetna, {x: [-300, 0]}, {duration:1.5})
            animate(onama, {x: [-300, 0]}, {duration:1.5, delay:0.1})
            animate(otkup, {x: [-300, 0]}, {duration:1.5, delay: 0.2})
            animate(zbrinjavanje, {x: [-300, 0]}, {duration:1.5, delay: 0.3})
            animate(kontakt, {x: [-300, 0]}, {duration:1.5, delay:0.4})
        }
        isMenuOpen = !isMenuOpen;    
    }

    onMount(() => {

    })
</script>
<nav class="px-4 md:px-16 border-b border-gray-200">
      <div class="flex items-center justify-between w-full">
        <a href="/" class="text-primary px-4 min-w-24 text-xl z-20" on:click={() => isMenuOpen=false}>
            <img class="max-h-12 full" src={Logo} alt="Logo" /> 
        </a>
        <div class="text-gray-500 hidden md:max-[4200px]:block md:text-md z-20">
          <ul class="flex h-full">
            <li class="px-2 py-6 ">
              <a href="/" class={`font-bold transition-all duration-300 ease-in hover:text-gray-300 ${href==="/" ?
              "text-primary" : ""}`}>POČETNA</a>
            </li>
            <li class="px-2 py-6">
              <a href="/onama" class={`font-bold transition-all duration-300 ease-in hover:text-gray-300 ${href.includes("/onama") ?
              "text-primary" : ""}`} >O NAMA</a>
            </li>
            <li class="px-2 py-6 ">
              <a href="/otkup" class={`font-bold transition-all duration-300 ease-in hover:text-gray-300 ${href.includes("/otkup") ?
              "text-primary" : ""}`}>OTKUP</a>
            </li>
            <li class="px-2 py-6">
              <a href="/" class="font-bold transition-all duration-300 ease-in hover:text-gray-300">ZBRINJAVANJE</a>
            </li>
            <li class="px-2 py-6">
              <a href="/kontakt" class={`font-bold transition-all duration-300 ease-in hover:text-gray-300 ${href.includes("/kontakt") ?
              "text-primary" : ""}`}>KONTAKT</a>
            </li>
          </ul>
        </div>
        <div class="min-w-24 hidden md:max-[4200px]:block">
        </div>
        <button
          name="Contact call to action"
          class={`md:hidden m-4 flex top-0 right-0 z-50 relative w-10 h-10 text-textcol focus:outline-none ${isMenuOpen ? "fixed" : "fixed"}`}
          on:click={toggleMenu}
        >
          <div class="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              class={`absolute h-0.5 w-5 bg-primary transform transition duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45  delay-200 bg-textcol" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              class={`absolute h-0.5 bg-primary  transform transition-all duration-200 ease-in-out ${
                isMenuOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
              }`}
            ></span>
            <span
              class={`absolute h-0.5 w-5 bg-primary transform transition duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 bg-textcol delay-200" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

    <nav
        class={`fixed flex top-0 left-0 w-full z-40 h-screen bg-gray-50 text-primary bg-opacity-100 transform delay-100 transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <ul class="flex flex-col items-baseline w-full justify-end align-middle text-center font-light text-gray-500 pb-20">
          <li bind:this={pocetna} class="text-5xl tracking-tighter p-4 border-y border-t-2 border-gray-300 w-full text-right">
            <a on:click={() => isMenuOpen = false}
              href="/"
            >
              POČETNA
            </a>
          </li>
          <li bind:this={onama} class=" tracking-tighter text-5xl p-4 border-y border-gray-300 w-full text-right">
            <a on:click={() => isMenuOpen = false}
              href="/onama"
            >
              O NAMA
            </a>
          </li>
          <li bind:this={otkup} class="text-5xl tracking-tighter p-4 border-y border-gray-300 w-full text-right">
            <a on:click={() => isMenuOpen = false}
              href="/otkup"
            >
              OTKUP
            </a>
          </li>
          <li bind:this={zbrinjavanje} class="text-5xl tracking-tighter p-4 border-y border-gray-300 w-full text-right">
            <a on:click={() => isMenuOpen = false}
              href="/"
            >
              ZBRINJAVANJE
            </a>
          </li>
          <li bind:this={kontakt} class="text-5xl p-4 tracking-tighter border-y border-b-2 border-gray-300 w-full text-right">
            <a on:click={() => isMenuOpen = false}
              href="/kontakt"
            >
              KONTAKT
            </a>
          </li>
        </ul>
      </nav>
    </nav>
