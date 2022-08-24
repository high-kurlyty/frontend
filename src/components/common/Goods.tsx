import CartIcon from "@/assets/icons/CartIcon";
import { IGoodsInfo } from "@/modules/GoodsModule";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 405px;
  width: 250px;
  margin: 0 7px;
  cursor: pointer;
  user-select: none;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 250px;
  height: 330px;
  background-color: var(--light-background);
  text-align: center;
`;

const Image = styled.div`
  margin: auto;
  font-size: 40px;
  line-height: 320px;
`;

const CartButton = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  background: var(--secondary-color);
  opacity: 0.87;
`;

const CartIconContainer = styled.div`
  width: 18px;
  position: relative;
  top: calc(50% - 8px);
  margin: 0 auto;
`;

const InformationContainer = styled.div`
  width: 239px;
  height: 110px;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Name = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: justify;
  letter-spacing: -0.26px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Price = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: justify;
  letter-spacing: -0.26px;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  text-align: justify;
  letter-spacing: -0.26px;
  color: var(--text-second);
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function Goods(data: IGoodsInfo) {
  return (
    <>
      <Container>
        <ImageContainer>
          <Image>{data.thumbnail}</Image>
          <CartButton>
            <CartIconContainer>
              <CartIcon color="#fff" />
            </CartIconContainer>
          </CartButton>
        </ImageContainer>
        <InformationContainer>
          <Name>{data.name}</Name>
          <Price>{`${data.price}원`}</Price>
          <Description>{data.description}</Description>
        </InformationContainer>
      </Container>
    </>
  );
}
