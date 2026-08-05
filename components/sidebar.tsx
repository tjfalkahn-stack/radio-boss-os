'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links=[['/','Dashboard'],['/am-wake-up','AM Wake Up Prep'],['/trending','Trending'],['/women','Women'],['/kiotti-court',"Kiotti's Court"],['/who-got-you-messed-up','Who Got You Messed Up?'],['/houston','Houston'],['/entertainment','Entertainment'],['/social','Social Studio'],['/rundown','Show Rundown'],['/live','Live Mode'],['/klippharma','KlipPharma'],['/archives','Archives'],['/settings','Settings']];
function isActive(pathname:string,href:string){return href==='/'?pathname===href:pathname.startsWith(href)}
export function Sidebar(){const pathname=usePathname();return <aside className="sidebar"><div className="brand"><small>RADIO BOSS</small><h1>STUDIOS OS</h1><span className="muted">Houston · Broadcast Control</span></div><nav className="nav" aria-label="Primary navigation">{links.map(([href,label])=><Link key={href} href={href} className={isActive(pathname,href)?'active':''}>{label}</Link>)}</nav></aside>}
export function MobileNav(){const pathname=usePathname();const mobile=[['/','Home'],['/am-wake-up','Prep'],['/rundown','Rundown'],['/live','Live'],['/klippharma','Clips']];return <nav className="mobile-nav mobile-only" aria-label="Mobile navigation">{mobile.map(([href,label])=><Link key={href} href={href} className={isActive(pathname,href)?'active':''}>{label}</Link>)}</nav>}
