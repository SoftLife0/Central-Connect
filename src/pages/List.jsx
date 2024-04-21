import React from 'react'
import Header from '../components/Header'
import Headings from '../components/Headings'
import { Container } from '@mui/material'
// import ColumnCard from '../components/ColumnCard'
import Search from '../components/Search'
import RowCard from '../components/RowCard'
import logo1 from '../assets/Softlife.jpeg'
import logo2 from '../assets/kweku.jpg'

const List = () => {

  return (
    <>
      <Header />
      <Container style={{marginTop:'12vh', marginBottom:'5vh'}}>

        {/* Usage of Heading Component  */}
        <div>
          <Headings subTitle="2021 - School of Engineering and Technology" mainTitle="Information Technology" description="111 Graduates" />
        </div>

        <div>
          <Search />
        </div>
       
        <div>
          <RowCard imageSrc={logo2} title="Nana Kweku Adumatta" subTitle="0545977791" linkTo="/bio"/>          
          <RowCard imageSrc={logo1} title="Onikosi Adewale" subTitle="0592033701"/>          
        </div>

      </Container>
    </>
  )
}

export default List;