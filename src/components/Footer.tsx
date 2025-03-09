import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Button,
    Divider,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaDev, FaGit, FaGitAlt, FaGithub, FaGithubSquare, FaGitSquare, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('white', 'white')}
        color={useColorModeValue('gray.700', 'gray.700')}
        justifyContent='center'
        mt={'-40px'}
        >
        {/* <Divider borderColor='gray.200' /> */}
        <Container as={Stack} width={["94%","90%"]} maxWidth="696px" py={10} mb={4} >
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr' }}
            spacing='90px'>
            <Stack spacing={3}>
              <Box>
                <Text sx={{ "-webkit-text-stroke": '1px black' }} fontSize='28px' style={{fontFamily: 'Indie Flower'}}>matt hibbs</Text>
              </Box>
              {/* <Text fontSize='15px'>Contact</Text> */}
              <Text fontSize='15px' color='#999'>
                New York, New York
              </Text>
              <Stack direction={'row'} spacing={6}>
                <Button onClick={() => window.open('mailto:hibbs.matthew@protonmail.com')} height='36px' fontSize='15px' color='#2f2f2f' bgColor='rgb(33, 33, 33, 0.07)' borderRadius='8px'>Email Me</Button>
                <Stack display={{base: "unset", sm: 'none'}} direction={'row'} spacing={5}>
                    <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/matthibbs/'}>
                    <FaLinkedin />
                    </SocialButton>
                    <SocialButton label={'GitHub'} href={'https://github.com/matthibbs7'}>
                    <FaGithub />
                    </SocialButton>
                    <SocialButton label={'Devpost'} href={'https://devpost.com/hibbs-matthew'}>
                    <FaDev />
                    </SocialButton>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing={3.5} display={{base: "none", sm: 'unset'}} fontSize='15px' align={'flex-start'}>
              <Text fontSize='15px'>Media</Text>
              <Link  color='#999' href={'https://www.linkedin.com/in/matthibbs/'} flexDirection='row' display='flex' alignItems='center'><FaLinkedin  style={{verticalAlign: 'center'}} /><Text>&nbsp;LinkedIn</Text></Link>
              <Link  color='#999' href={'https://github.com/matthibbs7'} flexDirection='row' display='flex' alignItems='center'><FaGithubSquare  style={{verticalAlign: 'center'}} /><Text>&nbsp;GitHub</Text></Link>
              <Link  color='#999' href={'https://devpost.com/hibbs-matthew'} flexDirection='row' display='flex' alignItems='center'><FaDev  style={{verticalAlign: 'center'}} /><Text>&nbsp;Devpost</Text></Link>

            </Stack>
            <Stack spacing={3.5} display={{base: "none", md: 'unset'}} fontSize='15px' align={'flex-start'}>
              <Text fontSize='15px'>Misc</Text>
              <Link flexDirection='row' display='flex' alignItems='center' href={'#'} color='#999'>Blog</Link>
              <Link flexDirection='row' display='flex' alignItems='center' color='#999' href={'#'}></Link>
              <Link flexDirection='row' display='flex' alignItems='center' color='#999' href={'#'}></Link>
              
            </Stack>
            
          </SimpleGrid>
        </Container>


      </Box>
    );
  }