<script lang="ts">
    import FlexRow from "../atoms/FlexRow.svelte";
    import Link from "../atoms/Link.svelte";
    import GitHub from "../icons/GitHub.svelte";
    import Instagram from "../icons/Instagram.svelte";
    import LinkedIn from "../icons/LinkedIn.svelte";
</script>

<FlexRow className="gap-6">
    <Link href="https://github.com/Keane54">
        <GitHub/>
    </Link>

    <Link href="https://www.linkedin.com/in/oliver-keane54/">
        <LinkedIn/>
    </Link>

    <Link href="https://www.instagram.com/ollykeane41/">
        <Instagram/>
    </Link>
</FlexRow>