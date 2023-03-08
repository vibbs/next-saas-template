/**
Footer for the page layout
Typically this should hold the following entities:
1. Site map
2. Other resources
3. CTA - if need be
4. License and Copy rights information
*/

import styles from '../../../styles/Home.module.css';

export interface FooterProps {
    sampleTextProp?: string;
}

export function Footer(props: FooterProps) {
    return <footer className={styles.footer}>Footer component</footer>;
}
