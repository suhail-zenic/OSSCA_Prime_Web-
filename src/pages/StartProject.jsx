import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  Text,
  useToast,
  SimpleGrid,
  HStack,
  Icon,
  Select,
  Checkbox,
  CheckboxGroup,
  Stack,
  Badge,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaRocket, FaCode, FaMobile, FaBrain, FaClock, FaUsers, FaAward, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { send } from "@emailjs/browser";
import hatImg from "../assets/fedora.png";

const MotionBox = motion(Box);

export default function StartProject() {
  const [form, setForm] = useState({ 
    from_name: "", 
    from_email: "", 
    company: "",
    phone: "",
    project_type: "",
    budget: "",
    timeline: "",
    services: [],
    message: "" 
  });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (services) => {
    setForm({ ...form, services });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const emailData = {
      ...form,
      services: form.services.join(", "),
      message: `Project Type: ${form.project_type}
Budget: ${form.budget}
Timeline: ${form.timeline}
Services Needed: ${form.services.join(", ")}
Company: ${form.company}
Phone: ${form.phone}

Project Description:
${form.message}`
    };

    try {
      await send(
        "service_egtaixl",
        "template_l97vlat",
        emailData,
        "9bFVuNz0SuH0xpeD1"
      );

      toast({
        title: "Project Request Sent! 🚀",
        description: "We've received your project details and will contact you within 24 hours.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setForm({ 
        from_name: "", 
        from_email: "", 
        company: "",
        phone: "",
        project_type: "",
        budget: "",
        timeline: "",
        services: [],
        message: "" 
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later or contact us directly.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

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
            Ready to bring your vision to life? Let's create something extraordinary together.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} align="start">
          {/* Project Information */}
          <MotionBox
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <VStack spacing={8} align="stretch">
              <Box>
                <Heading size="lg" mb={4} fontFamily="'Playfair Display', serif">
                  Why Choose OSSCA Prime?
                </Heading>
                <SimpleGrid columns={2} spacing={6}>
                  <VStack spacing={3} textAlign="center">
                    <Icon as={FaRocket} w={8} h={8} color="gold.500" />
                    <Text fontSize="sm" fontWeight="bold">Fast Delivery</Text>
                    <Text fontSize="xs" color="gray.600">Quick turnaround times</Text>
                  </VStack>
                  <VStack spacing={3} textAlign="center">
                    <Icon as={FaAward} w={8} h={8} color="gold.500" />
                    <Text fontSize="sm" fontWeight="bold">Quality Assured</Text>
                    <Text fontSize="xs" color="gray.600">Premium quality work</Text>
                  </VStack>
                  <VStack spacing={3} textAlign="center">
                    <Icon as={FaUsers} w={8} h={8} color="gold.500" />
                    <Text fontSize="sm" fontWeight="bold">Expert Team</Text>
                    <Text fontSize="xs" color="gray.600">Experienced professionals</Text>
                  </VStack>
                  <VStack spacing={3} textAlign="center">
                    <Icon as={FaClock} w={8} h={8} color="gold.500" />
                    <Text fontSize="sm" fontWeight="bold">24/7 Support</Text>
                    <Text fontSize="xs" color="gray.600">Always here to help</Text>
                  </VStack>
                </SimpleGrid>
              </Box>

              <Box>
                <Heading size="md" mb={4} fontFamily="'Playfair Display', serif">
                  Our Services
                </Heading>
                <VStack spacing={3} align="stretch">
                  <HStack spacing={3}>
                    <Icon as={FaCode} w={5} h={5} color="gold.500" />
                    <Text>Web Development - Modern, responsive websites</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={FaMobile} w={5} h={5} color="gold.500" />
                    <Text>App Development - iOS, Android, and cross-platform</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={FaBrain} w={5} h={5} color="gold.500" />
                    <Text>AI Solutions - Machine learning and automation</Text>
                  </HStack>
                </VStack>
              </Box>

              <Box bg="gold.50" p={6} rounded="xl" border="1px solid" borderColor="gold.200">
                <Heading size="sm" mb={3} color="gold.700">
                  What Happens Next?
                </Heading>
                <VStack spacing={2} align="stretch">
                  <HStack spacing={3}>
                    <Badge colorScheme="gold" borderRadius="full" w={6} h={6} display="flex" alignItems="center" justifyContent="center">1</Badge>
                    <Text fontSize="sm">We review your project details</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Badge colorScheme="gold" borderRadius="full" w={6} h={6} display="flex" alignItems="center" justifyContent="center">2</Badge>
                    <Text fontSize="sm">Schedule a consultation call</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Badge colorScheme="gold" borderRadius="full" w={6} h={6} display="flex" alignItems="center" justifyContent="center">3</Badge>
                    <Text fontSize="sm">Provide detailed proposal & timeline</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Badge colorScheme="gold" borderRadius="full" w={6} h={6} display="flex" alignItems="center" justifyContent="center">4</Badge>
                    <Text fontSize="sm">Start building your dream project</Text>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
          </MotionBox>

          {/* Project Form */}
          <MotionBox
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box
              as="form"
              onSubmit={handleSubmit}
              bg="white"
              p={8}
              rounded="2xl"
              shadow="xl"
              border="1px solid"
              borderColor="gray.200"
            >
              <Heading size="lg" mb={6} fontFamily="'Playfair Display', serif">
                Tell Us About Your Project
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
                <FormControl isRequired>
                  <FormLabel fontWeight="600">Full Name</FormLabel>
                  <Input
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    rounded="lg"
                    _focus={{ borderColor: "gold.500", boxShadow: "0 0 0 1px gold.500" }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontWeight="600">Email Address</FormLabel>
                  <Input
                    type="email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    rounded="lg"
                    _focus={{ borderColor: "gold.500", boxShadow: "0 0 0 1px gold.500" }}
                  />
                </FormControl>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
                <FormControl>
                  <FormLabel fontWeight="600">Company Name</FormLabel>
                  <Input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    rounded="lg"
                    _focus={{ borderColor: "gold.500", boxShadow: "0 0 0 1px gold.500" }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight="600">Phone Number</FormLabel>
                  <Input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    rounded="lg"
                    _focus={{ borderColor: "gold.500", boxShadow: "0 0 0 1px gold.500" }}
                  />
                </FormControl>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
                <FormControl isRequired>
                  <FormLabel fontWeight="600">Project Type</FormLabel>
                  <Select
                    name="project_type"
                    value={form.project_type}
                    onChange={handleChange}
                    placeholder="Select project type"
                    rounded="lg"
                    _focus={{ borderColor: "gold.500", boxShadow: "0 0 0 1px gold.500" }}
                  >
                    <option value="website">Website Development</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ai-solution">AI Solution</option>
                    <option value="e-commerce">E-commerce Platform</option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontWeight="600">Budget Range</FormLabel>
                  <Select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    placeholder="Select budget"
                    rounded="lg"
                    _focus={{ borderColor: "gold.500", boxShadow: "0 0 0 1px gold.500" }}
                  >
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="over-50k">Over $50,000</option>
                  </Select>
                </FormControl>
              </SimpleGrid>

              <FormControl mb={4}>
                <FormLabel fontWeight="600">Timeline</FormLabel>
                <Select
                  name="timeline"
                  value={form.timeline}
                  onChange={handleChange}
                  placeholder="Select timeline"
                  rounded="lg"
                  _focus={{ borderColor: "gold.500", boxShadow: "0 0 0 1px gold.500" }}
                >
                  <option value="asap">ASAP (Rush job)</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="flexible">Flexible</option>
                </Select>
              </FormControl>

              <FormControl mb={4}>
                <FormLabel fontWeight="600">Services Needed</FormLabel>
                <CheckboxGroup value={form.services} onChange={handleServiceChange}>
                  <Stack spacing={2}>
                    <Checkbox value="web-development" colorScheme="gold">
                      Web Development
                    </Checkbox>
                    <Checkbox value="app-development" colorScheme="gold">
                      App Development
                    </Checkbox>
                    <Checkbox value="ai-solutions" colorScheme="gold">
                      AI Solutions
                    </Checkbox>
                    <Checkbox value="ui-ux-design" colorScheme="gold">
                      UI/UX Design
                    </Checkbox>
                    <Checkbox value="consulting" colorScheme="gold">
                      Technical Consulting
                    </Checkbox>
                  </Stack>
                </CheckboxGroup>
              </FormControl>

              <FormControl isRequired mb={6}>
                <FormLabel fontWeight="600">Project Description</FormLabel>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your project in detail. What are your goals? What features do you need? Any specific requirements or preferences?"
                  rows={6}
                  rounded="lg"
                  _focus={{ borderColor: "gold.500", boxShadow: "0 0 0 1px gold.500" }}
                />
              </FormControl>

              <Button
                type="submit"
                color="white"
                bg="gold.500"
                isLoading={loading}
                loadingText="Sending Request..."
                w="full"
                size="lg"
                rounded="xl"
                shadow="lg"
                _hover={{
                  bg: "black.500",
                  transform: "translateY(-2px)",
                  shadow: "xl",
                }}
                transition="all 0.3s ease"
                leftIcon={<FaRocket />}
              >
                Send Project Request
              </Button>

              <Text fontSize="sm" color="gray.500" textAlign="center" mt={4}>
                We'll respond within 24 hours with a detailed proposal
              </Text>
            </Box>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
