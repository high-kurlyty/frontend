import HeartIcon from "@/assets/icons/HeartIcon";
import { useState } from "react";
import styled from "styled-components";

const ButtonDiv = styled.div`
  display: flex;
  height: 56px;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const HeartButton = styled.div`
  width: 56px;
  background: #ffffff;
  border-top: 1px solid var(--light-gray-color);
  border-radius: 0px 0px 0px 3px;
  cursor: pointer;
`;

const HeartIconContainer = styled.div`
  width: 26px;
  position: relative;
  top: calc(50% - 10px);
  margin: 0 auto;
`;

const SelectAllButton = styled.button`
  width: calc(100% - 56px);
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 0px 0px 3px 0px;
  border: none;
  padding: 0;
  margin: 0 auto;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
`;

export default function Button() {
  const [isHeart, setIsHeart] = useState(false);

  return (
    <ButtonDiv>
      <HeartButton>
        <HeartIconContainer onClick={() => setIsHeart(!isHeart)}>
          <HeartIcon
            fill={isHeart ? "var(--red-color)" : "none"}
            stroke={isHeart ? "none" : "var(--primary-color)"}
          />
        </HeartIconContainer>
      </HeartButton>
      <SelectAllButton
        onClick={() => alert("전체 상품이 장바구니에 담겼습니다!")}
      >
        전체담기
      </SelectAllButton>
    </ButtonDiv>
  );
}
