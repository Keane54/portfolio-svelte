<script lang="ts">
    import type { ExperienceList, ProjectList } from "typescript/types";
    import ExperienceCard from "../organisms/ExperienceCard.svelte";
    import ProjectCard from "../organisms/ProjectCard.svelte";
    import Element from "../atoms/Element.svelte";

    export let items: ProjectList | ExperienceList;

    const isProjectList = (items: ProjectList | ExperienceList): items is ProjectList => {
        return (items as ProjectList).type === 'projects';
    };

    const isExperienceList = (items: ProjectList | ExperienceList): items is ExperienceList => {
        return (items as ExperienceList).type === 'experience';
    };
</script>

{#if isProjectList(items)}
    <Element element="ol">
        {#each items.data as item}
            <ProjectCard {item}/>
        {/each}
    </Element>
{:else if isExperienceList(items)}
    <Element element="ul">
        {#each items.data as item}
            <ExperienceCard {item}/>
        {/each}
    </Element>
{/if }
