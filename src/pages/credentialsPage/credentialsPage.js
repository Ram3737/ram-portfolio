import personalImg from "../../assets/images/personal-pic.svg";
import { useState, useEffect } from "react";
import styles from "./credentialsPage.module.css";
import mainStyles from "../mainstyles.module.css";
import styleOne from "../homepage/homepage.module.css";
import ButtonComponent from "../../components/buttonComponent/buttonComponent";

function CredentialsPage() {
  return (
    <section className={mainStyles.section_main}>
      <div className={mainStyles.section_main_sub}>
        <div className={`${mainStyles.row} ${styles.credentials_cont}`}>
          <div
            className={`${mainStyles.cont_bdr} ${mainStyles.column} ${styles.credentials_left}`}
          >
            <div className={styles.credentials_top_left_img_box}>
              <img src={personalImg} alt="personal-image" />
            </div>

            <h2>Sriram</h2>

            <p>@sriram</p>

            <ul className={`${mainStyles.row} ${styles.media_cont}`}>
              <li className={`${mainStyles.row} ${mainStyles.cont_bdr}`}></li>
              <li className={`${mainStyles.row} ${mainStyles.cont_bdr}`}></li>
              <li className={`${mainStyles.row} ${mainStyles.cont_bdr}`}></li>
              <li className={`${mainStyles.row} ${mainStyles.cont_bdr}`}></li>
            </ul>

            <ButtonComponent text={"Contact Me"} style={styles.contact_btn} />
          </div>

          <div className={`${styles.credentials_right}`}>
            <div className={styles.about_me}>
              <h2>about me</h2>
              <p>
                Sit amet luctussd fav venenatis, lectus magna fringilla inis
                urna, porttitor rhoncus dolor purus non enim praesent in
                elementum sahas facilisis leo, vel fringilla est ullamcorper
                eget nulla facilisi etisam dignissim diam quis enim lobortis
                viverra orci sagittis eu volutpat odio facilisis mauris sit.
              </p>
              <p>
                Scelerisque fermentum duisi faucibus in ornare quam sisd sit
                amet luctussd fav venenatis, lectus magna fringilla zac urna,
                porttitor rhoncus dolor purus non enim praesent cuz elementum
                sahas facilisis leot.
              </p>
            </div>

            <div className={styles.exp_and_edu}>
              <h2>Experience</h2>
              <div>
                <h4>Sept 2022 - Nov 2023</h4>
                <h3>Frontend Developer</h3>
                <h5>Starlly Solutions</h5>
                <p>
                  Sit amet luctussd fav venenatis, lectus magna fringilla inis
                  urna, porttitor rhoncus dolor purus non enim praesent in
                  elementum sahas facilisis leo, vel fringilla est ullamcorper
                  eget nulla facilisi etisam dignissim diam quis enim lobortis
                  viverra orci sagittis eu volutpat odio facilisis mauris sit.
                </p>
              </div>

              <div style={{ marginTop: "58px" }}>
                <h4>Dec 2023 - Present</h4>
                <h3>Fullstack Developer</h3>
                <h5>Synerixs</h5>
                <p>
                  Sit amet luctussd fav venenatis, lectus magna fringilla inis
                  urna, porttitor rhoncus dolor purus non enim praesent in
                  elementum sahas facilisis leo, vel fringilla est ullamcorper
                  eget nulla facilisi etisam dignissim diam quis enim lobortis
                  viverra orci sagittis eu volutpat odio facilisis mauris sit.
                </p>
              </div>
            </div>

            <div className={styles.exp_and_edu}>
              <h2>Education</h2>
              <div>
                <h4>2014 - 2018</h4>
                <h3>Bachelor Degree in IT</h3>
                <h5>Kamaraj college of Engg & Tech</h5>
                <p>
                  Sit amet luctussd fav venenatis, lectus magna fringilla inis
                  urna, porttitor rhoncus dolor purus non enim praesent in
                  elementum sahas facilisis leo, vel fringilla est ullamcorper
                  eget nulla facilisi etisam dignissim diam quis enim lobortis
                  viverra orci sagittis eu volutpat odio facilisis mauris sit.
                </p>
              </div>

              <div style={{ marginTop: "58px" }}>
                <h4>2021 - 2022</h4>
                <h3>All Tech Courses</h3>
                <h5>Udemy</h5>
                <p>
                  Sit amet luctussd fav venenatis, lectus magna fringilla inis
                  urna, porttitor rhoncus dolor purus non enim praesent in
                  elementum sahas facilisis leo, vel fringilla est ullamcorper
                  eget nulla facilisi etisam dignissim diam quis enim lobortis
                  viverra orci sagittis eu volutpat odio facilisis mauris sit.
                </p>
              </div>
            </div>

            <div className={styles.skills}>
              <h2>Skills</h2>
              <div className={`${mainStyles.row} ${styles.skills_sub}`}>
                <div
                  className={`${mainStyles.column} ${styles.skills_sub_one}`}
                >
                  <div>
                    <span>90%</span>
                    <h3>HTML</h3>
                    <p>Non enim praesent</p>
                  </div>

                  <div>
                    <span>90%</span>
                    <h3>CSS</h3>
                    <p>Non enim praesent</p>
                  </div>

                  <div>
                    <span>90%</span>
                    <h3>JavaScript</h3>
                    <p>Non enim praesent</p>
                  </div>

                  <div>
                    <span>90%</span>
                    <h3>React JS</h3>
                    <p>Non enim praesent</p>
                  </div>
                </div>

                <div
                  className={`${mainStyles.column} ${styles.skills_sub_one}`}
                >
                  <div>
                    <span>70%</span>
                    <h3>Next Js</h3>
                    <p>Non enim praesent</p>
                  </div>

                  <div>
                    <span>75%</span>
                    <h3>Node JS</h3>
                    <p>Non enim praesent</p>
                  </div>

                  <div>
                    <span>75%</span>
                    <h3>Express JS</h3>
                    <p>Non enim praesent</p>
                  </div>

                  <div>
                    <span>80%</span>
                    <h3>React Native</h3>
                    <p>Non enim praesent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CredentialsPage;
