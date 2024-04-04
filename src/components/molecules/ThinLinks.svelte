<script lang="ts">
    import Element from "../atoms/Element.svelte";
    import type { ThinLink } from "typescript/types";

    export let links: Array<ThinLink>;
</script>

<Element element="ul" className="space-y-4">
    {#each links as link}
    <Element element="li" className="group transition-colors hover:text-slate-200 w-fit">
        <a href="{link.link}" class="py-2 pr-8 flex items-center gap-4 text-xs font-semibold tracking-widest">
            <Element element="span" className="h-px w-6 bg-white/50 group-hover:w-16 group-hover:bg-slate-200 transition-all"/>
            {link.text.toUpperCase()}
        </a>
    </Element>
    {/each}
</Element>

