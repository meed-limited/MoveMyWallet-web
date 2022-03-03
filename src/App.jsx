import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import MenuItems from "./components/MenuItems";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import News from "./components/pages/News";
import Support from "./components/pages/Support";
import { Button, Layout } from "antd";
import "antd/dist/antd.css";
import HOME_BG from "./assets/HOME_BG.jpg";
import LepriconLogo_Black from "./assets/LepriconLogo_Black.svg";

const { Header } = Layout;

const styles = {
  layout: {
    backgroundImage: `url(${HOME_BG})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    overflow: "auto"
  },
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Sora, sans-serif",
    color: "white",
    marginTop: "130px",
    padding: "10px"
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Sora, sans-serif",
    padding: "0"
  },
  headerRight: {
    display: "flex",
    gap: "40px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600"
  },
  logo: {
    margin: "30px 0 0 120px",
    width: "150px",
    height: "50px",
    viewBox: "0 0 50 38"
  },
  button: {
    fontWeight: "500",
    letterSpacing: "1px",
    fontSize: "20px",
    height: "50px",
    border: "none",
    margin: "40px 50px 0 0",
    padding: "0 40px 0 40px",
    textAlign: "center",
    background: "black",
    color: "white"
  }
};

function App() {
  return (
    <Layout style={styles.layout}>
      <Router>
        <Header style={styles.header}>
          <Link to='/'>
            <div style={styles.logo}>
              <img src={LepriconLogo_Black} />
            </div>
          </Link>
          <MenuItems />
          <Button shape='round' size='large' style={styles.button}>
            Launch App
          </Button>
        </Header>
        <div style={styles.content}>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/news' element={<News />} />
            <Route path='/support' element={<Support />} />
            <Route path='/' element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Layout>
  );
}

export default App;
