import { ReactNode } from "react";

import { Wrapper } from "./Bar.styled";

export enum BAR_VARIANTS {
  TOP,
  BOTTOM,
  SIDEBAR,
}

interface IBar {
  children: ReactNode;
  type: BAR_VARIANTS;
  element: "header" | "footer" | "aside";
}

const Bar = ({ children, type, element }: IBar) => {
  return (
    <Wrapper as={element} type={type}>
      {children}
    </Wrapper>
  );
};

export default Bar;
