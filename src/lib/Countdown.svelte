<script lang="ts">
	import { tweened } from 'svelte/motion';
  export let original
	let timer = tweened(original)

  setInterval(() => {
    if ($timer > 0) $timer--;
  }, 1000);

  // $: days = Math.floor($timer / (60 * 60 * 24))
  $: hours = Math.floor($timer / (60 * 60))
  $: minutes = Math.floor(($timer - hours * 60 * 60) / 60);
  $: seconds = Math.floor(($timer - minutes * 60) % 60)
  $: console.log(hours, minutes, seconds)
</script>

<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span style={`--value:${0};`}></span>
    </span>
    days
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span style={`--value:${hours};`}></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span style={`--value:${minutes};`}></span>
    </span>
    min
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span style={`--value:${seconds};`}></span>
    </span>
    sec
  </div>
</div>