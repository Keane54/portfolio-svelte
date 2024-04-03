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
        Full Stack Developer
    </Heading>
    <Paragraph className="pt-2">
        I create beautiful, functional and engaging web applications.
    </Paragraph>
</FlexCol>
