import Head from 'next/head'
import { Divider, Flex, Text, Image } from '@chakra-ui/react';
export default function Home() {
  return (
    <>
      <Head>
        <title>Matthew Hibbs</title>
        <meta name='description' content='I hope this tutorial is helpful for you' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Gloock&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Caladea:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <Flex height="800px" justifyContent="center" backgroundImage="linear-gradient(#000 0.5px, transparent 0.5px, transparent calc(100% - 0.5px), #000 calc(100% - 0.5px)), linear-gradient(90deg, #000 0.5px, transparent 0.5px, transparent calc(100% - 0.5px), #000 calc(100% - 0.5px))" backgroundSize="0.623076923076925% 0.233333333333334%;">
        <Flex mt={[2,5,5,5]} px={[3, 4, 6, 8]} py={[2,2,4,4]}bg="#181818" width=
        {["94%","90%"]} maxWidth="906px" borderRadius="6px" border="1px solid #212121" flexDirection="column">
          <Flex align="center">
            <Image mr={3} height="38px" width="38px" src="/images/bg.png" />
            <Text color="bisque" style={{fontFamily: 'Caladea'}} fontSize="24.5pt" fontWeight={700}>Matthew Hibbs</Text>
            
          </Flex>
          <Flex>
            <Flex flexWrap="wrap">
              <Text fontSize="11.5pt" _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Portfolio</Text>
              <Text fontSize="11.5pt" _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Research</Text>
              <Text fontSize="11.5pt" _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Involvement</Text>
              <Text fontSize="11.5pt" _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Contact</Text>
            </Flex>
            <Flex flexWrap="wrap" ml={["0", "auto", "auto", "auto"]}>
              <Text fontSize="11.5pt" _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Resume</Text>
              <Text fontSize="11.5pt" _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Blog</Text>
            </Flex>
          </Flex>
          <Flex borderBottom="1px solid lightgrey" mt={1} mb={3}></Flex>
          <Text fontSize="11pt" fontWeight={500}>I&apos;m a student at the University of Florida pursuing a Bachelor&apos;s degree in Computer Science. I am passionate about mathematical modeling, UI design, high performance computing, cryptocurrencies, and web development. I&apos;m proficient in object-oriented programming languages like C++, Python, and TypeScript. I&apos;ve worked on various collaborative projects, fascilitating frontend interfaces, API designs, and backend development. Additionally, I&apos;ve dabbled in different domains of knowledge from building query parsers, CUDA programming, implementing web sockets, to exploring various statistical methods.</Text>
          <Text fontSize="11pt" mt={3} fontWeight={500}>My industry experience includes working as a Software Engineer at FAANG, Tech Unicorns, and F50 companies</Text>
          {/* <Flex justifyContent="center" mt={8} mb={8} flexWrap="wrap">
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="265px" src="/images/projects/sherlock.png" />
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="230px" src="/images/projects/tcp.png" />
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="230px" src="/images/projects/educatus.jpeg" />
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="230px" src="/images/projects/haikai.png" />
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="230px" src="/images/projects/demogorgn.png" />
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="230px" src="/images/projects/plexy.png" />
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="230px" src="/images/projects/ds.png" />
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="230px" src="/images/projects/sabu.png" />
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="230px" src="/images/projects/gstatsim.png" />
          </Flex> */}
        </Flex>
      </Flex>
    </>
  )
}
