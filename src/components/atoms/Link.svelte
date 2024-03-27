<script lang="ts">
    export let href = "";
    export let className = "";
    export let newTab = false;
</script>

<a href="{href}" class="{className}" target="{ newTab ? '_blank' : '_self' }" rel="{ newTab ? 'noopener noreferrer' : '' }">
    <slot/>
</a>