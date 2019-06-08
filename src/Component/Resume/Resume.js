import React, { Component } from 'react'
import Aman from './aman_resume.svg';
import './resume.css'
export default class Resume extends Component {
    render() {
        return (
            <div className='imgs'>
                <img src={Aman} alt="Resume"/>
            </div>
        )
    }
}
