import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
export const Experience = () => {
return ( 
    <section id ="experience">
        <h2>Experience</h2>
        <div>
            <div>
                {
                    skills.map((skill, id) => {
                        return ( <div key = {id}>
                            <div>
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
            <ul>
                {
                    history.map((history, id) =>{
                        return (
                            <li key ={id}>
                                <img src={getImageUrl(history.imageSrc)} alt= "Organisation Logo" />
                                <div>
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