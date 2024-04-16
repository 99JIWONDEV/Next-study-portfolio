import { useState } from "react";
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'

export default function BoardWrite(){
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [allClick, setAllClick] = useState(false);

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value && password && title && contents) {
      setAllClick(true);
    }else{
      setAllClick(false);
    }
    if (event.target.value !== "") {
      setWriterError("");
      
    }
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value && writer && title && contents) {
      setAllClick(true);
    }else{
      setAllClick(false);
    }
    if (event.target.value !== "") {
      setPasswordError("");
      
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value && password && writer && contents) {
      setAllClick(true);
    }else{
      setAllClick(false);
    }
    if (event.target.value !== "") {
      setTitleError("");
      
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value && password && title && writer) {
      setAllClick(true);
    }else{
      setAllClick(false);
    }
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
  const onClickMoveToList = () => {
    router.push("/boards");
  }

  return (
    <BoardWriteUI
    writerError={writerError}
    passwordError={passwordError}
    titleError={titleError}
    contentsError={contentsError}
    allClick={allClick}
    onChangeWriter={onChangeWriter}
    onChangePassword={onChangePassword}
    onChangeTitle={onChangeTitle}
    onChangeContents={onChangeContents}
    onClickSubmit={onClickSubmit}
    onClickMoveToList={onClickMoveToList}
/>
  )
}