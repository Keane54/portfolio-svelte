<script lang="ts">
    import Link from "../atoms/Link.svelte";
    import type { ThinLink } from "typescript/types";

    export let links: Array<ThinLink> = [];
</script>

{#each links as link}
    <Link href="{link.link}">{link.text}</Link>
{/each}