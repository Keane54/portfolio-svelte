<script lang="ts">
    import FlexRow from "../atoms/FlexRow.svelte";
    import Technology from "../atoms/Technology.svelte";

    export let technologies: string[];
</script>

<FlexRow element="ul" className="gap-4 flex-wrap">
    {#each technologies as technology}
        <Technology {technology}/>
    {/each}
</FlexRow>