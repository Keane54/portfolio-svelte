<script lang="ts">
    import Element from "../components/atoms/Element.svelte";
    import FlexCol from "../components/atoms/FlexCol.svelte";
    import Grid from "../components/atoms/Grid.svelte";
    import AboutMe from "../components/molecules/AboutMe.svelte";
    import SideNav from "../components/organisms/SideNav.svelte";
</script>

<Grid className="py-16 gap-y-24 md:py-0 md:gap-8">
    <Element element={'header'} className={'col-span-full md:col-span-6 md:sticky md:top-0 md:max-h-screen md:py-24'}>
        <SideNav/>
    </Element>

    <FlexCol element={'main'} className={'col-span-full md:col-span-6 gap-12 md:py-24'}>
        <AboutMe/>
    </FlexCol>
</Grid>