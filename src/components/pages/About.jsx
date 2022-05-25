/*eslint no-dupe-keys: "Off"*/
import LepriconLogoWhite from "../../assets/LepriconLogoWhite.png";

const styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    width: "75%",
    height: "inherit",
    fontSize: "17px",
    color: "rgba(255, 255, 255,0.9)",
    Bottom: "50px"
  },
  pane: {
    background: "rgb(118,123,223)",
    background: "linear-gradient(315deg, rgba(69,75,205,1) 0%, rgba(159,161,198,0.9) 50%, rgba(81,82,90,0.8) 100%)",
    borderRadius: "20px",
    padding: "30px 40px"
  },
  h2: {
    fontWeight: "600",
    color: "white"
  },
  text: {
    fontSize: "16px"
  }
};

const About = () => {
  return (
    <div style={styles.content}>
      s
      <div style={styles.pane}>
        <h2 style={styles.h2}>About MoveMyWallet</h2>
        <div style={styles.text}>
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
            MoveMyWallet is currently in beta and has an open-source code that’s available on{" "}
            <a href='https://github.com/shamrockstudios/MoveMyWallet-app' target='_blank' rel='noopener noreferrer'>
              Github
            </a>
            .
          </p>
          <p>
            Move multiple NFTs and cryptocurrencies from one wallet to another in just a few clicks (and less gas!).
          </p>
        </div>
      </div>
      <div style={{ ...styles.pane, marginTop: "40px" }}>
        <h2 style={styles.h2}>Built by Lepricon</h2>
        <div style={styles.text}>
          MoveMyWallet is a tool built by the tech boffins at Lepricon, the play-and-earn blockchain games company.
          We’ve had to pack up a few digital assets ourselves developing technology to use in our games and MoveMyWallet
          is a cool tool that came out of that research.
          <div style={{ padding: "30px", textAlign: "center" }}>
            <a href='https://lepricon.io/' target='_blank' rel='noopener noreferrer'>
              <img src={LepriconLogoWhite} alt='LepriconLogoWhite' height='50px' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
