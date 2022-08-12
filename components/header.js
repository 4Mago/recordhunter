import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <>
            <Div>

            <Button>
                KÖP 
            </Button>

                

                <Img  src='/bilder/record-hunter-logo.png' />
               
                
                
            <Button>
                
                SÄLJ
                
            </Button>

            </Div>

            

        </>
    )
}

const Div = styled.div`
    background-color: #1F1C1C;

    width: 100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`



const Img = styled.img`
    height:50%;
    width:15%;
`
const Button = styled.div`
    height:100%;
    width:20%;
    background-color:#1F1C1C;
    text-align:center;
    color:#FFFFF;
    
`

    


export default Header