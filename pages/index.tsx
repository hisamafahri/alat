import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>alat - Tools for every developer</title>
                <meta
                    name="description"
                    content="Helping every developer with their tasks"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="italic">Hello world!</h1>
            </main>
        </div>
    );
};

export default Home;
