<script>
	import { page } from '$app/stores';

	export let variant = 'nav';

	$: pathname = $page.url.pathname;
	$: lang = $page.params.lang === 'en' ? 'en' : 'hr';
	$: hrPath = lang === 'en' ? pathname.replace(/^\/en/, '') || '/' : pathname;
	$: enPath = lang === 'en' ? pathname : `/en${pathname === '/' ? '' : pathname}`;
</script>

<div
	class="flex items-center gap-1.5 font-mono text-xs tracking-wide {variant === 'footer'
		? 'text-slate'
		: 'text-ink'}"
>
	<a
		href={hrPath}
		class="px-1.5 py-0.5 transition-colors {lang === 'hr'
			? 'text-primary-deep font-semibold'
			: 'hover:text-primary-deep'}"
		aria-current={lang === 'hr' ? 'page' : undefined}
	>
		HR
	</a>
	<span class="opacity-40">/</span>
	<a
		href={enPath}
		class="px-1.5 py-0.5 transition-colors {lang === 'en'
			? 'text-primary-deep font-semibold'
			: 'hover:text-primary-deep'}"
		aria-current={lang === 'en' ? 'page' : undefined}
	>
		EN
	</a>
</div>
