<script>
	import { onMount } from 'svelte';
	import { inView, animate } from 'motion';
	import { page } from '$app/stores';
	import { hr } from '$lib/i18n/hr';
	import { en } from '$lib/i18n/en';
	import { company } from '$lib/data/company';
	import Divider from '../../../components/Divider.svelte';

	$: lang = $page.params.lang === 'en' ? 'en' : 'hr';
	$: t = (lang === 'en' ? en : hr).impressum;
	$: prefix = lang === 'en' ? '/en' : '';

	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let intro;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let companyBlock;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let managementBlock;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let contactBlock;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let licencesBlock;

	onMount(() => {
		inView(intro, () => {
			animate(intro, { x: [-100, 0], opacity: [0, 1] }, { duration: 0.8, easing: 'ease-in' });
		});
		inView(companyBlock, () => {
			animate(companyBlock, { y: [50, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
		inView(managementBlock, () => {
			animate(
				managementBlock,
				{ y: [50, 0], opacity: [0, 1] },
				{ duration: 0.7, easing: 'ease-in' }
			);
		});
		inView(contactBlock, () => {
			animate(contactBlock, { y: [50, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
		inView(licencesBlock, () => {
			animate(licencesBlock, { y: [50, 0], opacity: [0, 1] }, { duration: 0.7, easing: 'ease-in' });
		});
	});
</script>

<svelte:head>
	<meta name="author" content="RP MET d.o.o." />
	<meta name="description" content={t.seo.description} />
	<link rel="canonical" href={`https://rp-met.hr${prefix}/impressum`} />
	<link rel="alternate" hreflang="hr" href="https://rp-met.hr/impressum" />
	<link rel="alternate" hreflang="en" href="https://rp-met.hr/en/impressum" />
	<link rel="alternate" hreflang="x-default" href="https://rp-met.hr/impressum" />
	<title>{t.seo.title}</title>
</svelte:head>

<div class="px-8 md:px-20 xl:px-60 pt-12">
	<div bind:this={intro}>
		<h2 class="text-ink/50 font-display font-bold tracking-tight">{t.eyebrow}</h2>
		<h1 class="text-primary-deep font-display font-light text-3xl">{t.title}</h1>
		<p class="text-ink/80 py-4 text-lg max-w-2xl">{t.intro}</p>
	</div>
</div>

<Divider className="max-w-16 mx-auto my-8 md:my-12" />

<div class="px-8 md:px-20 xl:px-60 py-8 md:pb-16">
	<div bind:this={companyBlock} class="grid md:grid-cols-2 gap-8">
		<div>
			<h2 class="text-xl md:text-2xl text-primary-deep font-display font-semibold pb-4">
				{t.companyTitle}
			</h2>
			<dl class="space-y-2 font-mono text-sm md:text-base">
				<div class="border-l-4 border-primary pl-2">
					<dt class="text-ink/50 uppercase text-xs tracking-wide">{t.nameLabel}</dt>
					<dd class="text-ink font-medium">{company.name}</dd>
				</div>
				<div class="border-l-4 border-primary pl-2">
					<dt class="text-ink/50 uppercase text-xs tracking-wide">{t.seatLabel}</dt>
					<dd class="text-ink font-medium">{company.seatCity}</dd>
				</div>
				<div class="border-l-4 border-primary pl-2">
					<dt class="text-ink/50 uppercase text-xs tracking-wide">{t.warehouseLabel}</dt>
					<dd class="text-ink font-medium">{company.warehouseAddress}</dd>
				</div>
				<div class="border-l-4 border-primary pl-2">
					<dt class="text-ink/50 uppercase text-xs tracking-wide">{t.courtLabel}</dt>
					<dd class="text-ink font-medium">{company.court}</dd>
				</div>
				<div class="border-l-4 border-primary pl-2">
					<dt class="text-ink/50 uppercase text-xs tracking-wide">{t.oibLabel}</dt>
					<dd class="text-ink font-medium">{company.oib}</dd>
				</div>
				<div class="border-l-4 border-primary pl-2">
					<dt class="text-ink/50 uppercase text-xs tracking-wide">{t.maticniBrojLabel}</dt>
					<dd class="text-ink font-medium">{company.maticniBroj}</dd>
				</div>
				<div class="border-l-4 border-primary pl-2">
					<dt class="text-ink/50 uppercase text-xs tracking-wide">{t.mbsLabel}</dt>
					<dd class="text-ink font-medium">{company.mbs}</dd>
				</div>
				<div class="border-l-4 border-primary pl-2">
					<dt class="text-ink/50 uppercase text-xs tracking-wide">{t.capitalLabel}</dt>
					<dd class="text-ink font-medium">{company.temeljniKapital}</dd>
				</div>
			</dl>
			<h3 class="text-ink/50 uppercase text-xs tracking-wide font-mono pt-4">
				{t.accountsLabel}
			</h3>
			{#each company.accounts as account}
				<p class="font-mono text-sm md:text-base border-l-4 border-primary pl-2 mt-1">
					IBAN: <span class="text-ink font-medium">{account.iban}</span> · SWIFT:
					<span class="text-ink font-medium">{account.swift}</span>
				</p>
			{/each}
		</div>

		<div>
			<div bind:this={managementBlock}>
				<h2 class="text-xl md:text-2xl text-primary-deep font-display font-semibold pb-4">
					{t.managementTitle}
				</h2>
				<ul class="space-y-1 font-mono text-sm md:text-base">
					{#each company.management as person}
						<li class="border-l-4 border-primary pl-2 text-ink font-medium">{person}</li>
					{/each}
				</ul>
			</div>

			<div bind:this={contactBlock} class="pt-8">
				<h2 class="text-xl md:text-2xl text-primary-deep font-display font-semibold pb-4">
					{t.contactTitle}
				</h2>
				<dl class="space-y-2 font-mono text-sm md:text-base">
					<div class="border-l-4 border-primary pl-2">
						<dt class="text-ink/50 uppercase text-xs tracking-wide">{t.phoneLabel}</dt>
						<dd class="text-ink font-medium">
							<a href={company.phoneHref} class="hover:text-primary-deep">{company.phoneDisplay}</a>
						</dd>
					</div>
					<div class="border-l-4 border-primary pl-2">
						<dt class="text-ink/50 uppercase text-xs tracking-wide">{t.emailLabel}</dt>
						<dd class="text-ink font-medium">
							<a href={`mailto:${company.email}`} class="hover:text-primary-deep">{company.email}</a
							>
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>

	<div bind:this={licencesBlock} class="pt-12">
		<h2 class="text-xl md:text-2xl text-primary-deep font-display font-semibold pb-2">
			{t.licencesTitle}
		</h2>
		<p class="text-ink/70 pb-4 max-w-2xl">{t.licencesText}</p>
		<dl class="space-y-2 font-mono text-sm md:text-base">
			<div class="border-l-4 border-copper pl-2">
				<dt class="text-ink/50 uppercase text-xs tracking-wide">{t.collectionLabel}</dt>
				<dd class="text-ink font-medium">{company.licences.collectionNumber}</dd>
			</div>
			<div class="border-l-4 border-copper pl-2">
				<dt class="text-ink/50 uppercase text-xs tracking-wide">{t.processingLabel}</dt>
				<dd class="text-ink font-medium">{company.licences.processingNumber}</dd>
			</div>
			<div class="border-l-4 border-copper pl-2">
				<dt class="text-ink/50 uppercase text-xs tracking-wide">{t.traderLabel}</dt>
				<dd class="text-ink font-medium">{company.licences.traderNumber}</dd>
			</div>
			<div class="border-l-4 border-copper pl-2">
				<dt class="text-ink/50 uppercase text-xs tracking-wide">{t.transporterLabel}</dt>
				<dd class="text-ink font-medium">{company.licences.transporterNumber}</dd>
			</div>
		</dl>
	</div>
</div>
