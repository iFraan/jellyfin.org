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
            <Link to="/" className={styles['navbar-logo']}>
                <Logo />
            </Link>
            <div className={styles['navbar-links']}>
                {links.map((link) => (
                    <Link to={link.href} style={{ color: 'white' }}>
                        {link.name}
                    </Link>
                ))}
            </div>
            <div style={{ display: 'flex' }}>
                <Link href='https://demo.jellyfin.org/stable' className={styles['navbar-button-transparent']}>
                    Try demo
                </Link>
                <Link to='/downloads/server' className={styles['navbar-button-color']}>
                    Install
                </Link>
            </div>
        </div>
    )
}