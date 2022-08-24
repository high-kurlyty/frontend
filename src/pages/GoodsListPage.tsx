import GoodsList from "@/components/common/GoodsList";
import Header from "@/components/common/Header";
import { useMemo, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const Container = styled.div`
  padding-top: 65px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 1050px;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const FilterChip = styled.div`
  margin: 20px 15px;
  display: flex;
  width: 82px;
  height: 40px;
  border-radius: 22px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 41px;
  justify-content: space-evenly;
  background: #f7f7f7;
  color: var(--text-first);
  cursor: pointer;

  &:hover {
    background: #d2beff42;
    color: var(--primary-color);
  }
  &.isSelected {
    background: var(--primary-color);
    color: white;
  }
`;

const Title = styled.span`
  margin-bottom: 15px;
  padding: 5px 0;
  text-align: center;
  font-size: 30px;
  line-height: 1.5;
  letter-spacing: -0.26px;
  font-weight: 300;
  color: var(--text-first);
`;

export default function GoodsListPage() {
  const query = useQuery();
  const id = query.get("category");

  let selectedFilter = "all";
  const defaultFilter = [
    { key: "all", label: "전체", selected: true },
    { key: "superUser", label: "슈퍼유저", selected: false },
    { key: "superStar", label: "슈퍼스타", selected: false },
  ];
  const [filter, setFilters] = useState(defaultFilter);
  const selectFilter = (selectedKey: string) => {
    selectedFilter = selectedKey;
    defaultFilter.map((item) => {
      if (item.key === selectedKey) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
    setFilters(defaultFilter);
  };

  return (
    <div>
      <Header />
      <Container>
        <Wrapper>
          <Title>장바구니 무료공개</Title>
        </Wrapper>
        <Wrapper>
          {filter.map((item) => {
            return (
              <FilterChip
                className={item.selected ? "isSelected" : undefined}
                onClick={() => selectFilter(item.key)}
                key={item.key}
              >
                {item.label}
              </FilterChip>
            );
          })}
        </Wrapper>
        <GoodsList />
        <GoodsList />
        <GoodsList />
      </Container>
    </div>
  );
}
