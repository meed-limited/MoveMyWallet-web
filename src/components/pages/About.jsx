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
      <div style={styles.pane}>
        <h2 style={styles.h2}>About MoveMyWallet</h2>
        <div style={styles.text}>
          <p>Do any of these apply to you?</p>
          <p>
            <ul>
              <li>
                Are you divorcing your spouse, and you need to quickly move all your crypto to a wallet address they
                don’t know?
              </li>
              <li>Are you trying to hide from the IRS?</li>
              <li>Did you steal Mexican Cartel money, and you need to move it quickly?</li>
              <li>
                Or do you just need an easy way to move some crypto and NFTs from one wallet to another and want a
                better way than spending the time sending assets one at a time?
              </li>
            </ul>
          </p>
          <p>
            If any of the above apply to you, MoveMyWallet is the super simple dApp that solves all your problems.
            Connect the source wallet, choose all or some of your tokens, then choose all or some of your NFTs, pack
            them up into a single composed NFT, then send that NFT to the destination wallet, where all the assets will
            unpack automatically. It’s quick, easy, and on Ethereum, it will save you a ton of gas fees!
          </p>

          <p>It’s great for moving multiple NFTs from one wallet to another in just a few clicks.</p>
        </div>
      </div>

      <div style={{ ...styles.pane, marginTop: "40px" }}>
        <h2 style={styles.h2}>Built by Lepricon</h2>
        <div style={styles.text}>
          MoveMyWallet is a tool built by the tech boffins at Lepricon, the play-and-earn blockchain games company.
          We’ve had to pack up a few digital assets ourselves developing technology to use in our games and MoveMyWallet
          is a cool tool that came out of that research.
          <div style={{ padding: "30px", textAlign: "center" }}>
            <img src={LepriconLogoWhite} alt='LepriconLogoWhite' height='50px' />
          </div>
          <div style={{ fontSize: "14px" }}>
            <i>* Please note - the above examples are for humorous purposes only</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
