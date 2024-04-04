<script lang="ts">
    import type { Project } from "typescript/types";
    import Card from "../atoms/Card.svelte";
    import Image from "../atoms/Image.svelte";
    import FlexCol from "../atoms/FlexCol.svelte";
    import Paragraph from "../atoms/Paragraph.svelte";
    import TechnologyList from "../molecules/TechnologyList.svelte";
    import InteractiveArrow from "../molecules/InteractiveArrow.svelte";

    export let item: Project;
</script>

<Card href="{item.link}">
    <Image slot="left" src="{item.image}" alt="{item.title}" className="col-span-3 object-fill w-full h-16 border-2 border-purple-300/20 group-hover:border-purple-300/30 transition-colors rounded-sm"/>

    <FlexCol slot="right" className="col-span-9 gap-4">
        <Paragraph className="text-white transition-colors group-hover:text-purple-300">
            {item.title}
            <InteractiveArrow/>
        </Paragraph>

        <Paragraph>
            {item.description}
        </Paragraph>

        <TechnologyList technologies="{item.technologies}"/>
    </FlexCol>
</Card>