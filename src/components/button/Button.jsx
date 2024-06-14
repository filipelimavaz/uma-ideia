import React from 'react'
import { Link } from 'react-router-dom';
import './ButtonStyles.css'

const Button = (props) => {
    let isExternal = ''

    if(props.url != null) {
        isExternal = props.url.startsWith('http');
    }

    if (isExternal) {
        return (
            <a href={props.url} className={props.buttonCName}>
                <span>{props.buttonText}</span>
                <i className={props.buttonIcon}></i>
            </a>
        )
    } else {
        <Link href={props.url} className={props.buttonCName}>
            <span>{props.buttonText}</span>
            <i className={props.buttonIcon}></i>
        </Link>
    }
}

export default Button