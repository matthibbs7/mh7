import Head from 'next/head'
import { Divider, Flex, Text, Image, UnorderedList, ListItem, useColorMode, useColorModeValue, Link } from '@chakra-ui/react';
import { useState } from 'react';

export default function Home() {
  const [shades, setShades] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', '#1A202C')
  const color = useColorModeValue('black', '#EDF2F6')
  return (
    <>
      <Head>
        <title>Matt Hibbs | Home</title>
        <meta name='description' content='I hope this tutorial is helpful for you' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Calistoga&family=Indie+Flower&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Flex justifyContent="center" bg={bg}>
        <Flex mb={10} px={[3, 4, 6, 8]} py={[2,2,4,4]} width=
        {["94%","90%"]} maxWidth="724px" flexDirection="column">
          
          <Flex mt={[2,4,8,
        12]} flexDirection="column" align="center" justifyContent="center">
            <Text sx={{ "-webkit-text-stroke": '1px black' }} color={color} style={{fontFamily: 'Indie Flower'}} fontSize="32px">matt hibbs</Text>
            <Image mt={3} height="210px" width="210px" src={shades ? "/images/matt6.png" : "/images/test70.png"} />
          </Flex>
          <Flex mb={5}  mt={7} flexDirection="column">
            <Text color={color} textAlign="center" style={{fontFamily: 'Barlow'}} fontSize="19.5px" fontWeight="600" lineHeight="28px">I&apos;m a software engineer based in New York. I read <Text fontSize="19.5px" fontWeight="600" lineHeight="28px" borderBottom="3px solid" as="span" _hover={{cursor: 'pointer'}}>36 books</Text> every year. Check out some of my <Text fontSize="19.5px" fontWeight="600" lineHeight="28px" borderBottom="3px solid" as="span" _hover={{cursor: 'pointer'}}>open source projects</Text>, which have won competitions and led to academic <Text fontSize="19.5px" fontWeight="600" lineHeight="28px" borderBottom="3px solid" as="span" _hover={{cursor: 'pointer'}}>co-authorships</Text>.</Text>
            <Text color={color} mt={5} textAlign="center" style={{fontFamily: 'Barlow'}} fontSize="19.5px" fontWeight="600" lineHeight="28px">My <Text fontSize="19.5px" fontWeight="600" lineHeight="28px" borderBottom="3px solid" as="span">proficiencies</Text> include building frontend interfaces, high performance computing, web development, and systems programming. I enjoy cooking, working out, and <Text fontSize="19.5px" fontWeight="600" lineHeight="28px" borderBottom="3px solid" as="span">poker</Text> in my free time.</Text>
          </Flex>
          <Flex id="portfolio" flexDirection="column">
            <Flex mb={3.5}  mt={7}>
              <Text color={color} borderBottom="2.5px solid" style={{fontFamily: 'Barlow'}} fontSize="22px" fontWeight="600" lineHeight="33px">portfolio</Text>
            </Flex>
            <Text color={color} mb={3.5} style={{fontFamily: 'Poppins'}} fontSize="14px" lineHeight="24px" fontWeight={700}>machine learning</Text>
            <Flex mb={3.5} direction='row'>
                
              <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/plehman2000/Sherlock" isExternal>Sherlock</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow', textDecoration: 'none'}} textDecoration="none" as="span" fontStyle="italic"> Video analysis using OpenAI and SpaCy</Text>
            </Flex>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/plehman2000/Sabu" isExternal>Sabu.ai</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} as="span" fontStyle="italic"> Twitter sentiment analysis aggregator using BERT transformers</Text>
            </Flex>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/Haikai-IOS" isExternal>Haikai</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic"> Natural language generation of Haiku poems from images</Text>
            </Flex>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/educatus" isExternal>Educatus</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Customizable AI powered dashboard for students</Text>
            </Flex>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/aulos" isExternal>Aulos</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic"> Watch brand classification using Azure and Computer Vision</Text>
            </Flex>
            <Text color={color} mb={3.5} mt={5} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>statistics</Text>
            <Flex direction='row'>
              <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://pypi.org/project/gstatsim/" isExternal>GStatSim</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">PyPi package for geostatistical simulation and interpolation</Text>
            </Flex>
            <UnorderedList mt={1}>
              <ListItem color={color} ml={8} style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={600} mb={3.5}>10,000+ downloads</ListItem>
            </UnorderedList>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/Data-Science" isExternal>Data Science etc</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Various analysis&apos;</Text>
            </Flex>
            <Text color={color} mb={3.5} mt={5} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>fullstack</Text>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/Data-Science" isExternal>Demogorgn.ai</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Website for simulating Greenland topography for geophysics researchers</Text>
            </Flex>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/Referme.fyi" isExternal>Referme.fyi</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Web application to connect applicants with employees at companies</Text>
            </Flex>
            <Text color={color} mb={3.5} mt={5} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>web sockets</Text>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/plexy.fun" isExternal>Plexy.fun</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Real-time collaborative pixel canvas inspired by r/place</Text>
            </Flex>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/TCP-Wall-Server" isExternal>TCP Wall Server</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic"> Message board</Text>
            </Flex>
            <Text color={color} mb={3.5} mt={5} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>C++</Text>
            <Flex mb={3.5} direction='row'>
              <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://www.youtube.com/watch?v=HbPUxW4rno0" isExternal>Spotify Beatmap Downloader</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Import a playlist to mass download OSU! beatmaps</Text>
            </Flex>
            <Flex mb={8} direction='row'>
              <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/WAD-File-Reader-with-FUSE" isExternal>.wad File Reader</Link></Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic"> with FUSE / N-ary Tree implementation</Text>
            </Flex>
          </Flex>
          <Flex id="exp" flexDirection="column">
            <Flex mb={3.5}  mt={10}>
              <Text color={color} borderBottom="3px solid" style={{fontFamily: 'Barlow'}} fontSize="22px" fontWeight="600" lineHeight="33px">manuscripts</Text>
            </Flex>
            <Flex direction="column" mt={3}>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={600} style={{fontFamily: 'Poppins'}}>GStatSim V1.0: a Python package for geostatistical interpolation and simulation.</Text>
              <Text color={color} fontSize="14px" lineHeight="24px" style={{fontFamily: 'Poppins'}} fontWeight={300}>E.J. MacKie, M. Field, L. Wang, Z. Yin, N. Schoedl, M. Hibbs, A. Zhang (in review)</Text>
              <Text color={color} mt={3} mb={3} fontSize="16px" lineHeight="24px" style={{fontFamily: 'Barlow'}} fontWeight={400}></Text>
            </Flex>
            <Flex direction="column">
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={600} style={{fontFamily: 'Poppins'}}>Accelerating Simulation for Subglacial Topographic Modeling & Uncertainty Quantification.</Text>
              <Text color={color} fontSize="14px" lineHeight="24px" style={{fontFamily: 'Poppins'}} fontWeight={300}>N. Schoedl, E.J. MacKie, M. Field, E. Stubbs, A. Zhang, M. Hibbs, M. Gravey (in review)</Text>
              <Text color={color} mt={3} mb={6} fontSize="16px" lineHeight="24px" style={{fontFamily: 'Barlow'}} fontWeight={400}></Text>
            </Flex>
          </Flex>
          
          <Flex id="getInTouch" flexDirection="column">
            <Flex mb={3.5}  mt={10}>
              <Text color={color} borderBottom="3px solid" style={{fontFamily: 'Barlow'}} fontSize="22px" fontWeight="600" lineHeight="33px">get in touch</Text>
            </Flex>
            <Text color={color} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={400}>Send me an <Text _hover={{cursor: 'pointer'}} as="span" textDecoration="underline"><Link href="mailto: hibbs.matthew@protonmail.com">Email</Link></Text>, connect with me on <Text _hover={{cursor: 'pointer'}} as="span" textDecoration="underline"><Link href="https://www.linkedin.com/in/matthibbs/" isExternal>LinkedIn</Link></Text>, or check out my code on <Text _hover={{cursor: 'pointer'}} as="span" textDecoration="underline"><Link href="https://github.com/matthibbs7" isExternal>Github.</Link></Text></Text>
          </Flex>
          <Flex justifyContent="center" mt={10}>
            <Text color={color} style={{fontFamily: 'Barlow'}} fontSize="16px" fontWeight={300}>© 2023 Matthew Hibbs ♡</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
