import React from "react"
import TwitterIcon from "../images/twitter-icon.png"
import GithubIcon from "../images/github-icon.png"
import LinkedInIcon from "../images/linkedin-icon.png"

export default function Footer(){
    return (
        <footer>
            <a href="https://twitter.com/mverzi1" target="_blank" rel="noreferrer" alt="Twitter Icon"><img src={TwitterIcon} /></a>
            <a href="https://linkedin.com/in/mary-verzi" target="_blank" rel="noreferrer" alt="LinkedIn Icon"><img src={LinkedInIcon} /></a>
            <a href="https://github.com/mverzi" target="_blank" rel="noreferrer" alt="Github Icon"><img src={GithubIcon} /></a>
        </footer>
    )
}