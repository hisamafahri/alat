import Head from "next/head";

type Props = {
    title?: string;
};

export default function Header({
    title = "alat - Tools for every developer",
}: Props) {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content="Helping every developer with their tasks"
            />
            <link rel="icon" href="https://fav.farm/🛠" />
            {
                // TODO: use Document
            }
            <link
                rel="stylesheet"
                href="https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css"
            />
        </Head>
    );
}
