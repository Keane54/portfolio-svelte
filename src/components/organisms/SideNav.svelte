<script lang="ts">
    import Element from "../atoms/Element.svelte";
    import FlexCol from "../atoms/FlexCol.svelte";
    import Profile from "../molecules/Profile.svelte";
    import ThinLinks from "../molecules/ThinLinks.svelte";

    const links = [
        { link: "#about", text: "About" },
        { link: "#companies", text: "Companies" },
        { link: "#projects", text: "Projects" },
        { link: "#contact", text: "Contact" },
    ];
</script>

<FlexCol className="gap-16">
    <Profile/>
    <Element element="nav">
        <ThinLinks {links}/>
    </Element>
</FlexCol>
