import React from 'react'
import Header from '../components/Header'
import Headings from '../components/Headings'
import { Container } from '@mui/material'
import ColumnCard from '../components/ColumnCard'
import Search from '../components/Search'

const Year = () => {

  const cardContent = [
    { title: "2023", count: "1094 graduates" },
    { title: "2022", count: "1264 graduates" },
    { title: "2021", count: "1094 graduates" },
    { title: "2020", count: "1794 graduates" },
    { title: "2019", count: "1994 graduates" },
  ];

  return (
    <>
      <Header />
      <Container style={{marginTop:'12vh', marginBottom:'5vh'}}>

        {/* Usage of Heading Component  */}
        <div>
          <Headings subTitle="Central University Alumni Platform" mainTitle="Years" description="16 entries" />
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