<script lang="ts">
    import Element from "../atoms/Element.svelte";
    import FlexCol from "../atoms/FlexCol.svelte";
    import Profile from "../molecules/Profile.svelte";
    import SocialLinks from "../molecules/SocialLinks.svelte";
    import ThinLinks from "../molecules/ThinLinks.svelte";

    const links = [
        { link: "#about", text: "About" },
        { link: "#companies", text: "Companies" },
        { link: "#projects", text: "Projects" },
        { link: "#contact", text: "Contact" },
    ];
</script>

<FlexCol className="gap-16 md:justify-between h-full">
    <FlexCol className="gap-16">
        <Profile/>
        <Element element="nav" className="hidden md:block">
            <ThinLinks {links}/>
        </Element>
    </FlexCol>

    <SocialLinks/>
</FlexCol>
