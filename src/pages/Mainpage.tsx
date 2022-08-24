import styled from "styled-components";
import bannerImg from "@/assets/banner.png";
import Header from "@/components/common/Header";
import GoodsList from "@/components/common/GoodsList";

const Banner = styled.img`
  width: 100%;
  min-width: 1050px;
  height: 370px;
  object-fit: cover;
  pointer-events: none;
`;

export default function MainPage() {
  return (
    <div>
      <Header />
      <Banner src={bannerImg} />
      <GoodsList bascketId={2} />;
      <GoodsList bascketId={4} />;
    </div>
  );
}
