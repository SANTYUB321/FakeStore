import React, { useState } from 'react'

import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'
import { Footer } from '../../Layouts/Footer/Footer'
import { Cards } from '../../Cards/Cards'

export const Home = () => {

  const [allProducts, setallProducts] = useState([]);
  const [total, settotal] = useState(0);
  const [countProducts, setcountProducts] = useState(0);


  return (
    <>
    <Header allProducts={allProducts} 
    setallProducts={setallProducts}
    total={total}
    settotal={settotal}
    countProducts={countProducts}
    setcountProducts={setcountProducts}
    />
    <Main>
        <Cards
        allProducts={allProducts} 
    setallProducts={setallProducts}
    total={total}
    settotal={settotal}
    countProducts={countProducts}
    setcountProducts={setcountProducts}
        />
    </Main>
    <Footer/>
    </>
  )
}
