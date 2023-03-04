import Head from 'next/head'
import { Divider, Flex, Text, Image, UnorderedList, ListItem } from '@chakra-ui/react';
import { FaMagic } from 'react-icons/fa'
import Magic from '@/components/Magic';
import { useState } from 'react';
export default function Home() {
  const [shades, setShades] = useState(true);
  return (
    <>
      <Head>
        <title>Matthew Hibbs</title>
        <meta name='description' content='I hope this tutorial is helpful for you' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Calistoga&family=Indie+Flower&display=swap" rel="stylesheet" />
      </Head>
      <Flex justifyContent="center">
        <Flex mb={10} px={[3, 4, 6, 8]} py={[2,2,4,4]} width=
        {["94%","90%"]} maxWidth="724px" flexDirection="column">
          <Flex ml="auto">
            <Magic setShades={setShades} shades={shades} />
          {/* <Text _hover={{cursor: 'pointer', bg: 'lightgrey'}} border="1px solid lightgrey" borderRadius="5px" p={2} ><FaMagic color="grey" /></Text> */}
          </Flex>
          <Flex mt={[2,4,4,
        4]} flexDirection="column" align="center" justifyContent="center">
            <Text color="black" style={{fontFamily: 'Indie Flower'}} fontSize="32px" fontWeight={700}>matt hibbs</Text>
            <Image mt={5} height="200px" width="200px" src={shades ? "/images/matt6.png" : "/images/matt2.png"} />
          </Flex>
          <Flex mb={5}  mt={7} flexDirection="column">
            <Text textAlign="center" style={{fontFamily: 'Barlow'}} fontSize="19.5px" fontWeight="600" lineHeight="28px">I&apos;m a software engineer based in New York. I read <Text fontSize="19.5px" fontWeight="600" lineHeight="28px" borderBottom="3px solid" as="span" _hover={{cursor: 'pointer'}}>36 books</Text> every year. Check out some of my <Text fontSize="19.5px" fontWeight="600" lineHeight="28px" borderBottom="3px solid" as="span" _hover={{cursor: 'pointer'}}>open source projects</Text>, which have won Hackathons and led to academic <Text fontSize="19.5px" fontWeight="600" lineHeight="28px" borderBottom="3px solid" as="span" _hover={{cursor: 'pointer'}}>co-authorships</Text>.</Text>
            <Text mt={5} textAlign="center" style={{fontFamily: 'Barlow'}} fontSize="19.5px" fontWeight="600" lineHeight="28px">Check out my some of my projects past episodes of Sweet and Sour, a podcast I cohosted about the intersections of Asian American identity with culture, work, and lifestyle.</Text>
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
              <Text borderBottom="3px solid" style={{fontFamily: 'Barlow'}} fontSize="24px" fontWeight="600" lineHeight="36px">portfolio</Text>
            </Flex>
            <Text mb={3.5} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>machine learning</Text>
            <Flex direction='row'>
              <Text style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}>Sherlock</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow', textDecoration: 'none'}} textDecoration="none" as="span" fontStyle="italic"> Video analysis using OpenAI and SpaCy</Text>
            </Flex>
            <UnorderedList mt={1}>
              <ListItem ml={8} style={{fontFamily: 'Barlow', textDecoration: 'none'}} fontSize="16px" lineHeight="24px" fontWeight={500} mb={3.5}>Winner of SwampHacks VIII</ListItem>
            </UnorderedList>
            <Flex mb={3.5} direction='row'>
              <Text style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}>Sabu.ai</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={400} as="span">,&nbsp;</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} as="span" fontStyle="italic"> Twitter sentiment analysis aggregator using BERT transformers</Text>
            </Flex>
            <Flex mb={3.5} direction='row'>
              <Text style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}>Haikai</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic"> Natural language generation of Haiku poems from images</Text>
            </Flex>
            <Flex mb={3.5} direction='row'>
              <Text style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}>Educatus</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Customizable AI powered dashboard for students</Text>
            </Flex>
            <Flex mb={3.5} direction='row'>
              <Text style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}>Aulos</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic"> Watch brand classification using Azure and Computer Vision</Text>
            </Flex>
            <Text mb={3.5} mt={5} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>statistics</Text>
            <Flex mb={3.5} direction='row'>
              <Text style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}>GStatSim</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Open Source Python package for geostatistical simulation and interpolation</Text>
            </Flex>
            <Flex mb={3.5} direction='row'>
              <Text style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}>Data Science Explorations</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Various analysis&apos;</Text>
            </Flex>
            <Text mb={3.5} mt={5} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>fullstack</Text>
            <Flex mb={3.5} direction='row'>
              <Text style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}>Demogorgn.ai</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Website for simulating Greenland topography for geophysics researchers</Text>
            </Flex>
            <Flex mb={3.5} direction='row'>
              <Text style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}>Referme.fyi (deprecated)</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Web application to connect applicants with employees at companies</Text>
            </Flex>
            <Text mb={3.5} mt={5} style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={700}>web sockets</Text>
            <Flex mb={3.5} direction='row'>
              <Text style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}>Plexy.fun</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic">Real-time collaborative pixel canvas</Text>
            </Flex>
            <Flex mb={8} direction='row'>
              <Text style={{fontFamily: 'Barlow', textDecoration: 'underline'}} fontSize="16px" lineHeight="24px" fontWeight={500}>TCP Wall Server</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={400} style={{textDecoration: 'none'}} textDecoration="none" as="span">,&nbsp;</Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={500} style={{fontFamily: 'Barlow'}} textDecoration="none" as="span" fontStyle="italic"> Message board</Text>
            </Flex>
          </Flex>
          <Flex id="exp" flexDirection="column">
            <Flex mb={3.5}  mt={10}>
              <Text borderBottom="3px solid" style={{fontFamily: 'Barlow'}} fontSize="24px" fontWeight="600" lineHeight="36px">experience</Text>
            </Flex>
            <Flex direction="column">
              <Text fontSize="16px" lineHeight="24px" fontWeight={600} style={{fontFamily: 'Barlow', textDecoration: 'underline'}}>Amazon - Software Engineer Intern</Text>
              <Text fontSize="14px" lineHeight="24px" style={{fontFamily: 'Barlow'}} fontWeight={300}>May 2023 - August 2023 | Seattle, WA</Text>
              <Text mt={3} mb={6} fontSize="16px" lineHeight="24px" style={{fontFamily: 'Barlow'}} fontWeight={400}>Worked on developed</Text>
            </Flex>
            <Flex direction="column">
              <Text fontSize="16px" lineHeight="24px" fontWeight={600} style={{fontFamily: 'Barlow', textDecoration: 'underline'}}>Datadog - Software Engineer Intern</Text>
              <Text fontSize="14px" lineHeight="24px" style={{fontFamily: 'Barlow'}} fontWeight={300}>January 2023 - April 2023 | New York, NY</Text>
              <Text mt={3} mb={6} fontSize="16px" lineHeight="24px" style={{fontFamily: 'Barlow'}} fontWeight={400}>Implemented a Parser for metric queries with Greedy token parsing using PegJS that feeds input into an Abstract Syntax Tree for query syntax highlighting on the search bar UI. Developed Data Visualization components for Time Series graphs using D3 and WebGL Developed Data Visualization components for Time Series graphs using D3 and WebGL. Wrote 100+ JUnit tests for Developed Data Visualization components for Time Series graphs using D3 and WebGL Developed Data Visualization components for Time Series graphs using D3 and WebGL.</Text>
            </Flex>
            <Flex direction="column">
              <Text fontSize="16px" lineHeight="24px" fontWeight={600} style={{fontFamily: 'Barlow', textDecoration: 'underline'}}>Target - Software Engineer Intern</Text>
              <Text fontSize="14px" lineHeight="24px" style={{fontFamily: 'Barlow'}} fontWeight={300}>June 2022 - August 2022 | Minneapolis, MN</Text>
              <Text mt={3} mb={6} fontSize="16px" lineHeight="24px" style={{fontFamily: 'Barlow'}} fontWeight={400}>Worked on RESTful web services using Kafka data streaming pipelines for processing real-time store transaction data. Utilized Java with Spring Boot to develop a Microservice for tracking and correcting transaction event anomalies. Designed an internal transaction-ledger tool using React and TypeScript, reducing the number of stores-inventory support tickets by 74\% and populated the ledger using a GraphQL API.</Text>
            </Flex>
            <Flex direction="column">
              <Text fontSize="16px" lineHeight="24px" fontWeight={600} style={{fontFamily: 'Barlow', textDecoration: 'underline'}}>University of Florida - Research Assistant</Text>
              <Text fontSize="14px" lineHeight="24px" style={{fontFamily: 'Barlow'}} fontWeight={300}>October 2021 - December 2023 | Gainesville, FL</Text>
              <Text mt={3} mb={8} fontSize="16px" lineHeight="24px" style={{fontFamily: 'Barlow'}} fontWeight={400}>Contributed Python methods to an open source high performance computing software package for stochastic simulations of subglacial topography to improve ice sheet models and sea level rise projections. Implemented a vectorized quadrantal kNN algorithm for Sequential Gaussian Simulation using NumPy/Pandas. Worked with NVIDIA AI Staff to optimize software for GPU parallelization using CUDA (CuPy, cuDF) programming, decreasing memory usage and benchmark runtimes by 30x for large dataset scalability.</Text>
            </Flex>
          </Flex>
          <Flex id="getInTouch" flexDirection="column">
            <Flex mb={3.5}  mt={10}>
              <Text borderBottom="3px solid" style={{fontFamily: 'Barlow'}} fontSize="24px" fontWeight="600" lineHeight="36px">get in touch</Text>
            </Flex>
            <Text style={{fontFamily: 'Barlow'}} fontSize="16px" lineHeight="24px" fontWeight={400}>Send me an <Text _hover={{cursor: 'pointer'}} onClick={() => {}} as="span" textDecoration="underline">Email</Text>, connect with me on <Text _hover={{cursor: 'pointer'}} as="span" textDecoration="underline">LinkedIn</Text>, or check out my code on <Text _hover={{cursor: 'pointer'}} onClick={() => {}} as="span" textDecoration="underline">Github.</Text></Text>
          </Flex>
          <Flex justifyContent="center" mt={10}>
            <Text style={{fontFamily: 'Barlow'}} fontSize="16px" fontWeight={300}>© 2023 Matthew Hibbs</Text>
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
