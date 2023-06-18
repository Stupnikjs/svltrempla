<script lang="ts">

import type { jsonRempla } from "../../interface/jsonRempla";
import Calendar from "../../components/Calendar.svelte";
import type { rempla } from "../../interface/rempla";
import "@fontsource/kreon"; 

interface dataResp {
    remplas: rempla[]
}

export let data:dataResp 


</script>


<style>
    .font{
        font-family: "Kreon", sans-serif;
    }
</style>


<div>
    <div class="flex bg-blue-50 h-10 items-center justify-around font">
        <a href="/create">Ajouter Rempla</a>
        <a href="/manager">Gerer Mes Remlpa</a>
    </div>

    {#if data === undefined}
            <p>Loader</p>
    {:else}
        <Calendar remplas={data.remplas}></Calendar>
    {/if}
   
</div>