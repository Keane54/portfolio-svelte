<script lang="ts">
    import "../app.css";
    import Container from "../components/atoms/Container.svelte";
</script>

<svelte:head>
    <title>Oliver Keane - Full Stack Developer</title>
</svelte:head>

<div class="bg-slate-900">
    <Container className="min-h-dvh">
        <slot/>
    </Container>
</div>
