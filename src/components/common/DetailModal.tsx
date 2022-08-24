import CloseIcon from "@/assets/icons/CloseIcon";
import styled from "styled-components";
import Button from "../detailModal/button";
import Goods from "../detailModal/goods";
import User from "../detailModal/user";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const WrapModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 20px);
  max-width: 600px;
  height: calc(100% - 5rem);
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 3px;
  z-index: 2;
  word-break: keep-all;
`;

const CloseIconContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 14px;
  z-index: 3;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  text-align: center;
  padding-top: 35px;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  height: calc(100% - 197px);
  width: 260px;
  overflow-y: auto;
`;

const Content = styled.div``;

const Mock_Goods = [
  {
    image: "🐙",
    name: "[홍대주꾸미] 주꾸미 볶음 300g (냉동) 이름이 이렇게 길수도 있다구여 그럴 때는~ 어떻게 되냐면~",
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
];

export default function DetailModal({
  show,
  close,
}: {
  show: boolean;
  close: () => any;
}) {
  return show ? (
    <Container
      // close modal when outside of modal is clicked
      onClick={() => close()}
    >
      <WrapModal
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <CloseIconContainer onClick={close}>
          <CloseIcon color="var(--text-second)" />
        </CloseIconContainer>
        <Title>박나래의 장바구니</Title>
        <User />
        <ContentContainer>
          <Content>
            {Mock_Goods.map((data, idx) => (
              <Goods key={idx} {...data} />
            ))}
          </Content>
        </ContentContainer>
        <Button />
      </WrapModal>
    </Container>
  ) : null;
}
