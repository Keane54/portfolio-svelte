<script lang="ts">
    import "../app.css";
    import Container from "../components/atoms/Container.svelte";
</script>

<svelte:head>
    <title>Oliver Keane - Full Stack Developer</title>
    <meta name="description" content="Oliver Keane is a Full Stack Developer who creates beautiful, functional and engaging web applications, with a focus on great UX."/>
</svelte:head>

<div class="bg-slate-900">
    <Container className="min-h-dvh">
        <slot/>
    </Container>
</div>
