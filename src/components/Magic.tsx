import { Button, Text, Menu, MenuButton, MenuItem, MenuList, Flex, Link, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Switch } from '@chakra-ui/react';
import React from 'react';
import { FaMagic } from 'react-icons/fa'

type MagicProps = {
    setShades: React.Dispatch<React.SetStateAction<boolean>>;
    shades: boolean;
}

const Magic:React.FC<MagicProps> = ({ setShades, shades }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Flex>
            <Text _hover={{cursor: 'pointer'}} onClick={onOpen} p={2} borderRadius="5px" bg="white" color="white" display={{base: "none", md: 'unset'}}><FaMagic color="black" /></Text>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader style={{fontFamily: 'Barlow'}}>Website Settings</ModalHeader>
            <ModalCloseButton />
            <ModalBody mb={7}>
              <Flex align="center" flexDirection="row">
                <Text style={{fontFamily: 'Barlow'}}>Color Mode:</Text>
                <Switch defaultChecked ml="auto" mt={0.5} size="sm" />
              </Flex>
              <Flex align="center" flexDirection="row">
                <Text style={{fontFamily: 'Barlow'}}>Shades:</Text>
                <Switch defaultChecked={shades} onChange={() => setShades(!shades)} ml="auto" mt={0.5} size="sm" />
              </Flex>
              <Flex width="400px" align="center" flexDirection="row">
                <Text style={{fontFamily: 'Barlow'}}>Music:</Text>
                <Switch ml="auto" mt={0.5} size="sm" />
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
        
    )
}
export default Magic;