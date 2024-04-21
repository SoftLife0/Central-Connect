import React from 'react'
import Header from './Header'
import Headings from './Headings'
import { Container } from '@mui/material'
import ColumnCard from './ColumnCard'
import Search from './Search'

const Year = () => {

  const cardContent = [
    { title: "2023", count: "1094 Graduates" },
    { title: "2022", count: "1264 Graduates" },
    { title: "2021", count: "1094 Graduates" },
    { title: "2020", count: "1794 Graduates" },
    { title: "2019", count: "1994 Graduates" },
  ];

  return (
    <>
      <Header />
      <Container style={{marginTop:'12vh', marginBottom:'5vh'}}>

        {/* Usage of Heading Component  */}
        <div>
          <Headings subTitle="Central University Alumni Platform" mainTitle="Select your Year Group" description="16 entries" />
        </div>

        <div>
          <Search />
        </div>
       
        <div>
          <ColumnCard cardContent={cardContent} />          
        </div>

      </Container>
    </>
  )
}

export default Year;