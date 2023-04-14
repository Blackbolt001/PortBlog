import styled from "styled-components"

const Container = styled.div`
height:30px;
background-color: #150763;
color: #5ae000;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:bold;
`
const Announcement = () => {
  return (
    <Container>
        “I don’t know where I’m going from here, but I promise it won’t be boring.”
        </Container>
  )
}

export default Announcement;