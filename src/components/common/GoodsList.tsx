import { useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import styled from "styled-components";
import Goods from "@/components/common/Goods";
import DetailModal from "@/components/common/DetailModal";
import { IGoodsInfo } from "@/modules/GoodsModule";
import { LeftArrow, RightArrow } from "@/components/goodsList/Arrow";
import usePreventBodyScroll from "@/components/goodsList/preventScroll";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 40px 0;
`;

const ScrollMenuWrapper = styled.div`
  height: 415px;
  width: 1180px;
  margin: auto;
  padding-top: 20px;

  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }
`;

const GoodsScrollList = styled(ScrollMenu)`
  height: 415px;
  width: 1050px;
`;

const TitleWrapper = styled.div`
  width: 1050px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  padding: 5px 0;
  text-align: center;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: -0.26px;
  font-weight: 500;
  color: var(--text-first);

  &.title {
    cursor: pointer;
  }

  &.description {
    color: var(--primary-color);
    font-weight: 300;
    font-size: 24px;
  }
`;

const Mock_Title = "쭈꾸미와 아보카도의 조합";
const Mock_Description = "컬리에서 뽑은 올해의 장바구니";
const Mock_Theme = "☔️";

const Mock_Goods = [
  {
    image: "🐙",
    name: "[홍대주꾸미] 주꾸미 볶음 300g (냉동) 이름이 이렇게 길수도 있다구여 그럴 떄는~",
    price: "6800",
    description: "매콤달콤한 매력의 밥도둑",
  },
  {
    image: "🐙",
    name: "[홍대주꾸미] 주꾸미 볶음 300g (냉동)",
    price: "6800",
    description: "매콤달콤한 매력의 밥도둑",
  },
  {
    image: "🐙",
    name: "[홍대주꾸미] 주꾸미 볶음 300g (냉동)",
    price: "6800",
    description: "매콤달콤한 매력의 밥도둑",
  },
  {
    image: "🐙",
    name: "[홍대주꾸미] 주꾸미 볶음 300g (냉동)",
    price: "6800",
    description: "매콤달콤한 매력의 밥도둑",
  },
  {
    image: "🐙",
    name: "[홍대주꾸미] 주꾸미 볶음 300g (냉동)",
    price: "6800",
    description: "매콤달콤한 매력의 밥도둑",
  },
  {
    image: "🥑",
    name: "[KF365] 아보카도 200g (1개)",
    price: "1980",
    description: "숲 속의 버터",
  },
  {
    image: "🥑",
    name: "[KF365] 아보카도 200g (1개)",
    price: "1980",
    description: "숲 속의 버터",
  },
  {
    image: "🥑",
    name: "[KF365] 아보카도 200g (1개)",
    price: "1980",
    description: "숲 속의 버터",
  },
  {
    image: "🥑",
    name: "[KF365] 아보카도 200g (1개)",
    price: "1980",
    description: "숲 속의 버터",
  },
  {
    image: "🥑",
    name: "[KF365] 아보카도 200g (1개)",
    price: "1980",
    description: "숲 속의 버터",
  },
  {
    image: "🥑",
    name: "[KF365] 아보카도 200g (1개)",
    price: "1980",
    description: "숲 속의 버터",
  },
];

const ScrollFooter = () => <span></span>;

export default function GoodsList(cartId: any) {
  console.log(cartId);
  const items = Mock_Goods;
  const description = Mock_Description;
  const theme = Mock_Theme;
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const [modal, setModal] = useState(false);

  return (
    <>
      <Container>
        <TitleWrapper>
          {theme ? <Title>{theme}</Title> : null}
          {description ? (
            <Title className="description">{description}</Title>
          ) : null}
          <Title className="title" onClick={() => setModal(true)}>
            {Mock_Title} 〉{" "}
          </Title>
        </TitleWrapper>
        <ScrollMenuWrapper
          onMouseEnter={disableScroll}
          onMouseLeave={enableScroll}
        >
          <GoodsScrollList
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            Footer={ScrollFooter}
          >
            {items.map((item: IGoodsInfo, idx) => (
              <Goods key={idx} {...item} />
            ))}
          </GoodsScrollList>
        </ScrollMenuWrapper>
        <DetailModal show={modal} close={() => setModal(!modal)} />
      </Container>
    </>
  );
}
function setModal(arg0: boolean): void {
  throw new Error("Function not implemented.");
}
