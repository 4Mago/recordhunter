import React from 'react'
import Link from 'next/link'


const Header = () => {
    return (
        <>
            <div className='header-div'>

            <Link href='/kopa'>

                <div className='divBtn'>

                <p>KÖP</p> 

                </div>
            </Link>
                
            <Link href='/'>

                <img className='logo-recordhunter' src='/bilder/record-hunter-logo.png'></img>

            </Link>

            <Link href='/salj'>

                <div className='divBtn'>

                    <p>SÄLJ</p>
                    
                </div>
            </Link>

            </div>

        </>
    )
}


export default Header