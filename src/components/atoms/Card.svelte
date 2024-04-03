<script lang="ts">
    import Element from "./Element.svelte";
    import FlexRow from "./FlexRow.svelte";
</script>

<Element className="rounded-md bg-transparent transition-colors hover:bg-purple-300/50">
    <FlexRow className="gap-4 w-full shrink-0">
        <slot name="left"/>
        <slot name="right"/>
    </FlexRow>
</Element>