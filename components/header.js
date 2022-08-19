import React from 'react'
import Link from 'next/link'


const Header = () => {
    return (
        <>
            <div className='header-div'>

            <Link href='/kopa'>

                <button className='divBtn'>

                    KÖP 

                </button>
            </Link>
                
            <Link href='/'>

                <img className='logo-recordhunter' src='/bilder/record-hunter-logo.png'></img>

            </Link>

            <Link href='/salj'>

                <button className='divBtn'>

                    SÄLJ
                    
                </button>
            </Link>

            </div>

        </>
    )
}


export default Header