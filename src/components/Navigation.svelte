<script>
	let isMenuOpen = false;
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { animate } from 'motion';
	import Logo from '$lib/assets/rp-met-logo-new.png';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import { hr } from '$lib/i18n/hr';
	import { en } from '$lib/i18n/en';

	$: if (browser) document.body.classList.toggle('noscroll', isMenuOpen);
	$: lang = $page.params.lang === 'en' ? 'en' : 'hr';
	$: t = (lang === 'en' ? en : hr).nav;
	$: prefix = lang === 'en' ? '/en' : '';
	$: pathname = $page.url.pathname;

	$: links = [
		{
			key: 'home',
			href: prefix || '/',
			match: (/** @type {string} */ p) => p === '/' || p === '/en'
		},
		{
			key: 'onama',
			href: `${prefix}/onama`,
			match: (/** @type {string} */ p) => p.includes('/onama')
		},
		{
			key: 'otkup',
			href: `${prefix}/otkup`,
			match: (/** @type {string} */ p) => p.includes('/otkup')
		},
		{
			key: 'zbrinjavanje',
			href: `${prefix}/zbrinjavanje`,
			match: (/** @type {string} */ p) => p.includes('/zbrinjavanje')
		},
		{
			key: 'kontakt',
			href: `${prefix}/kontakt`,
			match: (/** @type {string} */ p) => p.includes('/kontakt')
		}
	];

	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let language;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let pocetna;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let onama;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let otkup;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let zbrinjavanje;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let kontakt;

	function toggleMenu() {
		if (!isMenuOpen) {
			animate(language, { x: [-300, 0] }, { duration: 1.5 });
			animate(pocetna, { x: [-300, 0] }, { duration: 1.5, delay: 0.1 });
			animate(onama, { x: [-300, 0] }, { duration: 1.5, delay: 0.2 });
			animate(otkup, { x: [-300, 0] }, { duration: 1.5, delay: 0.3 });
			animate(zbrinjavanje, { x: [-300, 0] }, { duration: 1.5, delay: 0.4 });
			animate(kontakt, { x: [-300, 0] }, { duration: 1.5, delay: 0.5 });
		}
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="px-4 md:px-16 border-b border-ink/10 bg-paper">
	<div class="flex items-center justify-between w-full">
		<a
			href={prefix || '/'}
			class="text-primary-deep px-4 min-w-24 text-xl z-20"
			on:click={() => (isMenuOpen = false)}
		>
			<img class="max-h-12 full" src={Logo} alt="Logo" />
		</a>
		<div class="hidden md:max-[4200px]:block md:text-md z-20">
			<ul class="flex h-full font-display">
				{#each links as link}
					<li class="px-2 py-6">
						<a
							href={link.href}
							class={`font-semibold tracking-tight transition-colors duration-300 ease-in hover:text-primary-deep ${
								link.match(pathname) ? 'text-primary-deep' : 'text-ink/70'
							}`}>{t[/** @type {keyof typeof t} */ (link.key)]}</a
						>
					</li>
				{/each}
			</ul>
		</div>
		<div class="min-w-24 hidden md:max-[4200px]:block">
			<LanguageSwitcher />
		</div>
		<button
			name="Contact call to action"
			class="md:hidden m-4 flex top-0 right-0 z-50 relative w-10 h-10 focus:outline-none fixed"
			on:click={toggleMenu}
		>
			<div class="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
				<span
					class={`absolute h-0.5 w-5 bg-primary-deep transform transition duration-300 ease-in-out ${
						isMenuOpen ? 'rotate-45 delay-200 bg-ink' : '-translate-y-1.5'
					}`}
				></span>
				<span
					class={`absolute h-0.5 bg-primary-deep transform transition-all duration-200 ease-in-out ${
						isMenuOpen ? 'w-0 opacity-50' : 'w-5 delay-200 opacity-100'
					}`}
				></span>
				<span
					class={`absolute h-0.5 w-5 bg-primary-deep transform transition duration-300 ease-in-out ${
						isMenuOpen ? '-rotate-45 bg-ink delay-200' : 'translate-y-1.5'
					}`}
				></span>
			</div>
		</button>
	</div>

	<nav
		class={`fixed flex top-0 left-0 w-full z-40 h-screen bg-paper text-primary-deep bg-opacity-100 transform delay-100 transition-all duration-500 ${
			isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
		}`}
	>
		<ul
			class="flex flex-col items-baseline w-full justify-end align-middle text-center font-display font-light text-ink/70 pb-36"
		>
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<li
				bind:this={language}
				class="p-4 border-t-2 border-ink/10 w-full flex justify-end"
				on:click={() => (isMenuOpen = false)}
				on:keydown={(e) => e.key === 'Enter' && (isMenuOpen = false)}
			>
				<LanguageSwitcher />
			</li>
			<li
				bind:this={pocetna}
				class="text-4xl tracking-tighter p-4 border-y border-t-2 border-ink/10 w-full text-right"
			>
				<a on:click={() => (isMenuOpen = false)} href={prefix || '/'}>
					{t.home}
				</a>
			</li>
			<li
				bind:this={onama}
				class="tracking-tighter text-4xl p-4 border-y border-ink/10 w-full text-right"
			>
				<a on:click={() => (isMenuOpen = false)} href={`${prefix}/onama`}>
					{t.onama}
				</a>
			</li>
			<li
				bind:this={otkup}
				class="text-4xl tracking-tighter p-4 border-y border-ink/10 w-full text-right"
			>
				<a on:click={() => (isMenuOpen = false)} href={`${prefix}/otkup`}>
					{t.otkup}
				</a>
			</li>
			<li
				bind:this={zbrinjavanje}
				class="text-4xl tracking-tighter p-4 border-y border-ink/10 w-full text-right"
			>
				<a on:click={() => (isMenuOpen = false)} href={`${prefix}/zbrinjavanje`}>
					{t.zbrinjavanje}
				</a>
			</li>
			<li
				bind:this={kontakt}
				class="text-4xl p-4 tracking-tighter border-y border-b-2 border-ink/10 w-full text-right"
			>
				<a on:click={() => (isMenuOpen = false)} href={`${prefix}/kontakt`}>
					{t.kontakt}
				</a>
			</li>
		</ul>
	</nav>
</nav>
