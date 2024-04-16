import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  margin: 50px 30px;
  padding: 60px 100px;
  border: 1px solid black;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  border-bottom: 1px solid #828282;
  padding: 20px 0;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserName = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

export const UserDate = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #828282;
`;

export const HeaderIcons = styled.div`
  display: flex;
  gap: 20px;
`;

export const Contents = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  font-size: 36px;
  font-weight: 700;
`;

export const Content = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

export const LikesIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 48px;
  margin-top: 160px;
`

export const LikeIcon = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

export const Footer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: end;
margin-top: 50px;
gap: 20px;
`

export const ListBtn = styled.button`
display: flex;
background-color: #FFD600;
border: none;
color: black;
width: 109px;
height: 42px;
font-size: 16px;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

export const DeleteBtn = styled.button` 
display: flex;
border: none;
color: black;
width: 109px;
height: 42px;
font-size: 16px;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`