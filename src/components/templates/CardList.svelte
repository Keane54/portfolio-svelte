<script lang="ts">
    import type { ExperienceList, ProjectList } from "typescript/types";
    import ExperienceCard from "../organisms/ExperienceCard.svelte";
    import ProjectCard from "../organisms/ProjectCard.svelte";
    import Link from "../atoms/Link.svelte";
    import InteractiveArrow from "../molecules/InteractiveArrow.svelte";
    import FlexCol from "../atoms/FlexCol.svelte";

    export let items: ProjectList | ExperienceList;

    const isProjectList = (items: ProjectList | ExperienceList): items is ProjectList => {
        return (items as ProjectList).type === 'projects';
    };

    const isExperienceList = (items: ProjectList | ExperienceList): items is ExperienceList => {
        return (items as ExperienceList).type === 'experience';
    };
</script>

{#if isProjectList(items)}
    <FlexCol element="ol" className="gap-12 md:gap-4">
        {#each items.data as item}
            <ProjectCard {item}/>
        {/each}
    </FlexCol>
{:else if isExperienceList(items)}
    <FlexCol element="ul" className="gap-12 md:gap-4">
        {#each items.data as item}
            <ExperienceCard {item}/>

            {#if item === (items.data.at(-1))}
                <Link href="/resume.pdf" className="md:pl-4 font-medium">
                    View Full Résumé
                    <InteractiveArrow/>
                </Link>
            {/if}
        {/each}
    </FlexCol>
{/if }
