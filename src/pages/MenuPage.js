import React from 'react'
//import MenuTitle from '../components/MenuTitleSection'
import MenuItemsSection from '../MenuPageComponents/MenuItemsSection'
import '../styles/MenuPageStyles.css'

function MenuPage() {
  return (
    <div className='main-menu'>
        <MenuItemsSection />
    </div>
  )
}

export default MenuPage