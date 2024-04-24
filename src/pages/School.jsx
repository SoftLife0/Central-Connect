import React from 'react'
import Header from '../components/Header'
import Headings from '../components/Headings'
import { Container } from '@mui/material'
import Search from '../components/Search'
import RowCard from '../components/RowCard'
import logo from '../assets/img/fav.png'

const School = () => {

  return (
    <>
      <Header />
      <Container style={{marginTop:'12vh', marginBottom:'5vh'}}>

        {/* Usage of Heading Component  */}
        <div>
          <Headings subTitle="2021" mainTitle="Schools" description="9 entries" />
        </div>

        <div>
          <Search />
        </div>
       
        <div>
          <RowCard imageSrc={logo} title="School of Engineering and Technology" subTitle="1340 Graduates" linkTo="/department" />          
          <RowCard imageSrc={logo} title="Faculty of Arts and Social Sciences" subTitle="1340 Graduates" linkTo="/department" />          
          <RowCard imageSrc={logo} title="Graduate School" subTitle="1340 Graduates" linkTo="/department" />          
        </div>

      </Container>
    </>
  )
}

export default School;