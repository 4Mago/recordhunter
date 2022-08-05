import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <>

            <Div>
                <LP src='/bilder/spinning-logo.png' />
            </Div>

        </>
    )
}

const Div = styled.div`
    position: relative;
    background-color: #ffe81C;
    height: 150px;
    width: 100%;
`

const LP = styled.img`
    position: absolute;
    background-color: #1F1C1C;
    left: 38%;
    transform: translate(-50%, -50%);
    top: -75%;
    opacity:0.85;
    max-height: 450px;
    max-width: 100%;
    object-fit: contain;
    border-radius: 100%;
    z-index: -5;
    overflow: hidden;
    animation: App-logo-spin infinite 20s linear;

    @keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

`

export default Footer