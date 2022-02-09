import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SafetyCertificateFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faWallet,
  faHistory,
  faCogs,
  faTachometerAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Switch } from "antd";
import { portfolio, accountSupport } from "../../utils/image";
import "./css/Header.css";
import "antd/dist/antd.css";
const Header = (props) => {
  console.log("props---", props);
  const [color, setColor] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setColor(
        localStorage.getItem("themColor") === "zl_light_theme_active"
          ? false
          : localStorage.getItem("themColor") !== null && true
      );
    }
  }, []);

  // hide show header
  const [send, setSend] = useState(false);

  const handleToggle = () => {
    setSend(!send);
  };

  return (
    <>
      <section
        className={`zl_page_sidebar ${send ? "zl_hide_sidebar" : ""}`}
        title={props.title}
      >
        <div className="zl_page_sidebar_content">
          <div className="zl_page_sidebar_logo">
            <button
              className="zl_page_sidebar_toggle_btn"
              onClick={handleToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <Link to={"/dashboard"}>
              <img
                src="/assets/image/Logo.svg"
                alt="logo"
                className="img-fluid zl_main_logo"
              />

              {localStorage.getItem("themColor") === "zl_light_theme_active" ||
              localStorage.getItem("themColor") === null ? (
                <>
                  <img
                    src="/assets/image/favicon.svg"
                    alt="logo"
                    className="img-fluid zl_mini_sidebar_logo"
                  />
                </>
              ) : (
                <>
                  <img
                    src="/assets/image/favicon_dark.svg"
                    alt="logo"
                    className="img-fluid zl_mini_sidebar_logo"
                  />
                </>
              )}

              <img
                src="/assets/image/light-Logo.svg"
                alt="light-logo"
                className="img-fluid zl_light_theme_logo d-none"
              />
            </Link>
          </div>
          <button
            className="zl_page_sidebar_toggle_icon"
            onClick={handleToggle}
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button>
          <ul className="zl_page_sidebar_nav">
            <li className="zl_page_sidebar_items" title="dashboard">
              <Link
                to={"/dashboard"}
                className="zl_page_sidebar_link position-relative"
              >
                {/* <img src={dashboard} alt="" /> */}
                <FontAwesomeIcon
                  icon={faTachometerAlt}
                  className="zl_pagesidebar_wallet"
                />

                <span className="zl_pagesidebar_text">Dashboard</span>
              </Link>
            </li>
            <li className="zl_page_sidebar_items" title="wallets">
              <Link
                to={"/wallets"}
                className="zl_page_sidebar_link position-relative"
              >
                {/* <img src={wallets} alt="" /> */}
                <FontAwesomeIcon
                  className="zl_pagesidebar_wallet"
                  icon={faWallet}
                />
                <span className="zl_pagesidebar_text">Wallets</span>
                {/* <span className="zl_page_sidebar_notification_dot"></span> */}
              </Link>
            </li>
            <li className="zl_page_sidebar_items" title="portfolio">
              <Link
                to={"/portfolio"}
                className="zl_page_sidebar_link position-relative"
              >
                <img src={portfolio} alt="" />
                <span className="zl_pagesidebar_text">Portfolio</span>
              </Link>
            </li>
            <li className="zl_page_sidebar_items" title="securebackup">
              <Link
                to={"/securebackup"}
                className="zl_page_sidebar_link position-relative"
              >
                {/* <img src={securityBckup} alt="" /> */}
                <SafetyCertificateFilled className="zl_pagesidebar_wallet" />
                <span className="zl_pagesidebar_text">Security Backup</span>
              </Link>
            </li>
            <li className="zl_page_sidebar_items" title="history">
              <Link
                to={"/history"}
                className="zl_page_sidebar_link position-relative"
              >
                {/* <img src={history} alt="" /> */}
                <FontAwesomeIcon
                  className="zl_pagesidebar_wallet"
                  icon={faHistory}
                />
                <span className="zl_pagesidebar_text">History</span>
              </Link>
            </li>

            <li className="zl_page_sidebar_items" title="settings">
              <Link
                to={"/settings"}
                className="zl_page_sidebar_link position-relative"
              >
                {/* <img src={setting} alt="" /> */}
                <FontAwesomeIcon
                  className="zl_pagesidebar_wallet"
                  icon={faCogs}
                />
                <span className="zl_pagesidebar_text">Settings</span>
              </Link>
            </li>
            <li className="zl_page_sidebar_items" title="accountsupport">
              <Link
                to={"/accountsupport"}
                className="zl_page_sidebar_link position-relative"
              >
                <img src={accountSupport} alt="" />

                <span className="zl_pagesidebar_text">Account Support</span>
              </Link>
            </li>
            <li className="zl_page_sidebar_items" title="Log Out">
              <Link
                to={"/login"}
                className="zl_page_sidebar_link position-relative"
              >
                <FontAwesomeIcon
                  className="zl_pagesidebar_wallet"
                  icon={faSignOutAlt}
                />

                <span className="zl_pagesidebar_text">Log Out</span>
              </Link>
            </li>
          </ul>
          <div className="zl_page_sidebar_dark_mode_content">
            <Switch
              type="switch"
              id="checkbox2"
              label=""
              className="zl_page_sidebar_dark_mode_checkbox"
              checked={color}
              onChange={() => {
                setColor(!color);
                props.themHandler(color);
              }}
            />
            <span className="zl_page_sidebar_sidebar_dark_text">Dark mode</span>
          </div>
        </div>
        {/* <div className="zl_page_sidebar_dark_mode_content">
          <Switch
            type="switch"
            id="checkbox2"
            label=""
            className="zl_page_sidebar_dark_mode_checkbox"
            checked={color}
            onChange={() => {
              setColor(!color);
              props.themHandler(color);
            }}
          />
          <sapn>Dark mode</sapn>
        </div> */}
      </section>

      <button className="zl_page_sidebar_toggle_btn" onClick={handleToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </>
  );
};

export default Header;
