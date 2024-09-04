<script>
  import { onMount } from "svelte";
  

  onMount(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.c360a.salesforce.com/beacon/c360a/4775e8e3-7b28-4ffd-b693-31bf4943d14b/scripts/c360a.min.js";
    document.body.appendChild(script);
  });	
	console.log('layout');
	// import BottomNav from '$lib/components/BottomNav.svelte';
</script>
<nav>

			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
			<a href="/blog">Blog</a>


	<ul>
		<li><button id="opt-in">Opt-In</button></li>
		<li><button id="opt-out">Opt-Out</button></li>			
	</ul>
</nav>

<slot></slot>

<!-- <BottomNav /> -->

<style>
	/* Example styling, adjust as needed */
	nav ul {
	  display: flex;
	  list-style: none;
	  padding: 0;
	}
  
	nav li {
	  margin-right: 15px;
	}
  
	nav button {
	  background-color: #007BFF;
	  color: white;
	  border: none;
	  padding: 5px 10px;
	  cursor: pointer;
	}
  
	nav button:hover {
	  background-color: #0056b3;
	}
  </style>