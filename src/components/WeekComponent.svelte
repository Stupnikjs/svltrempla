<script lang="ts">
    
    import type { rempla } from "../interface/rempla";
    import StringToDate from "../functions/StringToDate";
    import RemplaComponent from "./RemplaComponent.svelte";
    import "@fontsource/kreon"
   
         
        const getArrayWeek = (remp: rempla, week: Date[]) => {
        let debut = StringToDate(remp.debut)
        let fin = StringToDate(remp.fin)
        console.log(debut, fin)
        let newarr =  week.map((el:Date) => {
            
            if(el.getTime() >= debut.getTime() && el.getTime() <= fin.getTime() ) return true
            else return false 
        })
        
        let firstTrue = 0
        let secondArg = 0
        for(let i = 0 ; i < newarr.length; i++){
                if (newarr[i] && firstTrue === 0) firstTrue = i + 1 , secondArg = i + 1
                if ( newarr[i] && firstTrue != 0 ) secondArg += 1
                if ( !newarr[i] && firstTrue!= 0 ) break
        }
        return [firstTrue, secondArg]

        
    }

    
    
   
    
    
    export let week:Date[]
    export let colors:string[]; 
    export let remplas: rempla[]
   
</script>

<style>

.rempla{
    grid-column: var(--start) / var(--end);
    background-color: var(--custcolor);
}

.kreon{
    font-family: "Kreon",sans-serif;
}

</style>


<div class="grid grid-cols-7 w-full bg-blue-100 kreon">

    
    {#each week as day}

    
    <span class="p-1 bg-yellow-50 flex-1 text-center my-5 mx-1">{day.getFullYear() != 1899 ? day.getDate(): ""}</span>
    {/each}
    {#each remplas as rempla, index }
        
        {#if getArrayWeek(rempla, week)[0] !== 0}
        <div class="w-full rempla flex justify-center p-2 mx-1" style="
        --custcolor: {colors[index % colors.length]}; 
        --start: {getArrayWeek(rempla, week)[0]} ; 
        --end: {getArrayWeek(rempla, week)[1]}; */
        ">
           <RemplaComponent rempla={rempla}></RemplaComponent>
        </div>
       {/if}
    {/each

    }
    
</div>