import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  margin: 50px 30px;
  padding: 60px 102px;
  border: 1px solid black;
`;

export const Header = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

export const User = styled.div`
  margin-top: 80px;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  width: 100%;
`;

export const Writer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const WriterInput = styled.input`
  width: 486px;
  height: 52px;
  font-size: 16px;
  padding-left: 16px;
`;

export const Title = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 21px;
  align-items: start;
`;

export const TitleInput = styled.input`
  width: 98%;
  height: 52px;
  font-size: 16px;
  padding-left: 16px;
`;

export const Content = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 21px;
  align-items: start;
`;

export const ContentInput = styled.textarea`
  width: 97%;
  height: 480px;
  font-size: 16px;
  padding: 16px;
`;

export const Address = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 21px;
  align-items: start;
`;

export const AddressSearch = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

export const AddressInput = styled.input`
  width: 61px;
  height: 52px;
  font-size: 16px;
  display: flex;
  padding-left: 16px;
`;

export const SearchBtn = styled.button`
  width: 124px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

export const AddressSpecific = styled.input`
  width: 98%;
  height: 52px;
  font-size: 16px;
  display: flex;
  padding-left: 16px;
`;

export const Youtube = styled.div`
  margin-top: 37px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 21px;
  align-items: start;
`;

export const YoutubeInput = styled.input`
  width: 98%;
  height: 52px;
  font-size: 16px;
  padding-left: 16px;
`;

export const Picture = styled.div`
  margin-top: 37px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
`;

export const PictureInput = styled.div`
  display: flex;
  width: auto;
  gap: 24px;
`;

export const PictureIcon = styled.div`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Setting = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
`;

export const CheckBox = styled.div`
  display: flex;
  gap: 20px;
`

export const CheckBtn = styled.input`
`

export const SubmitBox = styled.div`
width: 100%;
margin-top: 80px;
display: flex;
justify-content: center;
gap: 24px;
`

export const SubmitBtn = styled.button`
width: 179px;
height: 52px;
background-color: ${(props) => (props.allClick ? "#FFD600" : "")};
border: none;
font-size: 16px;
font-weight: 500;
color: black;
cursor: ${(props) => (props.allClick ? "pointer" : "")};
&:hover {
    background-color: ${(props) => (props.allClick ? "#FFD000" : "")};
  }

`
export const ListBtn = styled.button`
width: 179px;
height: 52px;
background-color: #FFD600;
border: none;
font-size: 16px;
font-weight: 500;
color: black;
cursor: pointer;
`