import { Directions } from "@mui/icons-material"
import { Typography, Card, Box } from "@mui/material"
import '../styles/project.css'

export const Project = () => {
    return (
        <div class='project-container'>
            <div class='project-item'>
                <h3>Project Number 1</h3>
                <p>A summary of what this project is, what it does and the technology it uses</p>
            </div>
            <div class='project-item'>
                <h3>Project Number 2</h3>
                <p>A summary of what this project is, what it does and the technology it uses</p>
            </div>
            <div class='project-item'>
                <h3>Project Number 3</h3>
                <p>A summary of what this project is, what it does and the technology it uses, but this is a really long description
                    that needs some more space within the box.
                </p>
            </div>
        </div>
    )
}