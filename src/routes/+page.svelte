<script lang="ts">
    import Element from "../components/atoms/Element.svelte";
    import FlexCol from "../components/atoms/FlexCol.svelte";
    import Grid from "../components/atoms/Grid.svelte";
    import AboutMe from "../components/molecules/AboutMe.svelte";
    import SideNav from "../components/templates/SideNav.svelte";
    import { default as experience } from "$lib/content/experience.json"
    import { default as projects } from "$lib/content/projects.json"
    import CardList from "../components/templates/CardList.svelte";
    import type { ExperienceList, ProjectList } from "typescript/types";

    const experienceList = experience as ExperienceList
    const projectList = projects as ProjectList
</script>

<Grid className="py-16 gap-y-24 md:py-0 md:gap-8">
    <Element element={'header'} className={'col-span-full md:col-span-6 md:sticky md:top-0 md:max-h-screen md:py-24'}>
        <SideNav/>
    </Element>

    <FlexCol element={'main'} className={'col-span-full md:col-span-6 gap-24 md:py-24'}>
        <AboutMe/>

        <CardList items={experienceList}/>

        <CardList items={projectList}/>
    </FlexCol>
</Grid>