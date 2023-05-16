import React from 'react'

function Footer(props) {
    return (
        <footer className={`jumbotron text-center text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode} `}>
            <p>Copyright 2022 Text Utilities PAK, Inc. All rights reserved.</p>
        </footer>
    )
}

export default Footer