import { Button } from "antd";

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
    border: "none",
  }
};

function ButtonItems() {
  return (
    <div style={styles.menu}>
      <Button
        shape='round'
        size='large'
        style={styles.button}
        onClick={() => window.open("https://lepricon.io/", "_blank", "noreferrer")}
      >
        About Lepricon
      </Button>
      <Button
        shape='round'
        size='large'
        style={styles.button}
        onClick={() => window.open("https://lepricon.gitbook.io/move-my-wallet/", "_blank", "noreferrer")}
      >
        Support
      </Button>
      <Button
        shape='round'
        size='large'
        style={styles.button}
        onClick={() => window.open("https://app.movemywallet.com/", "_blank", "noreferrer")}
      >
        Feedback
      </Button>
    </div>
  );
}

export default ButtonItems;
