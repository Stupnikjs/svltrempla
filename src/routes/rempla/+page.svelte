<script lang="ts">

import type { jsonRempla } from "../../interface/jsonRempla";
import Calendar from "../../components/Calendar.svelte";
import type { rempla } from "../../interface/rempla";
import "@fontsource/kreon"; 
import type { dataResp } from "../../interface/dataResp";


export let data:dataResp 


</script>


<style>
    .font{
        font-family: "Kreon", sans-serif;
    }
</style>


<div>
    <div class="flex bg-blue-50 h-10 items-center justify-around font">
        <a href="/remplaform">Ajouter Rempla</a>
        <a href="/manager">Gerer Mes Remlpa</a>
    </div>

    {#if data === undefined}
            <p>Loader</p>
    {:else}
        <main>
            <Calendar remplas={data.remplas}></Calendar>
        </main>
    {/if}
   
</div>