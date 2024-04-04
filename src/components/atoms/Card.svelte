<script lang="ts">
    import Grid from "./Grid.svelte";

    export let href: string;
</script>

<a {href} class="rounded-lg p-4 bg-transparent transition-colors hover:bg-purple-300/5 backdrop-blur-sm group">
    <Grid className="md:gap-8 w-full shrink-0">
        <slot name="left"/>
        <slot name="right"/>
    </Grid>
</a>