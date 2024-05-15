import { Fragment, useState, useEffect } from "react";
// import Logo from "../../assets/images/logo.svg";
import { IoMenu } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./main-navigation.module.css";
import ButtonComponent from "../buttonComponent/buttonComponent";

function MainNavigation(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(undefined);
  const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false);

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
                    menuClicked(e, "works");
                  }}
                >
                  <a
                    style={{
                      color:
                        location.pathname === "/works" ? "#fff" : "#676767",
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
                    menuClicked(e, "contact");
                  }}
                >
                  <a
                    style={{
                      color:
                        location.pathname === "/contact" ? "#fff" : "#676767",
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
                text={"Let's Talk"}
                style={styles.button}
                // handler={signupBtnHandler}
              />
            </div>
          )}
        </Fragment>

        {windowWidth <= 875 && (
          <div className={styles.menu_btn} onClick={menuBtnHandler}>
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
                          menuClicked(e, "works");
                        }}
                      >
                        <span
                          style={{
                            color:
                              location.pathname === "/works"
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
                          menuClicked(e, "contact");
                        }}
                      >
                        <span
                          style={{
                            color:
                              location.pathname === "/contact"
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
                        text={"Let's Talk"}
                        // handler={signupBtnHandler}
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
