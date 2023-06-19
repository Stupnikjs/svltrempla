
<script lang="ts">

import type { dataResp } from "../../interface/dataResp"
import RemplaManagerBtn from "../../components/RemplaManagerBtn.svelte";
async function deleteHandler(e){
    const res = await fetch(`${import.meta.env.VITE_API_REMPLA_URL}/api/delete/${e.target.id}`, )
    if (res.status === 200) window.location.assign("/rempla")
} 

export let data:dataResp

</script>

<div>
    <main>

        <div class="flex flex-wrap gap-1 p-2">
            {#each data.remplas as rempla }
                    <RemplaManagerBtn rempla={rempla} deleteHandler={deleteHandler}></RemplaManagerBtn>
            {/each}
        </div>
    </main>
</div>

