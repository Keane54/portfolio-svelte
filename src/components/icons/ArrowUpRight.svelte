<script lang="ts">
    export let height: string | undefined = "";
    export let width: string | undefined = "";
    export let className: string = "";
</script>

<svg xmlns="http://www.w3.org/2000/svg" height="{height || '1rem'}" width="{width || '1rem'}" class="{className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <title>Arrow Up Right</title>
    <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
</svg>