import { useState } from "react";
import { Box, YellowBox } from "./BlueBox.styled";

const BlueBox = () => {
  const [isMoved, setIsMoved] = useState(false);
  return (
    <Box>
      <YellowBox onMouseEnter={() => setIsMoved(true)} isMoved={isMoved} />
    </Box>
  );
};

export default BlueBox;
