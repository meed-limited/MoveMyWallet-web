import { Button } from "antd";
import { Link } from "react-router-dom";

function MenuItems() {
    return (
        <div className="menu">
            <Link to="/About">
                <Button shape="round" size="large" className="menu-buttons">
                    About
                </Button>
            </Link>
            <a href="https://superultra.gitbook.io/move-my-wallet/" target="_blank" rel="noopener noreferrer">
                <Button shape="round" size="large" className="menu-buttons">
                    Docs/FAQ
                </Button>
            </a>
            <a
                href="https://techdev2021.atlassian.net/servicedesk/customer/portal/3"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button shape="round" size="large" className="menu-buttons">
                    Support
                </Button>
            </a>
        </div>
    );
}

export default MenuItems;
