import React from 'react'
import './AboutHelp.css'
// simple text page for About info
export default function About() {
    return (
        <div className="about_page">
            <h1>About this App</h1>
            <p>This app in progress was developed specifically for those of us who have 
                very active brains due to ADHD. Forget the pen and paper, your unorganisable notes app in your
                phone, or your calendar. This app enables you to store "ideas" in different "lists" that you've 
                randomly thought of and will surely forget in 5 minutes. It's not a calendar so it does not have
                any time pressure, so feel free to go back to your lists whenever it's convenient for you, instead
                of rushing through a deadline and ultimately getting behind on your own schedule.
                <br /><br />
                This app is flexible, in a way that you can list literally anything. Random kitchen ideas you saw at IKEA?
                A restaurant your friend told you about? A funny joke you thought of on the bus? Anything. And we will expand
                functionality based on user feedback as we go along.
                <br /><br />
                My goal is to make our lives living with ADHD a tad bit easier, with our active brains
                and short term memories taken into consideration. I strive to be more helpful as I expand this app
                and onto other projects.
            </p>
            <h1>About the developer</h1>
            <p>My name is Liron and I am an Israeli-American developer based both in Southern California and in Tel Aviv. 
                I struggled my entire life with ADHD. My brain likes wandering around and it's very difficult to keep
                up with it. It has also affected my short-term memory and my ability to keep up with tasks and routines.
                I thought of this app during one of those instances, when I was shopping at Costco and saw something that
                I told myself that I should save for. When I got home, that 'something' has been forgotten and I still can't
                recall what it was. It is what it is, I guess.
            </p>
        </div>
    )
}