import React from 'react';
import build from "../assets/lottie/build";

import { LanguageSkillBars } from "../portfolio";
import {
    Container,
    Row,
    Progress,
    Col
} from "reactstrap";

import { Fade } from 'react-reveal';

import GreetingLottie from "../components/DisplayLottie";

const LanguageSkills = () => {
    return ( 
        <Container className="section section-lg">
           <Fade bottom duration={1000} distance="40px">
            <Row>
                    <Col lg="12">
                        <h1 className="h1">Tecnologias</h1>
                        {
                            LanguageSkillBars.map(skill => {
                                return <div className="progress-info" key={skill.Stack}>
                                            <div className="progress-label">
                                            <span style={{fontSize:"1em"}}>{skill.Stack}</span>
                                            </div>
                                            <div className="progress-percentage">
                                            <span>{skill.progressPercentage}%</span>
                                            </div>
                                            <Progress max="100" value={skill.progressPercentage} color="info" />
                                        </div>
                            })
                        }
                    </Col>
                   
                </Row>
           </Fade>
        </Container>
     );
}
 
export default LanguageSkills;