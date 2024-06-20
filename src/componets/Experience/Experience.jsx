import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
export const Experience = () => {
return ( 
    <section className = {styles.container} id ="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return ( <div key = {id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>
                                {skill.title}
                            </p>
                        </div>
                        );
                    })
                }
            </div>
            <ul className={styles.history}>
                {
                    history.map((history, id) =>{
                        return (
                            <li key ={id} className={styles.historyItem}>
                                <img src={getImageUrl(history.imageSrc)} alt= "Organisation Logo" />
                                <div className ={styles.historyItemDetails}>
                                    <h3>{`${history.role},${history.organisation}`}</h3>
                                    <p>
                                    {`${history.startDate}-${history.endDate}`}
                                    </p>
                                    <ul>
                                       {history.experiences.map((experience, id)=>{
                                        return <li key = {id}>
                                            {experience}
                                        </li>
                                       })} 
                                    </ul>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    </section>
    );
};