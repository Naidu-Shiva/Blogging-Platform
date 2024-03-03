import { Footer, FooterDivider } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook , BsInstagram, BsTwitter, BsGithub, BsDribbble, BsPerson } from 'react-icons/bs'

export default function FooterComponent() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-3'>
                    <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Beginner's</span>
                        Blog
                    </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                        <Footer.Title title='About'/>
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href = 'https://www.google.com'
                                target ='_blank'
                                rel = 'noopener noreferrer'
                            > 
                                Google
                            </Footer.Link>
                            <Footer.Link
                                href = '/about'
                                target ='_blank'
                                rel = 'noopener noreferrer'
                            > 
                                Blogger's Blog
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Follow Us'/>
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href = 'https://www.github.com'
                                target ='_blank'
                                rel = 'noopener noreferrer'
                            > 
                                GitHub
                            </Footer.Link>
                            <Footer.Link
                                href = '#'
                                target ='_blank'
                                rel = 'noopener noreferrer'
                            > 
                                Discord
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Legal'/>
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href = '#'
                                target ='_blank'
                                rel = 'noopener noreferrer'
                            > 
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link
                                href = '#'
                                target ='_blank'
                                rel = 'noopener noreferrer'
                            > 
                                Terms &amp; Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <FooterDivider/>
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by="Begineers Blog" year={new Date().getFullYear()}/> 
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' icon={BsFacebook}/>
                    <Footer.Icon href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' icon={BsInstagram}/>
                    <Footer.Icon href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' icon={BsTwitter}/>
                    <Footer.Icon href='https://www.github.com' target='_blank' rel='noopener noreferrer' icon={BsGithub}/>
                    <Footer.Icon href='https://www.dribbble.com' target='_blank' rel='noopener noreferrer' icon={BsDribbble}/>
                    <Footer.Icon href='https://www.portfolio.com' target='_blank' rel='noopener noreferrer' icon={BsPerson}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}
