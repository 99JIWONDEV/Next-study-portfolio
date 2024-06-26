import { useState } from "react";
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'

export default function BoardWrite(props){
  const [allClick, setAllClick] = useState(false);
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
 

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  

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
  const onClickUpdate = async () => {
    if (!title && !contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput
        },
      })
      router.push(`/boards/${result.data.updateBoard._id}`)
    } catch(error) {
      alert(error.message)
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
    
    onChangeWriter={onChangeWriter}
    onChangePassword={onChangePassword}
    onChangeTitle={onChangeTitle}
    onChangeContents={onChangeContents}
    onClickSubmit={onClickSubmit}
    onClickUpdate={onClickUpdate}
    onClickMoveToList={onClickMoveToList}
    allClick={allClick}
    isEdit={props.isEdit}
    data={props.data}
/>
  )
}