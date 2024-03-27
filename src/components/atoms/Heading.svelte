<script lang="ts">
    import type { Heading } from "../../types/types";

    export let text = "";
    export let element: Heading = "h1";
    export let className = "";
</script>

<svelte:element this="{element}" class="{className}">
    <slot>{text}</slot>
</svelte:element>