import React, { Component } from 'react';

export default class Resume extends Component {
    render() {

        let resumeData = this.props.resumeData;

        return(
            <React.Fragment>
                <section id="resume">
                    {/* Education
                ----------------------------------------------- */}
                    <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                        <div className="twelve columns">
                            <h3>Instituto Tecnico Superior Comunitario (ITSC)</h3>
                            <p className="info">Technologist in software development <span>•</span> <em className="date">April 2016</em></p>
                        </div>
                        </div> {/* item end */}
                    </div> {/* main-col end */}
                    </div> {/* End Education */}
                    {/* Work
                ----------------------------------------------- */}
                    <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                        <div className="twelve columns">
                            <h3>Iguana Tech SRL</h3>
                            <p className="info">Junior Software developer <span>•</span> <em className="date">February 2017 - April 2018</em></p>
                            <p>
                            In charge of the development of the applications entrusted to the company, mostly Php and Javascript
                            </p>
                        </div>
                        </div> {/* item end */}
                        <div className="row item">
                        <div className="twelve columns">
                            <h3>Iguana Tech SRL</h3>
                            <p className="info">Junior Software developer <span>•</span> <em className="date">May 2018 - January 2019</em></p>
                            <p>
                                Freelance / remote developer.
                            </p>
                        </div>
                        </div> {/* item end */}
                        <div className="row item">
                        <div className="twelve columns">
                            <h3>SmartTec</h3>
                            <p className="info">Junior software developer <span>•</span> <em className="date">April 2018 - Present</em></p>
                            <p>
                            Contributor in several projects of the company, main developer in more than one project
                            </p>
                        </div>
                        </div> {/* item end */}
                    </div> {/* main-col end */}
                    </div> {/* End Work */}
                    {/* Skills
                ----------------------------------------------- */}
                    <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>I have been a contributor in several projects, the vast majority web projects, both in the backend and in the front end also in the management of database, server and infrastructure thereof.
                        </p>
                        <div className="bars">
                        <ul className="skills">
                            <li><span className="bar-expand photoshop" /><em>Php</em></li>
                            <li><span className="bar-expand illustrator" /><em>JavaScript</em></li>
                            <li><span className="bar-expand wordpress" /><em>jQuery</em></li>
                            <li><span className="bar-expand css" /><em>HTML5</em></li>
                            <li><span className="bar-expand html5" /><em>CSS</em></li>
                            <li><span className="bar-expand jquery" /><em>Node</em></li>
                            <li><span className="bar-expand jquery" /><em>React</em></li>
                        </ul>
                        </div>{/* end skill-bars */}
                    </div> {/* main-col end */}
                    </div> {/* End skills */}
                </section>
            </React.Fragment>
        )

    }
}