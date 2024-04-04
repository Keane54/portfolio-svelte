<script lang="ts">
    export let href: string;
    export let className = "";
    export let newTab = false;
    export let title = "";
</script>

<a href="{href}" title="{title}" class="group text-slate-200 transition-colors hover:text-purple-300 {className}" target="{ newTab ? '_blank' : '_self' }" rel="{ newTab ? 'noopener noreferrer' : '' }">
    <slot/>
</a>