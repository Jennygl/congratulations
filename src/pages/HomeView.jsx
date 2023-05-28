import present from '../assets/balloon.jpg'
import styled from "styled-components"
import {Link} from 'react-router-dom'
function HomeView() {
  return (
    <Body>
        <HomeHeader>Grattis kompis</HomeHeader>
 <Link to="/present">
    <Gift
        src={present}
        alt="Present with balloons"/>
</Link>
    <HomeHeader>önskar Jenny</HomeHeader>
    </Body>
  )
}

export default HomeView

const Body = styled.body`
display:flex;
flex-direction: column;
justify-content: center;
width: 100vw;
height: 100vh;
background-color: #90D8DF;
 `
const HomeHeader = styled.h1 `
font-family: 'Poiret One';
font-size: 3em;
`


const Gift = styled.img`
width: 30vw;
display: block;
margin-left: auto;
margin-right: auto;`
