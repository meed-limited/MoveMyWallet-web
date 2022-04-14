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
    fontSize: "22px",
    height: "50px",
    marginTop: "15px",
    paddingInline: "25px",
    background: "transparent",
    color: "black",
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
          Docs/FAQ
        </Button>
      </a>
      <a
        href='https://techdev2021.atlassian.net/servicedesk/customer/portal/3'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button shape='round' size='large' style={styles.button}>
          Support
        </Button>
      </a>
    </div>
  );
}

export default ButtonItems;
