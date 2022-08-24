import DetailModal from "@/components/common/DetailModal";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  padding: 24px 0;
  background-color: #fff;
  border-top: 1px solid var(--light-background);
`;

const Thumbnail = styled.div<IProps>`
  width: 60px;
  height: ${(props) => (props.type === "cart" ? "78px" : "60px")};
  margin: 1px 0;
  flex-shrink: 0;
  border-radius: ${(props) => (props.type === "cart" ? "none" : "50%")};
  background-color: var(--light-background);
`;

const ThumbnailImage = styled.div<IProps>`
  font-size: 18px;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  line-height: ${(props) => (props.type === "cart" ? "78px" : "60px")};
`;

const Information = styled.div`
  margin: 0 20px;
  font-size: 16px;
  flex-grow: 1;
`;

const Type = styled.div`
  display: inline-block;
  min-width: 38px;
  height: 14px;
  margin-right: 4px;
  padding: 0px 4px;
  border-radius: 30px;
  vertical-align: 0px;
  font-size: 10px;
  color: var(--primary-color);
  letter-spacing: -0.3px;
  text-align: center;
  border: 1px solid var(--primary-color);
  line-height: 14px;
  background-color: white;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeleteButton = styled.button`
  margin-bottom: 8px;
  width: 104px;
  height: 36px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #ddd;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  line-height: 36px;
`;

const ActivateButton = styled.button`
  width: 104px;
  height: 36px;
  border-radius: 4px;
  background-color: #fff;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  line-height: 31px;
  display: flex;
  justify-content: space-evenly;
`;

interface IProps {
  type: string;
}

interface ICartFollowRow {
  thumbnail: string;
  userType: string;
  title: string;
  type: string;
}
export default function CartFollowRow({
  thumbnail,
  userType,
  title,
  type,
}: ICartFollowRow) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Container>
        <Thumbnail type={type}>
          <ThumbnailImage type={type}>{thumbnail}</ThumbnailImage>
        </Thumbnail>
        <Information>
          <Type>{userType}</Type>
          <Title>{title}</Title>
        </Information>
        <ButtonArea>
          <DeleteButton>삭제</DeleteButton>
          <ActivateButton onClick={() => setModal(true)}>
            장바구니 보기
          </ActivateButton>
        </ButtonArea>
      </Container>
      <DetailModal show={modal} close={() => setModal(!modal)} />
    </>
  );
}
