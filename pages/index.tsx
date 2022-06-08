import type { NextPage } from "next";
import Header from "../components/general/Header";
import SideBar from "../components/general/SideBar";

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <main>
                <SideBar />
            </main>
        </>
    );
};

export default Home;
