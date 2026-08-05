import './globals.css';
import { Sidebar, MobileNav } from '@/components/sidebar';
import { Topbar } from '@/components/topbar';
import { ActionToast } from '@/components/actions';
export const metadata={title:'Radio Boss OS',description:'Broadcast operating system for Radio Boss Studios'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><div className="app-shell"><Sidebar/><main className="main"><Topbar/>{children}</main></div><MobileNav/><ActionToast/></body></html>}
