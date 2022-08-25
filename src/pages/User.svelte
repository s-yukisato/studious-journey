<script lang="ts">
  import Header from "../components/Header.svelte"
  import Countdown from "../lib/Countdown.svelte";
</script>

<Header title="Home" />
<div class="absolute top-16">
  <div class="flex flex-col items-center justify-center mx-auto">
    <Countdown original={1 * 5 * 60} />
  </div>
</div>