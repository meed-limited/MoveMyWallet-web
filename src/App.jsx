import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ButtonItems from "./components/ButtonItems";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { Layout } from "antd";
import { FacebookOutlined, LinkedinOutlined, TwitterOutlined, GithubOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import "antd/dist/antd.min.css";
import HOME_BG from "./assets/HOME_BG.jpg";
import MMW_Logo from "./assets/MMW_Logo.png";
import LepriconLogoWhite from "./assets/LepriconLogoWhite.png";
import discord from "./assets/discord.png";
import telegram from "./assets/telegram.png";
import "./style.css";

const { Header, Footer } = Layout;

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
    padding: "10px",
    marginBottom: "60px",
    overflow: "auto"
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
    display: "flex",
    width: "20%",
    margin: "30px 0 0 30px"
  },
  button: {
    fontWeight: "600",
    letterSpacing: "1px",
    fontSize: "20px",
    height: "50px",
    border: "none",
    margin: "40px 50px 0 0",
    padding: "0 40px 0 40px",
    textAlign: "center",
    background: "black",
    color: "white"
  },
  footer: {
    width: "100%",
    overflow: "auto",
    position: "fixed",
    width: "100%",
    bottom: "0",
    backgroundColor: "transparent"
  }
};

function App() {
  return (
    <Layout style={styles.layout}>
      <Router>
        <Header style={styles.header}>
          <Link to='/'>
            <div style={styles.logo}>
              <img src={MMW_Logo} alt='MMW_Logo' />
            </div>
          </Link>
          <ButtonItems />
          {/* <a href='https://app.movemywallet.com/' target='_blank' rel='noopener noreferrer'>
            <Button shape='round' size='large' style={styles.button}>
              Launch App
            </Button>
          </a> */}
        </Header>
        <div style={styles.content}>
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </div>

        <Footer style={styles.footer}>
          <Text style={{ display: "flex", color: "white", float: "left" }}>
            Powered by |
            <a href='https://lepricon.io/' target='_blank' rel='noopener noreferrer'>
              <div style={{ paddingLeft: "10px" }}>
                <img src={LepriconLogoWhite} alt='LepriconLogoWhite' width='80px' height='22px' />
              </div>
            </a>
          </Text>
          <Text style={{ display: "flex", color: "black", fontWeight: "500", float: "right" }}>
            <a href='https://twitter.com/lepriconio' target='_blank' rel='noopener noreferrer'>
              <div style={{ padding: "0 10px 0 15px" }}>
                <TwitterOutlined style={{ color: "black" }} />
              </div>
            </a>
            <a href='http://discord.gg/lepricon' target='_blank' rel='noopener noreferrer'>
              <div style={{ padding: "0 10px" }}>
                <img src={discord} alt='discord' />
              </div>
            </a>
            <a href='https://t.me/lepriconio' target='_blank' rel='noopener noreferrer'>
              <div style={{ padding: "0 10px" }}>
                <img src={telegram} alt='telegram' />
              </div>
            </a>
            <a href='https://www.facebook.com/lepriconio' target='_blank' rel='noopener noreferrer'>
              <div style={{ padding: "0 10px" }}>
                <FacebookOutlined style={{ color: "black" }} />
              </div>
            </a>
            <a href='https://sc.linkedin.com/company/lepricon-io' target='_blank' rel='noopener noreferrer'>
              <div style={{ padding: "0 10px" }}>
                <LinkedinOutlined style={{ color: "black" }} />
              </div>
            </a>
            <a href='https://github.com/shamrockstudios/MoveMyWallet-app' target='_blank' rel='noopener noreferrer'>
              <div style={{ padding: "0 10px" }}>
                <GithubOutlined style={{ color: "black" }} />
              </div>
            </a>
          </Text>
        </Footer>
      </Router>
    </Layout>
  );
}

export default App;
