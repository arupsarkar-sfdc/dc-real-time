<script>
    export let links = [];
    export const message = 'Bottom Navigation';
  </script>
  
  <footer>
    <ul>
      {#each links as { href, label }}
        <li><a href={href}>{label}</a></li>
      {/each}
    </ul>
    <h1>{message}</h1>
  </footer>
  
  <style>
    footer {
      background-color: #333;
      color: white;
      padding: 1rem;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    a {
      color: white;
      text-decoration: none;
    }
  </style>