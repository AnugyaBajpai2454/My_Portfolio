import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
export const About = () => {
    return (
      <section className={styles.container}id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutimage.png")} alt="me with laptop" className= {styles.aboutImage}  />
            <ul className=  {styles.aboutItems} > 
                <li className= {styles.aboutItem} >
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor"
                    />
                    <div className= {styles.aboutItemText}>
                        <h3>
                            Data Scientist
                        </h3>
                        <p>
                        I recently graduated with a degree in Computer Science and have started my career as a Data Scientist and I am eager to grow and contribute to the field of data science.
                        </p>
                    </div>
                </li>
                <li className= {styles.aboutItem} >
                    <img src={getImageUrl("about/serverIcon.png")} alt="server" />
                    <div className= {styles.aboutItemText}>
                        <h3>
                            Machine Learning Enthusiast
                        </h3>
                        <p>
                        As a Machine Learning enthusiast, I am passionate about exploring and applying advanced algorithms to solve real-world problems.
                        </p>
                    </div>
                </li>
                <li className= {styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="ui" />
                    <div className= {styles.aboutItemText}>
                        <h3>
                            C++ Enthusiast 
                        </h3>
                        <p>
                        My background in Computer Science has provided me with a foundation in C++ programming, which I continuously refine and expand
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        </section>
    );
};