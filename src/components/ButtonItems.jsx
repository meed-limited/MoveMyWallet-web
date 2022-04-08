import { Button } from "antd";
import { Link } from "react-router-dom";

const styles = {
  menu: {
    display: "flex",
    paddingTop: "30px",
    fontSize: "18px",
    fontWeight: "600",
    width: "40%",
    justifyContent: "center",
    gap: "20px",
    borderBottom: "none"
  },
  button: {
    fontSize: "17px",
    height: "40px",
    marginTop: "15px",
    paddingTop: "7px",
    paddingInline: "25px",
    background: "#2b31e9",
    color: "white",
    border: "none"
  }
};

function ButtonItems() {
  return (
    <div style={styles.menu}>
      <Link to='/About'>
        <Button shape='round' size='large' style={styles.button}>
          About
        </Button>
      </Link>
      <a href='https://lepricon.gitbook.io/move-my-wallet/' target='_blank' rel='noopener noreferrer'>
        <Button shape='round' size='large' style={styles.button}>
          Support
        </Button>
      </a>
      <a href='https://app.movemywallet.com/' target='_blank' rel='noopener noreferrer'>
        <Button shape='round' size='large' style={styles.button}>
          Feedback
        </Button>
      </a>
    </div>
  );
}

export default ButtonItems;
