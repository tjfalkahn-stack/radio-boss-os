import { houstonStories, topStories, womenTopics } from '@/lib/data';
export async function GET(){return Response.json({date:new Date().toISOString(),trending:topStories,women:womenTopics,houston:houstonStories})}
