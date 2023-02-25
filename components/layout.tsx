import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faBullseye, faLaptop } from '@fortawesome/free-solid-svg-icons'

import styles from '@/styles/Layout.module.css';

interface IProps {
    children?: JSX.Element
}

const Layout: React.FC<IProps> = ({ children }) => {
    return (
        <div className={styles.layout}>

            <div className={styles.topbar}>
                <h1>KiloWhat⚡📊🌍</h1>
                <div className={styles.navbuttons}>
                    <Link href="/">
                        <div className={styles.linkButton}>
                            <div className={styles.linkButtonIcon}>
                                <FontAwesomeIcon icon={faMap} />
                            </div>
                        </div>
                    </Link>
                    <Link href="/devices">
                        <div className={styles.linkButton}>
                            <div className={styles.linkButtonIcon}>
                                <FontAwesomeIcon icon={faLaptop} />
                            </div>
                        </div>
                    </Link>
                    <Link href="/targets">
                        <div className={styles.linkButton}>
                            <div className={styles.linkButtonIcon}>
                                <FontAwesomeIcon icon={faBullseye} />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}

export default Layout;
