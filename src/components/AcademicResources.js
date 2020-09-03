import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Collapsible from 'react-collapsible';
import '../css/react-tabs.css';
import '../css/AcademicResources.css'

import leslie from '../img/advisors/Leslie_Grife.jpg'
import emzhei from '../img/advisors/Emzhei_Chen.jpg'
import jenn from '../img/advisors/Jennifer_Fabro.jpg'
import david from '../img/advisors/David_Bird.jpg'
import mikhail from '../img/advisors/Mikhail_Burke.jpg'
import vanessa from '../img/advisors/Vanessa_Andres.jpg'
import leanne from '../img/advisors/Leanne_Dawkins.jpg'
import shayni from '../img/advisors/Shayni_Curtis.jpg'
import gayle from '../img/advisors/Gayle_Lesmond.png'
import sabrin from '../img/advisors/Sabrin_Mohamed.jpg'
import stephen from '../img/advisors/Stephen_Johns.jpg'
import sharon from '../img/advisors/Sharon_Brown.jpg'
import pierina from '../img/advisors/Pierina_Filipponne.jpg'

import priorities from '../img/workload/Priorities.png'
import peers from '../img/workload/Peers.png'
import study from '../img/workload/Study.jpg'
import balance from '../img/workload/Balance.png'
import Header from './Header';


class AcademicResources extends Component {
    render() {
        return (
            <div>
            <Header 
                images={["academic1.png", "academic2.png", "academic3.png"]}
                pagename="Academic Resources" />
            <Tabs>
                <TabList>
                    <Tab>Academic Advisors</Tab>
                    <Tab>Managing the Workload</Tab>
                    <Tab>Time Management Tips</Tab>
                </TabList>
                <TabPanel>
                    <div className="advisor-heading">
                        <p>Book an appointment with your discipline's advisor through the <a href="https://portal.engineering.utoronto.ca/welcome.asp" target="_blank">Advising Portal</a>.</p>
                        <h2>First Year Advisors</h2>
                    </div>

                    <div className="row">
                        <div className="advisor">
                            <img src={leslie} alt="" width="200" />
                            <p><b>Leslie Grife</b>
                                <br />
                            ECE & MSE
                            </p>
                        </div>

                        <div className="advisor">
                            <img src={emzhei} alt="" width="200" />
                            <p><b>Emzhei Chen</b>
                                <br />
                            TrackOne
                            </p>
                        </div>

                        <div className="advisor">
                            <img src={jenn} alt="" width="200" />
                            <p><b>Jennifer Fabro</b>
                                <br />
                            Chem, Civ, Indy, Min, Mech
                            </p>
                        </div>

                        <div className="advisor">
                            <img src={david} alt="" width="200" />
                            <p><b>David Bird</b>
                                <br />
                            Engineering Science
                            </p>
                        </div>

                        <div className="advisor">
                            <img src={mikhail} alt="" width="200" />
                            <p><b>Mikhail Burke</b>
                                <br />
                            Inclusion & Transition Advisor
                            </p>
                        </div>

                    </div>

                    <div className="advisor-heading">
                        <h2>Upper Year Advisors</h2>
                    </div>

                    <div className="row">
                        <div className="advisor">
                            <img src={vanessa} alt="" width="200" />
                            <p><b>Vanessa Andres</b>
                                <br />
                            Chemical Engineering
                            </p>
                        </div>

                        <div className="advisor">
                            <img src={leanne} alt="" width="200" />
                            <p><b>Leanne Dawkins</b>
                                <br />
                            Electrical & Computer Engineering
                            </p>
                        </div>

                        <div className="advisor">
                            <img src={shayni} alt="" width="200" />
                            <p><b>Shayni Curtis-Clarke</b>
                                <br />
                            Civil & Mineral Engineering
                            </p>
                        </div>

                        <div className="advisor">
                            <img src={gayle} alt="" width="200" />
                            <p><b>Gayle Lesmond</b>
                                <br />
                            Mechanical & Industrial Engineering
                            </p>
                        </div>

                        <div className="advisor">
                            <img src={sabrin} alt="" width="200" />
                            <p><b>Sabrin Mohamed</b>
                                <br />
                            Materials Engineering
                            </p>
                        </div>

                        <div className="advisor">
                            <img src={david} alt="" width="200" />
                            <p><b>David Bird</b>
                                <br />
                            Engineering Science (Years 1 & 2)
                            </p>
                        </div>

                        <div className="advisor">
                            <img src={stephen} alt="" width="200" />
                            <p><b>Stephen Johns</b>
                                <br />
                            Engineering Science (Years 3 & 4)
                            </p>
                        </div>

                    </div>

                    <div className="advisor-heading">
                        <h2>Other Faculty Advisors</h2>
                    </div>
                    <div className="row">
                        <div className="advisor">
                            <img src={sharon} alt="" width="200" />
                            <p><b>Sharon Brown</b>
                                <br />
                            Cross-Disciplinary Office<br />
                            </p>
                        </div>

                        <div className="advisor">
                            <img src={pierina} alt="" width="200" />
                            <p><b>Pierina Filippone</b>
                                <br />
                            Scholarships & Financial Aid
                            </p>
                        </div>


                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="workloadHeading">
                        <h2>Finding the Workload Stressful?</h2>
                        <p>It's no secret that engineering is tough - here are some tips you may find helpful! A meeting with an academic advisor can also go a long way.</p>
                    </div>

                    <table>
                        <tr>
                            <td>
                                <div className="workloadTip">
                                    <img src={priorities} alt="" />

                                </div>
                            </td>

                            <td>
                                <div className="workloadTip-text">
                                    <h2><b>Set Priorities</b></h2>
                                    <p>As engineering students, we get a lot of work thrown our way. It is important to realize which tasks are of high priority, and what can be put off temporarily. Each night, write down what you wish to accomplish and number them into a list in order of highest to lowest priority. By beginning with what's most important, you will experience less stress if you are not able to finish everything - the less important work you didn't finish can be carried over to the next day!</p>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="workloadTip">
                                    <img src={study} alt="" />
                                </div>
                            </td>

                            <td>
                                <div className="workloadTip-text">
                                    <h2><b>Have a Set Time for Studying</b></h2>
                                    <p>Consistency is key! Dedicate a couple of hours each night for doing homework, reviewing lecture notes, completing labs, etc. Get into a daily routine of doing this and you will experience less pressure before midterms and assignment due dates. This will also lighten your workload on weekends, giving you time to enjoy other activities.</p>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="workloadTip">
                                    <img src={peers} alt="" />
                                </div>
                            </td>

                            <td>
                                <div className="workloadTip-text">
                                    <h2><b>Use Your Peers as Resources</b></h2>
                                    <p>If you are struggling with something, chances are many other people are in the same situation as you! Don't be afraid to reach out to your classmates for homework help or group studying. Discipline group chats can help a lot - make sure you've joined yours!</p>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="workloadTip">
                                    <img src={balance} alt="" />
                                </div>
                            </td>

                            <td>
                                <div className="workloadTip-text">
                                    <h2><b>Set Time Aside for Other Activities</b></h2>
                                    <p>Balance is key for stress management. As much as planning your study time is important, it is equally important to plan out your free time. Make sure you give yourself time for things you enjoy. Here are some ideas:<br />
                                        <ul>
                                            <li>Go for a walk/Go to the gym</li>
                                            <li>Read a book</li>
                                            <li>Hang out with friends</li>
                                            <li>Watch your favourite movie/TV show</li>
                                            <li>Listen to music</li>
                                            <li>Take up a new hobby</li>
                                        </ul>

                                    </p>
                                </div>
                            </td>
                        </tr>


                    </table>

                </TabPanel>
                <TabPanel>
                    <div class="timeHeading">
                        <h2>SMW's 12 Tips for Time Management</h2>
                    </div>

                    <Collapsible className="purple" trigger="1. Know When You Work Best ▼" triggerClassName="timeTipTitle" triggerOpenedClassName="timeTipTitle" openedClassName="tip-open-purple" triggerWhenOpen="1. Know When You Work Best ▲">
                        <p>Everyone has a certain time of day where they are most efficient. For some it's early in the morning while for others it's late at night. Find your "prime time" and accomplish your most demanding tasks during it.</p>
                    </Collapsible>

                    <Collapsible className="white" trigger="2. Set REALISTIC Goals ▼" triggerClassName="timeTipTitle" triggerOpenedClassName="timeTipTitle" openedClassName="white" triggerWhenOpen="2. Set REALISTIC Goals ▲">
                        <p>No matter how much work you have to finish, be realistic about how much you plan on accomplishing withi a period of time. Don't overwhelm yourself by putting too much on your plate - this will induce more stress! </p>
                    </Collapsible>


                    <Collapsible className="purple" trigger="3. Make a Schedule and Stick to It ▼" triggerClassName="timeTipTitle" triggerOpenedClassName="timeTipTitle" openedClassName="tip-open-purple" triggerWhenOpen="3. Make a Schedule and Stick to It ▲">
                        <p>Each day, make a rough schedule for all your tasks including studying, exercise, class, relaxing, etc.<br /><b>FOR STUDYING:</b> <br />- Be specific and plan out WHAT you are going to study/work on. Rather than writing down: <em>"Study from 3-5"</em>, try: <em>"Do calculus problems from 3-5"</em>.<br />- When allocating time, always overestimate the time you think it will take to finish something.<br /><b>REMEMBER:</b> Try your best to follow your set schedule, but know that you will not be able to follow it to the minute. It is important to know how to<br /> re-adjust and recover!</p>
                    </Collapsible>

                    <Collapsible className="white" trigger="4. Use a Planner, Calendar, or Organizational App ▼" triggerClassName="timeTipTitle" triggerOpenedClassName="timeTipTitle" openedClassName="white" triggerWhenOpen="4. Use a Planner, Calendar, or Organizational App ▲">
                        <p>Using a planning tool can help a lot with scheduling and keeping track of assignment due dates, midterms, and exams. Choose ONE tool and check it daily to follow up with your goals. If you choose to use a smartphone app, here are some app suggestions:<br />
                            <a href="https://myhomeworkapp.com/" target="_blank">myHomework Student Planner</a>
                            <br />
                            <a href="https://apps.apple.com/us/app/id529458056" target="_blank">Class Manager</a>
                            <br />
                            <a href="https://www.mystudylife.com/" target="_blank">MyStudyLife</a></p>
                    </Collapsible>

                    <Collapsible className="purple" trigger="5. Stay Focused on One Task at a Time ▼" triggerClassName="timeTipTitle" triggerOpenedClassName="timeTipTitle" openedClassName="tip-open-purple" triggerWhenOpen="5. Stay Focused on One Task at a Time ▲">
                        <p>Although multi-tasking may seem like a good way to get things done, it makes it very difficult to maintain efficiency. Try putting all your focus towards one task for a set period of time. When you have accomplished your goal, move on to the next task. This will eliminate distraction and allow you to work at an efficent pace! </p>
                    </Collapsible>

                    <Collapsible className="white" trigger="6. Take Short and Frequent Breaks ▼" triggerClassName="timeTipTitle" triggerOpenedClassName="timeTipTitle" openedClassName="white" triggerWhenOpen="6. Take Short and Frequent Breaks ▲">
                        <p>Studies have shown that studying/focusing in short time intervals with short breaks in between can maximize work efficiency. A great way to practice this is the <b>POMODORO TECHNIQUE</b>. Here is a brief description of how it works:<br />
            - Pick a task, and work on it for 25 minutes (this will be your first Pomodoro).<br />
            - Once the 25 minutes are over, take a 5 minute break.
            - Repeat until you have completed 4 pomodoros - at this point take a 20-30 minute break.<br />
            - Keep repeating the entire cycle until you reach the end of your study period!<br />
                            <br />Online Pomodoro Timer:<br />
                            <a href="https://pomodoro-tracker.com/" target="_blank">POMODORO TRACKER</a>
                        </p>

                    </Collapsible>

                    <Collapsible className="purple" trigger="7. Turn Off Social Media Notifications ▼" triggerClassName="timeTipTitle" triggerOpenedClassName="timeTipTitle" openedClassName="tip-open-purple" triggerWhenOpen="7. Turn Off Social Media Notifications ▲">
                        <p>If you're struggling with focusing, a good start is eliminating all distractions. Turn your notifications off and don't check your phone until you take a break. If you still feel too tempted to look at your phone, put it in another room before you start studying!</p>
                    </Collapsible>

                    <Collapsible className="white" trigger="8. Set a Fixed Time to Stop Working ▼" triggerClassName="timeTipTitle" triggerOpenedClassName="timeTipTitle" openedClassName="white" triggerWhenOpen="8. Set a Fixed Time to Stop Working ▲">
                        <p>Every time you sit down to get work done, decide on the time you will stop working. This creates a sense of urgency and forces you to work as efficiently as possible. You will start to find that tasks aren't being dragged out longer than they should be and are being completed right away.</p>
                    </Collapsible>

                    <Collapsible className="purple" trigger="9. Keep a Clean Study Area, Get Rid of Distractions ▼" triggerClassName="timeTipTitle" triggerOpenedClassName="timeTipTitle" openedClassName="tip-open-purple" triggerWhenOpen="9. Keep a Clean Study Area, Get Rid of Distractions ▲">
                        <p>Working in a messy workspace can make it hard to focus - always keep your area tidy and only keep what you're currently working on out. Minimize distractions - only use your computer if you have to, and close any unnecessary tabs while you are working. </p>
                    </Collapsible>

                    <Collapsible className="white" trigger="10. Take Advantage of Waiting Times ▼" triggerClassName="timeTipTitle" triggerOpenedClassName="timeTipTitle" openedClassName="white" triggerWhenOpen="10. Take Advantage of Waiting Times ▲">
                        <p>As humans, we spend lots of time "waiting around" throughout the day. Some examples include:<br /><br />
            - Waiting for your laundry to finish<br />
            - One hour breaks in between classes<br />
            - Commuting to/from campus<br />
                            <br />
            Use times like these to get something done - whether it's studying, exercising, or calling family! Doing this will help maximize your time throughout the day and eliminate wasted time.
            </p>
                    </Collapsible>

                    <Collapsible className="purple" trigger="11. Get Enough Sleep ▼" triggerClassName="timeTipTitle" triggerOpenedClassName="timeTipTitle" openedClassName="tip-open-purple" triggerWhenOpen="11. Get Enough Sleep">
                        <p>Staying up all night is not the way to get things done as its not sustainable and will just make you more tired. Our bodies need sleep to function properly, so don't deprive yourself from it! Aim to get <b>AT LEAST</b> 7 hours of sleep on <b>MOST</b> nights. This will help you stay energized throughout the week, allowing you to work better.</p>
                    </Collapsible>

                    <Collapsible className="white" trigger="12. Reward Yourself ▼" triggerClassName="timeTipTitle" triggerOpenedClassName="timeTipTitle" openedClassName="white" triggerWhenOpen="12. Reward Yourself ▲">
                        <p>Create a reward system for yourself with things you enjoy. For example - every night you finish everything on your to-do list, you're allowed to watch 1-2 episodes of your favourite TV show. Other things to reward yourself can include shopping, a night out with friends, self-care, or anything else you can think of. Most importantly, don't feel guilty while doing this - you deserve it! </p>
                    </Collapsible>

                </TabPanel>
            </Tabs >
            </div>

        );
    }


}

export default AcademicResources