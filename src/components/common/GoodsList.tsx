import { useEffect, useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import styled from "styled-components";
import Goods from "@/components/common/Goods";
import DetailModal from "@/components/common/DetailModal";
import { IGoodsInfo } from "@/modules/GoodsModule";
import { LeftArrow, RightArrow } from "@/components/goodsList/Arrow";
import usePreventBodyScroll from "@/components/goodsList/preventScroll";
import GoodsServices from "@/services/GoodsServices";

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

const ScrollFooter = () => <span></span>;

export default function GoodsList({ bascketId }: { bascketId: number }) {
  const defaultGoods = {
    id: null,
    name: null,
    category: null,
    price: null,
    thumbnail: null,
    description: null,
  };
  const [goodsList, setGoodsList] = useState<IGoodsInfo[]>([defaultGoods]);
  const [title, setTitle] = useState<string | null>(null);
  const [theme, setTheme] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    async function getGoodsList() {
      const bascket: any = await GoodsServices.getGoodsList();
      const goodsList = bascket[bascketId].products;
      setGoodsList(goodsList);
      setTitle(`${bascket[bascketId].user.name}님의 장바구니`);
      setTheme(bascket[bascketId].thumbnail);
    }
    getGoodsList();
  }, []);
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  return (
    <>
      <Container>
        <TitleWrapper>
          {theme ? <Title>{theme}</Title> : null}
          {description ? (
            <Title className="description">{description}</Title>
          ) : null}
          <Title className="title" onClick={() => setModal(true)}>
            {title} 〉{" "}
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
            {goodsList.map((goods: IGoodsInfo, idx) => (
              <Goods key={idx} {...goods} />
            ))}
          </GoodsScrollList>
        </ScrollMenuWrapper>
        <DetailModal show={modal} close={() => setModal(!modal)} />
      </Container>
    </>
  );
}
