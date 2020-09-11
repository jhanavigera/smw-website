import React, { Component } from 'react';
import BlogPostTitle from '../blogTitle';

export default class AcademiaSept9 extends Component {
    render() {
        return(
            <div>
                <BlogPostTitle title={this.props.title} author={this.props.author} date={this.props.date} category={this.props.category}/>

                <p>
                    An online semester can be challenging due to the accessibility of electronic devices and the duration that we’ll be using them for. The digital balance feature built into many phones can help you spend less time browsing or playing games by restricting the amount of duration you can spend on different apps, or on your phone altogether. It can be found in your phone settings, and you can download apps that work as digital balance.
                </p>
                <p>
                    We’re here today with a curated list of apps that we have tried ourselves, and recommend for productivity, self care and relaxation. Please note that all prices are in CAD and may vary depending on phone OS.
                </p>
                
                <h3> Productivity Apps </h3>

                <ol className="highlight-list">
                    <li>
                        <strong>Boosted - Productivity & Time Tracker - Free with Paid Premium Available </strong>
                        <p>
                            I use this app to keep track of how much work I do for tasks.You can set projects (ie. a course) and then within it set tasks (ie. assignment 1, studying for midterm) and then time how long you’re spending doing a task and overall for a course. I like this app because it runs in the background and you can track exactly what you’re doing rather than simply running a timer, where you’d only know the total amount of time. You can also check charts of how much time you’ve been spending on tasks per day, in a week, month, or over the lifetime that you’ve downloaded the app. It’ll also tell you the most productive days you’ve had in that time period.
                        </p>
                    </li>
                    <li>
                        <strong>Forest: Stay Focused -  Free with Paid Premium Available ($2.79)</strong>
                        <p>
                            This app allows you to set a time period where you won’t open certain apps, or unlock your phone (also available for PC) so you can focus on your tasks. You grow a tree if you successfully complete the time period without breaking the rules you set, and if you don’t, the tree withers. You can check over time the state of your forest, how many trees you’ve grown, which depends on you completing your tasks.
                        </p>
                    </li>
                    <li>
                        <strong>Pomodoro Timer Lite - Free</strong>
                        <p>
                            A timer that allows you to follow the Pomodoro Method of 25 minutes of work, followed by 5 minutes of break. There are many apps that allow you to do this, so pick whichever has your preferred interface. The one chosen is a free app, with a premium version of the app available as well.
                        </p>
                    </li>
                </ol>

                <h3>Self Care Apps</h3>
                <ol className="highlight-list">
                    <li>
                        <strong>Sleep Sounds -  Free with Paid Premium Available</strong>
                        <p>Sleep Sounds allows you to create your own custom mix of background music, with different sounds such as the ocean, a thunderstorm, grass blowing in the wind, birds chirping, and white noise. There’s also premade mixes available, but the best part of this app is creating what works for you.</p>
                    </li>
                    <li>
                        <strong>Headspace -  Free with Paid Premium Available</strong>
                        <p>
                        Headspace combines the power of meditation, physical activity and a good sleep to help with your mental health.It has several playlists to help you focus and a way to check in yourself and measure how stressed you have been in the last month. It is a great tool for people who have never really tried meditation and are curious to learn more. You can also set a daily reminder to help stay on track towards your goals.The interface is amazing and it is very easy to use. It also allows you to reflect on your journey and displays your stats.
                        </p>
                    </li>
                    <li>
                        <strong>Calm -  Free with Paid Premium Available</strong>
                        <p>
                        Calm has several sleep stories, meditation courses and mental fitness courses.This app also has a mood check in feature which can be scheduled to a particular time of the day. This feature is amazing because it is really important to consistently check in with yourself and reflect on your emotions.They also have music from several top chart artists and also several instrumental tunes. In case you do not have enough time you can also browse through some quick and easy courses which start from as little as 90 seconds. The best part about the app is that the moment you open it up there is a very calming sound playing in the background. 
                        </p>
                    </li>
                </ol>

                <h3>Relaxing Games</h3>
                <ol className="highlight-list">
                    <li>
                        <strong>#SelfCare - Free (can pay for premium aesthetics)</strong>
                        <p>#SelfCare features several activities that you can do, all located in your virtual bedroom (that you can decorate, with premium decorations available). It focuses on how it’s ok to not want to leave your bed, and discourages checking your in game phone or laptop. Accompanied by a lovely soundtrack, activities that you can do include breathing exercises, playing with bubbles, and petting your virtual cat!</p>
                    </li>
                    <li>
                        <strong>Tokaido - Paid ($2.79)</strong>
                        <p>
                            Get ready to have the best vacation ever with Tokaido, where the goal of the game is to have an awesome trip! Choose a character, and roll a dice to advance across the board. You can visit a hot spring, scenic locations such as mountains and grasslands, buy souvenirs at gift shops, and eat meals at inns. Play solo or online against your friends in a game that’s all about the journey and not the destination.
                        </p>
                    </li>
                    <li>
                        <strong>Tsuki Adventure - Free</strong>
                        <p>
                        Tsuki has chosen to leave the city for the village in pursuit of a simpler, less hectic life. Check in on him, and you can discover many different moments in Tsuki’s life. There are lots of characters to talk to and many locations to visit, from the village where you start off, to the big city and mountains beyond. The idle game will allow Tsuki to do things in the background, and you only need to check in occasionally to see if he’s doing anything new. You can also buy food, toys and other items for Tsuki to use, as well as go fishing and exploring the different locations.
                        </p>
                    </li>
                    <li>
                        <strong>Eyes: Nonogram - Free</strong>
                        <p>
                        This is a logic puzzle where you fill in boxes in order to reveal pictures that show a scene of a story. Accompanied by a soft, relaxing soundtrack, it is an easy game to play whenever you like, as there is no time limit, and you can stop in the middle of a puzzle.
                        </p>
                    </li>
                </ol>
            </div>
        )
    }
}