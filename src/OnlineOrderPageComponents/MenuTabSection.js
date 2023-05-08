import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ViewAllMenu from './ViewAllMenu';
import '../App.css';
import AppetizerList from './AppetizerList';
import SaladsList from './SaladsList';
import PizzaList from './PizzaList';
import EntreeList from './EntreeList';
import SidesList from './SidesList';
import BeveragesList from './BeveragesList';
import DessertList from './DessertList';
import '../styles/MenuListStyles.css'

function MenuTabSection() {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    return (
        <div className='Menu-tabs'>
            <div className='container'>
                <Box className='box-size' >
                    <TabContext value={value}>
                        <Box className='box-style' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} ria-label="lab API tabs example" className='tablist' >
                                <Tab className='tabs' label="View All" value="1" />
                                <Tab className='tabs' label="Appetizer" value="2" />
                                <Tab className='tabs' label="Salad" value="3" />
                                <Tab className='tabs' label="Pizza" value="4" />
                                <Tab className='tabs' label="Entree" value="5" />
                                <Tab className='tabs' label="Sides" value="6" />
                                <Tab className='tabs' label="Beverages" value="7" />
                                <Tab className='tabs' label="Desserts" value="8" />
                            </TabList>
                        </Box>
                        <Box className='menu-box'>
                            <TabPanel value="1" ><ViewAllMenu /></TabPanel>
                            <TabPanel value="2"><AppetizerList /></TabPanel>
                            <TabPanel value="3"><SaladsList /></TabPanel>
                            <TabPanel value="4"><PizzaList /></TabPanel>
                            <TabPanel value="5"><EntreeList /></TabPanel>
                            <TabPanel value="6"><SidesList /></TabPanel>
                            <TabPanel value="7"><BeveragesList /></TabPanel>
                            <TabPanel value="8"><DessertList /></TabPanel>
                        </Box>
                    </TabContext>
                </Box>
            </div>
        </div>
    )
}

export default MenuTabSection