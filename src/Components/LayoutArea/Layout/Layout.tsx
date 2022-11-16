import "./Layout.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Home from "../../HomeArea/Home/Home";
import Routing from "../Routing/Routing";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<header>
                <Header/>
            </header>
            <aside>
                <Menu />
            </aside>
            <main>
                <Routing/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Layout;
