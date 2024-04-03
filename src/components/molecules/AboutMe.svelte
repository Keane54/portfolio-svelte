<script lang="ts">
    import FlexCol from "../atoms/FlexCol.svelte";
    import Paragraph from "../atoms/Paragraph.svelte";
    import Link from "../atoms/Link.svelte";

    export let className = "";
</script>

<FlexCol className="[&_a]:text-white leading-7 gap-4 {className}">
    <Paragraph>
        During 2020 I had a lot of time on my hands and started to code, diving headfirst in to web development.
        Since then I've been a freelancer, worked at a <Link href="https://www.bookabuilderuk.com/" newTab={true}>small
        business</Link>, and now I'm part of a <Link href="https://www.adaptavist.com/" newTab={true}>large corporation</Link> as a Full Stack Developer.
    </Paragraph>

    <Paragraph>
        At the <Link href="https://www.theadaptavistgroup.com/" newTab={true}>Adaptavist Group</Link>, as a member of <Link href="https://brewdigital.com/" newTab={true}>Brew Digital</Link>, I've been building user interfaces and adding new features,
        as well as leading development on a number of other tools and projects such as <Link href="https://www.reimaginingagile.com/" newTab={true}>Reimagining Agile</Link> and working in a multi-disciplinary team
        of designers, product owners and developers.
    </Paragraph>

    <Paragraph>
        If I'm not doing anything code related I'm probably tending to my plants, chilling with my fiancé and our 3 dogs, getting more leaves for
        our stick insects, or travelling the world!
    </Paragraph>
</FlexCol>