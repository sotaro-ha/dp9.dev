// components/ActiveNavigation.js
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ActiveNavigation({ href, children, isVisible }) {
    const router = useRouter();
    const isActive = router.pathname === href;
    if (!isVisible) {
        return <div></div>;
    }
    return (
        <Link href={href} className="shadow-sm hover:shadow-md px-4 py-6" >
            <span style={isActive ? { fontWeight: 'bold', textDecoration: 'underline' } : {}}>{children}</span>
        </Link>
    );
}
