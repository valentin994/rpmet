<script>
    let isMenuOpen = false;
    import { page } from '$app/stores';
    import { browser } from '$app/environment';
    import { inView, animate } from "motion";
    import { onMount } from "svelte";

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
            RP Metal
        </a>
        <div class="text-gray-800 hidden md:max-[4200px]:block md:text-md z-20">
          <ul class="flex h-full">
            <li class="px-2 py-6 ">
              <a href="/" class={`font-bold transition-all duration-300 ease-in hover:text-gray-200 ${href.includes("/") ?
              "text-white" : ""}`}  class:active="{href.includes('/')}">POČETNA</a>
            </li>
            <li class="px-2 py-6">
              <a href="/" class="font-bold transition-all duration-300 ease-in hover:text-gray-200">O NAMA</a>
            </li>
            <li class="px-2 py-6 ">
              <a href="/" class="font-bold transition-all duration-300 ease-in hover:text-gray-200">OTKUP</a>
            </li>
            <li class="px-2 py-6">
              <a href="/" class="font-bold transition-all duration-300 ease-in hover:text-gray-200">ZBRINJAVANJE</a>
            </li>
            <li class="px-2 py-6">
              <a href="/" class="font-bold transition-all duration-300 ease-in hover:text-gray-200">KONTAKT</a>
            </li>
          </ul>
        </div>
        <div class="min-w-24 hidden md:max-[4200px]:block">
        </div>
        <button
          name="Contact call to action"
          class="md:hidden m-4 flex top-0 right-0 z-50 relative w-10 h-10 text-textcol focus:outline-none"
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
        <ul class="flex flex-col items-baseline w-full justify-end align-middle text-center text-gray-500">
          <li bind:this={pocetna} id="pocetna" class="text-4xl p-4 border-y border-t-2 border-gray-300 w-full text-right">
            <a on:click={() => isMenuOpen = false}
              href="/"
            >
              POCETNA
            </a>
          </li>
          <li bind:this={onama} class="text-4xl p-4 border-y border-gray-300 w-full text-right">
            <a on:click={() => isMenuOpen = false}
              href="/"
              class="nav-link"
            >
              O NAMA
            </a>
          </li>
          <li bind:this={otkup} class="text-4xl p-4 border-y border-gray-300 w-full text-right">
            <a on:click={() => isMenuOpen = false}
              href="/"
              class="nav-link"
            >
              OTKUP
            </a>
          </li>
          <li bind:this={zbrinjavanje} class="text-4xl p-4 border-y border-gray-300 w-full text-right">
            <a on:click={() => isMenuOpen = false}
              href="/"
              class="nav-link"
            >
              ZBRINJAVANJE
            </a>
          </li>
          <li bind:this={kontakt} class="text-4xl p-4 border-y border-gray-300 w-full text-right">
            <a on:click={() => isMenuOpen = false}
              href="/"
              class="nav-link"
            >
              KONTAKT
            </a>
          </li>
        </ul>
      </nav>
    </nav>
