import React from 'react'
import logo from '../images/Logo.png'
import MenuItems from './MenuItemsSection'
import { Hide, Box } from '@chakra-ui/react'

function MenuTitle() {
    return (
        <div className='menu-content'>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <Hide breakpoint='(max-width: 768px)'>
                                <Box>
                                    <div className='LeftSide'>
                                        <p className='name'>Little Lemon</p>
                                        <p className='email'>www.littlelemon.com</p>
                                        <p className='number'>XXX - XXX - XXXX</p>
                                    </div>
                                </Box>
                            </Hide>
                        </div>
                        <div className='col'>
                            <img src={logo} alt='logo' />
                        </div>
                        <div className='col'>
                            <Hide breakpoint='(max-width: 768px)'>
                                <Box>
                                    <div className='RightSide'>
                                        <p className='name'>Little Lemon</p>
                                        <p className='email'>www.littlelemon.com</p>
                                        <p className='number'>XXX - XXX - XXXX</p>
                                    </div>
                                </Box>
                            </Hide>
                        </div>
                    </div>
                </div>
            </section>
            <div className='Menu-list'>
                <MenuItems />
            </div>
        </div>
    )
}

export default MenuTitle