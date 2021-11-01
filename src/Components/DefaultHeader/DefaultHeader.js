import React from "react";
import { Box, Flex, Text } from "rebass";
import { Link } from "theme-ui";

const DefaultHeader = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        justifyItems: "center",
        textAlign: "center",
      }}
    >
      <Flex px={2} color="white" bg="black" alignItems="center" width={"100%"}>
        <Text p={2} fontWeight="bold">
          User
        </Text>
        <Box mx="auto"></Box>
        <Flex
          px={2}
          color="white"
          bg="black"
          alignItems="center"
          justifyContent={"space-between"}
          sx={{
            width: "50%",
            "@media screen and (min-width:720px)": {
              width: "20%",
            },
          }}
        >
          <div>
            <Link
              href="/"
              sx={{
                width: "100px",
                color: "#bababa",
                textDecoration: "none",
                ":hover": {
                  color: "#ffffff",
                },
              }}
            >
              View-1
            </Link>
          </div>
          <div>
            <Link
              href="/viewtwo"
              sx={{
                width: "100px",
                color: "#bababa",
                textDecoration: "none",
                ":hover": {
                  color: "#ffffff",
                },
              }}
            >
              View-2
            </Link>
          </div>
        </Flex>
      </Flex>
    </div>
  );
};

export default DefaultHeader;
