import Link from '@docusaurus/Link';
import Logo from '@theme/Logo';
import styles from './Navbar.module.scss';

const links = [
    { href: '/blog', name: 'Blog' },
    { href: '/docs', name: 'Documentation' },
    { href: '/', name: 'Community' }
];

export default function Navbar() {
    return (
        <div className={styles['navbar-wrap']}>
            <div className={styles['navbar-logo']}>
                <Logo />
            </div>
            <div className={styles['navbar-links']}>
                {links.map((link) => (
                    <Link href={link.href} style={{ color: 'white' }}>
                        {link.name}
                    </Link>
                ))}
            </div>
            <div style={{ display: 'flex' }}>
                <button className={styles['navbar-button-transparent']}>
                    Try demo
                </button>
                <button className={styles['navbar-button-color']}>
                    Install
                </button>
            </div>
        </div>
    )
}