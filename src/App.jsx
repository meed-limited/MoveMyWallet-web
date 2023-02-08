import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Layout } from "antd";

import { Home, About } from "./pages";
import { CommunityItems, MenuItems } from "./components";
import { useWindowWidthAndHeight } from "./hooks/useWindowWidthAndHeight";
import "./styles/app.css";
import MMW_Logo from "./assets/MMW_Logo.png";
import MMW_Logo_small from "./assets/android-chrome-192x192.png";

const { Header, Footer } = Layout;

function App() {
    const { isMobileOnly } = useWindowWidthAndHeight();

    return (
        <Layout className="layout">
            <Router>
                <Header className="header">
                    <Link to="/">
                        <img src={isMobileOnly ? MMW_Logo_small : MMW_Logo} alt="MMW_Logo" className="logo" />
                    </Link>
                    <div className="header-right">
                        <MenuItems />
                    </div>
                </Header>
                <div className="content">
                    <Routes>
                        <Route exact path="/about" element={<About />} />
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </div>
                <Footer className="footer">
                    <CommunityItems />
                </Footer>
            </Router>
        </Layout>
    );
}

export default App;
