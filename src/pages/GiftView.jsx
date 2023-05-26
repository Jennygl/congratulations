import sup from '../assets/sup.jpg'
import styled from "styled-components"
import {Link} from 'react-router-dom'
function GiftView() {
  return (
    <Body><Link to="/"><SupGift
    src={sup}
    alt="Present with balloons"
    /></Link>

    <Text><Header>Grattis Erica och Emelie!</Header>
    <Para>Vi vill ta med er på SUP och picknicklunch under en dag i sommar. Vi bestämmer tillsammans när.</Para></Text></Body>
  )
}

export default GiftView
const SupGift = styled.img`
box-shadow: 5px 5px 10px rgb(241, 230, 236), -5px -5px 10px rgb(240, 174, 209);
  border-radius: 30px 5px 5px 30px;
width: 40vw;
height: 60vh;
display: block;
margin-left: 10vw;
object-fit: cover;
@media screen and (max-width: 900px) {
        margin-left:0;
        border-radius: 30px 30px 5px 5px;
    margin-top:2vh;
    width: 40vw;
height: 50vh;
}
 `
const Text = styled.div`
box-shadow: 5px 5px 10px rgb(241, 230, 236), -5px -5px 10px rgb(240, 174, 209);
  border-radius: 5px 30px 30px 5px;
width: 40vw;
height:60vh;
display: block;
margin-right: 10vw;
@media screen and (max-width: 900px) {
        margin-right:0;
        border-radius: 5px 5px 30px 30px;
        margin-bottom:2vh;
        width: 40vw;
height: 50vh;
}
 `

const Body = styled.body`
display:flex;
flex-direction: row;
width: 100vw;
height: 100vh;
background-color: #90D8DF;
@media screen and (max-width: 900px) {
        font-size: 0.8em;
        flex-direction: column;}
 `
const Header = styled.h1`
font-size: 2em;
font-family: 'Poiret One';
color: black;
padding: 2vw;
 `
const Para = styled.p`
font-size: 1.5em;
font-family: 'Poiret One';
color: black;
padding: 2vw;
 `
