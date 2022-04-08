import { Button } from "antd";
import wallet from "../../assets/wallet.png";

const Home = () => {
  const styles = {
    body: {
      display: "inline-flex",
      width: "80%",
      padding: "10px",
      justifyContent: "center",
      fontFamily: "Sora, sans-serif",
      color: "black"
    },
    leftPane: {
      flex: 1
    },
    leftText: {
      lineHeight: "120px",
      fontSize: "70px",
      fontWeight: "500",
      color: "white"
    },
    button: {
      height: "60px",
      fontWeight: "600",
      letterSpacing: "1px",
      fontSize: "22px",
      border: "none",
      marginBlock: "50px",
      marginLeft: "20px",
      padding: "0 50px 0 50px",
      textAlign: "center",
      background: "black",
      color: "white"
    },
    smallerText: {
      fontStyle: "italic",
      fontSize: "27px",
      fontWeight: "350",
      letterSpacing: "1px",
      color: "white"
    },
    rightPane: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    wallet: {
      margin: "auto"
    }
  };

  return (
    <>
      <div style={styles.body}>
        <div style={styles.leftPane}>
          <div style={styles.leftText}>Move My Wallet</div>
          <a href='https://app.movemywallet.com/' target='_blank' rel='noopener noreferrer'>
            <Button shape='round' size='large' style={styles.button}>
              Launch App
            </Button>
          </a>
          <div style={styles.smallerText}>
            Transfer all the assets from one wallet to another easily.
          </div>
        </div>

        <div style={styles.rightPane}>
          <div style={styles.wallet}>
            <img src={wallet} alt='wallet' height='300px' width='300px' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
