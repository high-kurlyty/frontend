import HeartIcon from "@/assets/icons/HeartIcon";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

const EmptyIconContainer = styled.div`
  width: 60px;
  padding-bottom: 5px;
`;

const EmptyMessage = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding-bottom: 5px;
  color: var(--light-gray-color);
`;

const NavigateDiv = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
`;

export default function Empty({ message }: { message: string }) {
  return (
    <Container>
      <EmptyIconContainer>
        <HeartIcon fill="none" stroke="var(--light-gray-color" />
      </EmptyIconContainer>
      <EmptyMessage>{message}</EmptyMessage>
      <NavigateDiv>
        <Link
          to="/goods-list?category=1"
          style={{ textDecoration: "none", color: "var(--text-first)" }}
        >
          장바구니 보러가기
        </Link>
      </NavigateDiv>
    </Container>
  );
}
