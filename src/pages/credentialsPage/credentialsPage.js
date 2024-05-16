import personalImg from "../../assets/images/personal-pic.svg";
import { TbWorld } from "react-icons/tb";
import { RiInstagramLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./credentialsPage.module.css";
import mainStyles from "../mainstyles.module.css";
import styleOne from "../homepage/homepage.module.css";
import ButtonComponent from "../../components/buttonComponent/buttonComponent";

function CredentialsPage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/contact-us");
  }

  return (
    <section className={mainStyles.section_main}>
      <div className={mainStyles.section_main_sub}>
        <div className={`${mainStyles.row} ${styles.credentials_cont}`}>
          <motion.div
            className={`${mainStyles.cont_bdr} ${mainStyles.column} ${styles.credentials_left}`}
            animate={{
              opacity: [0, 1],
              y: [600, 1],
            }}
            transition={{
              duration: 1,
            }}
          >
            <div className={styles.credentials_top_left_img_box}>
              <img src={personalImg} alt="personal-image" />
            </div>

            <h2>Sriram</h2>

            <p>@sriram</p>

            <ul className={`${mainStyles.row} ${styles.media_cont}`}>
              <a href="https://ram-portfolio-dev.netlify.app/">
                <li className={`${mainStyles.row} ${mainStyles.cont_bdr}`}>
                  <TbWorld color="#fff" size={20} />
                </li>
              </a>

              <a href="https://www.linkedin.com/in/sriram-kesavan-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <li className={`${mainStyles.row} ${mainStyles.cont_bdr}`}>
                  <IoLogoLinkedin color="#fff" size={20} />
                </li>
              </a>

              <a href="https://github.com/Ram3737">
                <li className={`${mainStyles.row} ${mainStyles.cont_bdr}`}>
                  <FaGithub color="#fff" size={20} />
                </li>
              </a>

              <a href="https://www.instagram.com/nk_sriram?igsh=MTdqYzE3dDdjNDNvdA==">
                <li className={`${mainStyles.row} ${mainStyles.cont_bdr}`}>
                  <RiInstagramLine color="#fff" size={20} />
                </li>
              </a>
            </ul>

            <ButtonComponent
              text={"Contact Me"}
              style={styles.contact_btn}
              handler={navigateHandler}
            />
          </motion.div>

          <div className={`${styles.credentials_right}`}>
            <motion.div
              className={styles.about_me}
              animate={{
                opacity: [0, 1],
                y: [600, 1],
              }}
              transition={{
                duration: 1,
              }}
            >
              <h2>about me</h2>
              <p>
                I'm a seasoned full-stack developer adept in HTML, CSS,
                JavaScript, React.js, Next.js, Node.js, and Express.js with 3
                years expertise. Passionate about creating seamless web and
                mobile applications, I excel in both frontend and backend
                development. With a keen eye for detail and a commitment to
                innovation, I ensure high-quality results on every project.
              </p>
              <p>
                My collaborative nature enables effective teamwork, fostering a
                dynamic environment for success. Constantly evolving with
                emerging technologies, I stay ahead of industry trends to
                deliver cutting-edge solutions. Ready to leverage my skills and
                enthusiasm to drive impactful outcomes for your team.
              </p>
            </motion.div>

            <motion.div
              className={styles.exp_and_edu}
              animate={{
                opacity: [0, 1],
                y: [600, 1],
              }}
              transition={{
                duration: 1,
              }}
            >
              <h2>Experience</h2>
              <div>
                <h4>Sept 2022 - Nov 2023</h4>
                <h3>Frontend Developer</h3>
                <h5>Starlly Solutions</h5>
                <p>
                  Entrenched within Starlly Solutions, I excelled as a dynamic
                  developer, proficient in both frontend and fullstack
                  development for mobile and web applications. With a proven
                  record of contributing to over 5 projects, I bring a potent
                  mix of innovation, dedication, and expertise to every
                  endeavor.
                </p>
              </div>

              <div style={{ marginTop: "58px" }}>
                <h4>Dec 2023 - Present</h4>
                <h3>Fullstack Developer</h3>
                <h5>Synerixs</h5>
                <p>
                  At Synerixs, I honed my craft as a Fullstack Developer,
                  adeptly navigating the intricacies of both mobile and web
                  application development. My contributions to the company's
                  flagship product underscore my commitment to excellence and
                  innovation. With a proven ability to tackle challenges
                  head-on, I am poised to elevate any team and exceed
                  expectations in the ever-evolving tech landscape.
                </p>
              </div>
            </motion.div>

            <motion.div
              className={styles.exp_and_edu}
              animate={{
                opacity: [0, 1],
                y: [600, 1],
              }}
              transition={{
                duration: 1,
              }}
            >
              <h2>Education</h2>
              <div>
                <h4>2014 - 2018</h4>
                <h3>Bachelor Degree in IT</h3>
                <h5>Kamaraj college of Engg & Tech</h5>
                <p>
                  Earned a Bachelor's Degree in Information Technology from
                  Kamaraj College of Engineering & Technology (2014-2018).
                  Focused curriculum and hands-on learning fostered adept
                  problem-solving skills, a keen understanding of IT
                  fundamentals, and a commitment to excellence. Equipped with
                  comprehensive knowledge to thrive in dynamic tech
                  environments.
                </p>
              </div>

              <div style={{ marginTop: "58px" }}>
                <h4>2021 - 2022</h4>
                <h3>All Tech Courses</h3>
                <h5>Udemy</h5>
                <p>
                  Acquired expertise in HTML, CSS, JavaScript, React.js,
                  Next.js, Node.js, and Express.js through Udemy's rigorous tech
                  courses. My dedication ensures exceeding expectations,
                  promising exceptional results. Eager to leverage my skills to
                  drive innovation and surpass goals in any role, delivering
                  impactful solutions with unwavering excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              className={styles.skills}
              animate={{
                opacity: 1,
                scale: [0, 1],
              }}
              transition={{
                duration: 1,
              }}
            >
              <h2>Skills</h2>
              <div className={`${mainStyles.row} ${styles.skills_sub}`}>
                <div
                  className={`${mainStyles.column} ${styles.skills_sub_one}`}
                >
                  <div>
                    <span>90%</span>
                    <h3>HTML</h3>
                    <p>Skills accomplished</p>
                  </div>

                  <div>
                    <span>90%</span>
                    <h3>CSS</h3>
                    <p>Skills accomplished</p>
                  </div>

                  <div>
                    <span>90%</span>
                    <h3>JavaScript</h3>
                    <p>Skills accomplished</p>
                  </div>

                  <div>
                    <span>90%</span>
                    <h3>React JS</h3>
                    <p>Skills accomplished</p>
                  </div>
                </div>

                <div
                  className={`${mainStyles.column} ${styles.skills_sub_one}`}
                >
                  <div>
                    <span>70%</span>
                    <h3>Next Js</h3>
                    <p>Skills accomplished</p>
                  </div>

                  <div>
                    <span>75%</span>
                    <h3>Node JS</h3>
                    <p>Skills accomplished</p>
                  </div>

                  <div>
                    <span>75%</span>
                    <h3>Express JS</h3>
                    <p>Skills accomplished</p>
                  </div>

                  <div>
                    <span>80%</span>
                    <h3>React Native</h3>
                    <p>Skills accomplished</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CredentialsPage;
