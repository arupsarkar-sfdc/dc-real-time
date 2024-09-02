<script>
	console.log('layout');
	import BottomNav from '$lib/components/BottomNav.svelte';
</script>
<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
    <a href="/contact">Contact</a>
	<a href="/blog">Blog</a>
</nav>

<slot></slot>

<BottomNav />

