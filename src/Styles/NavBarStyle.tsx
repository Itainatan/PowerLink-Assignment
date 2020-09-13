// Imports 
import styled from "styled-components";


// Consts
export const NavBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FF007F; 
  height: 8vh;
  font-size: 22px;
  padding: 0em 1em;
  color: white;
  @media (max-width: 560px) {
    flex-direction: column;
    height: 16vh;
  }
`