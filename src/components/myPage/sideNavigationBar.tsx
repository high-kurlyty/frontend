import MoveIcon from "@/assets/icons/MoveIcon";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  float: left;
`;

const Title = styled.div`
  padding: 5px 0 35px 1px;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: #333;
  letter-spacing: -1px;
`;

const InnerContainer = styled.div`
  border: 1px solid #f2f2f2;
  display: flex;
  padding: 14px 0 16px 20px;
  line-height: 30px;
  position: relative;
`;

const MenuTitle = styled.div`
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  color: var(--text-second);
  letter-spacing: -0.3px;
`;

const MenuMoveIconContainer = styled.div`
  width: 6px;
  position: absolute;
  right: 24px;
`;

export default function SideNavigationBar() {
  return (
    <Container>
      <Title>마이컬리</Title>
      <InnerContainer>
        <MenuTitle>장바구니 무료공개</MenuTitle>
        <MenuMoveIconContainer>
          <MoveIcon color="var(--text-second)" />
        </MenuMoveIconContainer>
      </InnerContainer>
    </Container>
  );
}
