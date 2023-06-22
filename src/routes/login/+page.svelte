<script>
    import Header from "../../components/Header.svelte";

    async function submitHandler(e){
        e.preventDefault()
        const resp =  await fetch(`${import.meta.env.VITE_API_REMPLA_URL}`)
    }

</script>

<style>

    .voltaire{
        font-family: "Voltaire", sans-serif;
    }
</style>
<div>
    <Header></Header>
    <form class="bg-blue-100 h-96 flex flex-col voltaire w-3/4 m-auto my-10 justify-center items-center gap-5" on:submit={e => submitHandler(e)}>
        <fieldset class="grid grid-cols-2">
            <label for="email">email</label>
            <input type="email">
        </fieldset>
       <fieldset class="grid grid-cols-2">
            <label for="password">password</label>
            <input type="password">
       </fieldset>
        
        <input type="submit">
    </form>
</div>
