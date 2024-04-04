<script lang="ts">
    import type { ThinLink } from "typescript/types";
    import Element from "../atoms/Element.svelte";
    import { page } from "$app/stores";

    export let links: Array<ThinLink>;

    $: activeLink = links.find(link => $page.url.hash === link.link)

    const smoothScroll = (event: Event, link: ThinLink): void => {
        event.preventDefault();

        const target = (event.target as HTMLElement).getAttribute('href')?.substring(1);

        if (!target) return;

        const element = document.getElementById(target);
        
        if (!element) return;

        window.history.pushState({}, '', `#${target}`);

        element.scrollIntoView({ behavior: 'smooth', block: 'center' });

        activeLink = link;
    }
</script>

<Element element="ul" className="space-y-4">
    {#each links as link}
    <Element element="li" className="group transition-colors hover:text-slate-200 w-fit">
        <a href="{link.link}" on:click={(e) => smoothScroll(e, link)} class="py-2 pr-8 flex items-center gap-4 text-xs font-semibold tracking-widest uppercase {activeLink === link && 'text-slate-200'}">
            <Element element="span" className="h-px {activeLink === link ? 'w-16 bg-slate-200' : 'bg-white/50 w-6 group-hover:w-16 group-hover:bg-slate-200 transition-all'}"/>
            {link.text}
        </a>
    </Element>
    {/each}
</Element>

