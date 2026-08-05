import { Segment, Story } from './types';

export const topStories: Story[] = [
  { id:'1', category:'Culture', headline:'Separate homes are becoming the new relationship flex', summary:'High-profile couples are reopening the conversation about whether love requires sharing one address.', angle:'Is protecting your peace more important than living under one roof?', question:'Could you be happily committed and still live separately?', score:96, status:'ready' },
  { id:'2', category:'Houston', headline:'Houston nightlife is shifting earlier', summary:'More day parties, brunches, and early-evening events are replacing traditional late-night outings.', angle:'Are people tired, safer, or simply more intentional with their time?', question:'What time should Houston nightlife really end?', score:92, status:'ready' },
  { id:'3', category:'Women', headline:'Should successful women ever date down financially?', summary:'The conversation is less about income and more about ambition, contribution, and emotional security.', angle:'Standards versus partnership—where is the fair line?', question:'Does earning less matter when a partner adds value elsewhere?', score:89, status:'review' }
];

export const rundown: Segment[] = [
  { time:'8:00', duration:'6 min', title:'Show Open', detail:'Top three teases + calls to action', status:'ready' },
  { time:'8:06', duration:'12 min', title:'Trending Now', detail:'National + culture stories', status:'ready' },
  { time:'8:18', duration:'8 min', title:"Kiotti's Court", detail:'He paid his ex’s rent', status:'next' },
  { time:'8:26', duration:'6 min', title:'Who Got You Messed Up?', detail:'Caller confession + audience poll', status:'ready' },
  { time:'8:32', duration:'10 min', title:'Houston Top 10', detail:'Local stories, traffic, events', status:'ready' },
  { time:'8:42', duration:'8 min', title:'Entertainment', detail:'Quick hits and host buttons', status:'ready' },
  { time:'8:50', duration:'10 min', title:'Social Studio', detail:'Record two short-form clips', status:'ready' }
];

export const womenTopics = [
  'Do women have to choose between a soft life and financial independence?',
  'Should a mother ever feel guilty for taking a solo vacation?',
  'When does setting boundaries become cutting everyone off?',
  'Would you date a man with less money but more emotional maturity?',
  'Spicy: Is checking your partner’s phone ever justified?'
];

export const houstonStories = [
  'I-45 construction and weekend closures',
  'Midtown restaurant and nightlife openings',
  'Back-to-school drives across the city',
  'Texans training-camp conversations',
  'Heat and air-quality concerns',
  'METRO service changes',
  'Concert and festival announcements',
  'Third Ward community development',
  'Houston creator economy growth',
  'Family events around Greater Houston'
];
