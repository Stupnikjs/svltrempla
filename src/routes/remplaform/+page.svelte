<script>
    import BackButton from "../../components/BackButton.svelte";
import RemplaForm from "../../components/RemplaForm.svelte";

</script>
<div class="px-5 py-2 h-screen flex flex-col items-center">
    <BackButton></BackButton>
    <RemplaForm update={false} rempla={null}></RemplaForm>
</div>

<style>
       .kreon{
    font-family: "Kreon",sans-serif;
}
</style>