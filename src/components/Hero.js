import React from "react"
import styles from "./Hero.module.css"
import SingleColumn from "./SingleColumn"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Link } from "gatsby"

function Hero() {
  return (
    <section className={styles.hero__main}>
      <SingleColumn>
        <section className={styles.hero}>
          <div className={styles.hero__inner}>
            <div className={styles.hero__copy}>
              <h2>
                <span>Hi</span>
                <span>I'm</span>
                <span className={styles.hero__name}>Mart</span>
              </h2>
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

              <ul>
                <li>
                  <Link to="/blog">Read my blog</Link>
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
