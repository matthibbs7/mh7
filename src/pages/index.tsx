import Head from 'next/head'
import { Divider, Flex, Text, Image, UnorderedList, ListItem, useColorMode, useColorModeValue, Link, Button, Box, useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';

export default function Home() {
  const [shades, setShades] = useState(false);
  const bg = useColorModeValue('white', 'white')
  const color = useColorModeValue('black', 'black')

  const [isLarge] = useMediaQuery('(min-width: 40.375em)')

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
      
      <Flex justifyContent="center" align='center' bg={bg} direction='column'>
        <Flex mb={10} px={[3, 4, 6, 8]} py={[2,2,4,4]} width=
        {["94%","90%"]} maxWidth="724px" flexDirection="column">
          
          <Flex mt={[2,4,8,
        12]} flexDirection="column" align="center" justifyContent="center">
            <Text sx={{ "-webkit-text-stroke": '1px black' }} color={color} style={{fontFamily: 'Indie Flower'}} fontSize="34px">matt hibbs</Text>
            <Image mt={3} height="210px" width="210px" src={shades ? "/images/matt6.png" : "/images/test70.png"} />
          </Flex>
          <Flex borderRadius={6} p={[0, 0, 3, 3]} py={[0, 0, 4, 4]} bg='white' mb={5}  mt={7} flexDirection="column">
            <Text color={color} textAlign="center" style={{fontFamily: 'Barlow'}} fontSize="19.5px" fontWeight="600" lineHeight="28px">Hi there, I&apos;m a software engineer based in New York City. Check out some of my <Text fontSize="19.5px" fontWeight="600" lineHeight="28px" borderBottom="3px solid" as="span" _hover={{cursor: 'pointer'}}>open source projects</Text>, which have won competitions and led to academic <Text fontSize="19.5px" fontWeight="600" lineHeight="28px" borderBottom="3px solid" as="span" _hover={{cursor: 'pointer'}}>co-authorships</Text>.</Text>
            <Text color={color} mt={5} textAlign="center" style={{fontFamily: 'Barlow'}} fontSize="19.5px" fontWeight="600" lineHeight="28px">My <Text fontSize="19.5px" fontWeight="600" lineHeight="28px" borderBottom="3px solid" as="span">proficiencies</Text> include building frontend interfaces, high performance computing, web development, and systems programming. I enjoy cooking, working out, and <Text fontSize="19.5px" fontWeight="600" lineHeight="28px" borderBottom="3px solid" as="span">poker</Text> in my free time.</Text>
          </Flex>
          <Flex  id="portfolio" flexDirection="column">
            <Flex mb={3.5}  mt={7}>
              <Text color={color} borderBottom="2.5px solid" style={{fontFamily: 'Barlow'}} fontSize="22px" fontWeight="600" lineHeight="33px">portfolio</Text>
            </Flex>
            <Flex boxShadow='5px 6px 5px gray' borderRadius={6} p={4} bg='green.100' flexDirection='column'>
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
            </Flex>
            <Flex boxShadow='5px 6px 5px gray' mt={5} borderRadius={6} p={4} bg='red.100' flexDirection='column'>
              <Text color={color} mb={3.5}  style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>statistics</Text>
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
            </Flex>
            <Flex boxShadow='5px 6px 5px gray' mt={5} borderRadius={6} p={4} bg='blue.100' flexDirection='column'>
            <Text color={color} mb={3.5} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>fullstack</Text>
              {/* <Flex mb={3.5} direction='row'>
                <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/Data-Science" isExternal>Demogorgn.ai</Link></Text>
                <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
                <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Website for simulating Greenland topography for geophysics researchers</Text>
              </Flex> */}
              <Flex mb={3.5} direction='row'>
                <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://timeblend.fyi" isExternal>Timeblend.fyi</Link></Text>
                <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
                <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Modern scheduling tool for coordinating large team collaborations</Text>
              </Flex>
            </Flex>
            <Flex boxShadow='5px 6px 5px gray' mt={5} borderRadius={6} p={4} bg='purple.100' flexDirection='column'>
              <Text color={color} mb={3.5} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>web sockets</Text>
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
            </Flex>
            <Flex boxShadow='5px 6px 5px gray' mt={5} borderRadius={6} p={4} bg='orange.100' flexDirection='column'>
              <Text color={color} mb={3.5} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>c++</Text>
              <Flex mb={3.5} direction='row'>
                <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://www.youtube.com/watch?v=HbPUxW4rno0" isExternal>Spotify Beatmap Downloader</Link></Text>
                <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
                <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Import a playlist to mass download OSU! beatmaps</Text>
              </Flex>
              <Flex mb={3.5} direction='row'>
                <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://github.com/matthibbs7/WAD-File-Reader-with-FUSE" isExternal>.wad File Reader</Link></Text>
                <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
                <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic"> with FUSE / N-ary Tree implementation</Text>
              </Flex>
            </Flex>
            <Flex boxShadow='5px 6px 5px gray' mt={5} borderRadius={6} p={4} bg='teal.100' flexDirection='column'>
              <Text color={color} mb={3.5} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>in development</Text>
              <Flex mb={8} direction='row'>
                <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://www.rollsolid.com" isExternal>Rollsolid.com</Link></Text>
                <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
                <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Customizable dashboard featuring Monte Carlo Simulations, Pot Odd ratios, and decision training for advanced Poker strategy</Text>
              </Flex>
              {/* <Flex mb={8} direction='row'>
                <Text color={color} style={{fontFamily: 'Poppins'}} fontSize="16px" lineHeight="24px" fontWeight={500}><Link href="https://www.rollsolid.com" isExternal>Demogorgn.ai</Link></Text>
                <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
                <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Web application to allow researchers to generate realizations of Greenland topography</Text>
              </Flex> */}
            </Flex>
            
          </Flex>
          <Flex id="exp" flexDirection="column">
            <Flex mb={3.5}  mt={10}>
              <Text color={color} borderBottom="3px solid" style={{fontFamily: 'Barlow'}} fontSize="22px" fontWeight="600" lineHeight="33px">manuscripts</Text>
            </Flex>
            <Flex direction="column" mt={3}>
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={600} style={{fontFamily: 'Poppins'}}>GStatSim V1.0: a Python package for geostatistical interpolation and simulation.</Text>
              <Text fontStyle='italic' color={color} fontSize="14px" lineHeight="24px" style={{fontFamily: 'Poppins'}} fontWeight={300}>Geoscientific Model Development (2023)</Text>
              <Text color={color} fontSize="14px" lineHeight="24px" style={{fontFamily: 'Poppins'}} fontWeight={300}>E.J. MacKie, M. Field, L. Wang, Z. Yin, N. Schoedl, M. Hibbs, A. Zhang.</Text>
              
              <Text _hover={{cursor: 'pointer', textDecoration: 'underline'}} color='blue.300' mb={5} fontSize="14px" lineHeight="24px" style={{fontFamily: 'Poppins'}} fontWeight={600}><Link href="https://gmd.copernicus.org/articles/16/3765/2023" isExternal>https://gmd.copernicus.org/articles/16/3765/2023</Link></Text>
            </Flex>
            <Flex direction="column">
              <Text color={color} fontSize="16px" lineHeight="24px" fontWeight={600} style={{fontFamily: 'Poppins'}}>Accelerating Simulation for Subglacial Topographic Modeling & Uncertainty Quantification.</Text>
              <Text color={color} fontSize="14px" lineHeight="24px" style={{fontFamily: 'Poppins'}} fontWeight={300}>N. Schoedl, E.J. MacKie, M. Field, E. Stubbs, A. Zhang, M. Hibbs, M. Gravey (in review)</Text>
              <Text fontStyle='italic' color={color} mb={7} fontSize="14px" lineHeight="24px" style={{fontFamily: 'Poppins'}} fontWeight={300}>Submitted to Computing in Science and Engineering</Text>
            </Flex>
          </Flex>
      
      {/* <svg id="visual" viewBox="0 0 1440 100" width="2000" height="40" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 61L93 61L93 82L186 82L186 30L279 30L279 61L372 61L372 61L465 61L465 32L559 32L559 40L652 40L652 56L745 56L745 50L838 50L838 53L931 53L931 66L1024 66L1024 82L1024 0L1024 0L931 0L931 0L838 0L838 0L745 0L745 0L652 0L652 0L559 0L559 0L465 0L465 0L372 0L372 0L279 0L279 0L186 0L186 0L93 0L93 0L0 0Z" fill="#ffffff"></path><path d="M0 100L93 100L93 121L186 121L186 48L279 48L279 100L372 100L372 82L465 82L465 50L559 50L559 87L652 87L652 82L745 82L745 92L838 92L838 76L931 76L931 113L1024 113L1024 118L1024 80L1024 64L931 64L931 51L838 51L838 48L745 48L745 54L652 54L652 38L559 38L559 30L465 30L465 59L372 59L372 59L279 59L279 28L186 28L186 80L93 80L93 59L0 59Z" fill="#f0eafe"></path><path d="M0 115L93 115L93 134L186 134L186 69L279 69L279 110L372 110L372 102L465 102L465 66L559 66L559 102L652 102L652 108L745 108L745 115L838 115L838 84L931 84L931 126L1024 126L1024 126L1024 116L1024 111L931 111L931 74L838 74L838 90L745 90L745 80L652 80L652 85L559 85L559 48L465 48L465 80L372 80L372 98L279 98L279 46L186 46L186 119L93 119L93 98L0 98Z" fill="#e1d5fd"></path><path d="M0 144L93 144L93 152L186 152L186 108L279 108L279 144L372 144L372 136L465 136L465 92L559 92L559 121L652 121L652 126L745 126L745 136L838 136L838 121L931 121L931 157L1024 157L1024 141L1024 124L1024 124L931 124L931 82L838 82L838 113L745 113L745 106L652 106L652 100L559 100L559 64L465 64L465 100L372 100L372 108L279 108L279 67L186 67L186 132L93 132L93 113L0 113Z" fill="#d1c0fc"></path><path d="M0 173L93 173L93 170L186 170L186 121L279 121L279 154L372 154L372 157L465 157L465 113L559 113L559 134L652 134L652 144L745 144L745 162L838 162L838 147L931 147L931 175L1024 175L1024 154L1024 139L1024 155L931 155L931 119L838 119L838 134L745 134L745 124L652 124L652 119L559 119L559 90L465 90L465 134L372 134L372 142L279 142L279 106L186 106L186 150L93 150L93 142L0 142Z" fill="#c1acfa"></path><path d="M0 209L93 209L93 214L186 214L186 209L279 209L279 201L372 201L372 214L465 214L465 196L559 196L559 196L652 196L652 214L745 214L745 206L838 206L838 206L931 206L931 204L1024 204L1024 212L1024 152L1024 173L931 173L931 145L838 145L838 160L745 160L745 142L652 142L652 132L559 132L559 111L465 111L465 155L372 155L372 152L279 152L279 119L186 119L186 168L93 168L93 171L0 171Z" fill="#b098f8"></path><path d="M0 227L93 227L93 230L186 230L186 240L279 240L279 230L372 230L372 240L465 240L465 222L559 222L559 222L652 222L652 232L745 232L745 230L838 230L838 235L931 235L931 232L1024 232L1024 222L1024 210L1024 202L931 202L931 204L838 204L838 204L745 204L745 212L652 212L652 194L559 194L559 194L465 194L465 212L372 212L372 199L279 199L279 207L186 207L186 212L93 212L93 207L0 207Z" fill="#9d84f6"></path><path d="M0 243L93 243L93 248L186 248L186 248L279 248L279 245L372 245L372 253L465 253L465 245L559 245L559 243L652 243L652 248L745 248L745 251L838 251L838 248L931 248L931 245L1024 245L1024 245L1024 220L1024 230L931 230L931 233L838 233L838 228L745 228L745 230L652 230L652 220L559 220L559 220L465 220L465 238L372 238L372 228L279 228L279 238L186 238L186 228L93 228L93 225L0 225Z" fill="#8870f4"></path><path d="M0 261L93 261L93 261L186 261L186 261L279 261L279 261L372 261L372 261L465 261L465 261L559 261L559 261L652 261L652 261L745 261L745 261L838 261L838 261L931 261L931 261L1024 261L1024 261L1024 243L1024 243L931 243L931 246L838 246L838 249L745 249L745 246L652 246L652 241L559 241L559 243L465 243L465 251L372 251L372 243L279 243L279 246L186 246L186 246L93 246L93 241L0 241Z" fill="#715df2"></path></svg> */}

          
          
        </Flex>
    
      {/* <Box width='100%' mt='-50px'>
      <svg style={{display: 'block'}} id="visual" viewBox="0 0 1440 100" version="1.1"><rect x="0" y="0" width="1440" height="100" fill="#ffffff"></rect><path d="M0 46L17.2 46.7C34.3 47.3 68.7 48.7 103 45.8C137.3 43 171.7 36 206 33C240.3 30 274.7 31 308.8 31.8C343 32.7 377 33.3 411.2 34.3C445.3 35.3 479.7 36.7 514 37.2C548.3 37.7 582.7 37.3 617 35.7C651.3 34 685.7 31 720 31C754.3 31 788.7 34 823 36.3C857.3 38.7 891.7 40.3 926 42.8C960.3 45.3 994.7 48.7 1028.8 47.5C1063 46.3 1097 40.7 1131.2 36.8C1165.3 33 1199.7 31 1234 32.2C1268.3 33.3 1302.7 37.7 1337 37.7C1371.3 37.7 1405.7 33.3 1422.8 31.2L1440 29L1440 101L1422.8 101C1405.7 101 1371.3 101 1337 101C1302.7 101 1268.3 101 1234 101C1199.7 101 1165.3 101 1131.2 101C1097 101 1063 101 1028.8 101C994.7 101 960.3 101 926 101C891.7 101 857.3 101 823 101C788.7 101 754.3 101 720 101C685.7 101 651.3 101 617 101C582.7 101 548.3 101 514 101C479.7 101 445.3 101 411.2 101C377 101 343 101 308.8 101C274.7 101 240.3 101 206 101C171.7 101 137.3 101 103 101C68.7 101 34.3 101 17.2 101L0 101Z" fill="#715df2"></path><path d="M0 53L17.2 55.8C34.3 58.7 68.7 64.3 103 67.2C137.3 70 171.7 70 206 66.7C240.3 63.3 274.7 56.7 308.8 53.5C343 50.3 377 50.7 411.2 49C445.3 47.3 479.7 43.7 514 45.5C548.3 47.3 582.7 54.7 617 55.5C651.3 56.3 685.7 50.7 720 50.7C754.3 50.7 788.7 56.3 823 56C857.3 55.7 891.7 49.3 926 50.8C960.3 52.3 994.7 61.7 1028.8 63.5C1063 65.3 1097 59.7 1131.2 58.2C1165.3 56.7 1199.7 59.3 1234 60.3C1268.3 61.3 1302.7 60.7 1337 58.8C1371.3 57 1405.7 54 1422.8 52.5L1440 51L1440 101L1422.8 101C1405.7 101 1371.3 101 1337 101C1302.7 101 1268.3 101 1234 101C1199.7 101 1165.3 101 1131.2 101C1097 101 1063 101 1028.8 101C994.7 101 960.3 101 926 101C891.7 101 857.3 101 823 101C788.7 101 754.3 101 720 101C685.7 101 651.3 101 617 101C582.7 101 548.3 101 514 101C479.7 101 445.3 101 411.2 101C377 101 343 101 308.8 101C274.7 101 240.3 101 206 101C171.7 101 137.3 101 103 101C68.7 101 34.3 101 17.2 101L0 101Z" fill="#c1acfa"></path><path d="M0 74L17.2 75C34.3 76 68.7 78 103 76.2C137.3 74.3 171.7 68.7 206 69.2C240.3 69.7 274.7 76.3 308.8 78.2C343 80 377 77 411.2 74C445.3 71 479.7 68 514 68C548.3 68 582.7 71 617 73C651.3 75 685.7 76 720 77.8C754.3 79.7 788.7 82.3 823 81.2C857.3 80 891.7 75 926 72.2C960.3 69.3 994.7 68.7 1028.8 70.3C1063 72 1097 76 1131.2 76.8C1165.3 77.7 1199.7 75.3 1234 72.5C1268.3 69.7 1302.7 66.3 1337 67.3C1371.3 68.3 1405.7 73.7 1422.8 76.3L1440 79L1440 101L1422.8 101C1405.7 101 1371.3 101 1337 101C1302.7 101 1268.3 101 1234 101C1199.7 101 1165.3 101 1131.2 101C1097 101 1063 101 1028.8 101C994.7 101 960.3 101 926 101C891.7 101 857.3 101 823 101C788.7 101 754.3 101 720 101C685.7 101 651.3 101 617 101C582.7 101 548.3 101 514 101C479.7 101 445.3 101 411.2 101C377 101 343 101 308.8 101C274.7 101 240.3 101 206 101C171.7 101 137.3 101 103 101C68.7 101 34.3 101 17.2 101L0 101Z" fill="#ffffff"></path></svg>
      </Box> */}
      {/* <svg id="visual" viewBox="0 150 1440 240" width="100%" height="240" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="0" y="0" width="100%" height="240" fill="#fefeff"></rect><path d="M0 134L10.5 117.8C21 101.7 42 69.3 62.8 100.3C83.7 131.3 104.3 225.7 125.2 266.7C146 307.7 167 295.3 187.8 293.2C208.7 291 229.3 299 250.2 275C271 251 292 195 313 150.7C334 106.3 355 73.7 375.8 66C396.7 58.3 417.3 75.7 438.2 115.2C459 154.7 480 216.3 500.8 245.5C521.7 274.7 542.3 271.3 563.2 227.5C584 183.7 605 99.3 626 62.8C647 26.3 668 37.7 688.8 68.8C709.7 100 730.3 151 751.2 175C772 199 793 196 814 219.7C835 243.3 856 293.7 876.8 271.3C897.7 249 918.3 154 939.2 140.2C960 126.3 981 193.7 1001.8 223.3C1022.7 253 1043.3 245 1064.2 263C1085 281 1106 325 1127 292.3C1148 259.7 1169 150.3 1189.8 101.3C1210.7 52.3 1231.3 63.7 1252.2 107C1273 150.3 1294 225.7 1314.8 223.7C1335.7 221.7 1356.3 142.3 1377.2 111C1398 79.7 1419 96.3 1429.5 104.7L1440 113L1440 541L1429.5 541C1419 541 1398 541 1377.2 541C1356.3 541 1335.7 541 1314.8 541C1294 541 1273 541 1252.2 541C1231.3 541 1210.7 541 1189.8 541C1169 541 1148 541 1127 541C1106 541 1085 541 1064.2 541C1043.3 541 1022.7 541 1001.8 541C981 541 960 541 939.2 541C918.3 541 897.7 541 876.8 541C856 541 835 541 814 541C793 541 772 541 751.2 541C730.3 541 709.7 541 688.8 541C668 541 647 541 626 541C605 541 584 541 563.2 541C542.3 541 521.7 541 500.8 541C480 541 459 541 438.2 541C417.3 541 396.7 541 375.8 541C355 541 334 541 313 541C292 541 271 541 250.2 541C229.3 541 208.7 541 187.8 541C167 541 146 541 125.2 541C104.3 541 83.7 541 62.8 541C42 541 21 541 10.5 541L0 541Z" fill="#715df2"></path><path d="M0 299L10.5 318.8C21 338.7 42 378.3 62.8 356.8C83.7 335.3 104.3 252.7 125.2 210.2C146 167.7 167 165.3 187.8 203.3C208.7 241.3 229.3 319.7 250.2 317.2C271 314.7 292 231.3 313 217.7C334 204 355 260 375.8 275.5C396.7 291 417.3 266 438.2 255C459 244 480 247 500.8 269.5C521.7 292 542.3 334 563.2 337.3C584 340.7 605 305.3 626 288.5C647 271.7 668 273.3 688.8 264.8C709.7 256.3 730.3 237.7 751.2 226C772 214.3 793 209.7 814 208.2C835 206.7 856 208.3 876.8 223.8C897.7 239.3 918.3 268.7 939.2 265.8C960 263 981 228 1001.8 247.3C1022.7 266.7 1043.3 340.3 1064.2 331.8C1085 323.3 1106 232.7 1127 199.2C1148 165.7 1169 189.3 1189.8 227.7C1210.7 266 1231.3 319 1252.2 302.8C1273 286.7 1294 201.3 1314.8 162.3C1335.7 123.3 1356.3 130.7 1377.2 170.5C1398 210.3 1419 282.7 1429.5 318.8L1440 355L1440 541L1429.5 541C1419 541 1398 541 1377.2 541C1356.3 541 1335.7 541 1314.8 541C1294 541 1273 541 1252.2 541C1231.3 541 1210.7 541 1189.8 541C1169 541 1148 541 1127 541C1106 541 1085 541 1064.2 541C1043.3 541 1022.7 541 1001.8 541C981 541 960 541 939.2 541C918.3 541 897.7 541 876.8 541C856 541 835 541 814 541C793 541 772 541 751.2 541C730.3 541 709.7 541 688.8 541C668 541 647 541 626 541C605 541 584 541 563.2 541C542.3 541 521.7 541 500.8 541C480 541 459 541 438.2 541C417.3 541 396.7 541 375.8 541C355 541 334 541 313 541C292 541 271 541 250.2 541C229.3 541 208.7 541 187.8 541C167 541 146 541 125.2 541C104.3 541 83.7 541 62.8 541C42 541 21 541 10.5 541L0 541Z" fill="#a991f8"></path><path d="M0 305L10.5 311.3C21 317.7 42 330.3 62.8 333.8C83.7 337.3 104.3 331.7 125.2 333.8C146 336 167 346 187.8 365.8C208.7 385.7 229.3 415.3 250.2 417C271 418.7 292 392.3 313 357C334 321.7 355 277.3 375.8 262.8C396.7 248.3 417.3 263.7 438.2 270.5C459 277.3 480 275.7 500.8 276.5C521.7 277.3 542.3 280.7 563.2 292.7C584 304.7 605 325.3 626 335.3C647 345.3 668 344.7 688.8 330.7C709.7 316.7 730.3 289.3 751.2 283.8C772 278.3 793 294.7 814 331.2C835 367.7 856 424.3 876.8 428.7C897.7 433 918.3 385 939.2 373.8C960 362.7 981 388.3 1001.8 409.3C1022.7 430.3 1043.3 446.7 1064.2 446.8C1085 447 1106 431 1127 423.7C1148 416.3 1169 417.7 1189.8 399.2C1210.7 380.7 1231.3 342.3 1252.2 346.2C1273 350 1294 396 1314.8 397C1335.7 398 1356.3 354 1377.2 337C1398 320 1419 330 1429.5 335L1440 340L1440 541L1429.5 541C1419 541 1398 541 1377.2 541C1356.3 541 1335.7 541 1314.8 541C1294 541 1273 541 1252.2 541C1231.3 541 1210.7 541 1189.8 541C1169 541 1148 541 1127 541C1106 541 1085 541 1064.2 541C1043.3 541 1022.7 541 1001.8 541C981 541 960 541 939.2 541C918.3 541 897.7 541 876.8 541C856 541 835 541 814 541C793 541 772 541 751.2 541C730.3 541 709.7 541 688.8 541C668 541 647 541 626 541C605 541 584 541 563.2 541C542.3 541 521.7 541 500.8 541C480 541 459 541 438.2 541C417.3 541 396.7 541 375.8 541C355 541 334 541 313 541C292 541 271 541 250.2 541C229.3 541 208.7 541 187.8 541C167 541 146 541 125.2 541C104.3 541 83.7 541 62.8 541C42 541 21 541 10.5 541L0 541Z" fill="#d7c7fc"></path><path d="M0 500L10.5 490.7C21 481.3 42 462.7 62.8 458.8C83.7 455 104.3 466 125.2 478.7C146 491.3 167 505.7 187.8 491C208.7 476.3 229.3 432.7 250.2 408.3C271 384 292 379 313 373.5C334 368 355 362 375.8 384.2C396.7 406.3 417.3 456.7 438.2 478.5C459 500.3 480 493.7 500.8 467.7C521.7 441.7 542.3 396.3 563.2 374.7C584 353 605 355 626 379.5C647 404 668 451 688.8 475.7C709.7 500.3 730.3 502.7 751.2 483C772 463.3 793 421.7 814 410C835 398.3 856 416.7 876.8 418.8C897.7 421 918.3 407 939.2 393.8C960 380.7 981 368.3 1001.8 367.5C1022.7 366.7 1043.3 377.3 1064.2 397.2C1085 417 1106 446 1127 469.2C1148 492.3 1169 509.7 1189.8 517.3C1210.7 525 1231.3 523 1252.2 505C1273 487 1294 453 1314.8 444.2C1335.7 435.3 1356.3 451.7 1377.2 436.3C1398 421 1419 374 1429.5 350.5L1440 327L1440 541L1429.5 541C1419 541 1398 541 1377.2 541C1356.3 541 1335.7 541 1314.8 541C1294 541 1273 541 1252.2 541C1231.3 541 1210.7 541 1189.8 541C1169 541 1148 541 1127 541C1106 541 1085 541 1064.2 541C1043.3 541 1022.7 541 1001.8 541C981 541 960 541 939.2 541C918.3 541 897.7 541 876.8 541C856 541 835 541 814 541C793 541 772 541 751.2 541C730.3 541 709.7 541 688.8 541C668 541 647 541 626 541C605 541 584 541 563.2 541C542.3 541 521.7 541 500.8 541C480 541 459 541 438.2 541C417.3 541 396.7 541 375.8 541C355 541 334 541 313 541C292 541 271 541 250.2 541C229.3 541 208.7 541 187.8 541C167 541 146 541 125.2 541C104.3 541 83.7 541 62.8 541C42 541 21 541 10.5 541L0 541Z" fill="#ffffff"></path></svg> */}
      {/* <Flex style={{flexFlow: 'row wrap', padding: '30px 30px 20px 30px', color: '#2f2f2f', borderTop: '1px solid #e5e5e5'}} id='footer' mt={10} width='100%' bg='#ffffff'>
            <Flex style={{ fontStyle: 'normal', color: '#999', marginRight: '1.25em', marginBottom: '2em', flex: isLarge ? '1 0px' : undefined}} id='footer_addr'>
              <Text color='black' marginTop='1.3em' fontSize='15px' fontWeight={400} id='footer_logo' style={{fontFamily: '"Chalkboard"', fontWeight: '400', textTransform: 'lowercase', fontSize: '1.5rem'}}>Matt Hibbs</Text>
              <Text>Contact</Text>
              <Text>15696 Portico Drive, Wayzata, MN 55391</Text>
              <br />
              <Button display='flex' alignItems='center' justifyContent='center' height='36px' maxWidth='max-content' backgroundColor='rgb(33, 33, 33, 0.07)' borderRadius='8px' color='#2f2f2f' lineHeight='0' margin='0.6em 0' fontSize='1rem' padding='0 1.3em' id='footerbtn'>Email Me</Button>
            </Flex>
            <UnorderedList styleType="none" style={{flexFlow: 'row wrap', display: 'flex', flex: isLarge ? '2 0px' : undefined}} id='footer__nav'>
              <ListItem style={{}} id='nav__item'>
                <Text fontWeight={400} fontSize='15px' id='nav__title'>Media</Text>
                <UnorderedList color='#999' styleType="none" id='nav__ul'>
                  <ListItem>LinkedIn</ListItem>
                  <ListItem>GitHub</ListItem>
                  <ListItem>Devpost</ListItem>
                </UnorderedList>

              </ListItem>

              <ListItem id='nav__item nav__item--extra'>
                <Text fontWeight={400} fontSize='15px' id='nav__title'>Projects</Text>
                <UnorderedList styleType="none" color='#999' id='nav__ul nav__ul--extra'>
                  <ListItem textDecoration='none' >Sabu.ai</ListItem>
                  <ListItem>Sherlock</ListItem>
                  <ListItem>Spotify Beatmap</ListItem>
                  <ListItem>Pindar.ai</ListItem>
                  <ListItem>Aulos.io</ListItem>
                  <ListItem>ScheduleDeck</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem style={{flexGrow: isLarge ? '2' : undefined}} id='nav__item'>
                <Text fontWeight={400} fontSize='15px' id='nav__title'>Other</Text>
                <UnorderedList color='#999' styleType="none" id='nav__ul'>
                  <ListItem>Download CV</ListItem>
                  <ListItem>Research</ListItem>
                  <ListItem>Publications</ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>
            <Box id='legal' color='#999'>
              <Text>&copy; 2022 Matthew J. Hibbs | All rights reserved.</Text>
              <Box id='legal__links'>
                <span>Designed and Developed by Matthew J. Hibbs <span id="heart">♥</span></span>
              </Box>
            </Box>
          </Flex> */}
      </Flex>
    </>
  )
}
