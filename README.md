# Radio Boss OS

Broadcast operating system for Radio Boss Studios and the AM Wake Up Show.

## Included in this MVP

- Producer dashboard
- AM Wake Up Show prep
- Trending Now
- Women-focused topics
- Kiotti's Court
- Who Got You Messed Up?
- Houston Top 10
- Entertainment quick hits
- Social Studio
- Show Rundown
- Live Producer Mode
- KlipPharma Video Studio
- Mobile responsive navigation
- Basic API routes

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Next integrations

1. Supabase authentication and database
2. Live web research and AI-generated daily prep
3. OBS watched-folder uploader
4. StreamYard recording import
5. KlipPharma API integration
6. Polling, caller intake, and real-time Live Mode
7. Social publishing

## Environment

Copy `.env.example` to `.env.local` and add keys as integrations are enabled.

## August 4 UI upgrade

- Fixed desktop horizontal overflow
- Added independently scrollable sidebar
- Added active route states for desktop and mobile navigation
- Improved tablet/mobile card breakpoints
- Added saved local interaction states and toast confirmation
- Added interactive rundown reordering and status cycling
- Added functional manual recording picker and clip approval controls
