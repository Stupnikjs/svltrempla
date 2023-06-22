<script>
    import RemplaForm from "../../components/RemplaForm.svelte";

</script>
<div class="px-5 py-2 h-screen">
    <a href="/rempla" class="kreon bg-gray-200 border border-black border-2 p-1 m-5"> Calendrier </a>
    <RemplaForm update={false} rempla={null}></RemplaForm>
</div>

<style>
       .kreon{
    font-family: "Kreon",sans-serif;
}
</style>