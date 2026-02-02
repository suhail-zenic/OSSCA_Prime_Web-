import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Heading, Text, VStack, SimpleGrid, HStack, Icon, Image, Badge, Divider, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, useColorModeValue } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { keyframes } from "@emotion/react";
import { FaInstagram, FaRocket, FaUsers, FaAward, FaCode, FaMobile, FaBrain, FaStar, FaQuoteLeft, FaCheckCircle, FaArrowRight, FaGithub, FaLinkedin, FaTwitter, FaShopify } from "react-icons/fa";
import hatImg from "./assets/fedora.png";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

// Smooth easing for advanced feel (Material-style ease-out)
const smoothEase = "cubic-bezier(0.4, 0, 0.2, 1)";
const motionTransition = { duration: 0.5, ease: [0.4, 0, 0.2, 1] };

// Floating animation for hat
const floatAnimation = {
  y: [0, -5, 0, -5, 0],
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
};

// Floating decorative circles keyframes
const floatCircle = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

// Gradient animation keyframes for "Prime"
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Stagger animation variants for advanced scroll reveals
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};
const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }
};
const staggerItemScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }
};

// Shine effect keyframes
const shineAnimation = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

// Magnetic hover effect
const MagneticButton = ({ children, ...props }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <MotionButton
      {...props}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </MotionButton>
  );
};

// ServiceCard component
function ServiceCard({ title, description, link, icon }) {
  return (
    <Box
      p={6}
      borderWidth={1}
      borderRadius="2xl"
      bg="white"
      boxShadow="lg"
      textAlign="center"
      _hover={{ transform: "translateY(-5px)", boxShadow: "xl", transition: `all 0.35s ${smoothEase}` }}
      transition={`all 0.35s ${smoothEase}`}
    >
      {icon && (
        <Icon as={icon} w={12} h={12} color="gold.500" mb={4} />
      )}
      <Heading size="md" mb={4} fontFamily="'Playfair Display', serif">
        {title}
      </Heading>
      <Text mb={4} color="gray.600">
        {description}
      </Text>
      {link && (
        <Button
          as={Link}
          to={link}
          variant="link"
          color="gold.500"
          fontWeight="bold"
        >
          Learn more →
        </Button>
      )}
    </Box>
  );
}

// StatsCard component
function StatsCard({ number, label, icon }) {
  return (
    <VStack spacing={2} textAlign="center">
      <Icon as={icon} w={8} h={8} color="gold.500" />
      <Heading size="2xl" color="gold.500" fontFamily="'Playfair Display', serif">
        {number}
      </Heading>
      <Text color="gray.600" fontWeight="medium">
        {label}
      </Text>
    </VStack>
  );
}

// TestimonialCard component
function TestimonialCard({ name, role, company, content, rating }) {
  return (
    <Box
      p={6}
      bg="white"
      borderRadius="2xl"
      boxShadow="lg"
      position="relative"
      _hover={{ transform: "translateY(-3px)", boxShadow: "xl", transition: `all 0.35s ${smoothEase}` }}
      transition={`all 0.35s ${smoothEase}`}
    >
      <Icon as={FaQuoteLeft} w={6} h={6} color="gold.200" mb={4} />
      <Text mb={4} color="gray.600" fontStyle="italic">
        "{content}"
      </Text>
      <HStack spacing={1} mb={3}>
        {[...Array(5)].map((_, i) => (
          <Icon key={i} as={FaStar} color={i < rating ? "gold.400" : "gray.300"} />
        ))}
      </HStack>
      <Text fontWeight="bold" color="black.500">
        {name}
      </Text>
      <Text fontSize="sm" color="gray.500">
        {role} at {company}
      </Text>
    </Box>
  );
}

// ProcessStep component
function ProcessStep({ step, title, description, icon }) {
  return (
    <VStack spacing={4} textAlign="center" position="relative">
      <Box
        w={16}
        h={16}
        bg="gold.500"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        fontSize="xl"
        fontWeight="bold"
        mb={2}
      >
        {step}
      </Box>
      <Icon as={icon} w={8} h={8} color="gold.500" />
      <Heading size="md" fontFamily="'Playfair Display', serif">
        {title}
      </Heading>
      <Text color="gray.600" maxW="300px">
        {description}
      </Text>
    </VStack>
  );
}

// PortfolioCard component
function PortfolioCard({ title, description, image, tags, link }) {
  return (
    <Box
      bg="white"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="lg"
      _hover={{ transform: "translateY(-5px)", boxShadow: "xl", transition: `all 0.35s ${smoothEase}` }}
      transition={`all 0.35s ${smoothEase}`}
    >
      <Box h="200px" bg="gray.100" position="relative">
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize="4xl"
          color="gold.300"
        >
          {image}
        </Box>
      </Box>
      <Box p={6}>
        <Heading size="md" mb={2} fontFamily="'Playfair Display', serif">
          {title}
        </Heading>
        <Text mb={4} color="gray.600" fontSize="sm">
          {description}
        </Text>
        <HStack spacing={2} mb={4} flexWrap="wrap">
          {tags.map((tag, index) => (
            <Badge key={index} colorScheme="gold" variant="subtle">
              {tag}
            </Badge>
          ))}
        </HStack>
        {link && (
          <Button
            as={Link}
            to={link}
            size="sm"
            variant="outline"
            colorScheme="gold"
            rightIcon={<FaArrowRight />}
          >
            View Details
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 0.95], [0, 1]);
  const parallaxY1 = useTransform(scrollYProgress, [0, 0.3], [0, 40]);
  const parallaxY2 = useTransform(scrollYProgress, [0.2, 0.5], [0, -30]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box bg="offwhite.500" minH="100vh" position="relative" overflow="hidden">
      {/* Scroll progress bar */}
      <MotionBox
        position="fixed"
        top={0}
        left={0}
        right={0}
        h="3px"
        bg="gold.500"
        zIndex={1001}
        style={{ scaleX: progressScale, transformOrigin: "0%" }}
      />
      {/* Navigation Bar */}
      <MotionBox
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg={isScrolled ? "rgba(255,255,255,0.95)" : "transparent"}
        backdropFilter={isScrolled ? "blur(10px)" : "none"}
        borderBottom={isScrolled ? "1px solid" : "none"}
        borderColor="gray.200"
        transition={`all 0.35s ${smoothEase}`}
      >
        <Container maxW="7xl">
          <HStack justify="center" py={4}>
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              <Button variant="ghost" onClick={() => scrollToSection('services')}>
                Services
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('about')}>
                About
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('portfolio')}>
                Portfolio
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('testimonials')}>
                Testimonials
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('contact')}>
                Contact
              </Button>
            </HStack>
          </HStack>
        </Container>
      </MotionBox>
      {/* Decorative floating circles with parallax */}
      <MotionBox position="absolute" top="20%" left="10%" style={{ y: parallaxY1 }}>
        <Box w="40px" h="40px" bg="gold.200" rounded="full" opacity={0.3} style={{ animation: `${floatCircle} 6s ease-in-out infinite` }} />
      </MotionBox>
      <MotionBox position="absolute" top="50%" right="15%" style={{ y: parallaxY2 }}>
        <Box w="60px" h="60px" bg="gold.300" rounded="full" opacity={0.2} style={{ animation: `${floatCircle} 8s ease-in-out infinite` }} />
      </MotionBox>

      <Container maxW="7xl" py={12}>
        {/* Hero Section */}
        <MotionBox
          id="hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={motionTransition}
          textAlign="center"
          py={20}
          pt={32}
        >
          <Heading fontSize={{ base: "4xl", md: "6xl" }} fontWeight="800">
            <Box as="span" color="black.500">OSSC</Box>
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
                animate={floatAnimation}
              />
            </Box>
            <Box
              as="span"
              ml={4}
              bgGradient="linear(to-r, #FFD700, #FFA500, #FFD700)"
              bgClip="text"
              style={{
                backgroundSize: "200% auto",
                animation: `${shineAnimation} 3s linear infinite`,
              }}
              fontFamily="'Playfair Display', serif"
            >
              Prime
            </Box>
          </Heading>
          <Text fontSize={{ base: "xl", md: "2xl" }} mt={4} color="gray.600">
            Your prime partner for web, app and AI solutions
          </Text>
          <MagneticButton
            as={Link}
            to="/start-project"
            size="lg"
            mt={8}
            bg="gold.500"
            color="white"
            _hover={{ bg: "black.500", color: "gold.500", transform: "scale(1.05)", boxShadow: "lg" }}
            transition={`all 0.35s ${smoothEase}`}
            rounded="2xl"
            style={{
              backgroundImage: "linear-gradient(120deg, rgba(255,215,0,0.2) 0%, rgba(255,255,255,0.4) 50%, rgba(255,215,0,0.2) 100%)",
              backgroundSize: "200% auto",
              animation: `${shineAnimation} 5s linear infinite`,
            }}
          >
            Start a Project
          </MagneticButton>
        </MotionBox>

        {/* Services Section */}
        <MotionBox id="services" mt={16} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} justifyItems="center">
          <MotionBox variants={staggerItemScale}>
          <ServiceCard
            title="Web Development"
            description="Performance-first, accessible websites with modern UX."
            link="/web-development"
            icon={FaCode}
          />
          </MotionBox>
          <MotionBox variants={staggerItemScale}>
          <ServiceCard
            title="App Development"
            description="Cross-platform mobile & desktop apps that scale."
            link="/app-development"
            icon={FaMobile}
          />
          </MotionBox>
          <MotionBox variants={staggerItemScale}>
          <ServiceCard
            title="AI Solutions"
            description="Custom ML/AI systems, automation, and integrations."
            link="/ai-solutions"
            icon={FaBrain}
          />
          </MotionBox>
          <MotionBox variants={staggerItemScale}>
          <ServiceCard
            title="Shopify Store Development"
            description="High-converting Shopify stores: setup, themes, and apps."
            link="/shopify-development"
            icon={FaShopify}
          />
          </MotionBox>
          </SimpleGrid>
        </MotionBox>

       {/* Pricing Section */}
<MotionBox variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
<SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={16} justifyItems="center">

  {/* Basic Plan */}
  <MotionBox variants={staggerItemScale}>
  <Box p={10} borderWidth={3} borderRadius="2xl" bg="rgba(255,255,255,0.7)" backdropFilter="blur(10px)" shadow="lg" textAlign="center">
    <Heading size="lg" mb={2} fontFamily="'Playfair Display', serif">Basic</Heading>
    <Text fontSize="sm" color="gray.600" mb={6}>
      For individuals and small projects
    </Text>

    <Text fontSize="4xl" fontWeight="bold" mb={6}>
      Starting from $299 <Box as="span" fontSize="md" color="gray.500">/project</Box>
    </Text>

    <MagneticButton
      as={Link}
      to="/basic-features"
      mt={4}
      colorScheme="blackAlpha"
      bg="white"
      color="black"
      rounded="xl"
      shadow="md"
      _hover={{ bg: "black", color: "white" }}
    >
      Learn More
    </MagneticButton>
  </Box>
  </MotionBox>

  {/* Pro Plan (Most Popular) */}
  <MotionBox variants={staggerItemScale}>
  <Box position="relative">
    <Box
      position="absolute"
      top="-3"
      left="50%"
      transform="translateX(-50%)"
      bg="white"
      color="black"
      fontWeight="bold"
      fontSize="xs"
      px={3}
      py={1}
      rounded="full"
      shadow="lg"
      border="1px solid"
      borderColor="gray.200"
      zIndex={1}
    >
      ⭐ Most Popular
    </Box>

    <Box
      p={10}
      borderWidth={3}
      borderRadius="2xl"
      bgGradient="linear(to-br, #FFD700, #C5A000)"
      backdropFilter="blur(12px)"
      shadow="2xl"
      textAlign="center"
      transform="scale(1.05)"
      _hover={{ transform: "scale(1.08)", transition: `0.35s ${smoothEase}` }}
    >
      <Heading size="lg" mb={2} color="white" fontFamily="'Playfair Display', serif">Pro</Heading>
      <Text fontSize="sm" color="whiteAlpha.800" mb={6}>
        Best for growing startups and businesses ready to scale
      </Text>

      <Text fontSize="4xl" fontWeight="bold" mb={6} color="white">
        Starting from $999 <Box as="span" fontSize="md" color="whiteAlpha.800">/project</Box>
      </Text>

      <MagneticButton
        as={Link}
        to="/pro-features"
        mt={4}
        colorScheme="blackAlpha"
        bg="white"
        color="black"
        rounded="xl"
        shadow="md"
        _hover={{ bg: "black", color: "white" }}
      >
        Learn More
      </MagneticButton>
    </Box>
  </Box>
  </MotionBox>

  {/* Enterprise Plan */}
  <MotionBox variants={staggerItemScale}>
  <Box p={10} borderWidth={3} borderRadius="2xl" bg="rgba(255,255,255,0.7)" backdropFilter="blur(10px)" shadow="lg" textAlign="center">
    <Heading size="lg" mb={2} fontFamily="'Playfair Display', serif">Enterprise</Heading>
    <Text fontSize="sm" color="gray.600" mb={6}>
      Tailored solutions for large-scale projects
    </Text>

    <Text fontSize="4xl" fontWeight="bold" mb={6}>
      Starting from $1999 <Box as="span" fontSize="md" color="gray.500">/project</Box>
    </Text>

    <MagneticButton
      as={Link}
      to="/enterprise-features"
      mt={4}
      colorScheme="blackAlpha"
      bg="white"
      color="black"
      rounded="xl"
      shadow="md"
      _hover={{ bg: "black", color: "white" }}
    >
      Learn More
    </MagneticButton>
  </Box>
  </MotionBox>

</SimpleGrid>
</MotionBox>

        {/* Stats Section */}
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          mt={20}
        >
          <VStack spacing={8} textAlign="center">
            <Heading size="lg" fontFamily="'Playfair Display', serif">
              Trusted by Clients Worldwide
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
              <MotionBox variants={staggerItem}><StatsCard number="500+" label="Projects Completed" icon={FaRocket} /></MotionBox>
              <MotionBox variants={staggerItem}><StatsCard number="500+" label="Happy Clients" icon={FaUsers} /></MotionBox>
              <MotionBox variants={staggerItem}><StatsCard number="5+" label="Years Experience" icon={FaAward} /></MotionBox>
              <MotionBox variants={staggerItem}><StatsCard number="100%" label="Client Satisfaction" icon={FaStar} /></MotionBox>
            </SimpleGrid>
          </VStack>
        </MotionBox>

        {/* About Section */}
        <MotionBox
          id="about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={motionTransition}
          viewport={{ once: true }}
          mt={20}
        >
          <VStack spacing={8} textAlign="center">
            <Heading size="lg" fontFamily="'Playfair Display', serif">
              About OSSCA Prime
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="4xl">
              We are a passionate team of developers, designers, and AI specialists dedicated to 
              transforming your ideas into exceptional digital experiences. With years of expertise 
              in cutting-edge technologies, we deliver solutions that not only meet your requirements 
              but exceed your expectations.
            </Text>
            <MotionBox as={SimpleGrid} columns={{ base: 1, md: 3 }} spacing={8} mt={8} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <MotionBox variants={staggerItemScale}>
                <VStack spacing={4} p={6} bg="white" borderRadius="2xl" boxShadow="lg">
                  <Icon as={FaCode} w={12} h={12} color="gold.500" />
                  <Heading size="md" fontFamily="'Playfair Display', serif">Innovation</Heading>
                  <Text color="gray.600" textAlign="center">
                    We stay ahead of the curve with the latest technologies and best practices.
                  </Text>
                </VStack>
              </MotionBox>
              <MotionBox variants={staggerItemScale}>
                <VStack spacing={4} p={6} bg="white" borderRadius="2xl" boxShadow="lg">
                  <Icon as={FaUsers} w={12} h={12} color="gold.500" />
                  <Heading size="md" fontFamily="'Playfair Display', serif">Collaboration</Heading>
                  <Text color="gray.600" textAlign="center">
                    We work closely with our clients to ensure every project is a perfect fit.
                  </Text>
                </VStack>
              </MotionBox>
              <MotionBox variants={staggerItemScale}>
                <VStack spacing={4} p={6} bg="white" borderRadius="2xl" boxShadow="lg">
                  <Icon as={FaAward} w={12} h={12} color="gold.500" />
                  <Heading size="md" fontFamily="'Playfair Display', serif">Excellence</Heading>
                  <Text color="gray.600" textAlign="center">
                    Quality is at the heart of everything we do, from concept to deployment.
                  </Text>
                </VStack>
              </MotionBox>
            </MotionBox>
          </VStack>
        </MotionBox>

        {/* Portfolio Section */}
        <MotionBox
          id="portfolio"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={motionTransition}
          viewport={{ once: true }}
          mt={20}
        >
          <VStack spacing={8} textAlign="center">
            <Heading size="lg" fontFamily="'Playfair Display', serif">
              Our Recent Work
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Explore some of our recent projects and see how we've helped businesses 
              achieve their digital goals.
            </Text>
            <MotionBox as={SimpleGrid} columns={{ base: 1, md: 3 }} spacing={8} mt={8} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <MotionBox variants={staggerItemScale}>
              <PortfolioCard
                title="E-Commerce Platform"
                description="A modern, scalable e-commerce solution with advanced analytics and AI-powered recommendations."
                image="🛒"
                tags={["React", "Node.js", "AI", "E-commerce"]}
              />
              </MotionBox>
              <MotionBox variants={staggerItemScale}>
              <PortfolioCard
                title="Mobile Banking App"
                description="Secure, user-friendly mobile banking application with biometric authentication."
                image="🏦"
                tags={["React Native", "Security", "Fintech", "Mobile"]}
              />
              </MotionBox>
              <MotionBox variants={staggerItemScale}>
              <PortfolioCard
                title="AI Chatbot System"
                description="Intelligent customer service chatbot with natural language processing capabilities."
                image="🤖"
                tags={["AI", "NLP", "Automation", "Customer Service"]}
              />
              </MotionBox>
            </MotionBox>

            {/* Shopify Stores We've Built */}
            <Heading size="md" fontFamily="'Playfair Display', serif" mt={12} mb={4}>
              Shopify Stores We've Built
            </Heading>
            <MotionBox as={SimpleGrid} columns={{ base: 1, md: 3 }} spacing={8} w="full" maxW="5xl" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <MotionBox variants={staggerItem}>
              <VStack align="start" spacing={3} p={6} bg="white" borderRadius="2xl" boxShadow="lg" h="full">
                <Text fontWeight="bold" color="gray.700">👗 Clothing</Text>
                <VStack align="start" spacing={2}>
                  <Box as="a" href="https://www.taruni.in" target="_blank" rel="noopener noreferrer" color="gold.500" _hover={{ textDecoration: "underline" }} transition={`all 0.25s ${smoothEase}`} fontSize="sm">www.taruni.in</Box>
                  <Box as="a" href="https://www.malikaclothing.qa" target="_blank" rel="noopener noreferrer" color="gold.500" _hover={{ textDecoration: "underline" }} transition={`all 0.25s ${smoothEase}`} fontSize="sm">www.malikaclothing.qa</Box>
                  <Box as="a" href="https://www.naaribyardraknair.com" target="_blank" rel="noopener noreferrer" color="gold.500" _hover={{ textDecoration: "underline" }} transition={`all 0.25s ${smoothEase}`} fontSize="sm">www.naaribyardraknair.com</Box>
                  <Box as="a" href="https://www.flyhoch.com" target="_blank" rel="noopener noreferrer" color="gold.500" _hover={{ textDecoration: "underline" }} transition={`all 0.25s ${smoothEase}`} fontSize="sm">www.flyhoch.com</Box>
                </VStack>
              </VStack>
              </MotionBox>
              <MotionBox variants={staggerItem}>
              <VStack align="start" spacing={3} p={6} bg="white" borderRadius="2xl" boxShadow="lg" h="full">
                <Text fontWeight="bold" color="gray.700">🍔 Food & Beverages</Text>
                <VStack align="start" spacing={2}>
                  <Box as="a" href="https://gocs.shop/" target="_blank" rel="noopener noreferrer" color="gold.500" _hover={{ textDecoration: "underline" }} transition={`all 0.25s ${smoothEase}`} fontSize="sm">gocs.shop</Box>
                  <Box as="a" href="https://www.domnom.in" target="_blank" rel="noopener noreferrer" color="gold.500" _hover={{ textDecoration: "underline" }} transition={`all 0.25s ${smoothEase}`} fontSize="sm">www.domnom.in</Box>
                </VStack>
              </VStack>
              </MotionBox>
              <MotionBox variants={staggerItem}>
              <VStack align="start" spacing={3} p={6} bg="white" borderRadius="2xl" boxShadow="lg" h="full">
                <Text fontWeight="bold" color="gray.700">🏠 Curtains & Home Decor</Text>
                <VStack align="start" spacing={2}>
                  <Box as="a" href="https://www.sreeyang.com/" target="_blank" rel="noopener noreferrer" color="gold.500" _hover={{ textDecoration: "underline" }} transition={`all 0.25s ${smoothEase}`} fontSize="sm">www.sreeyang.com</Box>
                </VStack>
              </VStack>
              </MotionBox>
            </MotionBox>
          </VStack>
        </MotionBox>

        {/* Process Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={motionTransition}
          viewport={{ once: true }}
          mt={20}
        >
          <VStack spacing={8} textAlign="center">
            <Heading size="lg" fontFamily="'Playfair Display', serif">
              How We Work
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Our proven process ensures your project is delivered on time, 
              on budget, and exceeds your expectations.
            </Text>
            <MotionBox as={SimpleGrid} columns={{ base: 1, md: 4 }} spacing={8} mt={8} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <MotionBox variants={staggerItem}>
              <ProcessStep
                step="1"
                title="Discovery"
                description="We understand your vision, goals, and requirements through detailed consultation."
                icon={FaUsers}
              />
              </MotionBox>
              <MotionBox variants={staggerItem}>
              <ProcessStep
                step="2"
                title="Design"
                description="Our team creates wireframes, prototypes, and designs that bring your ideas to life."
                icon={FaCode}
              />
              </MotionBox>
              <MotionBox variants={staggerItem}>
              <ProcessStep
                step="3"
                title="Development"
                description="We build your solution using cutting-edge technologies and best practices."
                icon={FaRocket}
              />
              </MotionBox>
              <MotionBox variants={staggerItem}>
              <ProcessStep
                step="4"
                title="Launch"
                description="We deploy your project and provide ongoing support to ensure success."
                icon={FaAward}
              />
              </MotionBox>
            </MotionBox>
          </VStack>
        </MotionBox>

        {/* Testimonials Section */}
        <MotionBox
          id="testimonials"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={motionTransition}
          viewport={{ once: true }}
          mt={20}
        >
          <VStack spacing={8} textAlign="center">
            <Heading size="lg" fontFamily="'Playfair Display', serif">
              What Our Clients Say
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Don't just take our word for it. Here's what our satisfied clients have to say.
            </Text>
            <MotionBox as={SimpleGrid} columns={{ base: 1, md: 3 }} spacing={8} mt={8} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <MotionBox variants={staggerItemScale}>
              <TestimonialCard
                name="Sarah Johnson"
                role="CEO"
                company="TechStart Inc."
                content="OSSCA Prime transformed our digital presence completely. Their attention to detail and innovative approach exceeded all our expectations."
                rating={5}
              />
              </MotionBox>
              <MotionBox variants={staggerItemScale}>
              <TestimonialCard
                name="Michael Chen"
                role="Founder"
                company="EcoSolutions"
                content="The AI solution they built for us has revolutionized our customer service. Response times improved by 80% and customer satisfaction is at an all-time high."
                rating={5}
              />
              </MotionBox>
              <MotionBox variants={staggerItemScale}>
              <TestimonialCard
                name="Emily Rodriguez"
                role="Marketing Director"
                company="Fashion Forward"
                content="Working with OSSCA Prime was a game-changer. They delivered our e-commerce platform ahead of schedule and it's been performing flawlessly."
                rating={5}
              />
              </MotionBox>
            </MotionBox>
          </VStack>
        </MotionBox>

        {/* FAQ Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={motionTransition}
          viewport={{ once: true }}
          mt={20}
        >
          <VStack spacing={8} textAlign="center">
            <Heading size="lg" fontFamily="'Playfair Display', serif">
              Frequently Asked Questions
            </Heading>
            <Box maxW="4xl" w="full">
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                        What technologies do you specialize in?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    We specialize in modern web technologies including React, Node.js, Python, 
                    AI/ML frameworks, mobile development with React Native, and cloud platforms 
                    like AWS and Azure.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                        How long does a typical project take?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Project timelines vary based on complexity. Simple websites take 2-4 weeks, 
                    while complex applications can take 3-6 months. We provide detailed timelines 
                    during the discovery phase.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                        Do you provide ongoing support after launch?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Yes! We offer comprehensive post-launch support including maintenance, 
                    updates, bug fixes, and feature enhancements. Support packages are tailored 
                    to your specific needs.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                        Can you work with our existing team?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Absolutely! We excel at collaborating with existing teams, integrating 
                    seamlessly with your workflow, and providing knowledge transfer to ensure 
                    smooth handoffs.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </VStack>
        </MotionBox>

        {/* Enhanced Contact Section */}
        <Box id="contact" mt={20}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={motionTransition}
            viewport={{ once: true }}
          >
            <VStack spacing={12}>
              {/* Header */}
              <VStack spacing={4} textAlign="center">
                <Heading
                  as="h3"
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontFamily="'Playfair Display', serif"
                  bgGradient="linear(to-r, #FFD700, #FFA500, #FFD700)"
                  bgClip="text"
                  style={{
                    backgroundSize: "200% auto",
                    animation: `${shineAnimation} 3s linear infinite`,
                  }}
                >
                  Get in Touch
                </Heading>
                <Text fontSize="xl" color="gray.600" maxW="2xl">
                  Have a project in mind? We're here to turn your vision into reality. 
                  Let's start a conversation!
                </Text>
              </VStack>

              {/* Main Contact Box */}
              <Box
                bg="rgba(255,255,255,0.8)"
                backdropFilter="blur(12px)"
                rounded="2xl"
                shadow="2xl"
                p={{ base: 8, md: 12 }}
                maxW="5xl"
                w="full"
                mx="auto"
                border="2px solid"
                borderColor="gold.200"
              >
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  {/* Left Side - Contact Info */}
                  <VStack spacing={6} align="start">
                    <Heading size="md" fontFamily="'Playfair Display', serif">
                      Contact Information
                    </Heading>
                    
                    {/* Email */}
                    <HStack
                      spacing={4}
                      p={4}
                      bg="gold.50"
                      rounded="xl"
                      w="full"
                      _hover={{ bg: "gold.100", transform: "translateX(5px)" }}
                      transition={`all 0.35s ${smoothEase}`}
                    >
                      <Box
                        bg="gold.500"
                        color="white"
                        p={3}
                        rounded="lg"
                        fontSize="xl"
                      >
                        ✉️
                      </Box>
                      <VStack spacing={0} align="start">
                        <Text fontSize="xs" color="gray.500" fontWeight="bold">
                          EMAIL
                        </Text>
                        <Text fontSize="sm" fontWeight="medium" color="gray.700">
                          contact.osscaprime@gmail.com
                        </Text>
                      </VStack>
                    </HStack>

                    {/* Response Time */}
                    <HStack
                      spacing={4}
                      p={4}
                      bg="green.50"
                      rounded="xl"
                      w="full"
                      _hover={{ bg: "green.100", transform: "translateX(5px)" }}
                      transition={`all 0.35s ${smoothEase}`}
                    >
                      <Box
                        bg="green.500"
                        color="white"
                        p={3}
                        rounded="lg"
                        fontSize="xl"
                      >
                        ⚡
                      </Box>
                      <VStack spacing={0} align="start">
                        <Text fontSize="xs" color="gray.500" fontWeight="bold">
                          RESPONSE TIME
                        </Text>
                        <Text fontSize="sm" fontWeight="medium" color="gray.700">
                          Within 24 hours
                        </Text>
                      </VStack>
                    </HStack>

                    {/* Location */}
                    <HStack
                      spacing={4}
                      p={4}
                      bg="blue.50"
                      rounded="xl"
                      w="full"
                      _hover={{ bg: "blue.100", transform: "translateX(5px)" }}
                      transition={`all 0.35s ${smoothEase}`}
                    >
                      <Box
                        bg="blue.500"
                        color="white"
                        p={3}
                        rounded="lg"
                        fontSize="xl"
                      >
                        🌍
                      </Box>
                      <VStack spacing={0} align="start">
                        <Text fontSize="xs" color="gray.500" fontWeight="bold">
                          AVAILABILITY
                        </Text>
                        <Text fontSize="sm" fontWeight="medium" color="gray.700">
                          Worldwide service, 24/7
                        </Text>
                      </VStack>
                    </HStack>

                    {/* Stats */}
                    <SimpleGrid columns={2} spacing={4} w="full" mt={4}>
                      <VStack
                        p={4}
                        bg="rgba(255,215,0,0.1)"
                        rounded="xl"
                        spacing={1}
                      >
                        <Text fontSize="2xl" fontWeight="bold" color="gold.600">
                          50+
                        </Text>
                        <Text fontSize="xs" color="gray.600" textAlign="center">
                          Projects Delivered
                        </Text>
                      </VStack>
                      <VStack
                        p={4}
                        bg="rgba(255,215,0,0.1)"
                        rounded="xl"
                        spacing={1}
                      >
                        <Text fontSize="2xl" fontWeight="bold" color="gold.600">
                          100%
                        </Text>
                        <Text fontSize="xs" color="gray.600" textAlign="center">
                          Client Satisfaction
                        </Text>
                      </VStack>
                    </SimpleGrid>
                  </VStack>

                  {/* Right Side - Quick Actions */}
                  <VStack spacing={6} justify="center">
                    <Heading size="md" fontFamily="'Playfair Display', serif">
                      Quick Actions
                    </Heading>

                    {/* Email Button */}
                    <MagneticButton
                      as="a"
                      href="mailto:contact.osscaprime@gmail.com"
                      bg="gold.500"
                      color="white"
                      _hover={{ bg: "black.500", color: "gold.500", transform: "scale(1.05)", boxShadow: "2xl" }}
                      size="lg"
                      rounded="xl"
                      w="full"
                      h="60px"
                      fontSize="lg"
                      transition={`all 0.35s ${smoothEase}`}
                      style={{
                        backgroundImage: "linear-gradient(120deg, rgba(255,215,0,0.2) 0%, rgba(255,255,255,0.4) 50%, rgba(255,215,0,0.2) 100%)",
                        backgroundSize: "200% auto",
                        animation: `${shineAnimation} 5s linear infinite`,
                      }}
                    >
                      <HStack spacing={3}>
                        <Text fontSize="2xl">✉️</Text>
                        <VStack spacing={0} align="start">
                          <Text fontSize="sm" opacity={0.9}>
                            Send Email
                          </Text>
                          <Text fontSize="xs" opacity={0.7}>
                            Get instant reply
                          </Text>
                        </VStack>
                      </HStack>
                    </MagneticButton>

                    {/* Instagram Button */}
                    <MagneticButton
                      as="a"
                      href="https://www.instagram.com/ossca_prime"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      borderColor="gold.500"
                      borderWidth="2px"
                      color="gold.500"
                      _hover={{ bg: "gold.500", color: "white", transform: "scale(1.05)", boxShadow: "xl" }}
                      size="lg"
                      rounded="xl"
                      w="full"
                      h="60px"
                      fontSize="lg"
                      transition={`all 0.35s ${smoothEase}`}
                    >
                      <HStack spacing={3}>
                        <FaInstagram fontSize="24px" />
                        <VStack spacing={0} align="start">
                          <Text fontSize="sm">
                            Follow on Instagram
                          </Text>
                          <Text fontSize="xs" opacity={0.7}>
                            @ossca_prime
                          </Text>
                        </VStack>
                      </HStack>
                    </MagneticButton>

                    {/* Start Project Button */}
                    <MagneticButton
                      as={Link}
                      to="/start-project"
                      variant="outline"
                      borderColor="black.500"
                      borderWidth="2px"
                      color="black.500"
                      _hover={{ bg: "black.500", color: "white", transform: "scale(1.05)", boxShadow: "xl" }}
                      size="lg"
                      rounded="xl"
                      w="full"
                      h="60px"
                      fontSize="lg"
                      transition={`all 0.35s ${smoothEase}`}
                    >
                      <HStack spacing={3}>
                        <FaRocket fontSize="20px" />
                        <VStack spacing={0} align="start">
                          <Text fontSize="sm">
                            Start Your Project
                          </Text>
                          <Text fontSize="xs" opacity={0.7}>
                            Fill detailed form
                          </Text>
                        </VStack>
                      </HStack>
                    </MagneticButton>

                    <Divider />

                    {/* Social Proof */}
                    <VStack spacing={2} w="full">
                      <HStack spacing={1}>
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                        <FaStar color="#FFD700" />
                      </HStack>
                      <Text fontSize="sm" color="gray.600" textAlign="center">
                        Trusted by businesses worldwide
                      </Text>
                    </VStack>
                  </VStack>
                </SimpleGrid>

                {/* Bottom Note */}
                <Box
                  mt={8}
                  p={4}
                  bg="rgba(255,215,0,0.05)"
                  rounded="lg"
                  borderLeft="4px solid"
                  borderColor="gold.500"
                >
                  <Text fontSize="sm" color="gray.600">
                    💡 <Box as="span" fontWeight="bold">Quick tip:</Box> For faster response, 
                    include your project details, budget, and timeline when reaching out!
                  </Text>
                </Box>
              </Box>
            </VStack>
          </MotionBox>
        </Box>

 {/* Enhanced Footer */}
<Box as="footer" mt={20} py={16} bg="rgba(255,255,255,0.5)" backdropFilter="blur(10px)">
  <Container maxW="7xl">
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
      {/* Company Info */}
      <VStack spacing={4} align="start">
        <Heading size="md" fontFamily="'Playfair Display', serif">
          OSSCA Prime
        </Heading>
        <Text color="gray.600" fontSize="sm">
          Your prime partner for web, app and AI solutions. 
          Transforming ideas into exceptional digital experiences.
        </Text>
      </VStack>

      {/* Services */}
      <VStack spacing={4} align="start">
        <Heading size="sm" color="black.500">
          Services
        </Heading>
        <VStack spacing={2} align="start">
          <Link to="/web-development" style={{ fontSize: "sm", color: "#666" }}>
            Web Development
          </Link>
          <Link to="/app-development" style={{ fontSize: "sm", color: "#666" }}>
            App Development
          </Link>
          <Link to="/ai-solutions" style={{ fontSize: "sm", color: "#666" }}>
            AI Solutions
          </Link>
          <Link to="/shopify-development" style={{ fontSize: "sm", color: "#666" }}>
            Shopify Store Development
          </Link>
        </VStack>
      </VStack>

      {/* Company */}
      <VStack spacing={4} align="start">
        <Heading size="sm" color="black.500">
          Company
        </Heading>
        <VStack spacing={2} align="start">
          <Button variant="link" onClick={() => scrollToSection('about')} fontSize="sm" color="gray.600" p={0} h="auto">
            About Us
          </Button>
          <Button variant="link" onClick={() => scrollToSection('portfolio')} fontSize="sm" color="gray.600" p={0} h="auto">
            Portfolio
          </Button>
          <Button variant="link" onClick={() => scrollToSection('testimonials')} fontSize="sm" color="gray.600" p={0} h="auto">
            Testimonials
          </Button>
          <Link to="/start-project" style={{ fontSize: "sm", color: "#666" }}>
            Start a Project
          </Link>
        </VStack>
      </VStack>

      {/* Contact */}
      <VStack spacing={4} align="start">
        <Heading size="sm" color="black.500">
          Contact
        </Heading>
        <VStack spacing={2} align="start">
          <Text fontSize="sm" color="gray.600">
            📧 contact.osscaprime@gmail.com
          </Text>
          <Text fontSize="sm" color="gray.600">
            📱 Available 24/7 for support
          </Text>
          <Text fontSize="sm" color="gray.600">
            🌍 Worldwide service
          </Text>
        </VStack>
      </VStack>
    </SimpleGrid>

    <Divider my={8} />

    <VStack spacing={4}>
      <Text fontSize="sm" color="gray.600" textAlign="center">
        © {new Date().getFullYear()} OSSCA Prime — Your prime partner for web, app and AI solutions.
      </Text>
      <HStack spacing={6}>
        <Link
          to="/terms"
          style={{ fontSize: "sm", fontWeight: "600", textDecoration: "none", color: "#666" }}
        >
          Terms & Conditions
        </Link>
        <Link
          to="/privacy"
          style={{ fontSize: "sm", fontWeight: "600", textDecoration: "none", color: "#666" }}
        >
          Privacy Policy
        </Link>
      </HStack>
    </VStack>
  </Container>
</Box>
</Container>
</Box>
);
}
