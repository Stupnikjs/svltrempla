<script>
   
    import Header from "../../components/Header.svelte";
    import { endpoint } from "../../config/config";
    import { goto } from '$app/navigation';


    // @ts-ignore
    async function submitHandler(e){
        e.preventDefault()
        const resp =  await fetch(`${endpoint}/auth/log`)
        console.log('debug')
        if (resp.status == 200) {
            goto(`${endpoint}/rempla`)
        }
        else {
            goto(`${endpoint}`)
        }
    }

</script>

<style>

    .voltaire{
        font-family: "Voltaire", sans-serif;
    }
</style>
<div>
    <Header></Header>
    <form class="bg-blue-100 h-48 flex flex-col voltaire w-3/4 m-auto my-10 justify-center items-center gap-5" on:submit={e => submitHandler(e)}>
        <fieldset class="grid grid-cols-2">
            <label for="email">email</label>
            <input type="email">
        </fieldset>
       <fieldset class="grid grid-cols-2">
            <label for="password">password</label>
            <input type="password">
       </fieldset>
        
        <button type="submit" on:submit={submitHandler} class="p-2 border border-black">Valider</button>
    </form>
</div>
