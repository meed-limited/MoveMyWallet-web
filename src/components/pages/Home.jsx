import { Button } from "antd";
import { Link } from "react-router-dom";

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
      fontSize: "120px",
      fontWeight: "1000"
    },
    RightText: {
      display: "flex",
      flex: 1,
      alignItems: "center",
      fontStyle: "italic",
      fontSize: "30px",
      fontWeight: "350",
      letterSpacing: "1px"
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
    }
  };

  return (
    <>
      <div style={styles.body}>
        <div style={styles.leftPane}>
          <div style={styles.leftText}>
            move<br></br> my<br></br> wallet.
          </div>
          <Link to='/About'>
            <Button shape='round' size='large' style={styles.button}>
              Learn more
            </Button>
          </Link>
        </div>

        <div style={styles.RightText}>The simple solution to transfer multiple assets from one wallet to another.</div>
      </div>
    </>
  );
};

export default Home;
