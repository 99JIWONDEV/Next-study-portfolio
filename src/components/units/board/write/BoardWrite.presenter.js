import * as S from "./BoardWrite.styles";
export default function BoardWriteUI(props){
  
  return (
    <S.Container>
      <S.Box>
        <S.Header>게시물 등록</S.Header>
        <S.User>
          <S.Writer>
            <S.Name>작성자</S.Name>
            <S.WriterInput type="text" placeholder="이름을 입력해주세요" onChange={props.onChangeWriter}></S.WriterInput>
            <div style={{ fontSize: "10px", color: "red", marginTop: "-10px" }}>{props.writerError}</div>
          </S.Writer>
          <S.Writer>
            <S.Name>비밀번호</S.Name>
            <S.WriterInput type="password" placeholder="비밀번호를 입력해주세요" onChange={props.onChangePassword}></S.WriterInput>
            <div style={{ fontSize: "10px", color: "red", marginTop: "-10px" }}>{props.passwordError}</div>
          </S.Writer>
        </S.User>
        <S.Title>
          <S.Name>제목</S.Name>
          <S.TitleInput type="text" placeholder="제목을 작성해주세요" onChange={props.onChangeTitle}></S.TitleInput>
          <div style={{ fontSize: "10px", color: "red", marginTop: "-10px" }}>{props.titleError}</div>
        </S.Title>
        <S.Content>
          <S.Name>내용</S.Name>
          <S.ContentInput type="text" placeholder="내용을 작성해주세요" onChange={props.onChangeContents}></S.ContentInput>
          <div style={{ fontSize: "10px", color: "red", marginTop: "-10px" }}>{props.contentsError}</div>
        </S.Content>
        <S.Address>
          <S.Name>주소</S.Name>
          <S.AddressSearch>
            <S.AddressInput type="text" placeholder="07250"></S.AddressInput>
            <S.SearchBtn>우편번호 검색</S.SearchBtn>
          </S.AddressSearch>
          <S.AddressSpecific></S.AddressSpecific>
          <S.AddressSpecific></S.AddressSpecific>
        </S.Address>
        <S.Youtube>
          <S.Name>유튜브</S.Name>
          <S.YoutubeInput type="text" placeholder="링크를 복사해주세요"></S.YoutubeInput>
        </S.Youtube>
        <S.Picture>
          <S.Name>사진 첨부</S.Name>
          <S.PictureInput>
            <S.PictureIcon>
              <span style={{ fontSize: "14px" }}>+</span>
              <span>Upload</span>
            </S.PictureIcon>
            <S.PictureIcon>
              <span style={{ fontSize: "14px" }}>+</span>
              <span>Upload</span>
            </S.PictureIcon>
            <S.PictureIcon>
              <span style={{ fontSize: "14px" }}>+</span>
              <span>Upload</span>
            </S.PictureIcon>
          </S.PictureInput>
        </S.Picture>
        <S.Setting>
          <S.Name>메인 설정</S.Name>
          <S.CheckBox>
            <div style={{ gap: "10px", display: "flex" }}>
              <S.CheckBtn type="radio" id="youtube" name="btn"></S.CheckBtn>
              <label for="youtube">유튜브</label>
            </div>
            <div style={{ gap: "10px", display: "flex" }}>
              <S.CheckBtn type="radio" id="photo" name="btn"></S.CheckBtn>
              <label for="photo">사진</label>
            </div>
          </S.CheckBox>
        </S.Setting>
        <S.SubmitBox>
          <S.SubmitBtn onClick={props.onClickSubmit}>등록하기</S.SubmitBtn>
        </S.SubmitBox>
      </S.Box>
    </S.Container>
  )
}