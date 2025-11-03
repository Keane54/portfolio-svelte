<script lang="ts">
    import FlexCol from "../atoms/FlexCol.svelte";
    import Heading from "../atoms/Heading.svelte";
    import Paragraph from "../atoms/Paragraph.svelte";
</script>

<FlexCol className="gap-2">
    <Heading element={'h1'} className="text-5xl font-semibold">
        Oliver Keane
    </Heading>
    <Heading element={'h2'} className="text-lg">
        Front End Engineer
    </Heading>
    <Paragraph className="pt-2 lg:max-w-md">
        Shaping architectural direction and developing maintainable, scalable applications.
    </Paragraph>
</FlexCol>
