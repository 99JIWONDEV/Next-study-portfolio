import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 50px 30px 0 30px;
  /* padding: 60px 100px; */
  border-top: 2px solid black;
  border-bottom: 1px solid black;
`;



export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
  font-size: 18px;
  font-weight: 500;

`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  line-height: 52px;
  border-bottom: 1px solid gray;
  &:hover {
    background-color: lightgray;
  }
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`

export const Footer = styled.div`
  width: 1200px;
  margin: 20px 30px;
  display: flex;
  justify-content: end;
`
export const Button = styled.button`
padding: 5px 10px;
border-radius: 5px;
background-color: white;
cursor: pointer;
&:hover {
  background-color: lightgray;
}
`
