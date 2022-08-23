import Header from "@/components/common/Header";
import SideNavigationBar from "@/components/myPage/sideNavigationBar";
import ViewPickList from "@/components/myPage/viewPickList/viewPickList";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 65px;
`;

export default function MyPage() {
  return (
    <>
      <Header />
      <Container>
        <SideNavigationBar />
        <ViewPickList type="cart" />
        <ViewPickList type="follow" />
      </Container>
    </>
  );
}
