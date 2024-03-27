<script lang="ts">
    import Element from "../atoms/Element.svelte";
    import FlexCol from "../atoms/FlexCol.svelte";
    import Heading from "../atoms/Heading.svelte";
    import Paragraph from "../atoms/Paragraph.svelte";
</script>

<FlexCol className="gap-4">
    <Heading element={'h1'}>
        Oliver Keane
    </Heading>
    <Heading element={'h2'}>
        Full Stack Developer
    </Heading>
    <Paragraph className="pt-2">
        I create beautiful, functional and engaging web applications.
    </Paragraph>
</FlexCol>
