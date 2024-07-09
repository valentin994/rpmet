<script>
    import "../app.css";
	import Navigation from "../components/Navigation.svelte";
</script>

<div class="min-h-screen bg-gray-50">
    <Navigation />
    <slot />
</div>
