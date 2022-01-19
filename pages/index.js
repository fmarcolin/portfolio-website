import NextLink from 'next/link'
import { Box, Button, Container, Heading, Image, Link, useColorModeValue } from "@chakra-ui/react"

import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I'm a mainly backend developer based in Brazil!
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Felipe Marcolin
                        </Heading>
                        <p>Backend Developer (NodeJs | .NET)</p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                        <Image 
                            borderColor="whiteAlpha.800" 
                            borderWidth={2} 
                            borderStyle="solid" 
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/felipe.jpg"
                            alt="Profile Image"/>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph> Felipe Marcolin is a backend developer....</Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href={"/works"}>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My Portfolio</Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1998</BioYear>
                        Born in Caxias do Sul, Brazil.
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        Started first job with IT.
                    </BioSection>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page