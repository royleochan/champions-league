import React from "react";
import { Box } from "@chakra-ui/react";

const BaseCard = ({ children, sx }) => {
  return (
    <Box
      sx={{
        bgColor: "rgb(255, 255, 255, 0.1)",
        borderRadius: 16,
        padding: 6,
        minWidth: "34vw",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default BaseCard;
