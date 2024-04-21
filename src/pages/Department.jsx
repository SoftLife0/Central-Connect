import React from 'react'
import Header from '../components/Header'
import Headings from '../components/Headings'
import { Container } from '@mui/material'
// import ColumnCard from '../components/ColumnCard'
import Search from '../components/Search'
import RowCard from '../components/RowCard'
import logo from '../assets/fav.png'

const Department = () => {

  return (
    <>
      <Header />
      <Container style={{marginTop:'12vh', marginBottom:'5vh'}}>

        {/* Usage of Heading Component  */}
        <div>
          <Headings subTitle="2021 Year Group" mainTitle="Schools" description="9 entries" />
        </div>

        <div>
          <Search />
        </div>
       
        <div>
          <RowCard imageSrc={logo} schoolName="School of Engineering and Technology" number="1340"/>          
          <RowCard imageSrc={logo} schoolName="Faculty of Arts and Social Sciences" number="1340"/>          
          <RowCard imageSrc={logo} schoolName="Graduate School" number="1340"/>          
        </div>

      </Container>
    </>
  )
}

export default Department;