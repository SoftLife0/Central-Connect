import React from 'react'
import Header from './Header'
import Headings from './Headings'
import { Container } from '@mui/material'
import ColumnCard from './ColumnCard'

const Year = () => {
  return (
    <>
      <Header />
      <Container style={{marginTop:'12vh'}}>

        {/* Usage of Heading Component  */}
        <div>
          <Headings subTitle="Central University Alumni Platform" mainTitle="Select your Year Group" description="16 entries" />
        </div>

        <div>
          <ColumnCard title="2022" count="1264 Graduates" url="/login" />
          <ColumnCard title="2021" count="1094 Graduates" url="/login" />
         
        </div>

      </Container>
    </>
  )
}

export default Year;