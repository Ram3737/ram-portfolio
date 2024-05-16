import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { TbLayout } from "react-icons/tb";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { TbDeviceMobileCode } from "react-icons/tb";
import { TbGraph } from "react-icons/tb";
import icon2 from "../../assets/icons/icon2.png";
import signImg from "../../assets/images/sign.png";
import btnImg from "../../assets/icons/btn-icon.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./proficiencyPage.module.css";
import mainStyles from "../mainstyles.module.css";
import styleOne from "../homepage/homepage.module.css";

function ProficiencyPage() {
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
          {windowWidth > 754 && (
            <div className={`${mainStyles.cont_bdr} ${styles.about_top_left}`}>
              <ul className={mainStyles.column}>
                <li className={mainStyles.row}>
                  <TbLayout size={40} color="#fff" />
                  <span>UI/UX</span>
                </li>
                <li className={mainStyles.row}>
                  <TbDeviceDesktopCode size={40} color="#fff" />
                  <span>WEB APP</span>
                </li>

                <li className={mainStyles.row}>
                  <TbDeviceMobileCode size={40} color="#fff" />
                  <span>MOBILE APP</span>
                </li>

                <li className={mainStyles.row}>
                  <TbGraph size={40} color="#fff" />
                  <span>CHARTING</span>
                </li>
              </ul>
            </div>
          )}
          <div className={`${styles.about_top_right}`}>
            <h1>Proficiencies</h1>

            {windowWidth <= 754 && (
              <div
                className={`${mainStyles.cont_bdr} ${styles.about_top_left}`}
              >
                <ul className={mainStyles.column}>
                  <li className={mainStyles.row}>
                    <TbLayout size={40} color="#fff" />
                    <span>UI/UX</span>
                  </li>
                  <li className={mainStyles.row}>
                    <TbDeviceDesktopCode size={40} color="#fff" />
                    <span>WEB APP</span>
                  </li>

                  <li className={mainStyles.row}>
                    <TbDeviceMobileCode size={40} color="#fff" />
                    <span>MOBILE APP</span>
                  </li>

                  <li className={mainStyles.row}>
                    <TbGraph size={40} color="#fff" />
                    <span>CHARTING</span>
                  </li>
                </ul>
              </div>
            )}

            <div
              className={`${mainStyles.row} ${mainStyles.cont_bdr} ${styles.about_top_right_bottom}`}
            >
              <div
                className={`${mainStyles.cont_bdr} ${styles.about_top_right_bottom_text_cont}`}
              >
                <h3>UI/UX</h3>
                <p>
                  Seamlessly merging creativity and user empathy, I craft
                  interfaces that captivate users, fostering engagement and
                  brand loyalty through intuitive design and delightful
                  interactions.
                </p>
              </div>

              <div
                className={`${mainStyles.cont_bdr} ${styles.about_top_right_bottom_text_cont}`}
              >
                <h3>WEB APP</h3>
                <p>
                  From concept to launch, I engineer web applications that marry
                  sleek design with robust functionality, delivering seamless
                  experiences that inspire user loyalty and drive business
                  growth.
                </p>
              </div>

              <div
                className={`${mainStyles.cont_bdr} ${styles.about_top_right_bottom_text_cont}`}
              >
                <h3>MOBILE APP</h3>
                <p>
                  With a keen eye for detail and a passion for innovation, I
                  engineer mobile solutions that blend sleek design with
                  powerful functionality, delivering intuitive experiences that
                  captivate and delight users.
                </p>
              </div>

              <div
                className={`${mainStyles.cont_bdr} ${styles.about_top_right_bottom_text_cont}`}
              >
                <h3>CHARTING</h3>
                <p>
                  Proficient in deciphering stock price charts, I utilize
                  advanced charting techniques to uncover trends and patterns,
                  empowering informed investment decisions and maximizing
                  portfolio performance.
                </p>
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

                <img
                  src={btnImg}
                  alt="button-image"
                  onClick={() => navigateHandler("contact-us")}
                />
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

                <img
                  src={btnImg}
                  alt="button-image"
                  onClick={() => navigateHandler("credentials")}
                />
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

                    <img
                      src={btnImg}
                      alt="button-image"
                      onClick={() => navigateHandler("contact-us")}
                    />
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

                    <img
                      src={btnImg}
                      alt="button-image"
                      onClick={() => navigateHandler("credentials")}
                    />
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
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProficiencyPage;
