<script>
import { each } from "svelte/internal"

  let items = [];
  let item_value = "";
  function handleClick() {
    items = [item_value, ...items]
  }
</script>

<main>
  <h1>Svelte</h1>
  <input id="input" bind:value={item_value} placeholder="enter item name"/>
  <button on:click={handleClick}>Click to change text</button>
  {#each items as item, index}
    <p>{index+1}. {item}</p>
  {/each}
</main>

<style>
  main {
    text-align: center;
  }
</style>