import { Directions } from "@mui/icons-material"
import { Typography, Card, Box } from "@mui/material"
import '../styles/project.css'

export const Project = () => {
    return (
        <div class='project-container'>
            <a class='project-item' href='https://www.github.com/lewismoore0'>
                <div >
                    <h3>Project Number 1</h3>
                    <p>A summary of what this project is, what it does and the technology it uses</p>
                </div>
            </a>
            <a class='project-item' href='https://www.github.com/lewismoore0'>
                <div >
                    <h3>Project Number 2</h3>
                    <p>A summary of what this project is, what it does and the technology it uses</p>
                </div>
            </a>
            <a class='project-item' href='https://www.github.com/lewismoore0'>
                <div >
                    <h3>Project Number 3</h3>
                    <p>A summary of what this project is, what it does and the technology it uses but this one has a 
                        really long description of what it does and stuff.
                    </p>
                </div>
            </a>
        </div>
    )
}