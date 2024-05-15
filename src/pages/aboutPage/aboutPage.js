import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import icon2 from "../../assets/icons/icon2.png";
import signImg from "../../assets/images/sign.png";
import btnImg from "../../assets/icons/btn-icon.svg";
import personalImg from "../../assets/images/personal-pic.svg";
import { useState, useEffect } from "react";
import styles from "./aboutPage.module.css";
import mainStyles from "../mainstyles.module.css";
import styleOne from "../homepage/homepage.module.css";

function AboutPage() {
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
          <div className={`${mainStyles.cont_bdr} ${styles.about_top_left}`}>
            <div className={styles.about_top_left_img_box}>
              <img src={personalImg} alt="personal-image" />
            </div>
          </div>

          <div className={`${styles.about_top_right}`}>
            <h1>SELF-SUMMARY</h1>

            <div
              className={`${mainStyles.cont_bdr} ${styles.about_top_right_bottom}`}
            >
              <img
                src={icon2}
                alt="design-icon"
                className={styles.design_icon_about}
              />

              <h1>SRIRAM</h1>
              <p>
                I am a San francisco-based product designer with a focus on web
                design, illustration, a visual development. I have a diverse
                range of experience having worked across various fields and
                industries.
              </p>
            </div>
          </div>
        </div>

        <div className={`${mainStyles.row} ${styles.about_center}`}>
          <div className={`${mainStyles.cont_bdr} ${styles.about_center_left}`}>
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
          </div>

          <div className={`${mainStyles.cont_bdr} ${styles.about_center_left}`}>
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

export default AboutPage;
