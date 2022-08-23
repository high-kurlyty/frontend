import React, { useContext, useEffect, useState } from "react";
import rightArrowImg from "@/assets/right-arrow.png";
import leftArrowImg from "@/assets/left-arrow.png";

import {
  VisibilityContext,
  slidingWindow,
  getItemsPos,
} from "react-horizontal-scrolling-menu";
import styled from "styled-components";

const ArrowButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 320px;
  right: 1%;
  user-select: none;

  &.isDisabled {
    opacity: 0;
    pointer-events: none;
  }

  img {
    cursor: pointer;
  }
`;

function Arrow({
  disabled,
  onClick,
  img,
}: {
  disabled: boolean;
  onClick: VoidFunction;
  img: any;
}) {
  return (
    <ArrowButton className={disabled ? "isDisabled" : ""}>
      <img src={img} onClick={onClick} />
    </ArrowButton>
  );
}

export function LeftArrow() {
  const {
    items,
    visibleItems,
    getItemById,
    isFirstItemVisible,
    scrollToItem,
    visibleItemsWithoutSeparators,
    initComplete,
  } = useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  const prevGroupItems = slidingWindow(
    items.toItemsKeys(),
    visibleItems
  ).prev();
  const { center } = getItemsPos(prevGroupItems);
  const scrollPrevCentered = () =>
    scrollToItem(getItemById(center), "smooth", "center");

  return (
    <Arrow
      disabled={disabled}
      onClick={scrollPrevCentered}
      img={leftArrowImg}
    ></Arrow>
  );
}

export function RightArrow() {
  const {
    getItemById,
    isLastItemVisible,
    items,
    scrollToItem,
    visibleItems,
    visibleItemsWithoutSeparators,
  } = useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  const nextGroupItems = slidingWindow(
    items.toItemsKeys(),
    visibleItems
  ).next();
  const { center } = getItemsPos(nextGroupItems);
  const scrollNextCentered = () =>
    scrollToItem(getItemById(center), "smooth", "center");

  return (
    <Arrow
      disabled={disabled}
      onClick={scrollNextCentered}
      img={rightArrowImg}
    ></Arrow>
  );
}
