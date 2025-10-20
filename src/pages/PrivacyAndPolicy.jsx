import React from "react";
import { Container, Heading, Text, VStack, Box, Button, HStack, Icon, Divider, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaShieldAlt, FaLock, FaEye, FaDatabase, FaUserShield, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import hatImg from "../assets/fedora.png";

const MotionBox = motion(Box);

export default function Privacy() {
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
            Privacy Policy
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
              <Icon as={FaShieldAlt} w={12} h={12} color="gold.500" mb={4} />
              <Text fontSize="lg" color="gray.700" maxW="3xl" mx="auto">
                Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data. 
                We are committed to maintaining the highest standards of data protection and privacy.
              </Text>
            </Box>

            <Divider />

            <VStack spacing={8} align="stretch">
              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaDatabase} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">1. Information We Collect</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  We collect information you provide directly to us, such as when you contact us for services:
                  <br />• Personal information (name, email address, phone number)
                  <br />• Company information (company name, job title, business requirements)
                  <br />• Project details (project scope, technical requirements, timeline)
                  <br />• Communication records (emails, messages, call logs)
                  <br />• Website usage data (pages visited, time spent, device information)
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaCog} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">2. How We Use Your Information</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  We use the information we collect to:
                  <br />• Provide and improve our web development, app development, and AI services
                  <br />• Respond to your inquiries and provide customer support
                  <br />• Communicate with you about projects, services, and updates
                  <br />• Process payments and manage billing
                  <br />• Analyze website usage to improve user experience
                  <br />• Comply with legal obligations and protect our rights
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaLock} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">3. Data Protection and Security</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  We implement industry-standard security measures to protect your personal information:
                  <br />• SSL encryption for data transmission
                  <br />• Secure servers with regular security updates
                  <br />• Access controls and authentication systems
                  <br />• Regular security audits and monitoring
                  <br />• Employee training on data protection practices
                  <br />• Secure backup and recovery procedures
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaEye} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">4. Information Sharing and Disclosure</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  <br />• With your explicit consent
                  <br />• To comply with legal obligations or court orders
                  <br />• To protect our rights, property, or safety
                  <br />• With trusted service providers who assist in our operations (under strict confidentiality agreements)
                  <br />• In connection with a business transfer or acquisition
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaUserShield} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">5. Your Rights and Choices</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  You have the following rights regarding your personal information:
                  <br />• <strong>Access:</strong> Request a copy of the personal information we hold about you
                  <br />• <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                  <br />• <strong>Deletion:</strong> Request deletion of your personal information
                  <br />• <strong>Portability:</strong> Request transfer of your data to another service
                  <br />• <strong>Restriction:</strong> Request limitation of processing of your information
                  <br />• <strong>Objection:</strong> Object to processing of your information for certain purposes
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaDatabase} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">6. Data Retention</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy:
                  <br />• Project-related information: Retained for the duration of the project plus 3 years
                  <br />• Marketing communications: Until you opt out or request deletion
                  <br />• Legal compliance: As required by applicable laws and regulations
                  <br />• Website analytics: Aggregated and anonymized data may be retained longer
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaShieldAlt} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">7. Cookies and Tracking Technologies</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  Our website uses cookies and similar technologies to enhance your experience:
                  <br />• <strong>Essential cookies:</strong> Required for website functionality
                  <br />• <strong>Analytics cookies:</strong> Help us understand website usage
                  <br />• <strong>Preference cookies:</strong> Remember your settings and preferences
                  <br />• <strong>Marketing cookies:</strong> Used for targeted advertising (with your consent)
                  <br />You can control cookie settings through your browser preferences.
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaCog} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">8. International Data Transfers</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place:
                  <br />• Adequacy decisions by relevant data protection authorities
                  <br />• Standard contractual clauses approved by the European Commission
                  <br />• Binding corporate rules and certification schemes
                  <br />• Your explicit consent where required
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaUserShield} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">9. Children's Privacy</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. 
                  If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaShieldAlt} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">10. Changes to This Privacy Policy</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                  We will notify you of any material changes by:
                  <br />• Posting the updated policy on our website
                  <br />• Sending you an email notification
                  <br />• Providing notice through our services
                  <br />Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </Text>
              </Box>

              <Box>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaEye} w={6} h={6} color="gold.500" />
                  <Heading size="md" color="black.500">11. Contact Us</Heading>
                </HStack>
                <Text color="gray.700" lineHeight="tall">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                  <br />
                  <strong>Email:</strong> contact.osscaprime@gmail.com
                  <br />
                  <strong>Response Time:</strong> We will respond to your inquiry within 24-48 hours.
                  <br />
                  <strong>Data Protection Officer:</strong> Available upon request for complex privacy matters.
                </Text>
              </Box>
            </VStack>

            <Divider />

            <Box textAlign="center" bg="gold.50" p={6} rounded="xl">
              <Text fontSize="sm" color="gray.600">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </Text>
              <Text fontSize="sm" color="gray.600" mt={2}>
                This Privacy Policy is effective as of the date listed above and applies to all information collected by OSSCA Prime.
              </Text>
            </Box>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
