
<script lang="ts">

import type { dataResp } from "../../interface/dataResp"
import "@fontsource/kreon"
import RemplaManagerBtn from "../../components/RemplaManagerBtn.svelte";
async function deleteHandler(e){
    const res = await fetch(`${import.meta.env.VITE_API_REMPLA_URL}/api/delete/${e.target.id}`, )
    if (res.status === 200) window.location.assign("/rempla")
} 

export let data:dataResp



</script>


<style>
   
    .kreon{
    font-family: "Kreon",sans-serif;
    }

    .media{
        margin: 5% 10%;
    }
    @media screen and (max-width: 1000px ){
            
       .media{
        margin: 5% 0;
       }     
          
        }
</style>

<div>
    <main class="media">
        
        <div class="flex flex-wrap gap-1 p-2 justify-around">
            {#each data.remplas as rempla }
                    <RemplaManagerBtn rempla={rempla} deleteHandler={deleteHandler}></RemplaManagerBtn>
            {/each}
        </div>
    </main>
</div>

m