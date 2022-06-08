import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script
                src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"
                strategy="beforeInteractive"
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
