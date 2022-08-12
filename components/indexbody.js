import React from 'react'
import styled from 'styled-components'

const Indexbody = () => {
  return (
      <>
          <Container>

        

              

              <Img  src='/bilder/index-background.png' />


              <Div>

              <Textbackground>
              Köpa LP skivor i Stockholm? <br/><br/>

                Vår skivbutik har ett utmärkt urval av vinyl, CD och DVD. Vi har ny och begagnad musik i alla format, samt sällsynta fynd. Om du har ett favoritband eller letar efter något nytt att upptäcka har vi en enorm samling att välja mellan.

                </Textbackground>

             
              </Div>
              
              
          

          </Container>

          

      </>
  )
}

const Container = styled.div`
   position: relative; 
`

const Div = styled.div`
   display:flex;
   justify-content:center;
   align-items:center; 
`


const Img = styled.img`
  height:100vh;
  width:100%;
  display:block;
  margin:0;
`

const Textbackground = styled.div`
position: absolute; 
bottom: 30%; 
background: rgb(0, 0, 0);
background: rgba(0, 0, 0, 0.5); 
width: 50%;
opacity:1;
color: white;
font-size: 20px;
padding: 50px;
text-align: center;
border-radius: 88px;
  
`





  


export default Indexbody