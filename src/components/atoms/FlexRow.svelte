<script lang="ts">
    import type { ElementString } from "typescript/types";

    export let element: ElementString = "div";
    export let className = "";
</script>

<svelte:element this="{element}" class="flex {className}">
    <slot/>
</svelte:element>