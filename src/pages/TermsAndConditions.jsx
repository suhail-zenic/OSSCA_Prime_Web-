import React from "react";
import { Container, Heading, Text, VStack, Box, Button, HStack, Icon, Divider, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaFileContract, FaShieldAlt, FaGavel, FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";
import hatImg from "../assets/fedora.png";

const MotionBox = motion(Box);

export default function TermsAndConditions() {
  const bg = useColorModeValue("offwhite.500", "gray.800");

  return (
    <Box bg={bg} minH="100vh" py={8}>
      <Container maxW="6xl">
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          textAlign="center"
          mb={12}
        >
          <Button
            as={Link}
            to="/"
            leftIcon={<FaArrowLeft />}
            variant="ghost"
            mb={6}
            color="gold.500"
            _hover={{ bg: "gold.50" }}
          >
            Back to Home
          </Button>
          
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="800"
            mb={4}
          >
            OSSC
            <Box as="span" position="relative" display="inline-block" color="black.500">
              A
              <MotionBox
                as="img"
                src={hatImg}
                position="absolute"
                top="-0.4em"
                left="0"
                w="0.8em"
                h="0.8em"
                animate={{
                  y: [0, -5, 0, -5, 0],
                  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </Box>
            <Box
              as="span"
              ml={4}
              bgGradient="linear(to-r, #FFD700, #FFA500, #FFD700)"
              bgClip="text"
              fontFamily="'Playfair Display', serif"
            >
              Prime
            </Box>
          </Heading>
          
          <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
            Terms & Conditions
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          bg="white"
          p={10}
          rounded="2xl"
          shadow="xl"
          border="1px solid"
          borderColor="gray.200"
        >
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Icon as={FaFileContract} w={12} h={12} color="gold.500" mb={4} />
              <Text fontSize="lg" color="gray.700" maxW="3xl" mx="auto">
                Welcome to OSSCA Prime. By accessing or using our website and services, you agree to comply with the following Terms and Conditions. Please read them carefully.
              </Text>
            </Box>

            <Divider />

            <VStack spacing={8} align="stretch">
              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaHandshake} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">1. Acceptance of Terms</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  By using our services, you confirm that you have read, understood, and agree to be bound by these terms. 
                  If you do not agree to these terms, please do not use our services. These terms constitute a legally 
                  binding agreement between you and OSSCA Prime.
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaShieldAlt} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">2. Services Description</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  OSSCA Prime provides web development, app development, and AI solutions. Our services include but are not 
                  limited to: custom website development, mobile application development, AI/ML solutions, technical consulting, 
                  and ongoing support. We reserve the right to modify, suspend, or discontinue any service at any time with 
                  reasonable notice.
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaGavel} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">3. User Responsibilities</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  You agree to provide accurate, current, and complete information when engaging with our services. 
                  You are responsible for maintaining the confidentiality of any account information and for all activities 
                  that occur under your account. You agree not to misuse our website or services, and to comply with all 
                  applicable laws and regulations.
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaFileContract} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">4. Payment Terms</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  All payments for services must be made in accordance with the pricing plan agreed upon in writing. 
                  Payment terms will be specified in individual project agreements. Refunds are subject to our refund 
                  policy and the specific terms of your project agreement. Late payments may result in project delays 
                  or suspension of services.
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaShieldAlt} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">5. Intellectual Property Rights</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  All content, designs, code, and materials produced by OSSCA Prime remain our intellectual property 
                  unless otherwise agreed in writing. Upon full payment, you will receive appropriate rights to use 
                  the deliverables as specified in your project agreement. You retain ownership of any pre-existing 
                  intellectual property you provide to us.
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaGavel} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">6. Limitation of Liability</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  OSSCA Prime shall not be liable for any indirect, incidental, special, or consequential damages 
                  arising from the use of our services. Our total liability shall not exceed the amount paid by you 
                  for the specific service giving rise to the claim. This limitation applies regardless of the legal 
                  theory on which the claim is based.
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaHandshake} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">7. Confidentiality</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  We respect the confidentiality of your business information and project details. We will not disclose 
                  any confidential information to third parties without your written consent, except as required by law. 
                  We may use anonymized project information for portfolio and marketing purposes unless otherwise specified.
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaFileContract} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">8. Governing Law and Disputes</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  These terms are governed by the laws of the jurisdiction where OSSCA Prime operates. Any disputes 
                  shall be resolved through good faith negotiations first. If negotiations fail, disputes may be 
                  resolved through binding arbitration or in the courts of competent jurisdiction.
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaShieldAlt} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">9. Updates to Terms</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  We may update these Terms & Conditions from time to time to reflect changes in our services or 
                  legal requirements. We will notify you of any material changes via email or through our website. 
                  Continued use of our services after such changes constitutes acceptance of the revised terms.
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaHandshake} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">10. Contact Information</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  If you have any questions about these Terms & Conditions, please contact us at:
                  <br />
                  Email: contact.osscaprime@gmail.com
                  <br />
                  We will respond to your inquiry within 24-48 hours.
                </Text>
              </Box>
            </VStack>

            <Divider />

            <Box textAlign="center" bg="gold.50" p={6} rounded="xl">
              <Text fontSize="sm" color="gray.600">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </Text>
              <Text fontSize="sm" color="gray.600" mt={2}>
                By using our services, you acknowledge that you have read and understood these Terms & Conditions.
              </Text>
            </Box>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
