<script lang="ts">
    import FlexCol from "../atoms/FlexCol.svelte";
    import Paragraph from "../atoms/Paragraph.svelte";
    import Link from "../atoms/Link.svelte";
  import LinkedIn from "../icons/LinkedIn.svelte";

    export let className = "";
</script>

<FlexCol className="[&_a]:text-white leading-7 gap-4 {className}">
    <Paragraph>
        I've been a developer for just over 5 years, with some of the highlights including my role in leading architectural improvements and legacy system migrations at <Link href="https://www.keyholding.com/">The Keyholding Company</Link> 
        and my time at the <Link href="https://www.adaptavist.com/" newTab={true}>Adaptavist Group</Link> as a Full Stack Developer.
    </Paragraph>

    <Paragraph>
        Whilst at <Link href="https://www.keyholding.com/">TKC</Link> I've been focused on moving sections of our older platform into a new, more modern, "V2" codebase, introducing modern technologies
        like <Link href="https://tanstack.com/query/">Tanstack Query</Link>, <Link href="https://vitest.dev/">Vitest</Link> and <Link href="https://biomejs.dev/">Biome</Link>. 
        I also established a process to document architectural decisions through the use of RFCs and Architectural Decision Records. 
        More recently, I've been working closely with senior business stakeholders and the product team, to develop technical proofs-of-concept and MVPs to help shape our architecture for future projects.
    </Paragraph>

    <Paragraph>
        If I'm not doing anything code related I'm probably tending to my plants, chilling with my fiancé and our 3 dogs, getting more leaves for
        our stick insects, or travelling the world!
    </Paragraph>
</FlexCol>