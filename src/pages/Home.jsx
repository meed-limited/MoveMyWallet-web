import { Button } from "antd";
import wallet from "../assets/wallet.png";

const Home = () => {
    return (
        <div className="container">
            <div className="horizontal-grid wrap">
                <div className="title-text">Move my wallet</div>
                <div style={{ margin: "auto" }}>
                    <img src={wallet} alt="wallet" width="350px" />
                </div>
            </div>
            <div className="horizontal-grid">
                <div className="smaller-text">Easily transfer all assets from one wallet to another.</div>
                <div style={{ margin: "auto" }}>
                    <a href="https://app.movemywallet.com/" target="_blank" rel="noopener noreferrer">
                        <Button shape="round" size="large" className="button">
                            Launch App
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
