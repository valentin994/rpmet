<script>
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';

	injectSpeedInsights();
</script>

<div class="min-h-screen bg-paper font-sans text-ink">
	<Navigation />
	<slot />
	<Footer />
</div>
