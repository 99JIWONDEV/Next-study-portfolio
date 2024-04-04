import {
  Address,
  AddressInput,
  AddressSearch,
  AddressSpecific,
  Box,
  CheckBox,
  CheckBtn,
  Container,
  Content,
  ContentInput,
  Header,
  Name,
  Picture,
  PictureIcon,
  PictureInput,
  SearchBtn,
  Setting,
  SubmitBox,
  SubmitBtn,
  Title,
  TitleInput,
  User,
  Writer,
  WriterInput,
  Youtube,
  YoutubeInput,
} from "../../../styles/boards-new";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

// const CREATE_BOARD = gql`
//   mutation createBoard($writer: String!, $password: String!, $title: String!, $contents: String!) {
//     createBoard(createBoardInput: { writer: $writer, password: $password, title: $title, contents: $contents }) {
//       _id
//     }
//   }
// `;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function NewPage() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
  };

  const onClickSubmit = async () => {
    if (writer === "") {
      setWriterError("작성자을 입력해주세요");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요");
    }
    if (contents === "") {
      setContentsError("본문을 입력해주세요");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
            },
          },
        });
        console.log(result.data.createBoard._id);
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <Box>
        <Header>게시물 등록</Header>
        <User>
          <Writer>
            <Name>작성자</Name>
            <WriterInput type="text" placeholder="이름을 입력해주세요" onChange={onChangeWriter}></WriterInput>
            <div style={{ fontSize: "10px", color: "red", marginTop: "-10px" }}>{writerError}</div>
          </Writer>
          <Writer>
            <Name>비밀번호</Name>
            <WriterInput type="password" placeholder="비밀번호를 입력해주세요" onChange={onChangePassword}></WriterInput>
            <div style={{ fontSize: "10px", color: "red", marginTop: "-10px" }}>{passwordError}</div>
          </Writer>
        </User>
        <Title>
          <Name>제목</Name>
          <TitleInput type="text" placeholder="제목을 작성해주세요" onChange={onChangeTitle}></TitleInput>
          <div style={{ fontSize: "10px", color: "red", marginTop: "-10px" }}>{titleError}</div>
        </Title>
        <Content>
          <Name>내용</Name>
          <ContentInput type="text" placeholder="내용을 작성해주세요" onChange={onChangeContents}></ContentInput>
          <div style={{ fontSize: "10px", color: "red", marginTop: "-10px" }}>{contentsError}</div>
        </Content>
        <Address>
          <Name>주소</Name>
          <AddressSearch>
            <AddressInput type="text" placeholder="07250"></AddressInput>
            <SearchBtn>우편번호 검색</SearchBtn>
          </AddressSearch>
          <AddressSpecific></AddressSpecific>
          <AddressSpecific></AddressSpecific>
        </Address>
        <Youtube>
          <Name>유튜브</Name>
          <YoutubeInput type="text" placeholder="링크를 복사해주세요"></YoutubeInput>
        </Youtube>
        <Picture>
          <Name>사진 첨부</Name>
          <PictureInput>
            <PictureIcon>
              <span style={{ fontSize: "14px" }}>+</span>
              <span>Upload</span>
            </PictureIcon>
            <PictureIcon>
              <span style={{ fontSize: "14px" }}>+</span>
              <span>Upload</span>
            </PictureIcon>
            <PictureIcon>
              <span style={{ fontSize: "14px" }}>+</span>
              <span>Upload</span>
            </PictureIcon>
          </PictureInput>
        </Picture>
        <Setting>
          <Name>메인 설정</Name>
          <CheckBox>
            <div style={{ gap: "10px", display: "flex" }}>
              <CheckBtn type="radio" id="youtube" name="btn"></CheckBtn>
              <label for="youtube">유튜브</label>
            </div>
            <div style={{ gap: "10px", display: "flex" }}>
              <CheckBtn type="radio" id="photo" name="btn"></CheckBtn>
              <label for="photo">사진</label>
            </div>
          </CheckBox>
        </Setting>
        <SubmitBox>
          <SubmitBtn onClick={onClickSubmit}>등록하기</SubmitBtn>
        </SubmitBox>
      </Box>
    </Container>
  );
}