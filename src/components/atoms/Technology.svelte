<script lang="ts">
    import Element from "./Element.svelte";

    export let technology: string;
</script>

<Element element="li" className="py-1.5 px-4 bg-purple-300/15 text-purple-300 rounded-full text-xs font-medium">
    {technology}
</Element>