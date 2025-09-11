import React from "react";
import { Container, Heading, Text, VStack, Box } from "@chakra-ui/react";

export default function Privacy() {
  return (
    <Container maxW="4xl" py={20}>
      <VStack
        spacing={8}
        align="start"
        bg="white"
        p={10}
        rounded="2xl"
        shadow="xl"
      >
        <Heading
          as="h1"
          size="2xl"
          fontFamily="'Playfair Display', serif"
          fontWeight="800"
          lineHeight="1.3"
          bgGradient="linear(to-r, yellow.400, orange.400)"
          bgClip="text"
          textShadow="0 2px 6px rgba(0,0,0,0.1)"
        >
          Privacy Policy
        </Heading>

        <Text fontSize="lg" color="gray.700" lineHeight="taller">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal data.
        </Text>

        <Box
          fontSize="md"
          lineHeight="tall"
          color="gray.600"
          bg="gray.50"
          p={6}
          rounded="xl"
          w="full"
          shadow="sm"
        >
          <Text mb={3}>
            1. <strong>Information We Collect</strong> – Name, email, and project details when you contact us.
          </Text>
          <Text mb={3}>
            2. <strong>How We Use It</strong> – To provide services, respond to inquiries, and improve our offerings.
          </Text>
          <Text mb={3}>
            3. <strong>Data Protection</strong> – We use industry-standard measures to keep your data safe.
          </Text>
          <Text mb={3}>
            4. <strong>Sharing of Data</strong> – We do not sell or share your data with third parties.
          </Text>
          <Text>
            5. <strong>Your Rights</strong> – You can request data removal or updates at any time.
          </Text>
        </Box>

        <Text color="gray.500" fontSize="sm" fontStyle="italic">
          Last updated: {new Date().toLocaleDateString()}
        </Text>
      </VStack>
    </Container>
  );
}
