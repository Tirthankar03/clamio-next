'use client';

import { headerLinksThree, headerLinksDashboard } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Separator } from "@/components/ui/separator"

const NavItems = () => {
    const pathname = usePathname();

    return (
        <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
            {headerLinksThree.map((link) => {
                const isActive = pathname === link.route;

                return (
                    <li
                        key={link.route}
                        className={`${isActive && 'text-primary-500'
                            } flex-center p-medium-16 whitespace-nowrap`}
                    >
                        <Link href={link.route}>{link.label}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavItems