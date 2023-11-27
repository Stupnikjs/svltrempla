<script lang="ts">

import Calendar from "../../components/Calendar.svelte";
import Footer from "../../components/Footer.svelte";
import "@fontsource/kreon"; 
import type { dataResp } from "../../interface/dataResp";
import { onMount } from "svelte";

export let data:dataResp 

// composant 

let ready = false;

onMount(() => {
   ready = true }
    )


</script>


<style>
    .font{
        font-family: "Kreon", sans-serif;
    }

    .media{
        margin: 2% 10%;
    }
    @media screen and (max-width: 1000px ){
            
       .media{
        margin: 2%;
       }     
          
        }
</style>


<div>
    <div class="flex bg-blue-50 h-10 items-center justify-around font">
        <a href="/remplaform">Ajouter Rempla</a>
        <a href="/manager">Gerer Mes Remlpa</a>
    </div>

    {#if !ready }
            <p>Loader</p>
    {:else}
        <main class="media">
            <Calendar remplas={data.remplas}></Calendar>
        </main>
    {/if}

    <Footer></Footer>
   
</div>