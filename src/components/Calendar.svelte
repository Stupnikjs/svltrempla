<script lang="ts">
    import WeekComponent from "./WeekComponent.svelte";
    import SliceArrayByN from "../functions/SliceArray";
    import type { rempla } from "../interface/rempla";
    import "@fontsource/kreon"; 




const monthIncr = (bool:boolean) => {
   
if (bool){
    
    selected += 1
    if (selected === 12) {
        selected = 0
        year = year + 1
    }
    

} else {
    
    selected -= 1
    if (selected === -1) {
        selected = 11
        year = year - 1
    }
    
}
   
}

const  Months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre","Octobre", "Novembre", "Decembre"]
const  daysOfWeek = ["L", "M", "M","J", "V", "S", "D"]

$: selected = new Date().getMonth() 
$: year = 2023


// si 0 > 6 si 1 > 0 si 2 > 1 si 3 > 2 
const getWeeks = (selected:number) => {
   
    let firstOfMonth = new Date(year, selected, 1).getDay()

    let monthDuration = new Date(year, selected + 1, 0).getDate()
    let firstOfMonthArr = new Array(firstOfMonth === 0 ? firstOfMonth = 6: firstOfMonth - 1).fill(new Date(0, 0, 0))
    let arr = new Array(monthDuration).fill(0)
    let arr2 = arr.map((el, index) => {
        return new Date(year, selected, index + 1)
    })
     arr2 = firstOfMonthArr.concat(arr2)
    
    return SliceArrayByN<Date>(arr2, 7, new Date(0,0,0))

}; 

let optionColor = [ "blue", "yellow", "green", "pink", "gray", "salmon", "cyan"]

function appendLight(optionColor:string[]) {
    let newColors = []
    for ( let s of optionColor){
        let light = "light" + s
        let dark = "dark"+ s
        newColors.push(s)
        newColors.push(light)
        newColors.push(dark)
    }
    return newColors
}

export let exportedColor = appendLight(optionColor)

$: newColor = [...exportedColor.slice(0,5)]

function clickColor(e, color:string){
    e.preventDefault()
    
    if (newColor.includes(color)) {
        let index = newColor.indexOf(color)
        newColor.splice(index, 1)
        newColor = newColor}
    else {
        newColor = [...newColor, color]
    }
    
}




export let remplas:rempla[]; 

</script>

<style>

    .kreon{
    font-family: "Kreon",sans-serif;
}
    .outlined{
        outline: 2px solid transparent;  
    }
    .outlined:focus{
        outline: 2px solid grey;
    }
    .outlined:hover{
        outline: 2px solid grey;
    }
    .min-w{
        min-width: 150px;
        text-align: center;
    }


    .color{
        background-color: var(--colorVar);
    }

    .selected{
        outline: var(--selected);
    }
</style>

<div class="">
    {#each exportedColor as color,index }
    <button class="color px-2 selected" on:click={e => clickColor(e,color)} style="
    --colorVar:{exportedColor[index]};
    --selected:{newColor.includes(exportedColor[index]) ? "2px solid black": "2px solid transparent"}; 
    ">1</button>
    {/each}
</div>

<div class="kreon">
    <div class="bg-gray-200 flex justify-center items-center">
        <button class="px-5  bg-yellow-200 rounded outlined h-1/2 " on:click|preventDefault={e=> {e.preventDefault() ; monthIncr(false)}}>-</button>
        <div class="px-5 min-w h-10 items-center flex justify-center">{Months[selected]}<span class="mx-2">{year}</span></div>
        <button class="px-5  bg-yellow-200 rounded outlined h-1/2" on:click|preventDefault={e =>{e.stopPropagation(); monthIncr(true)}}>+</button>
    </div>


    <div class="flex h-5 gap-1">
        {#each daysOfWeek as day }
            <span class="flex-1 bg-black items-center text-white justify-center rounded-xl h-8 flex">{day}</span>
        {/each}
    </div>
    <div class="my-3">
        {#each getWeeks(selected) as week,index}
            <WeekComponent week={week} remplas={remplas} colors={newColor}></WeekComponent>
        {/each}
    </div>
    <div>

    </div>

</div>