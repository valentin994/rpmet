<script>
    import "../app.css";
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import Navigation from "../components/Navigation.svelte";
    import Footer from "../components/Footer.svelte";

    injectSpeedInsights();
</script>

<div class="min-h-screen bg-gray-50">
    <Navigation />
    <slot />
    <Footer />
</div>
