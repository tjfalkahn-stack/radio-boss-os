import { Page } from '@/components/ui'; import { rundown } from '@/lib/data'; import { RundownBoard } from '@/components/rundown-board';
export default function Rundown(){return <Page eyebrow="Drag-and-Drop Plan" title="Show Rundown" subtitle="Reorder segments, advance their live status, and keep the show clock organized."><RundownBoard initial={rundown}/></Page>}
