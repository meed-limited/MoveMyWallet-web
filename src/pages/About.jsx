import logo_superultra from "../assets/logo_superultra.png";

const About = () => {
    return (
        <div className="about-content">
            <div className="about-container">
                <h2>About MoveMyWallet</h2>
                <div className="about-text">
                    <p>Transfer all the assets from one wallet to another easily</p>
                    <div>
                        Moving digital assets from one wallet to another has never been easier. Now you can:
                        <ul>
                            <li>Move more than one cryptocurrency</li>
                            <li>Move all your NFTs</li>
                            <li>Move without multiple transactions, gas spend and time hassle</li>
                        </ul>
                    </div>
                    <br></br>
                    <p>
                        MoveMyWallet has an open-source code that’s available on{" "}
                        <a
                            href="https://github.com/superultra-io/MoveMyWallet-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                        .
                    </p>
                    <p>
                        Move multiple NFTs and cryptocurrencies from one wallet to another in just a few clicks (and
                        less gas!).
                    </p>
                </div>
            </div>
            <div className="about-container" style={{ marginTop: "40px" }}>
                <h2>Built by SuperUltra</h2>
                <div className="about-text">
                    MoveMyWallet is a tool built by the tech boffins at SuperUltra, the play-and-earn blockchain games
                    company. We’ve had to pack up a few digital assets ourselves developing technology to use in our
                    games and MoveMyWallet is a cool tool that came out of that research.
                    <div className="about-logo">
                        <a href="https://www.superultra.io/" target="_blank" rel="noopener noreferrer">
                            <img src={logo_superultra} alt="logo_superultra" height="50px" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
