<script lang="ts">
    import type { Heading } from "typescript/types";

    export let text = "";
    export let element: Heading;
    export let className = "";
</script>

<svelte:element this="{element}" class="{className}">
    <slot>{text}</slot>
</svelte:element>