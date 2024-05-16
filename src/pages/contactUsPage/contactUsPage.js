import { useState, useEffect } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
// import { RiInstagramLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";
import ButtonComponent from "../../components/buttonComponent/buttonComponent";
import { motion } from "framer-motion";
import styles from "./contactUsPage.module.css";
import mainStyles from "../mainstyles.module.css";
import { CallPostApiServices } from "../../webservices/apiCalls";
import styleOne from "../homepage/homepage.module.css";

function ContactUsPage() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredSubject, setEnteredSubject] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [btnLoader, setBtnLoader] = useState(false);

  function formSubmitHandler(e) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !enteredName &&
      !enteredEmail &&
      !enteredSubject &&
      !enteredDescription
    ) {
      toast.error("Please fill all the details");
      return;
    }

    if (!enteredName) {
      toast.error("please provide name.");
      return;
    }

    if (!enteredEmail || !emailRegex.test(enteredEmail)) {
      toast.error("please provide valid email address");
      return;
    }

    if (!enteredSubject) {
      toast.error("Please enter subject");
      return;
    }

    if (!enteredDescription) {
      toast.error("Please enter description.");
      return;
    }

    setBtnLoader(true);

    CallPostApiServices(
      `/contact/ram`,
      {
        name: enteredName,
        email: enteredEmail,
        subject: enteredSubject,
        description: enteredDescription,
      },
      (response) => {
        if (response.status === 200) {
          setEnteredName("");
          setEnteredEmail("");
          setEnteredSubject("");
          setEnteredDescription("");
          setBtnLoader(false);
          toast.success("I'll be in touch with you shortly. Thank you!");
        }
      },
      (err) => {
        console.log("err sending otp on registration");
        setBtnLoader(false);
        if (err.response?.data.message) {
          toast.error(err.response.data.message);
        } else {
          toast.error(err.message);
        }

        toast.error("Server Error");
      }
    );
  }

  return (
    <section className={mainStyles.section_main}>
      <div className={mainStyles.section_main_sub}>
        <div className={`${mainStyles.row} ${styles.contact_main}`}>
          <div className={`${styles.contact_info_cont}`}>
            <h3>contact info</h3>
            <motion.ul
              animate={{
                opacity: 1,
                scale: [0, 1],
              }}
              transition={{
                duration: 1,
              }}
            >
              <li className={`${mainStyles.row}`}>
                <div
                  className={`${mainStyles.column} ${mainStyles.cont_bdr} ${styles.info_icon_box}`}
                >
                  <MdOutlineMailOutline color="#fff" size={30} />
                </div>

                <div className={styles.info_text_cont}>
                  <span>mail me</span>
                  <a href="mailto:nksriram37@gmail.com" target="_blank">
                    <h4>nksriram37@gmail.com</h4>
                  </a>
                </div>
              </li>
            </motion.ul>

            <motion.ul
              animate={{
                opacity: 1,
                scale: [0, 1],
              }}
              transition={{
                duration: 1,
              }}
            >
              <li className={`${mainStyles.row}`}>
                <div
                  className={`${mainStyles.column} ${mainStyles.cont_bdr} ${styles.info_icon_box}`}
                >
                  <MdOutlineMailOutline color="#fff" size={30} />
                </div>

                <div className={styles.info_text_cont}>
                  <span>contact me</span>
                  <a href="tel:+91 7010034542">
                    <h4>+91 7010034542</h4>
                  </a>
                </div>
              </li>
            </motion.ul>

            <motion.ul
              animate={{
                opacity: 1,
                scale: [0, 1],
              }}
              transition={{
                duration: 1,
              }}
            >
              <li
                className={`${mainStyles.row}`}
                style={{ alignItems: "center" }}
              >
                <div
                  className={`${mainStyles.column} ${mainStyles.cont_bdr} ${styles.info_icon_box}`}
                >
                  <MdOutlineMailOutline color="#fff" size={30} />
                </div>

                <div className={styles.info_text_cont}>
                  <span>location</span>
                  <h4>1-1-99, P.R nagar,</h4>
                  <h4>T.kallupatti, Madurai.</h4>
                </div>
              </li>
            </motion.ul>

            <h3>social info</h3>
            <div className={`${mainStyles.row} ${styles.social_cont}`}>
              <a href="https://ram-portfolio-dev.netlify.app/">
                <motion.div
                  className={`${mainStyles.row} ${mainStyles.cont_bdr} ${styles.circle_social}`}
                  animate={{
                    opacity: 1,
                    scale: [0, 1],
                  }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <TbWorld color="#fff" size={30} />
                </motion.div>
              </a>

              <a href="https://www.linkedin.com/in/sriram-kesavan-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <motion.div
                  className={`${mainStyles.row} ${mainStyles.cont_bdr} ${styles.circle_social}`}
                  animate={{
                    opacity: 1,
                    scale: [0, 1],
                  }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <IoLogoLinkedin color="#fff" size={30} />
                </motion.div>
              </a>

              <a href="https://github.com/Ram3737">
                <motion.div
                  className={`${mainStyles.row} ${mainStyles.cont_bdr} ${styles.circle_social}`}
                  animate={{
                    opacity: 1,
                    scale: [0, 1],
                  }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <FaGithub color="#fff" size={30} />
                </motion.div>
              </a>
            </div>
          </div>

          <motion.div
            className={`${mainStyles.cont_bdr} ${styles.form_cont}`}
            animate={{
              opacity: 1,
              scale: [0, 1],
            }}
            transition={{
              duration: 1,
            }}
          >
            <h1>
              Let's work <span>together.</span>
            </h1>
            <form>
              <input
                className={styles.input_field}
                placeholder="Name *"
                type="text"
                required
                value={enteredName || ""}
                onChange={(event) => setEnteredName(event.target.value)}
              />

              <input
                className={styles.input_field}
                placeholder="Email *"
                type="email"
                required
                value={enteredEmail || ""}
                onChange={(event) => setEnteredEmail(event.target.value)}
              />

              <input
                className={styles.input_field}
                placeholder="Your Subject *"
                type="text"
                required
                value={enteredSubject || ""}
                onChange={(event) => setEnteredSubject(event.target.value)}
              />

              <textarea
                className={styles.input_field}
                style={{ marginTop: "17px" }}
                placeholder="Your Message *"
                required
                rows="6"
                value={enteredDescription}
                onChange={(event) => setEnteredDescription(event.target.value)}
              />

              <ButtonComponent
                handler={formSubmitHandler}
                text={"Send Message"}
                indicator={btnLoader}
                disabled={btnLoader}
                style={styles.submit_button}
              />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsPage;
