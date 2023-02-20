import Head from 'next/head'
import Image from 'next/image'
import { Divider, Flex, Text } from '@chakra-ui/react';
export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Hibbs</title>
        <meta name='description' content='I hope this tutorial is helpful for you' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Gloock&display=swap" rel="stylesheet"/>
      </Head>
      <Flex justifyContent="center">
        <Flex mt={5} px={10} py={5} bg="#181818" width="90%" maxWidth="1024px" borderRadius="10px" border="1px solid #212121" flexDirection="column">
          <Text color="bisque" style={{fontFamily: 'Gloock'}} fontSize="4xl" fontWeight={700}>Matt Hibbs</Text>
          <Flex>
          <Flex>
            <Text _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Portfolio</Text>
            <Text _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Research</Text>
            <Text _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Contact</Text>
          </Flex>
          <Flex ml="auto">
            <Text _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Resume</Text>
            <Text _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Blog</Text>
          </Flex>
          </Flex>
          <Divider mt={1} mb={3} bgColor="white" />
          <Text fontWeight={500}>I&apos;m a student at the University of Florida pursuing a Bachelor&apos;s degree in Computer Science. I am passionate about mathematical modeling, UI design, high performance computing, cryptocurrencies, and web development. I&apos;m proficient in object-oriented programming languages like C++, Python, and TypeScript. I&apos;ve worked on various collaborative projects, fascilitating frontend interfaces, API designs, and backend development. Additionally, I&apos;ve dabbled in different domains of knowledge from building query parsers, CUDA programming, and implementing various statistical methods.</Text>
          <Text mt={3} fontWeight={500}>My industry experience includes working as a Software Engineer at FAANG, Tech Unicorns, and F50 companies</Text>
        </Flex>
      </Flex>
    </>
  )
}
