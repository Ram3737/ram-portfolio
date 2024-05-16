import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import icon2 from "../../assets/icons/icon2.png";
import signImg from "../../assets/images/sign.png";
import btnImg from "../../assets/icons/btn-icon.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./projectPage.module.css";
import mainStyles from "../mainstyles.module.css";
import styleOne from "../homepage/homepage.module.css";

function ProjectPage() {
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
              Projects
            </motion.h1>

            <div
              className={`${mainStyles.row} ${styles.about_top_right_bottom}`}
            >
              <motion.div
                className={`${mainStyles.cont_bdr} ${styles.about_top_right_bottom_text_cont}`}
                animate={{
                  opacity: 1,
                  scale: [0, 1],
                }}
                transition={{
                  duration: 1,
                }}
              >
                <h2>Nadakacheri</h2>
                <h5>Frontend</h5>

                <div
                  className={`${mainStyles.cont_bdr} ${mainStyles.row} ${styles.skills_main}`}
                >
                  <div>
                    <ul>
                      <li>
                        <span>
                          Contributed to Nadakacheri, a React.js payroll
                          application, blending UI development with critical
                          logic implementation and API integration for seamless
                          worker pay calculation, allocation, and automated
                          report generation.
                        </span>
                      </li>

                      <li>
                        <span>
                          Delivered crucial functionalities in Nadakacheri,
                          streamlining pay processing by leveraging React.js to
                          intuitively calculate worker earnings based on their
                          working hours, facilitating efficient payroll
                          management.
                        </span>
                      </li>

                      <li>
                        <span>
                          Enhanced user experience in Nadakacheri through
                          frontend UI development, while ensuring robust backend
                          integration for precise pay allocation and automated
                          report delivery, optimizing workflow for company
                          owners.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`${mainStyles.cont_bdr} ${styles.about_top_right_bottom_text_cont}`}
                animate={{
                  opacity: 1,
                  scale: [0, 1],
                }}
                transition={{
                  duration: 1,
                }}
              >
                <h2>servy - crm</h2>
                <h5>Frontend Web & Mobile App</h5>

                <div
                  className={`${mainStyles.cont_bdr} ${mainStyles.row} ${styles.skills_main}`}
                >
                  <div>
                    <ul>
                      <li>
                        <span>
                          Spearheaded frontend development for Nadakacheri, a
                          comprehensive CRM React.js application facilitating
                          seamless interaction between users and technicians,
                          enabling real-time updates, order placements, expense
                          tracking, and live technician tracking
                          functionalities.
                        </span>
                      </li>

                      <li>
                        <span>
                          Leveraged expertise in web and mobile app development
                          to ensure a fluid user experience across platforms,
                          enhancing accessibility and usability for both
                          technicians and users seeking repair services.
                        </span>
                      </li>

                      <li>
                        <span>
                          Integrated critical logical functionalities and API
                          integrations, optimizing performance and functionality
                          while maintaining a sleek and intuitive UI, showcasing
                          versatility in frontend development for web and mobile
                          environments.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`${mainStyles.cont_bdr} ${styles.about_top_right_bottom_text_cont}`}
                animate={{
                  opacity: 1,
                  scale: [0, 1],
                }}
                transition={{
                  duration: 1,
                }}
              >
                <h2>Quordinate</h2>
                <h5>Frontend</h5>

                <div
                  className={`${mainStyles.cont_bdr} ${mainStyles.row} ${styles.skills_main}`}
                >
                  <div>
                    <ul>
                      <li>
                        <span>
                          Played a key role in frontend development and integral
                          logic implementation for 'Quordinate', a dynamic
                          auction React.js application, enabling seamless
                          interaction for buyers and sellers to bid, chat, and
                          access available materials in real-time.
                        </span>
                      </li>

                      <li>
                        <span>
                          Utilized UI expertise to craft intuitive interfaces,
                          facilitating smooth user experiences throughout
                          bidding processes and API integrations, fostering
                          efficient buyer-seller interactions within the
                          platform.
                        </span>
                      </li>

                      <li>
                        <span>
                          Contributed pivotal functionalities to 'Quordinate',
                          empowering users to engage effortlessly in auction
                          activities, bridging gaps between buyers and sellers
                          in a streamlined, interactive marketplace environment.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`${mainStyles.cont_bdr} ${styles.about_top_right_bottom_text_cont}`}
                animate={{
                  opacity: 1,
                  scale: [0, 1],
                }}
                transition={{
                  duration: 1,
                }}
              >
                <h2>Energeek</h2>
                <h5>Fullstack</h5>

                <div
                  className={`${mainStyles.cont_bdr} ${mainStyles.row} ${styles.skills_main}`}
                >
                  <div>
                    <ul>
                      <li>
                        <span>
                          Developed "Energeek," a dynamic React.js app
                          facilitating personalized home setups, including
                          living spaces, kitchen layouts, and CCTV preferences,
                          with seamless API integrations for a streamlined user
                          experience.
                        </span>
                      </li>

                      <li>
                        <span>
                          Implemented critical logical functionalities and API
                          development using Node.js and Express.js, empowering
                          users to effortlessly tailor their home needs, whether
                          for apartments or villas, while ensuring comprehensive
                          quotation generation capabilities.
                        </span>
                      </li>

                      <li>
                        <span>
                          Designed and implemented an intuitive admin panel
                          enabling efficient tracking of all generated
                          quotations, showcasing proficiency in full-stack
                          development and meticulous attention to detail in
                          delivering a robust, user-centric application.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`${mainStyles.cont_bdr} ${styles.about_top_right_bottom_text_cont}`}
                animate={{
                  opacity: 1,
                  scale: [0, 1],
                }}
                transition={{
                  duration: 1,
                }}
              >
                <h2>meinhardt</h2>
                <h5>Fullstack</h5>

                <div
                  className={`${mainStyles.cont_bdr} ${mainStyles.row} ${styles.skills_main}`}
                >
                  <div>
                    <ul>
                      <li>
                        <span>
                          Developed 'Meinhardt' React.js app, integrating
                          Node.js and Express for robust backend API
                          functionalities, enabling real-time monitoring and
                          historical data analysis of building humidity and
                          atmospheric levels to prevent potential damage.
                        </span>
                      </li>

                      <li>
                        <span>
                          Implemented full-stack solutions to ensure seamless
                          data flow from sensors to frontend, enabling
                          comprehensive tracking of environmental metrics and
                          timely alerts for any anomalies, enhancing building
                          maintenance efficiency and safety measures.
                        </span>
                      </li>

                      <li>
                        <span>
                          Leveraged expertise in full-stack development to
                          create an intuitive user interface for 'Mehindart,'
                          empowering users to effortlessly access and interpret
                          building data trends, fostering proactive maintenance
                          strategies and mitigating potential risks effectively.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`${mainStyles.cont_bdr} ${styles.about_top_right_bottom_text_cont}`}
                animate={{
                  opacity: 1,
                  scale: [0, 1],
                }}
                transition={{
                  duration: 1,
                }}
              >
                <h2>charteey</h2>
                <h5>Fullstack Web & Mobile App</h5>

                <div
                  className={`${mainStyles.cont_bdr} ${mainStyles.row} ${styles.skills_main}`}
                >
                  <div>
                    <ul>
                      <li>
                        <span>
                          Spearheaded the creation of 'Charteey', a dynamic
                          trading analysis and course platform, leveraging
                          Node.js and Express.js for robust backend
                          functionalities, while implementing React.js for
                          intuitive user interfaces and React Native for mobile
                          development.
                        </span>
                      </li>

                      <li>
                        <span>
                          Played a pivotal role in crafting essential logical
                          functionalities and API development, ensuring seamless
                          data analysis and presentation for traders, alongside
                          developing a responsive dashboard for real-time
                          monitoring of risk and rewards.
                        </span>
                      </li>

                      <li>
                        <span>
                          Contributed expertise to the design and implementation
                          of mobile app UI and functionalities using React
                          Native, enhancing accessibility for traders on-the-go,
                          while also facilitating comprehensive courses for
                          aspiring stock analysts within the 'Charteey'
                          ecosystem.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
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

export default ProjectPage;
