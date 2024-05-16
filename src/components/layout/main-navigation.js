import { Fragment, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { IoMenu } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
import { config } from "../../webservices/config";
import styles from "./main-navigation.module.css";
import ButtonComponent from "../buttonComponent/buttonComponent";

function MainNavigation(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(undefined);
  const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false);
  const [btnLoader, setBtnLoader] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function menuClicked(e, route) {
    e.stopPropagation();
    setIsMenuBtnClicked(false);
    navigate(`/${route}`);
  }

  function menuBtnHandler() {
    setIsMenuBtnClicked(!isMenuBtnClicked);
  }

  function talkBtnHandler() {
    setIsMenuBtnClicked(!isMenuBtnClicked);
    navigate("contact-us");
  }

  const downloadResumeHandler = async () => {
    setBtnLoader(true);
    const url = `${config.apiurl}/pdf/resume`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        toast.error("Error downloading resume.");
        setBtnLoader(false);
        return;
      }

      const blob = await response.blob();

      // Create a hidden anchor element
      const anchor = document.createElement("a");
      anchor.href = window.URL.createObjectURL(blob);
      anchor.download = "Sriram.pdf";

      // Programmatically trigger a click event
      anchor.click();

      setBtnLoader(false);
    } catch (error) {
      toast.error("Error downloading resume.");
      setBtnLoader(false);
    }
    setBtnLoader(false);
  };

  return (
    <div className={styles.header_outer}>
      <nav className={styles.nav}>
        <Fragment>
          <div className={styles.logo_container}>
            {/* <img src={Logo} alt="logo" width={25} height={25} /> */}
            <p>RAM</p>
          </div>
          {windowWidth > 875 && (
            <div className={styles.nav_left}>
              <ul>
                <motion.li
                  whileHover={{
                    scale: 1.05,
                  }}
                  onClick={(e) => {
                    menuClicked(e, "");
                  }}
                >
                  <a
                    style={{
                      color: location.pathname === "/" ? "#fff" : "#676767",
                    }}
                  >
                    Home
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{
                    scale: 1.05,
                  }}
                  onClick={(e) => {
                    menuClicked(e, "about");
                  }}
                >
                  <a
                    style={{
                      color:
                        location.pathname === "/about" ? "#fff" : "#676767",
                    }}
                  >
                    About
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{
                    scale: 1.05,
                  }}
                  onClick={(e) => {
                    menuClicked(e, "projects");
                  }}
                >
                  <a
                    style={{
                      color:
                        location.pathname === "/projects" ? "#fff" : "#676767",
                    }}
                  >
                    Works
                  </a>
                </motion.li>

                <motion.li
                  whileHover={{
                    scale: 1.05,
                  }}
                  onClick={(e) => {
                    menuClicked(e, "contact-us");
                  }}
                >
                  <a
                    style={{
                      color:
                        location.pathname === "/contact-us"
                          ? "#fff"
                          : "#676767",
                    }}
                  >
                    Contact
                  </a>
                </motion.li>
              </ul>
            </div>
          )}
          {windowWidth > 875 && (
            <div className={styles.nav_right} key="login">
              <ButtonComponent
                text={"Resume"}
                style={styles.button}
                handler={downloadResumeHandler}
                children={
                  <MdOutlineFileDownload
                    color="#fff"
                    size={18}
                    style={{ marginRight: "5px" }}
                  />
                }
                indicator={btnLoader}
                disabled={btnLoader}
              />
            </div>
          )}
        </Fragment>

        {windowWidth <= 875 && (
          <div className={styles.menu_btn} onClick={menuBtnHandler}>
            <ButtonComponent
              text={"Resume"}
              style={styles.button}
              handler={downloadResumeHandler}
              children={
                <MdOutlineFileDownload
                  color="#fff"
                  size={18}
                  style={{ marginRight: "5px" }}
                />
              }
              indicator={btnLoader}
              disabled={btnLoader}
            />
            {!isMenuBtnClicked ? (
              <RiMenu3Line size={25} color="#fff" />
            ) : (
              <>
                <IoCloseSharp size={25} color="#fff" />
                <div className={styles.menu_overlay} onClick={menuBtnHandler}>
                  <div className={styles.menu_container}>
                    <div className={styles.menu_option_container}>
                      <div
                        className={styles.menu_option}
                        onClick={(e) => {
                          menuClicked(e, "");
                        }}
                      >
                        <span
                          style={{
                            color:
                              location.pathname === "/" ? "#fff" : "#676767",
                          }}
                        >
                          Home
                        </span>
                      </div>
                      <div
                        className={styles.menu_option}
                        onClick={(e) => {
                          menuClicked(e, "about");
                        }}
                      >
                        <span
                          style={{
                            color:
                              location.pathname === "/about"
                                ? "#fff"
                                : "#676767",
                          }}
                        >
                          About
                        </span>
                      </div>
                      <div
                        className={styles.menu_option}
                        onClick={(e) => {
                          menuClicked(e, "projects");
                        }}
                      >
                        <span
                          style={{
                            color:
                              location.pathname === "/projects"
                                ? "#fff"
                                : "#676767",
                          }}
                        >
                          Works
                        </span>
                      </div>

                      <div
                        className={styles.menu_option}
                        onClick={(e) => {
                          menuClicked(e, "contact-us");
                        }}
                      >
                        <span
                          style={{
                            color:
                              location.pathname === "/contact-us"
                                ? "#fff"
                                : "#676767",
                          }}
                        >
                          Contact
                        </span>
                      </div>
                    </div>

                    <div className={styles.menu_option_btn_container}>
                      <ButtonComponent
                        text={"Resume"}
                        style={styles.button}
                        handler={downloadResumeHandler}
                        children={
                          <MdOutlineFileDownload
                            color="#fff"
                            size={18}
                            style={{ marginRight: "5px" }}
                          />
                        }
                        indicator={btnLoader}
                        disabled={btnLoader}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </nav>
    </div>
  );
}

export default MainNavigation;
