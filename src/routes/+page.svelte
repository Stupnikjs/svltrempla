<script lang="ts">

import type { jsonRempla } from "../interface/jsonRempla";
import Calendar from "../components/Calendar.svelte";
    import type { rempla } from "../interface/rempla";


interface dataResp {
    remplas: rempla[]
}

export let data:dataResp 


</script>



<div>
    <div class="flex bg-blue-50 h-10 items-center justify-around">
        <a href="/create">Ajouter Rempla</a>
        <a href="/manager">Gerer Mes Remlpa</a>
    </div>

    
    <Calendar remplas={data.remplas}></Calendar>
</div>