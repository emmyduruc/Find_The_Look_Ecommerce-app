import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductType, RootState } from '../redux/types'
import { useState, useEffect } from "react";
import { productList } from '../redux/actions';


// type ProductProps = { productsItems: ProductType }

const HooksProduct = () => {
       const dispatch = useDispatch()
       const renderProducts = useSelector((state: RootState) =>{
         return state.productReducer.products
       })
       console.log('renderProducts',renderProducts)
       const getError = useSelector((state: RootState) =>{
         return state.productReducer.error})

       useEffect(() => {
         dispatch(productList (renderProducts))
      
       }, [dispatch, renderProducts]);
       return [getError, renderProducts];
}

export default HooksProduct
