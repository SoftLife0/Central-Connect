import React from 'react'
import Header from '../components/Header'
import Headings from '../components/Headings'
import { Container } from '@mui/material'
// import ColumnCard from '../components/ColumnCard'
import Search from '../components/Search'
import RowCard from '../components/RowCard'
import logo from '../assets/fav.png'

const School = () => {

  // const cardContent = [
  //   { title: "2023", count: "1094 Graduates" },
  //   { title: "2022", count: "1264 Graduates" },
  //   { title: "2021", count: "1094 Graduates" },
  //   { title: "2020", count: "1794 Graduates" },
  //   { title: "2019", count: "1994 Graduates" },
  // ];

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
          <RowCard imageSrc={logo} title="School of Engineering and Technology" subTitle="1340 Graduates"/>          
          <RowCard imageSrc={logo} title="Faculty of Arts and Social Sciences" subTitle="1340 Graduates"/>          
          <RowCard imageSrc={logo} title="Graduate School" subTitle="1340 Graduates"/>          
        </div>

      </Container>
    </>
  )
}

export default School;