import Head from 'next/head'
import { Divider, Flex, Text, Image, UnorderedList, ListItem, useColorMode, useColorModeValue, Link } from '@chakra-ui/react';
import { FaMagic } from 'react-icons/fa'
import Magic from '@/components/Magic';
import { useState } from 'react';

export default function Home() {
  const [shades, setShades] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', '#1A202C')
  const color = useColorModeValue('black', '#EDF2F6')
  return (
    <>
      <Head>
        <title>Matt Hibbs</title>
        <meta name='description' content='I hope this tutorial is helpful for you' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Calistoga&family=Indie+Flower&display=swap" rel="stylesheet" />
      </Head>
      <Flex justifyContent="center" bg={bg}>
        <Flex mb={10} px={[3, 4, 6, 8]} py={[2,2,4,4]} width=
        {["94%","90%"]} maxWidth="724px" flexDirection="column">
          <Flex ml="auto">
            <Magic colorMode={colorMode} toggleColorMode={toggleColorMode} setShades={setShades} shades={shades} />
          {/* <Text _hover={{cursor: 'pointer', bg: 'lightgrey'}} border="1px solid lightgrey" borderRadius="5px" p={2} ><FaMagic color="grey" /></Text> */}
          </Flex>
          <Flex mt={[2,4,4,
        4]} flexDirection="column" align="center" justifyContent="center">
            <Text color={color} style={{fontFamily: 'Indie Flower'}} fontSize="32px" fontWeight={700} fontStyle="bold">matthew hibbs</Text>
            <Image mt={5} height="200px" width="200px" src={shades ? "/images/matt6.png" : "/images/matt2.png"} />
          </Flex>
          <Flex mb={5}  mt={7} flexDirection="column">
            <Text color={color} textAlign="center" style={{fontFamily: 'Barlow'}} fontSize="19.5px" fontWeight="600" lineHeight="28px">I&apos;m a software engineer based in New York. I read <Text fontSize="19.5px" fontWeight="600" lineHeight="28px" borderBottom="3px solid" as="span" _hover={{cursor: 'pointer'}}>36 books</Text> every year. Check out some of my <Text fontSize="19.5px" fontWeight="600" lineHeight="28px" borderBottom="3px solid" as="span" _hover={{cursor: 'pointer'}}>open source projects</Text>, which have won competitions and led to academic <Text fontSize="19.5px" fontWeight="600" lineHeight="28px" borderBottom="3px solid" as="span" _hover={{cursor: 'pointer'}}>co-authorships</Text>.</Text>
            <Text color={color} mt={5} textAlign="center" style={{fontFamily: 'Barlow'}} fontSize="19.5px" fontWeight="600" lineHeight="28px">My proficiencies include building frontend interfaces, high performance computing, web development, and systems programming.</Text>
            {/* <Text color={color} mt={5} textAlign="center" style={{fontFamily: 'Barlow'}} fontSize="19.5px" fontWeight="600" lineHeight="28px">My proficiencies include object-oriented programming languages such as C++, Python, and TypeScript. Additionally, I&apos;ve dabbled in different domains of knowledge from building query parsers, CUDA programming, implementing web sockets, to exploring various statistical methods.</Text> */}
            {/* <Flex flexWrap="wrap">
              <Text fontSize="11.5pt" _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Portfolio</Text>
              <Text fontSize="11.5pt" _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Research</Text>
              <Text fontSize="11.5pt" _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Involvement</Text>
              <Text fontSize="11.5pt" _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Contact</Text>
            </Flex>
            <Flex flexWrap="wrap" ml={["0", "auto", "auto", "auto"]}>
              <Text fontSize="11.5pt" _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Resume</Text>
              <Text fontSize="11.5pt" _hover={{textDecoration: 'underline', cursor: 'pointer'}} fontWeight={700} mr={1}>Blog</Text>
            </Flex> */}
          </Flex>
          <Flex id="portfolio" flexDirection="column">
            <Flex mb={3.5}  mt={7}>
              <Text color={color} borderBottom="3px solid" style={{fontFamily: 'Barlow'}} fontSize="24px" fontWeight="600" lineHeight="36px">portfolio</Text>
            </Flex>
            <Text color={color} mb={3.5} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>machine learning</Text>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/plehman2000/Sherlock" isExternal>Sherlock</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow', textDecoration: 'none'}} textDecoration="none" as="span" fontStyle="italic"> Video analysis using OpenAI and SpaCy</Text>
            </Flex>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/plehman2000/Sabu" isExternal>Sabu.ai</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} as="span" fontStyle="italic"> Twitter sentiment analysis aggregator using BERT transformers</Text>
            </Flex>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/Haikai-IOS" isExternal>Haikai</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic"> Natural language generation of Haiku poems from images</Text>
            </Flex>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/educatus" isExternal>Educatus</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Customizable AI powered dashboard for students</Text>
            </Flex>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/aulos" isExternal>Aulos</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic"> Watch brand classification using Azure and Computer Vision</Text>
            </Flex>
            <Text color={color} mb={3.5} mt={5} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>statistics</Text>
            <Flex direction='row'>
              <Text color={color} style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://pypi.org/project/gstatsim/" isExternal>GStatSim</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">PyPi package for geostatistical simulation and interpolation</Text>
            </Flex>
            <UnorderedList mt={1}>
              <ListItem color={color} ml={8} style={{fontFamily: 'Barlow', textDecoration: 'none'}} fontSize="16px" lineHeight="24px" fontWeight={600} mb={3.5}>10,000+ downloads</ListItem>
            </UnorderedList>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/Data-Science" isExternal>Data Science Explorations</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Various analysis&apos;</Text>
            </Flex>
            <Text color={color} mb={3.5} mt={5} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>fullstack</Text>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/Data-Science" isExternal>Demogorgn.ai</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Website for simulating Greenland topography for geophysics researchers</Text>
            </Flex>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/Referme.fyi" isExternal>Referme.fyi (deprecated)</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Web application to connect applicants with employees at companies</Text>
            </Flex>
            <Text color={color} mb={3.5} mt={5} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>web sockets</Text>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/plexy.fun" isExternal>Plexy.fun</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Real-time collaborative pixel canvas</Text>
            </Flex>
            <Flex mb={8} direction='row'>
              <Text color={color} style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/TCP-Wall-Server" isExternal>TCP Wall Server</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic"> Message board</Text>
            </Flex>
          </Flex>
          <Flex id="exp" flexDirection="column">
            <Flex mb={3.5}  mt={10}>
              <Text color={color} borderBottom="3px solid" style={{fontFamily: 'Barlow'}} fontSize="24px" fontWeight="600" lineHeight="36px">manuscripts</Text>
            </Flex>
            <Flex direction="column">
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={600} style={{fontFamily: 'Barlow'}}>GStatSim V1.0: a Python package for geostatistical interpolation and simulation.</Text>
              <Text color={color} fontSize="14px" lineHeight="24px" style={{fontFamily: 'Barlow'}} fontWeight={300}>E.J. MacKie, M. Field, L. Wang, Z. Yin, N. Schoedl, M. Hibbs, A. Zhang (in review)</Text>
              <Text color={color} mt={3} mb={3} fontSize="16px" lineHeight="24px" style={{fontFamily: 'Barlow'}} fontWeight={400}></Text>
            </Flex>
            <Flex direction="column">
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={600} style={{fontFamily: 'Barlow'}}>Accelerating Simulation for Subglacial Topographic Modeling & Uncertainty Quantification.</Text>
              <Text color={color} fontSize="14px" lineHeight="24px" style={{fontFamily: 'Barlow'}} fontWeight={300}>N. Schoedl, E.J. MacKie, M. Field, E. Stubbs, A. Zhang, M. Hibbs, M. Gravey (in review)</Text>
              <Text color={color} mt={3} mb={6} fontSize="16px" lineHeight="24px" style={{fontFamily: 'Barlow'}} fontWeight={400}></Text>
            </Flex>
          </Flex>
          
          <Flex id="getInTouch" flexDirection="column">
            <Flex mb={3.5}  mt={10}>
              <Text color={color} borderBottom="3px solid" style={{fontFamily: 'Barlow'}} fontSize="24px" fontWeight="600" lineHeight="36px">get in touch</Text>
            </Flex>
            <Text color={color} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={400}>Send me an <Text _hover={{cursor: 'pointer'}} as="span" textDecoration="underline"><Link href="mailto: hibbs.matthew@protonmail.com">Email</Link></Text>, connect with me on <Text _hover={{cursor: 'pointer'}} as="span" textDecoration="underline"><Link href="https://www.linkedin.com/in/matthibbs/" isExternal>LinkedIn</Link></Text>, or check out my code on <Text _hover={{cursor: 'pointer'}} as="span" textDecoration="underline"><Link href="https://github.com/matthibbs7" isExternal>Github.</Link></Text></Text>
          </Flex>
          <Flex justifyContent="center" mt={10}>
            <Text color={color} style={{fontFamily: 'Barlow'}} fontSize="16px" fontWeight={300}>© 2023 Matthew Hibbs</Text>
          </Flex>
          {/* <Text fontSize="11pt" fontWeight={500}>I&apos;m a student at the University of Florida pursuing a Bachelor&apos;s degree in Computer Science. I am passionate about mathematical modeling, UI design, high performance computing, cryptocurrencies, and web development. I&apos;m proficient in object-oriented programming languages like C++, Python, and TypeScript. I&apos;ve worked on various collaborative projects, fascilitating frontend interfaces, API designs, and backend development. Additionally, I&apos;ve dabbled in different domains of knowledge from building query parsers, CUDA programming, implementing web sockets, to exploring various statistical methods.</Text>
          <Text fontSize="11pt" mt={3} fontWeight={500}>My industry experience includes working as a Software Engineer at FAANG, Tech Unicorns, and F50 companies</Text>
          <Flex justifyContent="center" mt={8} mb={8} flexWrap="wrap">
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="265px" src="/images/projects/sherlock.png" />
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="230px" src="/images/projects/tcp.png" />
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="230px" src="/images/projects/educatus.jpeg" />
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="230px" src="/images/projects/haikai.png" />
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="230px" src="/images/projects/demogorgn.png" />
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="230px" src="/images/projects/plexy2.png" />

            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="253px" src="/images/projects/gsta.png" />
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="230px" src="/images/projects/ds.png" />
            
            <Image _hover={{cursor: 'pointer', border: "1px solid lightgrey"}} border="0.5px solid lightgrey" width="auto" height="auto" maxHeight="140px" maxWidth="230px" src="/images/projects/sabu.png" />
          </Flex> */}
        </Flex>
      </Flex>
    </>
  )
}
