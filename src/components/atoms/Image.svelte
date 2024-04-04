<script lang="ts">
    export let src: string;
    export let alt = "";
    export let className = "";
</script>

<img {src} {alt} class="block {className}"/>