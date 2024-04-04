import * as S from "./BoardDetail.styles";
import UserIcon from "../../../../../public/images/user_icon.svg";
import LocationIcon from "../../../../../public/images/location_icon.svg";
import LinkIcon from "../../../../../public/images/link_icon.svg";
import ThumbUpIcon from "../../../../../public/images/like_icon.svg";
import ThumbDownIcon from "../../../../../public/images/dislike_icon.svg";
import Image from "next/image";

export default function BoardDetailUI(props){
  return(
    <S.Container>
  <S.Box>
    <S.Header>
      <S.User>
        <Image src={UserIcon} alt="user icon" />
        <S.UserDetail>
          <S.UserName>{props.data?.fetchBoard?.writer}</S.UserName>
          <S.UserDate>{props.data?.fetchBoard?.createdAt}</S.UserDate>
        </S.UserDetail>
      </S.User>
      <S.HeaderIcons>
        <Image src={LocationIcon} alt="location icon" />
        <Image src={LinkIcon} alt="link icon" />
      </S.HeaderIcons>
    </S.Header>
    <S.Contents>
      <S.Title>{props.data?.fetchBoard?.title}</S.Title>
      <S.Content>{props.data?.fetchBoard?.contents}</S.Content>
      <S.LikesIcon>
        <S.LikeIcon>
          <Image src={ThumbUpIcon} alt="like icon" />
          <div style={{ fontSize: "18px", color: "#FFD600" }}>1920</div>
        </S.LikeIcon>
        <S.LikeIcon>
          <Image src={ThumbDownIcon} alt="like icon" />
          <div style={{ fontSize: "18px", color: "#828282" }}>10</div>
        </S.LikeIcon>
      </S.LikesIcon>
    </S.Contents>
  </S.Box>
</S.Container>
  )
}