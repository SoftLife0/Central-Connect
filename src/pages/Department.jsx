import React from 'react'
import Header from '../components/Header'
import Headings from '../components/Headings'
import { Container } from '@mui/material'
// import ColumnCard from '../components/ColumnCard'
import Search from '../components/Search'
import RowCard from '../components/RowCard'
import logo from '../assets/img/about.jpg'

const Department = () => {

  return (
    <>
      <Header />
      <Container style={{marginTop:'12vh', marginBottom:'5vh'}}>

        {/* Usage of Heading Component  */}
        <div>
          <Headings subTitle="2021 - School of Engineering and Technology" mainTitle="Departments" description="3 entries" />
        </div>

        <div>
          <Search />
        </div>
       
        <div>
          <RowCard imageSrc={logo} title="Information Technology" subTitle="34 Graduants"/>          
          <RowCard imageSrc={logo} title="Computer Science" subTitle="51 Graduants"/>          
          <RowCard imageSrc={logo} title="Civil Engineering" subTitle="78 Graduants"/>          
        </div>

      </Container>
    </>
  )
}

export default Department;