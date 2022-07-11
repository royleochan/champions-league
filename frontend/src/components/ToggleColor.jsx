import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ToggleColor = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === "light";

  return (
    <IconButton
      fontSize={22}
      aria-label="Toggle Mode"
      variant="solid"
      bg={isLight ? "#BAB8B7" : "#3A5C7E"}
      color={isLight ? "dark" : "light"}
      icon={isLight ? <MdDarkMode /> : <MdLightMode />}
      _focus={{ boxShadow: "none" }}
      onClick={toggleColorMode}
    />
  );
};

export default ToggleColor;
