<script lang="ts">
    import type { ExperienceList, ProjectList } from "typescript/types";
    import Card from "../atoms/Card.svelte";
    import ExperienceCard from "../organisms/ExperienceCard.svelte";
    import Image from "../atoms/Image.svelte";
    import FlexCol from "../atoms/FlexCol.svelte";
    import Paragraph from "../atoms/Paragraph.svelte";
    import InteractiveArrow from "../molecules/InteractiveArrow.svelte";
    import TechnologyList from "../molecules/TechnologyList.svelte";
    import ProjectCard from "../organisms/ProjectCard.svelte";

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
        <ProjectCard {item}/>
    {/each}
{:else if isExperienceList(items)}
    {#each items.data as item}
        <ExperienceCard {item}/>
    {/each}
{/if }