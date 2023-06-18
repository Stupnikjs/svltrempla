<script lang="ts">

    import type { rempla } from "../interface/rempla";
    $: start = ""
    $: end = ""
    $: location = ""
    $: logiciel = ""
    $: retrocession = 0
    $: travelTime = 0


    function setStart(e){
        if (e.target.name = "start")
        start = e.target.value
    }
    function setEnd(e){
        if (e.target.name = "end")
        end = e.target.value
    }
    function setLocation(e){
        if (e.target.name = "location")
        location = e.target.value
    }
    function setLogiciel(e){
        if (e.target.name ="logiciel")
        logiciel = e.target.value
    }
    function setRetrocession(e){
        if (e.target.name = "retrocession")
        retrocession = parseInt(e.target.value)
    }
    function setTravelTime(e){
        if (e.target.name = "travelTime")
        travelTime = parseInt(e.target.value)
    }

    async function postRempla(){
        let rempla:rempla = {
                    debut: start,
                    fin: end, 
                    location: location,
                    logiciel: logiciel,
                    retrocession: retrocession,
                    minutes_from_home: travelTime
                
                }

                console.log(rempla)
        let res = await fetch(`${import.meta.env.VITE_API_REMPLA_URL}/api/new`,  {
             method: "POST",
             headers: {
                'Content-Type': "application/json"
             }, 
             body: JSON.stringify(rempla)
            
            })

           if (res.status === 200)  console.log("success")
        }
   
        
       
</script>

<style>
        .kreon{
    font-family: "Kreon",sans-serif;
}



</style>


<form on:submit={e => postRempla()}  class="bg-blue-50 kreon w-3/4 mx-auto my-2 p-5 border border-black border-2">
    <fieldset class="flex flex-col gap-2">
        <legend> Dates de la rempla </legend>
                        <label for="start">Debut</label>
                        <input class="w-1/3" type="date" name="start" on:change={e => setStart(e)}/>
                        <label for="end">Fin</label>
                        <input class="w-1/3" type='date' name="end" on:change={e => setEnd(e)}/>

                        <label for="location">Localisation</label>
                        <input type="text" name="location" on:change={e => setLocation(e)} />

                        <label for="traveltime"> Temps de Trajet depuis domicile en minutes </label>
                        <input class="w-1/3" type="number" name="traveltime" on:change={e => setTravelTime(e)} />

                        
                        <label for="logiciel">Logiciel</label>
                        <input type="text" on:change={e => setLogiciel(e)} />
                        
                        <label for="retrocession">Retrocession </label>
                        <div><input type="number" name="retrocession" on:change={e => setRetrocession(e)} /><span>%</span></div>
                        
                        <button  type="submit" class="bg-blue-300 w-1/3">Envoyer</button>

    </fieldset>
</form>