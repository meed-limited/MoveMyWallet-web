import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        paddingTop: "30px",
        fontSize: "18px",
        fontWeight: "600",
        width: "100%",
        justifyContent: "center",
        gap: "20px",
        borderBottom: "none"
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/about">
        <NavLink to="/about">About</NavLink>
      </Menu.Item>
      <Menu.Item key="/news">
        <NavLink to="/news">News</NavLink>
      </Menu.Item>
      <Menu.Item key="/support">
        <NavLink to="/support">Support</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
