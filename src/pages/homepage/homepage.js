import signImg from "../../assets/images/sign.png";
import btnImg from "../../assets/icons/btn-icon.svg";
import icon2 from "../../assets/icons/icon2.png";
import codeIcon from "../../assets/icons/code-icon.png";
import projectIcon from "../../assets/icons/project1.png";
import personalPic from "../../assets/images/personal-pic.svg";
import { TbLayout } from "react-icons/tb";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { TbDeviceMobileCode } from "react-icons/tb";
import { TbGraph } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import styles from "./homepage.module.css";
import mainStyles from "../mainstyles.module.css";

function Homepage() {
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
        <div className={`${mainStyles.row} ${styles.home_section_top}`}>
          <div
            className={`${mainStyles.row} ${mainStyles.cont_bdr} ${styles.home_section_top_left}`}
          >
            <div className={styles.top_left_img_box}>
              <img src={personalPic} alt="personal-image" />
            </div>
            <div className={styles.home_top_info}>
              <h4>A FULL STACK DEVELOPER</h4>
              <h1>Sriram</h1>
              <p>I am a Full Stack developer based in Tamilnadu.</p>
            </div>

            <img
              src={btnImg}
              alt="button-image"
              className={styles.top_left_btn_img}
              onClick={() => navigateHandler("about")}
            />
          </div>

          <div className={styles.home_section_top_right}>
            <div
              className={`${mainStyles.cont_bdr} ${styles.top_right_sub_one}`}
            >
              <div style={{ width: "95%", overflow: "hidden" }}>
                <Marquee pauseOnHover={true} speed={40}>
                  <span>
                    HTML &nbsp;&nbsp;|&nbsp;&nbsp; CSS &nbsp;&nbsp;|&nbsp;&nbsp;
                    FRAMER MOTION &nbsp;&nbsp;|&nbsp;&nbsp; JAVASCRIPT
                    &nbsp;&nbsp;|&nbsp;&nbsp; REACT JS &nbsp;&nbsp;|&nbsp;&nbsp;
                    NEXT JS &nbsp;&nbsp;|&nbsp;&nbsp; REACT NATIVE
                    &nbsp;&nbsp;|&nbsp;&nbsp; NODE JS &nbsp;&nbsp;|&nbsp;&nbsp;
                    EXPRESS &nbsp;&nbsp;|&nbsp;&nbsp;
                  </span>
                </Marquee>
              </div>
            </div>

            <div className={`${mainStyles.row} ${styles.top_right_sub_two}`}>
              <div
                className={`${mainStyles.cont_bdr} ${styles.common_cont} ${styles.cred}`}
              >
                <div
                  className={styles.project_img}
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
                  className={`${mainStyles.row} ${styles.common_cont_text_cont}`}
                >
                  <div className={styles.text}>
                    <h4>more about me</h4>
                    <h1>Credentials</h1>
                  </div>

                  <img
                    src={btnImg}
                    alt="button-image"
                    onClick={() => navigateHandler("credentials")}
                  />
                </div>
              </div>

              <div
                className={`${mainStyles.cont_bdr} ${styles.common_cont} ${styles.proj}`}
              >
                <div className={styles.project_img}>
                  <img src={projectIcon} alt="sign-image" />
                </div>
                <div
                  className={`${mainStyles.row} ${styles.common_cont_text_cont}`}
                >
                  <div className={styles.text}>
                    <h4>showcase</h4>
                    <h1>Projects</h1>
                  </div>

                  <img
                    src={btnImg}
                    alt="button-image"
                    onClick={() => navigateHandler("projects")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${mainStyles.row} ${styles.home_section_center}`}>
          {windowWidth > 978 && (
            <div
              className={`${mainStyles.cont_bdr} ${styles.common_cont} ${styles.skills}`}
            >
              <div className={styles.project_img}>
                <img src={codeIcon} alt="sign-image" />
              </div>

              <div
                className={`${mainStyles.row} ${styles.common_cont_text_cont}`}
              >
                <div className={styles.text}>
                  <h4>COMPETENCIES</h4>
                  <h1>Skills</h1>
                </div>

                <img
                  src={btnImg}
                  alt="button-image"
                  onClick={() => navigateHandler("skills")}
                />
              </div>
            </div>
          )}

          {windowWidth > 978 && (
            <div
              className={`${mainStyles.cont_bdr} ${styles.common_cont} ${styles.specialization}`}
            >
              <div className={`${mainStyles.row} ${styles.icons_row}`}>
                <div className={styles.icon_cont}>
                  <TbLayout size={40} color="#fff" />
                  <p>Ui/Ux</p>
                </div>

                <div className={styles.icon_cont}>
                  <TbDeviceDesktopCode size={40} color="#fff" />
                  <p>web</p>
                </div>

                <div className={styles.icon_cont}>
                  <TbDeviceMobileCode size={40} color="#fff" />
                  <p>mobile</p>
                </div>

                <div className={styles.icon_cont}>
                  <TbGraph size={40} color="#fff" />
                  <p>charting</p>
                </div>
              </div>

              <div
                className={`${mainStyles.row} ${styles.common_cont_text_cont}`}
              >
                <div className={styles.text}>
                  <h4>specialization</h4>
                  <h1>Proficiencies</h1>
                </div>

                <img
                  src={btnImg}
                  alt="button-image"
                  onClick={() => navigateHandler("proficiency")}
                />
              </div>
            </div>
          )}

          {windowWidth > 978 && (
            <div
              className={`${mainStyles.cont_bdr} ${styles.common_cont} ${styles.profile}`}
            >
              <div
                className={` ${mainStyles.row} ${mainStyles.cont_bdr} ${styles.profile_row}`}
              >
                <div
                  className={`${mainStyles.cont_bdr} ${styles.profile_circle}`}
                >
                  <FaGithub size={35} color="#fff" />
                </div>
                <div
                  className={`${mainStyles.cont_bdr} ${styles.profile_circle}`}
                >
                  <TbWorld size={35} color="#fff" />
                </div>
              </div>

              <div
                className={`${mainStyles.row} ${styles.common_cont_text_cont}`}
              >
                <div className={styles.text}>
                  <h4>stay with me</h4>
                  <h1>Profiles</h1>
                </div>

                <img
                  src={btnImg}
                  alt="button-image"
                  onClick={() => navigateHandler("contact-us")}
                />
              </div>
            </div>
          )}

          {windowWidth <= 978 && (
            <div className={`${mainStyles.column} ${styles.layout_change}`}>
              <div className={`${mainStyles.row} ${styles.layout_change_sub}`}>
                <div
                  className={`${mainStyles.cont_bdr} ${styles.common_cont} ${styles.skills}`}
                >
                  <div className={styles.project_img}>
                    <img src={codeIcon} alt="sign-image" />
                  </div>

                  <div
                    className={`${mainStyles.row} ${styles.common_cont_text_cont}`}
                  >
                    <div className={styles.text}>
                      <h4>COMPETENCIES</h4>
                      <h1>Skills</h1>
                    </div>

                    <img
                      src={btnImg}
                      alt="button-image"
                      onClick={() => navigateHandler("skills")}
                    />
                  </div>
                </div>

                <div
                  className={`${mainStyles.cont_bdr} ${styles.common_cont} ${styles.profile}`}
                >
                  <div
                    className={` ${mainStyles.row} ${mainStyles.cont_bdr} ${styles.profile_row}`}
                  >
                    <div
                      className={`${mainStyles.cont_bdr} ${styles.profile_circle}`}
                    >
                      <FaGithub size={35} color="#fff" />
                    </div>
                    <div
                      className={`${mainStyles.cont_bdr} ${styles.profile_circle}`}
                    >
                      <TbWorld size={35} color="#fff" />
                    </div>
                  </div>

                  <div
                    className={`${mainStyles.row} ${styles.common_cont_text_cont}`}
                  >
                    <div className={styles.text}>
                      <h4>stay with me</h4>
                      <h1>Profiles</h1>
                    </div>

                    <img
                      src={btnImg}
                      alt="button-image"
                      onClick={() => navigateHandler("contact-us")}
                    />
                  </div>
                </div>
              </div>

              <div
                className={`${mainStyles.cont_bdr} ${styles.common_cont} ${styles.specialization}`}
              >
                <div className={`${mainStyles.row} ${styles.icons_row}`}>
                  <div className={styles.icon_cont}>
                    <TbLayout size={40} color="#fff" />
                    <p>Ui/Ux</p>
                  </div>

                  <div className={styles.icon_cont}>
                    <TbDeviceDesktopCode size={40} color="#fff" />
                    <p>web</p>
                  </div>

                  <div className={styles.icon_cont}>
                    <TbDeviceMobileCode size={40} color="#fff" />
                    <p>mobile</p>
                  </div>

                  <div className={styles.icon_cont}>
                    <TbGraph size={40} color="#fff" />
                    <p>charting</p>
                  </div>
                </div>

                <div
                  className={`${mainStyles.row} ${styles.common_cont_text_cont}`}
                >
                  <div className={styles.text}>
                    <h4>specialization</h4>
                    <h1>Proficiencies</h1>
                  </div>

                  <img
                    src={btnImg}
                    alt="button-image"
                    onClick={() => navigateHandler("proficiency")}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`${mainStyles.row} ${styles.home_section_bottom}`}>
          <div
            className={`${mainStyles.row} ${mainStyles.cont_bdr} ${styles.common_cont} ${styles.bottom_left}`}
          >
            <div
              className={`${mainStyles.column} ${mainStyles.cont_bdr} ${styles.bottom_left_sub_items}`}
            >
              <h1>03</h1>
              <h4>years experience</h4>
            </div>

            <div
              className={`${mainStyles.column} ${mainStyles.cont_bdr} ${styles.bottom_left_sub_items}`}
            >
              <h1>06</h1>
              <h4>familiar stack</h4>
            </div>

            <div
              className={`${mainStyles.column} ${mainStyles.cont_bdr} ${styles.bottom_left_sub_items}`}
            >
              <h1>06</h1>
              <h4>total projects</h4>
            </div>
          </div>

          <div className={`${styles.bottom_item_right} ${styles.together}`}>
            <div
              className={`${mainStyles.cont_bdr} ${mainStyles.row} ${styles.common_cont} ${styles.bottom_right_sub}`}
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

            <img src={icon2} alt="design-icon" className={styles.design_icon} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
