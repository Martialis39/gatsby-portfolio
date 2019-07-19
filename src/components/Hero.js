import React from "react"
import styles from "./Hero.module.css"
import profilePic from "../../static/mart_pann.jpg"
import SingleColumn from "./SingleColumn"
import responsiveProfilePic from "../../static/mart_pann_responsive.jpg"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

function Hero() {
  return (
    <section className={styles.hero__main}>
      <SingleColumn>
        <section className={styles.hero}>
          <div className={styles.hero__inner}>
            <div className={styles.hero__copy}>
              <h1>Hi, I'm Mart.</h1>
              <p>
                I am a web developer. I have worked at an agency building
                WordPress sites, now I want to work on a product. I am
                interested in all things modern Javascript, the bleeding edge.
              </p>
              <ul className={styles.hero__icons}>
                <li>
                  <a href="https://www.linkedin.com/in/mart-lepanen">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Martialis39">
                    <FaGithub />
                  </a>
                </li>
              </ul>
              <ul className={styles.hero__details}>
                <li>
                  <p>Mart-Aleksander Lepanen</p>
                </li>
                <li>
                  <p>Tartu</p>
                </li>
                <li>
                  <a href="tel:+37255571104">+372 55571104</a>
                </li>
                <li>
                  <a href="mailto:mart_lepanen@hotmail.com">
                    mart_lepanen@hotmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </SingleColumn>
    </section>
  )
}

export default Hero
