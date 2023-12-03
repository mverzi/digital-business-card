import React from "react"
import TwitterIcon from "../images/twitter-icon.png"
import GithubIcon from "../images/github-icon.png"
import LinkedInIcon from "../images/linkedin-icon.png"

export default function Footer(){
    return (
        <footer>
            <a href="https://twitter.com/mverzi1" target="_blank" rel="noreferrer"><img src={TwitterIcon} alt="Twitter Icon"/></a>
            <a href="https://linkedin.com/in/mary-verzi" target="_blank" rel="noreferrer"><img src={LinkedInIcon} alt="LinkedIn Icon"/></a>
            <a href="https://github.com/mverzi" target="_blank" rel="noreferrer"><img src={GithubIcon} alt="Github Icon"/></a>
        </footer>
    )
}