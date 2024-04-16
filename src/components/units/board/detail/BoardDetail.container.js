import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const onClickDelete = (event) => {
    if(confirm("정말 삭제하시겠습니까?")){
      deleteBoard({
        variables: {
          boardId: event.target.id,
        },
        refetchQueries: [{ query: FETCH_BOARD }],
      });
      router.push("/boards");
    }
    else{
      return;
    }
  };

  const onClickMoveToList = () => {
    router.push("/boards");
  };

  return <BoardDetailUI data={data} onClickMoveToList={onClickMoveToList} onClickDelete={onClickDelete} />;
}
