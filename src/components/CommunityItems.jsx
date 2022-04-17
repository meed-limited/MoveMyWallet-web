import Text from "antd/lib/typography/Text";
import { FacebookOutlined, LinkedinOutlined, TwitterOutlined, GithubOutlined } from "@ant-design/icons";
import LepriconLogoWhite from "../assets/LepriconLogoWhite.png";
import discord from "../assets/discord.png";
import telegram from "../assets/telegram.png";

const styles = {
  antdIcon: {
    fontSize: "25px",
    color: "black"
  }
};

const CommunityItems = () => {
  return (
    <>
      <Text style={{ display: "flex", color: "white", float: "left", alignItems: "end" }}>
        Powered by |
        <a href='https://lepricon.io/' target='_blank' rel='noopener noreferrer'>
          <div style={{ paddingLeft: "10px" }}>
            <img src={LepriconLogoWhite} alt='LepriconLogoWhite' width='80px' />
          </div>
        </a>
      </Text>
      <Text style={{ display: "flex", color: "black", fontWeight: "500", float: "right" }}>
        <a href='https://twitter.com/lepriconio' target='_blank' rel='noopener noreferrer'>
          <div style={{ padding: "0 10px 0 15px" }}>
            <TwitterOutlined style={styles.antdIcon} />
          </div>
        </a>
        <a href='http://discord.gg/lepricon' target='_blank' rel='noopener noreferrer'>
          <div style={{ padding: "0 10px" }}>
            <img src={discord} alt='discord' height='25px' />
          </div>
        </a>
        <a href='https://t.me/lepriconio' target='_blank' rel='noopener noreferrer'>
          <div style={{ padding: "0 10px" }}>
            <img src={telegram} alt='telegram' height='25px' />
          </div>
        </a>
        <a href='https://www.facebook.com/lepriconio' target='_blank' rel='noopener noreferrer'>
          <div style={{ padding: "0 10px" }}>
            <FacebookOutlined style={styles.antdIcon} />
          </div>
        </a>
        <a href='https://sc.linkedin.com/company/lepricon-io' target='_blank' rel='noopener noreferrer'>
          <div style={{ padding: "0 10px" }}>
            <LinkedinOutlined style={styles.antdIcon} />
          </div>
        </a>
        <a href='https://github.com/shamrockstudios/MoveMyWallet-app' target='_blank' rel='noopener noreferrer'>
          <div style={{ padding: "0 10px" }}>
            <GithubOutlined style={styles.antdIcon} />
          </div>
        </a>
      </Text>
    </>
  );
};

export default CommunityItems;
