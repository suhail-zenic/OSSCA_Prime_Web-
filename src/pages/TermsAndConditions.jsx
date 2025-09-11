import React from "react";
import { Container, Heading, Text, VStack, Box } from "@chakra-ui/react";

export default function TermsAndConditions() {
  return (
    <Container maxW="4xl" py={20}>
      <VStack
        spacing={8}
        align="stretch"
        bg="white"
        p={10}
        rounded="2xl"
        shadow="xl"
      >
        <Heading
          textAlign="center"
          fontFamily="'Playfair Display', serif"
          fontWeight="800"
          fontSize={{ base: "3xl", md: "5xl" }}
          bgGradient="linear(to-r, #FFD700, #FFA500, #FFD700)"
          bgClip="text"
          style={{ backgroundSize: "200% auto", animation: "shine 3s linear infinite" }}
        >
          Terms & Conditions
        </Heading>

        <Text fontSize="lg" color="gray.700">
          Welcome to OSSCA Prime. By accessing or using our website and services, you agree to comply with the following Terms and Conditions.
        </Text>

        <Box bg="gray.50" p={6} rounded="xl" w="full" lineHeight="tall" color="gray.700">
          <Heading size="md" mb={2}>1. Acceptance of Terms</Heading>
          <Text mb={4}>
            By using our services, you confirm that you have read, understood, and agree to be bound by these terms.
          </Text>

          <Heading size="md" mb={2}>2. Services</Heading>
          <Text mb={4}>
            OSSCA Prime provides web development, app development, and AI solutions. We reserve the right to modify, suspend, or discontinue any service at any time.
          </Text>

          <Heading size="md" mb={2}>3. User Responsibilities</Heading>
          <Text mb={4}>
            You agree not to misuse our website or services, and to provide accurate information when engaging with us.
          </Text>

          <Heading size="md" mb={2}>4. Payments</Heading>
          <Text mb={4}>
            All payments for services must be made in accordance with the pricing plan agreed upon. Refunds are subject to our refund policy.
          </Text>

          <Heading size="md" mb={2}>5. Intellectual Property</Heading>
          <Text mb={4}>
            All content, designs, and code produced by OSSCA Prime remain our intellectual property unless otherwise agreed in writing.
          </Text>

          <Heading size="md" mb={2}>6. Limitation of Liability</Heading>
          <Text mb={4}>
            OSSCA Prime shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
          </Text>

          <Heading size="md" mb={2}>7. Governing Law</Heading>
          <Text mb={4}>
            These terms are governed by the laws of your jurisdiction. Any disputes shall be resolved in accordance with applicable law.
          </Text>

          <Heading size="md" mb={2}>8. Updates to Terms</Heading>
          <Text>
            We may update these Terms & Conditions from time to time. Continued use of our services constitutes acceptance of the revised terms.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
}
