import React from "react"
import styles from "./Hero.module.css"
import SingleColumn from "./SingleColumn"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Link } from "gatsby"
import styled from "styled-components"

function Hero() {
  return (
    <section className={styles.hero__main}>
      <SingleColumn>
        <section className={styles.hero}>
          <div className={styles.hero__inner}>
            <div className={styles.hero__copy}>
              <h1>
                <span>Hi</span>
                <span>I'm</span>
                <span className={styles.hero__name}>Mart</span>
                <span className={styles.hero__name}>Lepanen</span>
              </h1>
              <h2>I'm a front-end developer.</h2>
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

              <div>
                <p>
                  I used to do something completely different! I left my
                  previous career to become the greatest JavaScript developer!{" "}
                  <em>Am I delusional?</em> Perhaps!{" "}
                  <a href="mailto:mart_lepanen@hotmail.com">Let's chat</a> so we
                  can find out!
                </p>
              </div>
              <ul className={styles.hero__links}>
                <li>
                  <Link to="/blog">Read my blog</Link>
                </li>
                <li>
                  <Link to="/projects">Look at my portfolio</Link>
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
