import React,{useState} from "react"
import Nav from "./Nav"
import Container from "./Container"
import Modal from "./Container"

export default function Menu() {

  const [cart, setCart] = useState([]);

  return (
    <>
        <Nav totalOrder={cart}/>
        <Container order={cart} setOrder={setCart}/>
   
    </>
  )
}