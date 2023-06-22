<script lang="ts">

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

</script>


<style>
    
    .color{
        background-color: var(--colorVar);
    }

    .selected{
        outline: var(--selected);
    }
</style>

<div>

    <div class="">
        {#each exportedColor as color,index }
        <button class="color px-2 selected" on:click={e => clickColor(e,color)} style="
        --colorVar:{exportedColor[index]};
        --selected:{newColor.includes(exportedColor[index]) ? "2px solid black": "2px solid transparent"}; 
        ">1</button>
        {/each}
    </div>


</div>