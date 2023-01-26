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
                    color: '#ac0000'
                }
            case 1: 
                return {
                    text: "Weak",
                    percentage: 40,
                    color: '#f14949'
                }
            case 2:
                return {
                    text: "Moderate",
                    percentage: 60,
                    color: '#edba39'
                }
            case 3: 
                return {
                    text: "Good",
                    percentage: 80,
                    color: '#52b355' //make blue or keep green
                }
            case 4:
                return {
                    text: "Strong",
                    percentage: 100,
                    color: '#35600f'
                }
            default:
                return {
                    text: "Error"
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
