import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";




function Chevron(props) {
    return (
        (props.isExpanded ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>

            :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 rotate-180">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>

        )
    );
}

const NavItem = ({ title, slug, basePath, isOpen }) => {
    const router = useRouter();
    const isActive = router.pathname === `/${basePath}/[slug]` && router.query.slug === slug;

    return (
        <li className="pl-4 mb-1">
            <Link href={`/${basePath}/${slug}`} >
                {title}
            </Link>
        </li>
    );
};

const NavSection = ({ title, basePath, links, isOpen }) => {
    const [isExpanded, setIsExpanded] = useState(isOpen);
    const toggleSection = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className="mb-2 ">
            <div onClick={toggleSection} className=" cursor-pointer flex flex-nowrap items-center mb-2">
                <h3 className=" font-bold text-xl mr-2">
                    {title}
                </h3>
                <Chevron isExpanded={isExpanded} />
            </div>
            {isExpanded && (
                <ul>
                    {links.map((link) => (
                        <NavItem key={link.slug} basePath={basePath} {...link} />
                    ))}
                </ul>
            )}
        </div>
    );
};

const SidebarNav = ({ navLinks }) => {
    const router = useRouter();
    const basePath = router.pathname.split("/")[1];

    return (
        <nav className="min-w-[240px] p-8 border-r border-gray">
            {navLinks.map((section) => (
                <NavSection key={section.basePath} isOpen={basePath === section.basePath} {...section} />
            ))}
        </nav>
    );
};

export default SidebarNav;
