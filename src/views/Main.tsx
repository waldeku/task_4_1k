import { ReactNode } from "react";
import Bar from "components/Bar/Bar";

import { BAR_VARIANTS } from "components/Bar/Bar";

import {
  ContentWrapper,
  ScrollWrapper,
  ViewWrapper,
  Wrapper,
} from "./Main.styled";

interface IMain {
  children: ReactNode;
}

const Main = ({ children }: IMain) => {
  return (
    <ViewWrapper>
      <Bar element="header" type={BAR_VARIANTS.TOP}>
        A
      </Bar>
      <Wrapper>
        <ScrollWrapper>
          <Bar element="aside" type={BAR_VARIANTS.SIDEBAR}>
            B
          </Bar>
          <ContentWrapper>{children}</ContentWrapper>
          <Bar element="aside" type={BAR_VARIANTS.SIDEBAR}>
            B
          </Bar>
        </ScrollWrapper>
      </Wrapper>
      <Bar element="footer" type={BAR_VARIANTS.BOTTOM}>
        D
      </Bar>
    </ViewWrapper>
  );
};

export default Main;
