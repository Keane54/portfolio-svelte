<script lang="ts">
    import type { Experience } from "typescript/types";
    import Card from "../atoms/Card.svelte";
    import FlexCol from "../atoms/FlexCol.svelte";
    import Paragraph from "../atoms/Paragraph.svelte";
    import InteractiveArrow from "../molecules/InteractiveArrow.svelte";
    import TechnologyList from "../molecules/TechnologyList.svelte";

    export let item: Experience;
</script>

<Card href="{item.link}">
    <Paragraph slot="left" className="text-xs font-medium col-span-full md:col-span-3 leading-5 text-slate-400/80 uppercase">
        {`${item.start} - ${item.end}`}
    </Paragraph>

    <FlexCol slot="right" className="col-span-full md:col-span-9 gap-4">
        <Paragraph className="text-white transition-colors group-hover:text-purple-300">
            {item.position} · {item.company}
            <InteractiveArrow/>
        </Paragraph>

        <Paragraph className="text-sm">
            {item.description}
        </Paragraph>

        <TechnologyList technologies="{item.technologies}"/>
    </FlexCol>
</Card>