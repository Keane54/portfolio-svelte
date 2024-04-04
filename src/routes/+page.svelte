<script lang="ts">
    import type { ExperienceList, ProjectList } from "typescript/types";
    import Element from "../components/atoms/Element.svelte";
    import FlexCol from "../components/atoms/FlexCol.svelte";
    import Grid from "../components/atoms/Grid.svelte";
    import AboutMe from "../components/molecules/AboutMe.svelte";
    import SideNav from "../components/templates/SideNav.svelte";
    import CardList from "../components/templates/CardList.svelte";
    import { default as experience } from "$lib/content/experience.json"
    import { default as projects } from "$lib/content/projects.json"
    import SectionHeading from "../components/molecules/SectionHeading.svelte";

    const experienceList = experience as ExperienceList
    const projectList = projects as ProjectList
</script>

<Grid className="py-16 gap-y-24 lg:py-0 lg:gap-8">
    <Element element={'header'} className={'col-span-full lg:col-span-6 lg:sticky lg:top-0 lg:max-h-screen lg:py-24'}>
        <SideNav/>
    </Element>

    <FlexCol element={'main'} className={'col-span-full lg:col-span-6 gap-16 lg:gap-24 lg:py-24'}>
        <Element id="about">
            <SectionHeading>
                About
            </SectionHeading>

            <AboutMe/>
        </Element>

        <Element id="experience">
            <SectionHeading>
                Experience
            </SectionHeading>

            <CardList items={experienceList}/>
        </Element>

        <Element id="projects">
            <SectionHeading>
                Projects
            </SectionHeading>

            <CardList items={projectList}/>
        </Element>
    </FlexCol>
</Grid>