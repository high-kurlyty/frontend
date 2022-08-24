import styled from "styled-components";
import Empty from "./empty";
import CartFollowRow from "./cartFollowRow";

const Container = styled.div`
  float: right;
  width: 820px;
`;

const HeaderArticle = styled.div`
  border-bottom: 2px solid var(--text-first);
  padding: 5px 0 34px;
`;
const Title = styled.span`
  height: 36px;
  padding-top: 5px;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #333;
  letter-spacing: -0.5px;
`;

const Description = styled.span`
  padding-left: 11px;
  font-size: 14px;
  color: #999;
  line-height: 20px;
  letter-spacing: -0.3px;
  vertical-align: 3px;
`;

const PickContent = styled.div`
  padding: 0 20px;
  min-height: 557px;
  display: flex;
  flex-direction: column;
`;

interface ITypeData {
  [key: string]: {
    [key: string]: string;
  };
}

const TYPE_DATA: ITypeData = {
  cart: {
    title: "찜한 장바구니",
    description: "찜한 장바구니는 최대 200개까지 저장됩니다.",
    emptyMessage: "찜한 장바구니가 없습니다.",
  },
  follow: {
    title: "팔로우",
    description: "팔로우하는 슈퍼스타/슈퍼유저는 최대 200명까지 저장됩니다.",
    emptyMessage: "팔로우하는 슈퍼스타/슈퍼유저가 없습니다.",
  },
};

const MOCK_DATA = [
  {
    thumbnail: "👍🏻",
    userType: "슈퍼유저",
    title: "면 요리를 제일 많이 먹은 vkdlfl0224님의 장바구니",
  },
  {
    thumbnail: "❌",
    userType: "슈퍼스타",
    title: "걍민경의 장바구니",
  },
  {
    thumbnail: "❌",
    userType: "슈퍼스타",
    title: "걍민경의 장바구니",
  },
  {
    thumbnail: "❌",
    userType: "슈퍼스타",
    title: "걍민경의 장바구니",
  },
  {
    thumbnail: "❌",
    userType: "슈퍼스타",
    title: "걍민경의 장바구니",
  },
  {
    thumbnail: "❌",
    userType: "슈퍼스타",
    title: "걍민경의 장바구니",
  },
];

export default function ViewPickList({ type }: { type: string }) {
  // 찜한 장바구니 목록, 팔로우한 목록 length !== 0인지 판별
  const empty = false;
  return (
    <Container>
      <HeaderArticle>
        <Title>{`${TYPE_DATA[type].title}(${0})`}</Title>
        <Description>{TYPE_DATA[type].description}</Description>
      </HeaderArticle>
      <PickContent>
        {empty ? (
          <Empty message={TYPE_DATA[type].emptyMessage} />
        ) : (
          MOCK_DATA.map((data, idx) => (
            <CartFollowRow key={idx} {...data} type={type} />
          ))
        )}
      </PickContent>
    </Container>
  );
}
