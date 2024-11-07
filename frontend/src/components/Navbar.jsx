import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useColorMode } from './ui/color-mode'
import { LuPlusSquare, LuSun } from 'react-icons/lu'
import {IoMoon} from "react-icons/io5"

const Navbar = () => {
    const {colorMode,toggleColorMode} = useColorMode();
  return (
    <Container maxH={"1140px"} px={4}>
        <Flex h={16} alignItems={"center"}  justifyContent={"space-between"} flexDir={{
            base:"column",
            sm:"row"
        }}>
         <Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bg={"orange.500"}
					bgClip={"text"}
				>
					<Link to={"/"}>Product Store 🛒</Link>
				</Text> 
            <HStack spaceX={2} alignItems={"center"}>
                <Link to={"/create"}>
                <Button>
                    <LuPlusSquare fontSize={20} />
                </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light"?<IoMoon/>:<LuSun size={20}/>}
                </Button>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar