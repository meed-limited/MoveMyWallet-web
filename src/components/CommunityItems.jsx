import Text from "antd/lib/typography/Text";
import {
    YoutubeOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    GithubOutlined,
    InstagramOutlined,
} from "@ant-design/icons";

import logo_superultra from "../assets/logo_superultra.png";
import { useWindowWidthAndHeight } from "../hooks/useWindowWidthAndHeight";

const CommunityItems = () => {
    const { isMobileOnly } = useWindowWidthAndHeight();

    const socialLinks = {
        website: "https://www.superultra.io/",
        twitter: "https://twitter.com/superultraio",
        youtube: "https://www.youtube.com/channel/UCnitnTrLQ_LXLtKO2Zn3THQ",
        instagram: "https://www.instagram.com/superultra.io/",
        linkedin: "https://www.linkedin.com/company/superultraio/",
        github: "https://github.com/superultra-io/MoveMyWallet-app",
    };

    return (
        <>
            <Text className="poweredBy">
                <>
                    {!isMobileOnly && <span>Powered by | </span>}
                    <a href={socialLinks.website} target="_blank" rel="noopener noreferrer">
                        <div style={{ paddingLeft: "10px" }}>
                            <img src={logo_superultra} alt="logo_superultra" width="80px" />
                        </div>
                    </a>
                </>
            </Text>
            <Text className="community-items">
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <div className="custom-icon-div">
                        <TwitterOutlined className="ant-icons" />
                    </div>
                </a>
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                    <div className="custom-icon-div">
                        <YoutubeOutlined className="ant-icons" />
                    </div>
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <div className="icon-div">
                        <InstagramOutlined className="ant-icons" />
                    </div>
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <div className="icon-div">
                        <LinkedinOutlined className="ant-icons" />
                    </div>
                </a>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <div className="icon-div">
                        <GithubOutlined className="ant-icons" />
                    </div>
                </a>
            </Text>
        </>
    );
};

export default CommunityItems;
