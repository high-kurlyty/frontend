import { useState } from "react";
import styled from "styled-components";

interface IProps {
  follow: boolean;
}

const Container = styled.div`
  height: 80px;
  border-bottom: 1px solid var(--light-gray-color);
  margin: 0 37px;
  display: flex;
  align-items: center;
`;

const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
`;

const Profile = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--light-background);
  text-align: center;
`;

const ProfileImage = styled.div`
  margin: 0 auto;
  font-size: 16px;
  line-height: 60px;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  padding-left: 24px;
`;

const UserName = styled.div`
  flex: 1;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: -0.26px;
`;

const UserInformation = styled.div`
  flex: 1;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: -0.26px;
`;

const Follow = styled.button<IProps>`
  border: none;
  padding: 0;
  width: 64px;
  height: 28px;
  line-height: 26px;
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  background-color: ${(props) =>
    props.follow ? "var(--primary-color)" : "#fff"};
  color: ${(props) => (props.follow ? "#fff" : "var(--primary-color)")};
`;

export default function User() {
  const [isFollowing, setIsFollowing] = useState(false);
  return (
    <>
      <Container>
        <ProfileContainer>
          <Profile>
            <ProfileImage>πΆ</ProfileImage>
          </Profile>
          <InformationContainer>
            <UserName>λ°λλ</UserName>
            <UserInformation>κ°κ·Έμ°λ¨Ό λ°λλμλλ€~</UserInformation>
          </InformationContainer>
        </ProfileContainer>
        <Follow
          follow={isFollowing}
          onClick={() => setIsFollowing(!isFollowing)}
        >
          νλ‘μ°
        </Follow>
      </Container>
    </>
  );
}
