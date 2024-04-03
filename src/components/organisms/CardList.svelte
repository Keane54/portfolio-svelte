<script lang="ts">
    import type { ExperienceList, ProjectList } from "typescript/types";
    import Card from "../atoms/Card.svelte";
    export let items: ProjectList | ExperienceList;

    const isProjectList = (items: ProjectList | ExperienceList): items is ProjectList => {
        return (items as ProjectList).type === 'projects';
    };

    const isExperienceList = (items: ProjectList | ExperienceList): items is ExperienceList => {
        return (items as ExperienceList).type === 'experience';
    };
</script>

{#if isProjectList(items)}
    {#each items.data as item}
        <Card>
            
        </Card>
    {/each}
{:else if isExperienceList(items)}
    {#each items.data as item}
        <Card>

        </Card>
    {/each}
{/if }