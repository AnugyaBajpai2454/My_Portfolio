import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
return (
<section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>
            Hi, I'm Anugya
        </h1>
        <p className={styles.description}>
        I'm a computer science student enrolled at Jaypee University of Engineering and Technology, Guna.
        <br />
        I am interested in AI/ML, Data Science, C++ Programming, UI/UX design, and Video Editing.
        Please fell free to reach out if you would like to know more.
        </p>
        <a href="mailto:bajpaianugyaab@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImg.png")} className={styles.heroImg} alt="Img of me" />   
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
</section>
);
};