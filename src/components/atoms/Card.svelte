<script lang="ts">
    import Grid from "./Grid.svelte";

    export let href: string;
</script>

<a {href} target="_blank" rel="noopener noreferrer" class="rounded-lg md:p-4 bg-transparent transition-colors md:hover:bg-purple-300/5 group">
    <Grid className="gap-y-2 md:gap-8 w-full shrink-0">
        <slot name="left"/>
        <slot name="right"/>
    </Grid>
</a>