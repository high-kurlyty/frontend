import KurlyLogo from "@/assets/kurly_logo.svg";
import HeartIcon from "@/assets/icons/HeartIcon";
import styled from "styled-components";
import { IUserInfo } from "@/modules/UserModule";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UserService from "@/services/UserService";
import useSessionStorage from "@/hooks/useSessionStorage";

const Container = styled.div`
  position: relative;
  margin: 4px;
`;

const HeaderWrapper = styled.div`
  display: block;
  width: 1050px;
  padding: 0 10px;
  margin: auto;
  box-shadow: 0px 3px 0 rgba(0, 0, 0, 0.04);
`;

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;

  &.gnb {
    justify-content: space-evenly;
  }
`;

const HeaderUser = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: var(--text-first);
  letter-spacing: -0.3px;
  text-decoration: none;
  margin-top: 8px;
  margin-left: auto;
  cursor: pointer;

  span {
    display: inline-block;
    min-width: 38px;
    height: 14px;
    margin-right: 4px;
    padding: 0px 4px;
    border-radius: 30px;
    vertical-align: 0px;
    font-size: 10px;
    color: var(--primary-color);
    letter-spacing: -0.3px;
    text-align: center;
    border: 1px solid var(--primary-color);
    line-height: 14px;
    background-color: white;
  }

  p {
    margin: 0 0 0 4px;
  }
`;

const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;

  img {
    height: 42px;
    cursor: pointer;
  }
`;

const HeaderTitle = styled(Link)`
  min-width: 80px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: var(--primary-color);
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
`;

const HeartIconWrapper = styled.span`
  margin-left: auto;
  height: 27px;
  width: 27px;
`;

const HeaderGNBMenu = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 35px;
  padding-top: 18px;
  line-height: 20px;
  text-align: center;
`;

const HeaderGNBText = styled(Link)`
  height: 20px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-first);
  cursor: pointer;
  letter-spacing: -0.3px;
  text-decoration: none;

  &.isActive {
    color: var(--primary-color);
  }

  &:hover {
    color: var(--primary-color);
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
    text-underline-position: under;
  }
`;

export default function Header() {
  const [user, setUser] = useState<IUserInfo>({
    id: null,
    name: null,
    rank: null,
    profile: null,
    token: null,
  });

  const [userSessionStorage, setUserSessionStorage] =
    useSessionStorage<IUserInfo>("user", {
      id: null,
      name: null,
      rank: null,
      profile: null,
      token: null,
    });

  useEffect(() => {
    function getUserInfo() {
      const defaultValue = `{
        id: null,
        name: null,
        rank: null,
        profile: null,
        token: null,
      }`;
      const value = sessionStorage.getItem("user") ?? defaultValue;
      const userInfo: IUserInfo = JSON.parse(value);
      setUser(userInfo);
    }
    getUserInfo();
  }, []);

  const globalNavigation = [
    { label: "컬리 추천", key: "main", link: "/main" },
    { label: "장바구니 무료공개", key: "cart", link: "/goods-list" },
  ];

  const pathName = window.location.pathname;

  return (
    <Container>
      <HeaderWrapper>
        <SectionWrapper>
          <HeaderUser to="/mypage">
            <span>{user.rank}</span>
            <p>{user.name} 님</p>
          </HeaderUser>
        </SectionWrapper>
        <SectionWrapper>
          <HeaderLogo to="/main">
            <img src={KurlyLogo} alt="마켓컬리 로고"></img>
          </HeaderLogo>
          <HeaderTitle to="/main">마켓컬리</HeaderTitle>
          <HeartIconWrapper>
            <HeartIcon
              fill="var(--light-background)"
              stroke="var(--text-first)"
            />
          </HeartIconWrapper>
        </SectionWrapper>
        <SectionWrapper className="gnb">
          {globalNavigation.map((item) => {
            return (
              <HeaderGNBMenu key={item.key}>
                <HeaderGNBText
                  className={pathName === item.link ? "isActive" : ""}
                  to={item.link}
                >
                  {item.label}
                </HeaderGNBText>
              </HeaderGNBMenu>
            );
          })}
        </SectionWrapper>
      </HeaderWrapper>
    </Container>
  );
}
