import React from 'react'
import Image from 'next/image'
import { LogoDev } from '@mui/icons-material'

function Footer() {
  return (
    <>
        <div className="footer">
            <h2>Follow us on</h2>
            <div className='logos'>
                <Image className='logo' alt='github logo' height={32} width = {32} src="/github-logo.png"/>
                <Image className='logo' alt='github logo' height={32} width = {32} src="/linkedin.png"/>
                <Image className='logo' alt='github logo' height={32} width = {32} src="/instagram.png"/>
            </div>
            <p> ©️ 2022 Prateek</p>
        </div>
    </>
  )
}

export default Footer