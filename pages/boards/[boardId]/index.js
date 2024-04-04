import { Box, Container, Content, Contents, Header, HeaderIcons, LikeIcon, LikesIcon, Title, User, UserDate, UserDetail, UserName } from "../../../styles/boardsDetail";
import UserIcon from "../../../public/images/user_icon.svg";
import LocationIcon from "../../../public/images/location_icon.svg";
import LinkIcon from "../../../public/images/link_icon.svg";
import ThumbUpIcon from "../../../public/images/like_icon.svg";
import ThumbDownIcon from "../../../public/images/dislike_icon.svg";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query  fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function DetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
    
  });
  console.log(router.query._id);
  return (
    <Container>
      <Box>
        <Header>
          <User>
            <Image src={UserIcon} alt="user icon" />
            <UserDetail>
              <UserName>{data?.fetchBoard?.writer}</UserName>
              <UserDate>{data?.fetchBoard?.createdAt}</UserDate>
            </UserDetail>
          </User>
          <HeaderIcons>
            <Image src={LocationIcon} alt="location icon" />
            <Image src={LinkIcon} alt="link icon" />
          </HeaderIcons>
        </Header>
        <Contents>
          <Title>{data?.fetchBoard?.title}</Title>
          <Content>{data?.fetchBoard?.contents}</Content>
          <LikesIcon>
            <LikeIcon>
              <Image src={ThumbUpIcon} alt="like icon" />
              <div style={{ fontSize: "18px", color: "#FFD600" }}>1920</div>
            </LikeIcon>
            <LikeIcon>
              <Image src={ThumbDownIcon} alt="like icon" />
              <div style={{ fontSize: "18px", color: "#828282" }}>10</div>
            </LikeIcon>
          </LikesIcon>
        </Contents>
      </Box>
    </Container>
  );
}