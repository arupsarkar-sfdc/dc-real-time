<script>
  import { fly, slide } from "svelte/transition";
  import { enhance } from "$app/forms";
  import Products from "../components/Products.svelte";
  export let data;
  export let form;
  let creating = false;
  let deleting = [];

  /** @type {number} */
  let number;
  async function roll() {
    try {
      console.log("Sending salesforce events", "Start");
      await SalesforceInteractions.sendEvent({
        user: {
          attributes: {
            eventType: "contactPointEmail",
            email: "user@domain.com",
          },
        },
      });
      console.log("Sending salesforce events", "End");
      const response = await fetch("/roll");
      number = await response.json();
    } catch (error) {
      console.error(error);
    }

    // const response = await fetch("/roll");
    // number = await response.json();
  }

  import { onMount } from "svelte";
  

  onMount(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.c360a.salesforce.com/beacon/c360a/4775e8e3-7b28-4ffd-b693-31bf4943d14b/scripts/c360a.min.js";
    // script.src = "https://cdn.c360a.salesforce.com/beacon/c360a/d9e6cae4-a62e-42a4-80a5-2dfd270353c0/scripts/c360a.min.js";
    document.body.appendChild(script);
  });
</script>

<div>
  <Products />
</div>

<!-- <div class="centered">

  <h1>Roll the dice</h1>
  <button on:click={roll}>Roll the dice</button>

  {#if number !== undefined}
    <p>You rolled a {number}</p>
  {/if}
</div> -->
<!-- create a divider -->
<hr />

<div class="centered">
  <!-- <h1>todos</h1> -->
  <!-- {#if form?.error}
    <p class="error">{form.error}</p>
  {/if}

  {#if creating}
    <p class="saving">saving...</p>
  {/if}

  {#if form?.sucess}
    <p class="saving">Success!!!</p>
  {/if} -->

  <!-- <form
    method="POST"
    action="?/create"
    use:enhance={() => {
      creating = true;
      console.log("creating", creating);
      return async ({ update }) => {
        await update();
        creating = false;
        console.log("creating", creating);
      };
    }}
  >
    <label>
      add a todo:
      <input
        disabled={creating}
        name="description"
        value={form?.description ?? ""}
        autocomplete="off"
        required
        on:keydown={async (e) => {
          if (e.key !== "Enter") return;

          const input = e.currentTarget;
          const description = input.value;

          const response = await fetch("/todo", {
            method: "POST",
            body: JSON.stringify({ description }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const { id } = await response.json();

          // data.todos = [
          //   ...data.todos,
          //   {
          //     id,
          //     description,
          //   },
          // ];

          input.value = "";
        }}
      />
    </label>
  </form> -->

  <!-- <ul class="todos">
    {#each data.todos.filter((todo) => !deleting.includes(todo.id)) as todo (todo.id)}
      <li in:fly={{ y: 20 }} out:slide>
        <form
          method="POST"
          action="?/delete"
          use:enhance={() => {
            deleting = [...deleting, todo.id];
            console.log("before deleting", deleting);
            return async ({ update }) => {
              await update();
              deleting = deleting.filter((id) => id !== todo.id);
              console.log("after deleting", deleting);
            };
          }}
        >
          <input type="hidden" name="id" value={todo.id} />
          <span>{todo.description}</span>
          <button aria-label="Mark as complete"></button>
        </form>
      </li>
    {/each}
  </ul> -->
</div>

<style>
  .centered {
    max-width: 20em;
    margin: 0 auto;
  }

  label {
    width: 100%;
  }

  input {
    flex: 1;
  }

  span {
    flex: 1;
  }

  button {
    border: none;
    background: url(./remove.svg) no-repeat 50% 50%;
    background-size: 1rem 1rem;
    cursor: pointer;
    height: 100%;
    aspect-ratio: 1;
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  button:hover {
    opacity: 1;
  }

  .saving {
    opacity: 0.5;
  }
</style>
