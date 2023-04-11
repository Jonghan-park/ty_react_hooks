import React, { ChangeEvent, FormEvent, useEffect } from 'react'
import { useState } from 'react';
import ShowProduct from './ShowProduct';

export interface Product {
  id: number;
  name: string;
  price: number;
  qty: number;
}

const UseStateComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
    qty: 1 
   })

  const handleNumber = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    product.id = Date.now()
    setProducts([...products, product])
  }

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <div className="hooks_container">
      <h1>useState</h1>
      <form onSubmit={handleNumber}>
      <div className="hooks_contents__input">
        <label htmlFor="name">Product Name: </label>
        <input type="text" name='name'  value={product.name} onChange={(e: ChangeEvent<HTMLInputElement>)=>setProduct({...product, name: e.target.value})} />

        <label htmlFor="price">Product Price: </label>
        <input type="number" name='price' min="1000" step="1000" value={product.price} onChange={(e: ChangeEvent<HTMLInputElement>)=>setProduct({...product, price: parseInt(e.target.value)})} />

        <label htmlFor="qty">Product Quantity: </label>
        <input type="number" name='qty' min='1' value={product.qty} onChange={(e: ChangeEvent<HTMLInputElement>)=>setProduct({...product, qty: parseInt(e.target.value)})} />

        <button type='submit'>Add</button>
      </div>
      </form>
      <div className="spread_contents">
        {products.map((p: Product) => {
          return  <ShowProduct key={p.id} id={p.id} name={p.name} price={p.price} qty={p.qty} /> 
        })}
      </div>
    </div>
  )
}

export default UseStateComponent