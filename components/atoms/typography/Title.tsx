import React from 'react';
import styles from '@/styles/components/atoms/typography.module.css';

export interface IProps {
    size?: 'h1' | 'h2';
    children: string;
    className?: string;
}

const Title: React.FC<IProps> = ({ children, size, className }) => {
    return (
        <h1 className={`${size === 'h2' ? styles.titleSmall : styles.title} ${className}`}>
            {children}
        </h1>
    );
}

export default Title;