<script lang="ts">
    export let text = "";
    export let className = "";
</script>

<p class="{className}">
    <slot>{text}</slot>
</p>