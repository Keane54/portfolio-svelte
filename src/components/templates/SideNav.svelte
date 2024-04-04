<script lang="ts">
    import Element from "../atoms/Element.svelte";
    import FlexCol from "../atoms/FlexCol.svelte";
    import Profile from "../molecules/Profile.svelte";
    import SocialLinks from "../molecules/SocialLinks.svelte";
    import ThinLinks from "../molecules/ThinLinks.svelte";

    const links = [
        { link: "#about", text: "About" },
        { link: "#experience", text: "Experience" },
        { link: "#projects", text: "Projects" },
    ];
</script>

<FlexCol className="gap-12 lg:gap-16 lg:justify-between h-full">
    <FlexCol className="gap-16">
        <Profile/>
        <Element element="nav" className="hidden lg:block">
            <ThinLinks {links}/>
        </Element>
    </FlexCol>

    <SocialLinks/>
</FlexCol>
