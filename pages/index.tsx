import type { ReactElement } from 'react';
import { PrimaryLayout } from '../components/layouts';
import styles from '../styles/Home.module.css';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Production Scale <a href="https://nextjs.org">Next.js!</a>{' '}
                    Project for Enterprise
                </h1>

                <p className={styles.description}>
                    Built on top of <a href="https://nextjs.org">Next.js!</a>{' '}
                    and{' '}
                    <a
                        href="https://tailwindcss.com/"
                        className="text-blue-400"
                    >
                        TailwindCSS
                    </a>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>
                            Find in-depth information about Next.js features and
                            API.
                        </p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>
                            Learn about Next.js in an interactive course with
                            quizzes!
                        </p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={styles.card}
                    >
                        <h2>Examples &rarr;</h2>
                        <p>
                            Discover and deploy boilerplate example Next.js
                            projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </p>
                    </a>
                </div>
            </main>
        </div>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
