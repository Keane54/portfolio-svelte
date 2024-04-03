<script lang="ts">
    export let href: string;
    export let className = "";
    export let newTab = false;
</script>

<a href="{href}" class="text-white transition-colors hover:text-purple-300 {className}" target="{ newTab ? '_blank' : '_self' }" rel="{ newTab ? 'noopener noreferrer' : '' }">
    <slot/>
</a>