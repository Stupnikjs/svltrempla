<script lang="ts">
    import type { rempla } from "../interface/rempla";
    import "@fontsource/kreon"

    export let rempla:rempla; 
    export let deleteHandler:Function
</script>

<style>
    .kreon{
    font-family: "Kreon",sans-serif;
}
</style>

<div class="bg-yellow-50  border border-black border-1 my-2 relative kreon w-2/5 px-2">
    <button class="bg-red-400 p-2 right-0 absolute h-5 flex items-center" id={rempla.id} on:click={e => deleteHandler(e)}><i class="fa-solid fa-xmark"></i></button>
    <h1>{rempla.location}</h1>
    <p class="text-sm">du <span>{rempla.debut}</span> au <span>{rempla.fin}</span></p>
    <p class="text-xs">{rempla.logiciel}</p>
    <p class="text-xs">a {rempla.minutes_from_home}minutes</p>
</div>