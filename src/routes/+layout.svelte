<script lang="ts">
    import "../app.css";
    import Container from "../components/atoms/Container.svelte";
</script>

<div class="bg-slate-900">
    <Container className="min-h-dvh">
        <slot/>
    </Container>
</div>
