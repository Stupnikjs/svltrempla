<script lang="ts">

    $: start = ""
    $: end = ""
    $: location = ""
    $: logiciel = ""
    $: retrocession = ""
    $: travelTime = 0


    function setStart(e){
        if (e.target.name = "start")
        start = e.target.value
    }
    function setEnd(e){
        if (e.target.name = "start")
        end = e.target.value
    }
    function setLocation(e){
        if (e.target.name = "start")
        location = e.target.value
    }
    function setLogiciel(e){
        if (e.target.name ="logiciel")
        logiciel = e.target.value
    }
    function setRetrocession(e){
        if (e.target.name = "start")
        retrocession = e.target.value
    }
    function setTravelTime(e){
        if (e.target.name = "start")
        travelTime = e.target.value
    }

   
</script>



<form>
    <fieldset>
        <legend> Dates de la rempla </legend>
                        <label for="start">Debut</label>
                        <input type="date" name="start" on:change={e => setStart(e)}/>
                        <label for="end">Fin</label>
                        <input type='date' name="end" on:change={e => setEnd(e)}/>

                        <label for="location">Localisation</label>
                        <input type="text" name="location" on:change={e => setLocation(e)} />

                        <label for="traveltime"> Temps de Trajet depuis domicile en minutes </label>
                        <input type="number" name="traveltime" on:change={e => setTravelTime(e)} />

                        
                        <label for="logiciel">Logiciel</label>
                        <input type="text" on:change={e => setLogiciel(e)} />
                        
                        <label for="retorcession">Retrocession </label>
                        <div><input type="number" name="retrocession" on:change={e => setRetrocession(e)} /><span>%</span></div>
                        

                        <input type="submit"/>

    </fieldset>
</form>