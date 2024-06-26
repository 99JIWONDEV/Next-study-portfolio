import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <S.Container>
      <S.Title>게시판</S.Title>
      <S.Box>
        <S.Row>
          <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
        </S.Row>
        {props.data?.fetchBoards.map((el) => (
          <S.Row key={el._id}>
            <S.ColumnBasic>{String(el._id).slice(-4).toUpperCase()}</S.ColumnBasic>
            <S.ColumnTitle id={el._id} onClick={props.onClickMoveToDetail}>
              {el.title}
            </S.ColumnTitle>
            <S.ColumnBasic>{el.writer}</S.ColumnBasic>
            <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
            {console.log(el._id)}
          </S.Row>
        ))}
      </S.Box>
      <S.Footer>
        <S.Button onClick={props.onClickMoveToNew}>게시물 등록하기</S.Button>
      </S.Footer>
    </S.Container>
  );
}
