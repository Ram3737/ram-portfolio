import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import icon2 from "../../assets/icons/icon2.png";
import signImg from "../../assets/images/sign.png";
import btnImg from "../../assets/icons/btn-icon.svg";
import { useState, useEffect } from "react";
import styles from "./skillsPage.module.css";
import mainStyles from "../mainstyles.module.css";
import styleOne from "../homepage/homepage.module.css";

function SkillsPage() {
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

  return (
    <section className={mainStyles.section_main}>
      <div className={mainStyles.section_main_sub}>
        <div className={`${mainStyles.row} ${styles.about_top}`}>
          <div className={`${styles.about_top_right}`}>
            <h1>Skills</h1>

            <div
              className={`${mainStyles.row} ${mainStyles.cont_bdr} ${styles.about_top_right_bottom}`}
            >
              <div
                className={`${mainStyles.cont_bdr} ${styles.about_top_right_bottom_text_cont}`}
              >
                <h2>frontend</h2>

                <div className={`${mainStyles.row} ${styles.skills_main}`}>
                  <div>
                    <span>90%</span>
                    <h3>HTML</h3>
                  </div>

                  <div>
                    <span>90%</span>
                    <h3>CSS</h3>
                  </div>

                  <div>
                    <span>90%</span>
                    <h3>JavaScript</h3>
                  </div>

                  <div>
                    <span>90%</span>
                    <h3>React JS</h3>
                  </div>

                  <div>
                    <span>70%</span>
                    <h3>Next JS</h3>
                  </div>

                  <div>
                    <span>80%</span>
                    <h3>React Native</h3>
                  </div>
                </div>
              </div>

              <div
                className={`${mainStyles.cont_bdr} ${styles.about_top_right_bottom_text_cont}`}
              >
                <h2>backend</h2>

                <div className={`${mainStyles.row} ${styles.skills_main}`}>
                  <div>
                    <span>75%</span>
                    <h3>Node JS</h3>
                  </div>

                  <div>
                    <span>75%</span>
                    <h3>Express JS</h3>
                  </div>

                  <div>
                    <span>65%</span>
                    <h3>Mango DB</h3>
                  </div>
                </div>
              </div>

              <div
                className={`${mainStyles.cont_bdr} ${styles.about_top_right_bottom_text_cont}`}
              >
                <h2>charting</h2>

                <div className={`${mainStyles.row} ${styles.skills_main}`}>
                  <div>
                    <span>90%</span>
                    <h3>Price Action</h3>
                  </div>

                  <div style={{ width: "fit-content" }}>
                    <span>85%</span>
                    <h3>Fundamental Analysis</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${mainStyles.row}  ${styles.about_bottom}`}>
          {windowWidth > 975 && (
            <div
              className={`${mainStyles.cont_bdr} ${styleOne.common_cont} ${styleOne.profile}`}
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

                <img src={btnImg} alt="button-image" />
              </div>
            </div>
          )}

          {windowWidth > 975 && (
            <div
              className={`${styleOne.bottom_item_right} ${styleOne.together}`}
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

                <img src={btnImg} alt="button-image" />
              </div>

              <img
                src={icon2}
                alt="design-icon"
                className={styleOne.design_icon}
              />
            </div>
          )}

          {windowWidth > 975 && (
            <div
              className={`${mainStyles.cont_bdr} ${styleOne.common_cont} ${styleOne.cred}`}
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

                <img src={btnImg} alt="button-image" />
              </div>
            </div>
          )}

          {windowWidth <= 975 && (
            <div className={`${mainStyles.column} ${styleOne.layout_change}`}>
              <div
                className={`${mainStyles.row} ${styleOne.layout_change_sub}`}
              >
                <div
                  className={`${mainStyles.cont_bdr} ${styleOne.common_cont} ${styleOne.profile}`}
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

                    <img src={btnImg} alt="button-image" />
                  </div>
                </div>

                <div
                  className={`${mainStyles.cont_bdr} ${styleOne.common_cont} ${styleOne.cred}`}
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

                    <img src={btnImg} alt="button-image" />
                  </div>
                </div>
              </div>

              <div
                className={`${styleOne.bottom_item_right} ${styleOne.together}`}
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

                  <img src={btnImg} alt="button-image" />
                </div>

                <img
                  src={icon2}
                  alt="design-icon"
                  className={styleOne.design_icon}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;