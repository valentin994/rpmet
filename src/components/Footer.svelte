<script>
	import Logo from '$lib/assets/rp-met-logo-new.png';
	import { page } from '$app/stores';
	import { hr } from '$lib/i18n/hr';
	import { en } from '$lib/i18n/en';
	import { company, terroq } from '$lib/data/company';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import Divider from './Divider.svelte';

	$: lang = $page.params.lang === 'en' ? 'en' : 'hr';
	$: t = (lang === 'en' ? en : hr).footer;
	$: prefix = lang === 'en' ? '/en' : '';

	$: links = [
		{ label: t_nav('home'), href: prefix || '/' },
		{ label: t_nav('onama'), href: `${prefix}/onama` },
		{ label: t_nav('otkup'), href: `${prefix}/otkup` },
		{ label: t_nav('zbrinjavanje'), href: `${prefix}/zbrinjavanje` },
		{ label: t_nav('kontakt'), href: `${prefix}/kontakt` }
	];

	/** @param {keyof typeof hr.nav} key */
	function t_nav(key) {
		return (lang === 'en' ? en : hr).nav[key];
	}
</script>

<Divider />
<footer class="p-8 md:pt-12 lg:px-60 text-ink/70 bg-paper">
	<div class="flex flex-col md:flex-row justify-center md:justify-between h-full gap-8">
		<div class="flex justify-center md:justify-start">
			<img class="w-24 h-auto object-contain" src={Logo} alt="Logo" />
		</div>
		<div class="text-center py-2 font-mono text-sm">
			<h1 class="text-primary-deep font-display font-bold tracking-tight text-base">
				{t.hoursTitle}
			</h1>
			<p>{t.weekday}</p>
			<p>{t.saturday}</p>
			<p>{t.sunday}</p>
			<h1 class="text-primary-deep font-display font-bold tracking-tight text-base pt-3">
				{t.addressTitle}
			</h1>
			<div class="flex justify-center">
				<p class="max-w-48">{company.warehouseAddress}</p>
			</div>
		</div>
		<div class="flex flex-col items-center md:items-end gap-4">
			<ul class="md:text-sm font-display font-semibold flex flex-col md:text-right">
				{#each links as link}
					<li>
						<a
							class="hover:text-primary-deep transition-colors duration-300 ease-in"
							href={link.href}>{link.label}</a
						>
					</li>
				{/each}
				<li>
					<a
						class="hover:text-primary-deep transition-colors duration-300 ease-in"
						href={`${prefix}/impressum`}>{t.impressum}</a
					>
				</li>
			</ul>
			<LanguageSwitcher variant="footer" />
		</div>
	</div>

	<div
		class="mt-8 pt-4 border-t border-ink/10 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate font-mono"
	>
		<p>&copy; {new Date().getFullYear()} {company.name}. {t.rights}</p>
		<p>
			{t.madeBy}
			<a
				href={terroq.url}
				target="_blank"
				rel="noopener noreferrer"
				class="text-primary-deep font-semibold hover:underline"
			>
				{terroq.name}
			</a>
		</p>
	</div>
</footer>
