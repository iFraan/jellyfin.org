import { ReactNode } from 'react';
import styles from './HomeLayout.module.scss';
import Navbar from './Navbar';

type Props = {
    children: ReactNode | ReactNode[] | undefined;
}

export default function HomeLayout({ children }: Props) {
    return (
        <div className={styles['main-wrap']}>
            <Navbar />
            {children}
            {/* Footer */}
        </div>
    )
}