<script lang="ts">
    import Element from "../components/atoms/Element.svelte";
    import FlexCol from "../components/atoms/FlexCol.svelte";
    import Grid from "../components/atoms/Grid.svelte";
    import AboutMe from "../components/molecules/AboutMe.svelte";
    import SideNav from "../components/organisms/SideNav.svelte";
</script>

<Grid className="py-24 gap-8 relative">
    <Element element={'section'} className={'col-span-full md:col-span-6 lg:sticky lg:top-0'}>
        <SideNav/>
    </Element>

    <FlexCol element={'main'} className={'col-span-full md:col-span-6 gap-12'}>
        <AboutMe/>
    </FlexCol>
</Grid>