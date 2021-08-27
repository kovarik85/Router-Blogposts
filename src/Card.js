import styled from 'styled-components'

const Card = styled.div`
border: 2px solid ${props=>props.color ?? "black"};
border-radius: 5px;
margin:15px;

&:hover{
  color:red
}
`;

export default Card