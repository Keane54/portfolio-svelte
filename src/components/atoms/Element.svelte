<script lang="ts">
    import type { ElementString } from "typescript/types";

    export let element: ElementString = "div";
    export let className = "";
    export let id = "";
</script>

<svelte:element id="{id}" this="{element}" class="{className}">
    <slot/>
</svelte:element>