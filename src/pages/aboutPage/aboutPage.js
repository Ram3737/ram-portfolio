import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import icon2 from "../../assets/icons/icon2.png";
import signImg from "../../assets/images/sign.png";
import btnImg from "../../assets/icons/btn-icon.svg";
import personalImg from "../../assets/images/personal-pic.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./aboutPage.module.css";
import mainStyles from "../mainstyles.module.css";
import styleOne from "../homepage/homepage.module.css";

function AboutPage() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(undefined);

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

  function navigateHandler(link) {
    navigate(`/${link}`);
  }

  return (
    <section className={mainStyles.section_main}>
      <div className={mainStyles.section_main_sub}>
        <div className={`${mainStyles.row} ${styles.about_top}`}>
          <motion.div
            className={`${mainStyles.cont_bdr} ${styles.about_top_left}`}
            animate={{
              opacity: 1,
              scale: [0, 1],
            }}
            transition={{
              duration: 1,
            }}
          >
            <div className={styles.about_top_left_img_box}>
              <img src={personalImg} alt="personal-image" />
            </div>
          </motion.div>

          <div className={`${styles.about_top_right}`}>
            <motion.h1
              animate={{
                opacity: [0, 1],
                y: [600, 1],
              }}
              transition={{
                duration: 1,
              }}
            >
              SELF-SUMMARY
            </motion.h1>

            <motion.div
              className={`${mainStyles.cont_bdr} ${styles.about_top_right_bottom}`}
              animate={{
                opacity: 1,
                scale: [0, 1],
              }}
              transition={{
                duration: 1,
              }}
            >
              <img
                src={icon2}
                alt="design-icon"
                className={styles.design_icon_about}
              />

              <h1>SRIRAM</h1>
              <p>
                I'm a seasoned full-stack developer with 3 years of expertise in
                HTML, CSS, JavaScript, React, Next.js, Node.js, and Express.js.
                Proficient in crafting dynamic web and mobile applications, I
                excel in delivering high-quality, scalable solutions that exceed
                client expectations. Ready to leverage my skills and experience
                to drive innovation and success in your team.
              </p>
            </motion.div>
          </div>
        </div>

        <div className={`${mainStyles.row} ${styles.about_center}`}>
          <motion.div
            className={`${mainStyles.cont_bdr} ${styles.about_center_left}`}
            animate={{
              opacity: 1,
              scale: [0, 1],
            }}
            transition={{
              duration: 1,
            }}
          >
            <h3>experience</h3>
            <ul>
              <li>
                <p className={styles.date}>Sept 2022 - Nov 2023</p>
                <h2 className={styles.designation}>Frontend developer</h2>
                <p className={styles.company}>Starlly Solution</p>
              </li>

              <li style={{ marginTop: "32px" }}>
                <p className={styles.date}>Dec 2023 - Present</p>
                <h2 className={styles.designation}>Fullstack developer</h2>
                <p className={styles.company}>Synerixs</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className={`${mainStyles.cont_bdr} ${styles.about_center_left}`}
            animate={{
              opacity: 1,
              scale: [0, 1],
            }}
            transition={{
              duration: 1,
            }}
          >
            <h3>education</h3>
            <ul>
              <li>
                <p className={styles.date}>2014 - 2018</p>
                <h2 className={styles.designation}>Bachelor Degree in IT</h2>
                <p className={styles.company}>Kamaraj college of Engg & Tech</p>
              </li>

              <li style={{ marginTop: "32px" }}>
                <p className={styles.date}>2021 - 2022</p>
                <h2 className={styles.designation}>All Tech Courses</h2>
                <p className={styles.company}>Udemy</p>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className={`${mainStyles.row}  ${styles.about_bottom}`}>
          {windowWidth > 975 && (
            <motion.div
              className={`${mainStyles.cont_bdr} ${styleOne.common_cont} ${styleOne.profile}`}
              animate={{
                opacity: 1,
                scale: [0, 1],
              }}
              transition={{
                duration: 1,
              }}
            >
              <div
                className={` ${mainStyles.row} ${mainStyles.cont_bdr} ${styleOne.profile_row}`}
              >
                <div
                  className={`${mainStyles.cont_bdr} ${styleOne.profile_circle}`}
                >
                  <FaGithub size={35} color="#fff" />
                </div>
                <div
                  className={`${mainStyles.cont_bdr} ${styleOne.profile_circle}`}
                >
                  <TbWorld size={35} color="#fff" />
                </div>
              </div>

              <div
                className={`${mainStyles.row} ${styleOne.common_cont_text_cont}`}
              >
                <div className={styleOne.text}>
                  <h4>stay with me</h4>
                  <h1>Profiles</h1>
                </div>

                <img
                  src={btnImg}
                  alt="button-image"
                  onClick={() => navigateHandler("contact-us")}
                />
              </div>
            </motion.div>
          )}

          {windowWidth > 975 && (
            <motion.div
              className={`${styleOne.bottom_item_right} ${styleOne.together}`}
              animate={{
                opacity: 1,
                scale: [0, 1],
              }}
              transition={{
                duration: 1,
              }}
            >
              <div
                className={`${mainStyles.cont_bdr} ${mainStyles.row} ${styleOne.common_cont} ${styleOne.bottom_right_sub}`}
                style={{ paddingTop: "109px", paddingBottom: "30px" }}
              >
                <h1>
                  Let's
                  <br />
                  work <span>together.</span>
                </h1>

                <img
                  src={btnImg}
                  alt="button-image"
                  onClick={() => navigateHandler("contact-us")}
                />
              </div>

              <img
                src={icon2}
                alt="design-icon"
                className={styleOne.design_icon}
              />
            </motion.div>
          )}

          {windowWidth > 975 && (
            <motion.div
              className={`${mainStyles.cont_bdr} ${styleOne.common_cont} ${styleOne.cred}`}
              animate={{
                opacity: 1,
                scale: [0, 1],
              }}
              transition={{
                duration: 1,
              }}
            >
              <div
                className={styleOne.project_img}
                style={{ paddingBottom: "1rem", paddingTop: "-1rem" }}
              >
                <img
                  src={signImg}
                  alt="sign-image"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>

              <div
                className={`${mainStyles.row} ${styleOne.common_cont_text_cont}`}
              >
                <div className={styleOne.text}>
                  <h4>more about me</h4>
                  <h1>Credentials</h1>
                </div>

                <img
                  src={btnImg}
                  alt="button-image"
                  onClick={() => navigateHandler("credentials")}
                />
              </div>
            </motion.div>
          )}

          {windowWidth <= 975 && (
            <div className={`${mainStyles.column} ${styleOne.layout_change}`}>
              <div
                className={`${mainStyles.row} ${styleOne.layout_change_sub}`}
              >
                <motion.div
                  className={`${mainStyles.cont_bdr} ${styleOne.common_cont} ${styleOne.profile}`}
                  animate={{
                    opacity: 1,
                    scale: [0, 1],
                  }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <div
                    className={` ${mainStyles.row} ${mainStyles.cont_bdr} ${styleOne.profile_row}`}
                  >
                    <div
                      className={`${mainStyles.cont_bdr} ${styleOne.profile_circle}`}
                    >
                      <FaGithub size={35} color="#fff" />
                    </div>
                    <div
                      className={`${mainStyles.cont_bdr} ${styleOne.profile_circle}`}
                    >
                      <TbWorld size={35} color="#fff" />
                    </div>
                  </div>

                  <div
                    className={`${mainStyles.row} ${styleOne.common_cont_text_cont}`}
                  >
                    <div className={styleOne.text}>
                      <h4>stay with me</h4>
                      <h1>Profiles</h1>
                    </div>

                    <img
                      src={btnImg}
                      alt="button-image"
                      onClick={() => navigateHandler("contact-us")}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className={`${mainStyles.cont_bdr} ${styleOne.common_cont} ${styleOne.cred}`}
                  animate={{
                    opacity: 1,
                    scale: [0, 1],
                  }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <div
                    className={styleOne.project_img}
                    style={{ paddingBottom: "1rem", paddingTop: "-1rem" }}
                  >
                    <img
                      src={signImg}
                      alt="sign-image"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>

                  <div
                    className={`${mainStyles.row} ${styleOne.common_cont_text_cont}`}
                  >
                    <div className={styleOne.text}>
                      <h4>more about me</h4>
                      <h1>Credentials</h1>
                    </div>

                    <img
                      src={btnImg}
                      alt="button-image"
                      onClick={() => navigateHandler("credentials")}
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                className={`${styleOne.bottom_item_right} ${styleOne.together}`}
                animate={{
                  opacity: 1,
                  scale: [0, 1],
                }}
                transition={{
                  duration: 1,
                }}
              >
                <div
                  className={`${mainStyles.cont_bdr} ${mainStyles.row} ${styleOne.common_cont} ${styleOne.bottom_right_sub}`}
                  style={{ paddingTop: "109px", paddingBottom: "30px" }}
                >
                  <h1>
                    Let's
                    <br />
                    work <span>together.</span>
                  </h1>

                  <img
                    src={btnImg}
                    alt="button-image"
                    onClick={() => navigateHandler("contact-us")}
                  />
                </div>

                <img
                  src={icon2}
                  alt="design-icon"
                  className={styleOne.design_icon}
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
