import React, { ReactNode } from "react";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const LinkWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 0;
  right: 0;
`;

const AppBorder = styled.div`
  width: 25rem;
  height: 40rem;
  border: 1px solid gray;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  text-align: center;
`;

type Props = {
  title?: string;
  children?: ReactNode;
};

const Layout: React.FC<Props> = ({ children, title }) => (
  <Wrapper>
    <LinkWrapper>
      <Link href="/" passHref>
        <a>home</a>
      </Link>
      <Link href="/product" passHref>
        <a>products</a>
      </Link>
      <Link href="/category" passHref>
        <a>categories</a>
      </Link>
    </LinkWrapper>

    <AppBorder>
      {title && <Title>{title}</Title>}
      {children}
    </AppBorder>
  </Wrapper>
);

export default Layout;
