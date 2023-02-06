import React, { Component } from 'react'
import './style.css'
import zxcvbn from 'zxcvbn'

export default class PasswordStrength extends Component {
    checkPasswordStrength = password => {

        if(!password || password === "") return {
            text: "",
            percentage: 0
        }

        const strength = zxcvbn(password);

        switch (strength.score) {
            case 0:
                return {
                    text: "Very weak",
                    percentage: 20,
                    color: 'var(--strength-veryweak)'
                }
            case 1: 
                return {
                    text: "Weak",
                    percentage: 40,
                    color: 'var(--strength-weak)'
                }
            case 2:
                return {
                    text: "Moderate",
                    percentage: 60,
                    color: 'var(--strength-moderate)'
                }
            case 3: 
                return {
                    text: "Good",
                    percentage: 80,
                    color: 'var(--strength-good)' //make blue or keep green
                }
            case 4:
                return {
                    text: "Strong",
                    percentage: 100,
                    color: 'var(--strength-strong)'
                }
            default:
                return {
                    text: "Error",
                    color: 'var(--error)'
                }
        }
    }

    render() {
        const Strength = this.checkPasswordStrength(this.props.password)

        return (
            <div id='strength-box'>
                <div id='strength-bar'>
                    <div id='strength-fill' style={{width: `${Strength.percentage}%`, backgroundColor: Strength.color}}/>
                </div>
                <span id='strength-label' style={{color: Strength.color}}>{Strength.text}</span>
            </div>
        )
  }
}
