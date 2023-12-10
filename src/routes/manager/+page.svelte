
<script lang="ts">

import type { dataResp } from "../../interface/dataResp"
import RemplaManagerBtn from "../../components/RemplaManagerBtn.svelte";
import BackButton from "../../components/BackButton.svelte";
import {endpoint} from "../../config/config"
async function deleteHandler(e){
    const res = await fetch(`${endpoint}/api/del/${e.target.id}`, )
    if (res.status === 200) window.location.assign("/rempla")
} 

export let data:dataResp



</script>


<style>
   
    
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
    <header class="flex justify-center my-3">
       <BackButton></BackButton>
    </header>
    <main class="media">
        
        <div class="flex flex-wrap gap-1 p-2 justify-around">
            {#each data.remplas as rempla }
                    <RemplaManagerBtn rempla={rempla} deleteHandler={deleteHandler}></RemplaManagerBtn>
            {/each}
        </div>
    </main>
</div>

m