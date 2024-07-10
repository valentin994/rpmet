<script>
    import "../app.css";
	import Navigation from "../components/Navigation.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<div class="min-h-screen bg-gray-50">
    <Navigation />
    <slot />
    <Footer />
</div>
