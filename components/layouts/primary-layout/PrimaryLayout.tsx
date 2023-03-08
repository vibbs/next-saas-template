/**
Primary layout of this application
*/
import { Footer, Header } from '../index';

export interface PrimaryLayoutProps {
    children: any;
    justify?: 'items-center' | 'items-start';
    props?: any;
}

export function PrimaryLayout({
    children,
    justify = 'items-center',
    ...props
}: PrimaryLayoutProps) {
    return (
        <div {...props} className={`min-h-screen flex flex-col ${justify}`}>
            <Header />
            <main className="">{children}</main>
            <div className="" />
            <Footer />
        </div>
    );
}
