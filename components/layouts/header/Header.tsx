/**
Header for the page layout

Typically this should hold the following entities:
1. Company or Application logo
2. Title  - if need be
3. Navigation links to other pages on you website
*/
import Head from 'next/head';

export interface HeaderProps {
    sampleTextProp?: string;
}

export function Header(props: HeaderProps) {
    return (
        <header className="m-auto w-full flex justify-center p-4 bg-blue-300">
            <Head>
                <title>Production Scale NextJS Project for Enterprise</title>
                <meta
                    name="description"
                    content="Built by Vaibhav Doddihal on top of NextJS base template"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            Header Component
        </header>
    );
}
