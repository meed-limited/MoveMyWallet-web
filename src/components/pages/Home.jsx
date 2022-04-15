import { Button } from "antd";
import wallet from "../../assets/wallet.png";

const Home = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "75%",
      height: "60vh",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "LeonSans-Regular",
      color: "#2533c8",
      paddingLeft: "100px"
    },
    horizontalGrid: {
      display: "inline-flex",
      width: "100%",
      margin: "20px"
    },
    titleText: {
      paddingTop: "45px",
      fontSize: "45px"
    },
    smallerText: {
      fontSize: "25px",
      marginBlock: "auto"
    },
    button: {
      height: "60px",
      letterSpacing: "1px",
      fontSize: "25px",
      border: "none",
      padding: "0 50px 0 50px",
      textAlign: "center",
      background: "#2533c8",
      color: "white"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.horizontalGrid}>
        <div style={styles.titleText}>Move my wallet</div>
        <div style={{ margin: "auto" }}>
          <img src={wallet} alt='wallet' width='400px' />
        </div>
      </div>
      <div style={styles.horizontalGrid}>
        <div style={styles.smallerText}>Easily transfer all assets from one wallet to another.</div>
        <div style={{ margin: "auto" }}>
          <a href='https://app.movemywallet.com/' target='_blank' rel='noopener noreferrer'>
            <Button shape='round' size='large' style={styles.button}>
              Launch App
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
