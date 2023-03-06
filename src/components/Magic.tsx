import { Button, Text, Menu, MenuButton, MenuItem, MenuList, Flex, Link, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Switch, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaMagic } from 'react-icons/fa'

type MagicProps = {
    colorMode: 'light' | 'dark';
    toggleColorMode: () => void;
    setShades: React.Dispatch<React.SetStateAction<boolean>>;
    shades: boolean;
}

const Magic:React.FC<MagicProps> = ({ setShades, shades, colorMode, toggleColorMode }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const color = useColorModeValue('black', '#EDF2F6')

    return (
        <>
        <Flex>
            <Text _hover={{cursor: 'pointer'}} onClick={onOpen} p={2} borderRadius="5px" bg={colorMode === 'light' ? 'white' : '#1A202C'} color="white" display={{base: "none", md: 'unset'}}><FaMagic color={color} /></Text>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color={color} style={{fontFamily: 'Barlow'}}>Website Settings</ModalHeader>
            <ModalCloseButton color={color} />
            <ModalBody mb={7}>
              <Flex align="center" flexDirection="row">
                <Text color={color} style={{fontFamily: 'Barlow'}}>Color Mode:</Text>
                <Switch defaultChecked={colorMode === 'light'} onChange={toggleColorMode} ml="auto" mt={0.5} size="sm" />
              </Flex>
              <Flex align="center" flexDirection="row">
                <Text color={color} style={{fontFamily: 'Barlow'}}>Shades:</Text>
                <Switch defaultChecked={shades} onChange={() => setShades(!shades)} ml="auto" mt={0.5} size="sm" />
              </Flex>
              <Flex width="400px" align="center" flexDirection="row">
                <Text color={color} style={{fontFamily: 'Barlow'}}>Music:</Text>
                <Switch ml="auto" mt={0.5} size="sm" />
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
        
    )
}
export default Magic;