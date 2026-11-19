import React, { useEffect, useRef, useState } from "react";
import {
  Box, Button, Container, Heading, Text, VStack, SimpleGrid, HStack, Icon, Flex, IconButton,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
  Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody,
  useDisclosure, useClipboard,
} from "@chakra-ui/react";
import {
  motion, useScroll, useTransform, useInView, useReducedMotion, animate,
  AnimatePresence, MotionConfig,
} from "framer-motion";
import { keyframes } from "@emotion/react";
import {
  FaInstagram, FaRocket, FaUsers, FaAward, FaCode, FaMobileAlt, FaBrain, FaStar, FaQuoteLeft,
  FaArrowRight, FaShopify, FaBars, FaShoppingCart, FaUniversity, FaRobot, FaEnvelope,
  FaBolt, FaGlobeAmericas, FaCheck, FaCopy, FaSearch, FaPencilRuler, FaLightbulb, FaHandshake,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import hatImg from "./assets/fedora.png";

/* ------------------------------------------------------------------ */
/* Design tokens                                                       */
/* ------------------------------------------------------------------ */
const INK = "#0B0B0C";
const INK_2 = "#141416";
const PAPER = "#FBF9F6";
const GOLD = "#D4AF37";
const GOLD_LIGHT = "#F3D98B";
const GOLD_GRADIENT = "linear-gradient(100deg, #B8892B 0%, #F3D98B 35%, #D4AF37 60%, #FFE9A8 80%, #B8892B 100%)";
// Deeper gold for text on light backgrounds (keeps contrast readable)
const GOLD_GRADIENT_DEEP = "linear-gradient(100deg, #7A5A10 0%, #B8892B 35%, #8F6B14 60%, #C9A04A 80%, #7A5A10 100%)";
const SERIF = "'Playfair Display', serif";
const EASE = [0.16, 1, 0.3, 1];

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const MotionBox = motion(Box);

/* ------------------------------------------------------------------ */
/* Keyframes                                                           */
/* ------------------------------------------------------------------ */
const shine = keyframes`
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
`;
const drift1 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(8%, 6%) scale(1.15); }
`;
const drift2 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1.1); }
  50% { transform: translate(-10%, -4%) scale(0.95); }
`;
const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;
const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(212,175,55,0.6); }
  70% { box-shadow: 0 0 0 10px rgba(212,175,55,0); }
  100% { box-shadow: 0 0 0 0 rgba(212,175,55,0); }
`;
const floatY = keyframes`
  0%, 100% { transform: translateY(0) rotate(-6deg); }
  50% { transform: translateY(-6px) rotate(-2deg); }
`;

/* ------------------------------------------------------------------ */
/* Motion variants                                                     */
/* ------------------------------------------------------------------ */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const rise = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};
const inViewProps = { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-80px" } };

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */
const NAV = [
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

const ROTATING = ["websites", "mobile apps", "AI systems", "Shopify stores"];

const STATS = [
  { value: "50+", label: "Projects completed" },
  { value: "35+", label: "Happy clients" },
  { value: "5+", label: "Years of experience" },
  { value: "98%", label: "Client satisfaction" },
];

const SERVICES = [
  {
    title: "Web Development",
    description: "Performance-first, accessible websites with modern UX that load fast and convert.",
    link: "/web-development",
    icon: FaCode,
    tags: ["React", "Next.js", "SEO", "Accessibility"],
  },
  {
    title: "App Development",
    description: "Cross-platform mobile & desktop apps that scale with your users.",
    link: "/app-development",
    icon: FaMobileAlt,
    tags: ["iOS", "Android", "React Native"],
  },
  {
    title: "AI Solutions",
    description: "Custom ML/AI systems, automation, and integrations that put your data to work.",
    link: "/ai-solutions",
    icon: FaBrain,
    tags: ["LLMs", "Automation", "Chatbots"],
  },
  {
    title: "Shopify Store Development",
    description: "High-converting Shopify stores: setup, custom themes, and apps.",
    link: "/shopify-development",
    icon: FaShopify,
    tags: ["Themes", "Apps", "Conversion"],
  },
];

const TICKER = [
  "Web Development", "Mobile Apps", "AI Solutions", "Shopify Stores", "UI / UX Design",
  "Automation", "E-commerce", "Cloud", "Performance", "Brand Experiences",
];

const VALUES = [
  { icon: FaLightbulb, title: "Innovation", text: "We stay ahead of the curve with the latest technologies and best practices." },
  { icon: FaHandshake, title: "Collaboration", text: "We work closely with our clients to ensure every project is a perfect fit." },
  { icon: FaAward, title: "Excellence", text: "Quality is at the heart of everything we do, from concept to deployment." },
];

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description: "A modern, scalable e-commerce solution with advanced analytics and AI-powered recommendations.",
    icon: FaShoppingCart,
    tags: ["React", "Node.js", "AI", "E-commerce"],
    gradient: "linear-gradient(135deg, #2A2112 0%, #6B5016 55%, #D4AF37 130%)",
  },
  {
    title: "Mobile Banking App",
    description: "Secure, user-friendly mobile banking application with biometric authentication.",
    icon: FaUniversity,
    tags: ["React Native", "Security", "Fintech"],
    gradient: "linear-gradient(135deg, #10151C 0%, #1F2C3A 55%, #8C7A4B 130%)",
  },
  {
    title: "AI Chatbot System",
    description: "Intelligent customer service chatbot with natural language processing capabilities.",
    icon: FaRobot,
    tags: ["AI", "NLP", "Automation"],
    gradient: "linear-gradient(135deg, #17121C 0%, #3A2440 55%, #C9A04A 130%)",
  },
];

const STORES = [
  { url: "https://www.taruni.in", label: "taruni.in", category: "Clothing" },
  { url: "https://www.malikaclothing.qa", label: "malikaclothing.qa", category: "Clothing" },
  { url: "https://www.naaribyardraknair.com", label: "naaribyardraknair.com", category: "Clothing" },
  { url: "https://www.flyhoch.com", label: "flyhoch.com", category: "Clothing" },
  { url: "https://gocs.shop/", label: "gocs.shop", category: "Food & Beverages" },
  { url: "https://www.domnom.in", label: "domnom.in", category: "Food & Beverages" },
  { url: "https://www.sreeyang.com/", label: "sreeyang.com", category: "Curtains & Home Decor" },
];

const PROCESS = [
  { title: "Discovery", text: "We understand your vision, goals, and requirements through detailed consultation.", icon: FaSearch },
  { title: "Design", text: "Our team creates wireframes, prototypes, and designs that bring your ideas to life.", icon: FaPencilRuler },
  { title: "Development", text: "We build your solution using cutting-edge technologies and best practices.", icon: FaCode },
  { title: "Launch", text: "We deploy your project and provide ongoing support to ensure success.", icon: FaRocket },
];

const PLANS = [
  { name: "Basic", blurb: "For individuals and small projects", price: "$299", link: "/basic-features" },
  { name: "Pro", blurb: "Best for growing startups and businesses ready to scale", price: "$999", link: "/pro-features", featured: true },
  { name: "Enterprise", blurb: "Tailored solutions for large-scale projects", price: "$1999", link: "/enterprise-features" },
];

const TESTIMONIALS = [
  {
    name: "Sarah Johnson", role: "CEO", company: "TechStart Inc.",
    content: "OSSCA Prime transformed our digital presence completely. Their attention to detail and innovative approach exceeded all our expectations.",
  },
  {
    name: "Michael Chen", role: "Founder", company: "EcoSolutions",
    content: "The AI solution they built for us has revolutionized our customer service. Response times improved by 80% and customer satisfaction is at an all-time high.",
  },
  {
    name: "Emily Rodriguez", role: "Marketing Director", company: "Fashion Forward",
    content: "Working with OSSCA Prime was a game-changer. They delivered our e-commerce platform ahead of schedule and it's been performing flawlessly.",
  },
];

const FAQS = [
  {
    q: "What technologies do you specialize in?",
    a: "We specialize in modern web technologies including React, Node.js, Python, AI/ML frameworks, mobile development with React Native, and cloud platforms like AWS and Azure.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the discovery phase.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes! We offer comprehensive post-launch support including maintenance, updates, bug fixes, and feature enhancements. Support packages are tailored to your specific needs.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely! We excel at collaborating with existing teams, integrating seamlessly with your workflow, and providing knowledge transfer to ensure smooth handoffs.",
  },
];

const EMAIL = "contact.osscaprime@gmail.com";

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

// The fedora logo, recoloured via CSS mask so it works on dark and light.
function HatMark({ size = "28px", color = GOLD, ...props }) {
  const mask = {
    maskImage: `url(${hatImg})`,
    WebkitMaskImage: `url(${hatImg})`,
    maskSize: "contain",
    WebkitMaskSize: "contain",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
  };
  return <Box aria-hidden w={size} h={size} bg={color} sx={mask} flexShrink={0} {...props} />;
}

function GoldText({ children, onLight = false, ...props }) {
  return (
    <Box
      as="span"
      fontFamily={SERIF}
      fontStyle="italic"
      fontWeight="600"
      bgImage={onLight ? GOLD_GRADIENT_DEEP : GOLD_GRADIENT}
      bgClip="text"
      color="transparent"
      backgroundSize="200% auto"
      animation={`${shine} 6s linear infinite`}
      pr="0.08em"
      {...props}
    >
      {children}
    </Box>
  );
}

function Eyebrow({ children, dark }) {
  return (
    <HStack spacing={3} justify="inherit">
      <Box w="28px" h="1px" bg={GOLD} />
      <Text
        fontSize="xs"
        fontWeight="700"
        letterSpacing="0.28em"
        textTransform="uppercase"
        color={dark ? GOLD_LIGHT : "#9A7B22"}
      >
        {children}
      </Text>
    </HStack>
  );
}

function SectionHeader({ eyebrow, title, accent, sub, dark, align = "center", maxW = "3xl" }) {
  const centered = align === "center";
  return (
    <MotionBox variants={stagger} {...inViewProps} textAlign={align} maxW={maxW} mx={centered ? "auto" : 0}>
      <MotionBox variants={rise} display="flex" justifyContent={centered ? "center" : "flex-start"}>
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      </MotionBox>
      <MotionBox variants={rise}>
        <Heading
          as="h2"
          mt={5}
          fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
          fontWeight="800"
          letterSpacing="-0.035em"
          lineHeight="1.05"
          color={dark ? "white" : INK}
        >
          {title} {accent && <GoldText onLight={!dark}>{accent}</GoldText>}
        </Heading>
      </MotionBox>
      {sub && (
        <MotionBox variants={rise}>
          <Text mt={6} fontSize={{ base: "md", md: "lg" }} color={dark ? "whiteAlpha.700" : "gray.600"} maxW="2xl" mx={centered ? "auto" : 0}>
            {sub}
          </Text>
        </MotionBox>
      )}
    </MotionBox>
  );
}

// Card with a gold glow that follows the cursor.
function SpotlightCard({ children, dark = true, glow = "rgba(212,175,55,0.16)", ...props }) {
  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Box
      position="relative"
      overflow="hidden"
      rounded="3xl"
      border="1px solid"
      borderColor={dark ? "whiteAlpha.100" : "blackAlpha.100"}
      bg={dark ? INK_2 : "white"}
      onMouseMove={handleMove}
      transition="transform 0.5s cubic-bezier(0.16,1,0.3,1), border-color 0.4s"
      sx={{
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: `radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), ${glow}, transparent 45%)`,
          opacity: 0,
          transition: "opacity 0.4s",
          pointerEvents: "none",
        },
        "&:hover::before": { opacity: 1 },
        "&:hover": { transform: "translateY(-6px)", borderColor: "rgba(212,175,55,0.45)" },
      }}
      {...props}
    >
      <Box position="relative" h="full">{children}</Box>
    </Box>
  );
}

// Number that counts up when scrolled into view ("500+" -> 0..500 + "+").
function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || !match) return;
    if (reduce) {
      setN(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target, reduce]);

  return (
    <span ref={ref}>
      {match ? n : ""}
      {suffix}
    </span>
  );
}

function PrimaryButton({ children, ...props }) {
  return (
    <Button
      size="lg"
      h="56px"
      px={8}
      rounded="full"
      color={INK}
      fontWeight="700"
      bgImage={GOLD_GRADIENT}
      backgroundSize="200% auto"
      boxShadow="0 10px 40px -10px rgba(212,175,55,0.65)"
      transition="all 0.4s cubic-bezier(0.16,1,0.3,1)"
      _hover={{ backgroundPosition: "right center", transform: "translateY(-2px)", boxShadow: "0 18px 50px -12px rgba(212,175,55,0.85)" }}
      _active={{ transform: "translateY(0)" }}
      rightIcon={<FaArrowRight />}
      sx={{ "& svg": { transition: "transform 0.3s" }, "&:hover svg": { transform: "translateX(4px)" } }}
      {...props}
    >
      {children}
    </Button>
  );
}

function GhostButton({ children, dark = true, ...props }) {
  return (
    <Button
      size="lg"
      h="56px"
      px={8}
      rounded="full"
      variant="outline"
      fontWeight="600"
      color={dark ? "white" : INK}
      borderColor={dark ? "whiteAlpha.300" : "blackAlpha.300"}
      bg="transparent"
      _hover={{ borderColor: GOLD, color: dark ? GOLD_LIGHT : "#8A6B16", bg: dark ? "whiteAlpha.50" : "blackAlpha.50" }}
      {...props}
    >
      {children}
    </Button>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function Nav({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    onClose();
    // Let the drawer start closing before scrolling (it locks body scroll while open).
    setTimeout(() => onNavigate(id), 60);
  };

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={1000} px={{ base: 3, md: 6 }} pt={{ base: 3, md: 4 }}>
      <Flex
        maxW="6xl"
        mx="auto"
        align="center"
        justify="space-between"
        px={{ base: 4, md: 6 }}
        py={2.5}
        rounded="full"
        bg={scrolled ? "rgba(11,11,12,0.88)" : "rgba(11,11,12,0.25)"}
        backdropFilter="saturate(160%) blur(16px)"
        border="1px solid"
        borderColor={scrolled ? "whiteAlpha.200" : "whiteAlpha.100"}
        boxShadow={scrolled ? "0 12px 40px -12px rgba(0,0,0,0.5)" : "none"}
        transition="all 0.4s cubic-bezier(0.16,1,0.3,1)"
      >
        <HStack
          as="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          spacing={2.5}
          aria-label="OSSCA Prime — back to top"
        >
          <HatMark size="30px" />
          <Text color="white" fontWeight="800" letterSpacing="-0.02em" fontSize="lg">
            OSSCA <Box as="span" fontFamily={SERIF} fontStyle="italic" color={GOLD_LIGHT} fontWeight="600">Prime</Box>
          </Text>
        </HStack>

        <HStack as="nav" spacing={1} display={{ base: "none", md: "flex" }}>
          {NAV.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              color="whiteAlpha.800"
              fontWeight="500"
              rounded="full"
              _hover={{ color: "white", bg: "whiteAlpha.100" }}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </HStack>

        <HStack spacing={2}>
          <Button
            as={Link}
            to="/start-project"
            size="sm"
            rounded="full"
            px={5}
            color={INK}
            bg={GOLD}
            fontWeight="700"
            _hover={{ bg: GOLD_LIGHT }}
            display={{ base: "none", sm: "inline-flex" }}
          >
            Start a Project
          </Button>
          <IconButton
            aria-label="Open menu"
            icon={<FaBars />}
            variant="ghost"
            color="white"
            rounded="full"
            _hover={{ bg: "whiteAlpha.200" }}
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
          />
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay backdropFilter="blur(6px)" />
        <DrawerContent bg={INK} color="white">
          <DrawerCloseButton mt={2} />
          <DrawerBody pt={20}>
            <VStack align="stretch" spacing={2}>
              {NAV.map((item, i) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  justifyContent="space-between"
                  h="56px"
                  fontSize="xl"
                  fontWeight="700"
                  color="white"
                  _hover={{ bg: "whiteAlpha.100", color: GOLD_LIGHT }}
                  onClick={() => go(item.id)}
                  rightIcon={<Text as="span" fontSize="xs" color="whiteAlpha.500">0{i + 1}</Text>}
                >
                  {item.label}
                </Button>
              ))}
              <PrimaryButton as={Link} to="/start-project" mt={6} onClick={onClose}>
                Start a Project
              </PrimaryButton>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

function Hero({ onNavigate }) {
  const [wordIndex, setWordIndex] = useState(0);
  const reduce = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setWordIndex((i) => (i + 1) % ROTATING.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Box
      ref={heroRef}
      as="section"
      id="hero"
      position="relative"
      minH="100svh"
      bg={INK}
      color="white"
      overflow="hidden"
      onMouseMove={handleMove}
      display="flex"
      alignItems="center"
    >
      {/* Aurora blobs */}
      <Box
        position="absolute"
        top="-20%"
        left="-10%"
        w="60vw"
        h="60vw"
        rounded="full"
        bg="radial-gradient(circle, rgba(212,175,55,0.35), transparent 60%)"
        filter="blur(40px)"
        animation={`${drift1} 16s ease-in-out infinite`}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-30%"
        right="-15%"
        w="55vw"
        h="55vw"
        rounded="full"
        bg="radial-gradient(circle, rgba(184,137,43,0.28), transparent 60%)"
        filter="blur(50px)"
        animation={`${drift2} 20s ease-in-out infinite`}
        pointerEvents="none"
      />
      {/* Grid lines, faded at the edges */}
      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        opacity={0.5}
        bgImage="linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
        bgSize="72px 72px"
        sx={{
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 75%)",
        }}
      />
      {/* Cursor spotlight */}
      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        bg="radial-gradient(600px circle at var(--mx, 50%) var(--my, 40%), rgba(243,217,139,0.10), transparent 45%)"
      />
      {/* Grain */}
      <Box position="absolute" inset={0} pointerEvents="none" opacity={0.08} bgImage={GRAIN} mixBlendMode="overlay" />

      <Container maxW="6xl" position="relative" pt={{ base: 32, md: 36 }} pb={{ base: 16, md: 20 }}>
        <MotionBox style={{ y: contentY, opacity: contentOpacity }}>
          <MotionBox variants={stagger} initial="hidden" animate="visible" textAlign="center">
            <MotionBox variants={rise} display="flex" justifyContent="center">
              <HStack
                spacing={3}
                px={4}
                py={2}
                rounded="full"
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.200"
                backdropFilter="blur(8px)"
              >
                <Box w="8px" h="8px" rounded="full" bg={GOLD} animation={`${pulse} 2s infinite`} />
                <Text fontSize="sm" color="whiteAlpha.800" fontWeight="500">
                  Web · App · AI · Shopify — crafted end to end
                </Text>
              </HStack>
            </MotionBox>

            <MotionBox variants={rise}>
              <Heading
                as="h1"
                mt={8}
                fontSize={{ base: "44px", sm: "56px", md: "80px", lg: "96px" }}
                fontWeight="800"
                letterSpacing="-0.045em"
                lineHeight={{ base: "1.05", md: "0.98" }}
              >
                We build{" "}
                <Box as="span" display="block" position="relative" h={{ base: "1.15em", md: "1.1em" }} overflow="hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <MotionBox
                      key={ROTATING[wordIndex]}
                      as="span"
                      display="block"
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.6, ease: EASE }}
                    >
                      <GoldText>{ROTATING[wordIndex]}</GoldText>
                    </MotionBox>
                  </AnimatePresence>
                </Box>
                that feel prime.
              </Heading>
            </MotionBox>

            <MotionBox variants={rise}>
              <Text mt={8} fontSize={{ base: "lg", md: "xl" }} color="whiteAlpha.700" maxW="2xl" mx="auto">
                OSSCA Prime is your prime partner for web, app and AI solutions — designed with care,
                engineered for performance, and launched to grow your business.
              </Text>
            </MotionBox>

            <MotionBox variants={rise}>
              <Flex mt={10} gap={4} justify="center" direction={{ base: "column", sm: "row" }} align="center">
                <PrimaryButton as={Link} to="/start-project" w={{ base: "full", sm: "auto" }}>
                  Start a Project
                </PrimaryButton>
                <GhostButton onClick={() => onNavigate("work")} w={{ base: "full", sm: "auto" }}>
                  See our work
                </GhostButton>
              </Flex>
            </MotionBox>

            <MotionBox variants={rise}>
              <SimpleGrid
                columns={{ base: 2, md: 4 }}
                mt={{ base: 16, md: 24 }}
                borderTop="1px solid"
                borderColor="whiteAlpha.200"
                pt={10}
                spacingY={8}
              >
                {STATS.map((s) => (
                  <VStack key={s.label} spacing={1}>
                    <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="800" letterSpacing="-0.04em" color="white">
                      <Counter value={s.value} />
                    </Text>
                    <Text fontSize="sm" color="whiteAlpha.600">
                      {s.label}
                    </Text>
                  </VStack>
                ))}
              </SimpleGrid>
            </MotionBox>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}

function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <Box
      bgImage={GOLD_GRADIENT}
      color={INK}
      py={4}
      overflow="hidden"
      transform="rotate(-1.5deg)"
      mt="-12px"
      mx="-2%"
      position="relative"
      zIndex={2}
      boxShadow="0 20px 40px -20px rgba(0,0,0,0.5)"
    >
      <Flex w="max-content" animation={`${marquee} 40s linear infinite`}>
        {items.map((t, i) => (
          <HStack key={i} spacing={8} px={4} flexShrink={0}>
            <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="800" letterSpacing="-0.02em" whiteSpace="nowrap">
              {t}
            </Text>
            <HatMark size="22px" color={INK} />
          </HStack>
        ))}
      </Flex>
    </Box>
  );
}

function Services() {
  return (
    <Box as="section" id="services" bg={PAPER} pt={{ base: 24, md: 36 }} pb={{ base: 20, md: 28 }}>
      <Container maxW="6xl">
        <Flex direction={{ base: "column", lg: "row" }} justify="space-between" align={{ lg: "flex-end" }} gap={8}>
          <SectionHeader
            align="left"
            eyebrow="What we do"
            title="Four crafts."
            accent="One standard."
            maxW="2xl"
          />
          <Text color="gray.600" maxW="sm" fontSize="lg">
            From the first wireframe to the final deploy, every product we ship is held to the same prime bar.
          </Text>
        </Flex>

        <MotionBox as={SimpleGrid} columns={{ base: 1, md: 2 }} spacing={6} mt={16} variants={stagger} {...inViewProps}>
          {SERVICES.map((s, i) => (
            <MotionBox key={s.title} variants={rise} h="full">
              <SpotlightCard as={Link} to={s.link} display="block" h="full" p={{ base: 8, md: 10 }} role="group">
                <Flex justify="space-between" align="flex-start">
                  <Flex
                    w="64px"
                    h="64px"
                    rounded="2xl"
                    align="center"
                    justify="center"
                    bg="rgba(212,175,55,0.1)"
                    border="1px solid"
                    borderColor="rgba(212,175,55,0.3)"
                    transition="all 0.4s"
                    _groupHover={{ bg: GOLD, borderColor: GOLD }}
                  >
                    <Icon as={s.icon} boxSize={7} color={GOLD} transition="color 0.4s" _groupHover={{ color: INK }} />
                  </Flex>
                  <Text fontFamily={SERIF} fontStyle="italic" fontSize="5xl" lineHeight="1" color="whiteAlpha.200">
                    0{i + 1}
                  </Text>
                </Flex>
                <Heading as="h3" mt={10} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="800" letterSpacing="-0.03em" color="white">
                  {s.title}
                </Heading>
                <Text mt={3} color="whiteAlpha.700" fontSize="md">
                  {s.description}
                </Text>
                <Flex mt={8} justify="space-between" align="center" gap={4}>
                  <HStack spacing={2} flexWrap="wrap">
                    {s.tags.map((t) => (
                      <Box key={t} px={3} py={1} rounded="full" border="1px solid" borderColor="whiteAlpha.200" fontSize="xs" color="whiteAlpha.700">
                        {t}
                      </Box>
                    ))}
                  </HStack>
                  <Flex
                    flexShrink={0}
                    w="44px"
                    h="44px"
                    rounded="full"
                    align="center"
                    justify="center"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    color="white"
                    transition="all 0.4s cubic-bezier(0.16,1,0.3,1)"
                    _groupHover={{ bg: GOLD, borderColor: GOLD, color: INK, transform: "rotate(-45deg)" }}
                  >
                    <FaArrowRight />
                  </Flex>
                </Flex>
              </SpotlightCard>
            </MotionBox>
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
}

function About() {
  return (
    <Box as="section" id="about" bg={PAPER} pb={{ base: 20, md: 32 }}>
      <Container maxW="6xl">
        <Box
          rounded="3xl"
          bg="white"
          border="1px solid"
          borderColor="blackAlpha.100"
          p={{ base: 8, md: 14 }}
          position="relative"
          overflow="hidden"
        >
          <HatMark size="320px" color="rgba(212,175,55,0.07)" position="absolute" right="-60px" top="-90px" />
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }} position="relative">
            <MotionBox variants={stagger} {...inViewProps}>
              <MotionBox variants={rise}>
                <Eyebrow>About OSSCA Prime</Eyebrow>
              </MotionBox>
              <MotionBox variants={rise}>
                <Heading
                  as="h2"
                  mt={5}
                  fontSize={{ base: "3xl", md: "5xl" }}
                  fontWeight="800"
                  letterSpacing="-0.035em"
                  lineHeight="1.1"
                  color={INK}
                >
                  Ideas in. <GoldText onLight>Exceptional</GoldText> digital experiences out.
                </Heading>
              </MotionBox>
              <MotionBox variants={rise}>
                <Text mt={6} fontSize="lg" color="gray.600">
                  We are a passionate team of developers, designers, and AI specialists dedicated to
                  transforming your ideas into exceptional digital experiences. With years of expertise
                  in cutting-edge technologies, we deliver solutions that not only meet your requirements
                  but exceed your expectations.
                </Text>
              </MotionBox>
            </MotionBox>

            <MotionBox as={VStack} spacing={4} align="stretch" variants={stagger} {...inViewProps}>
              {VALUES.map((v) => (
                <MotionBox key={v.title} variants={rise}>
                  <HStack
                    align="flex-start"
                    spacing={5}
                    p={6}
                    rounded="2xl"
                    bg={PAPER}
                    border="1px solid"
                    borderColor="blackAlpha.50"
                    transition="all 0.4s cubic-bezier(0.16,1,0.3,1)"
                    _hover={{ transform: "translateX(6px)", borderColor: "rgba(212,175,55,0.5)", bg: "white", boxShadow: "0 20px 40px -20px rgba(0,0,0,0.15)" }}
                  >
                    <Flex w="48px" h="48px" rounded="xl" bg={INK} align="center" justify="center" flexShrink={0}>
                      <Icon as={v.icon} color={GOLD} boxSize={5} />
                    </Flex>
                    <Box>
                      <Heading as="h3" size="md" color={INK} letterSpacing="-0.02em">{v.title}</Heading>
                      <Text mt={1} color="gray.600">{v.text}</Text>
                    </Box>
                  </HStack>
                </MotionBox>
              ))}
            </MotionBox>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}

function Work() {
  return (
    <Box as="section" id="work" bg={INK} color="white" py={{ base: 24, md: 36 }} position="relative" overflow="hidden">
      <Box position="absolute" inset={0} pointerEvents="none" opacity={0.06} bgImage={GRAIN} mixBlendMode="overlay" />
      <Container maxW="6xl" position="relative">
        <SectionHeader
          dark
          eyebrow="Selected work"
          title="Built to perform."
          accent="Made to stand out."
          sub="Explore some of our recent projects and see how we've helped businesses achieve their digital goals."
        />

        <MotionBox as={SimpleGrid} columns={{ base: 1, md: 3 }} spacing={6} mt={16} variants={stagger} {...inViewProps}>
          {PROJECTS.map((p) => (
            <MotionBox key={p.title} variants={rise}>
              <SpotlightCard h="full" role="group">
                <Box h="220px" position="relative" overflow="hidden" bgImage={p.gradient}>
                  <Box
                    position="absolute"
                    inset={0}
                    bgImage="linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)"
                    bgSize="28px 28px"
                  />
                  <Flex position="absolute" inset={0} align="center" justify="center">
                    <Flex
                      w="96px"
                      h="96px"
                      rounded="3xl"
                      align="center"
                      justify="center"
                      bg="rgba(11,11,12,0.45)"
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                      backdropFilter="blur(10px)"
                      transition="transform 0.6s cubic-bezier(0.16,1,0.3,1)"
                      _groupHover={{ transform: "scale(1.12) rotate(-6deg)" }}
                    >
                      <Icon as={p.icon} boxSize={10} color={GOLD_LIGHT} />
                    </Flex>
                  </Flex>
                </Box>
                <Box p={7}>
                  <Heading as="h3" fontSize="xl" fontWeight="800" letterSpacing="-0.02em">{p.title}</Heading>
                  <Text mt={2} color="whiteAlpha.700" fontSize="sm">{p.description}</Text>
                  <HStack spacing={2} mt={5} flexWrap="wrap" rowGap={2}>
                    {p.tags.map((t) => (
                      <Box key={t} px={3} py={1} rounded="full" bg="rgba(212,175,55,0.12)" color={GOLD_LIGHT} fontSize="xs" fontWeight="600">
                        {t}
                      </Box>
                    ))}
                  </HStack>
                </Box>
              </SpotlightCard>
            </MotionBox>
          ))}
        </MotionBox>

        {/* Live Shopify stores */}
        <Box mt={{ base: 20, md: 28 }}>
          <Flex justify="space-between" align={{ base: "flex-start", md: "flex-end" }} direction={{ base: "column", md: "row" }} gap={4} mb={8}>
            <Box>
              <HStack spacing={3}>
                <Icon as={FaShopify} color={GOLD} boxSize={6} />
                <Heading as="h3" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="800" letterSpacing="-0.03em">
                  Shopify stores we've built
                </Heading>
              </HStack>
              <Text mt={2} color="whiteAlpha.600">Live and selling — click through to visit any store.</Text>
            </Box>
            <Button as={Link} to="/shopify-development" variant="link" color={GOLD_LIGHT} rightIcon={<FaArrowRight />}>
              Shopify services
            </Button>
          </Flex>

          <MotionBox variants={stagger} {...inViewProps} borderTop="1px solid" borderColor="whiteAlpha.200">
            {STORES.map((s, i) => (
              <MotionBox key={s.url} variants={rise}>
                <Flex
                  as="a"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="group"
                  align="center"
                  justify="space-between"
                  py={{ base: 5, md: 6 }}
                  px={{ base: 1, md: 4 }}
                  borderBottom="1px solid"
                  borderColor="whiteAlpha.200"
                  position="relative"
                  transition="all 0.4s cubic-bezier(0.16,1,0.3,1)"
                  _hover={{ px: { base: 3, md: 8 }, bg: "whiteAlpha.50" }}
                >
                  <HStack spacing={{ base: 4, md: 8 }} minW={0}>
                    <Text fontFamily={SERIF} fontStyle="italic" color="whiteAlpha.400" fontSize="lg" w="32px" flexShrink={0}>
                      0{i + 1}
                    </Text>
                    <Text
                      fontSize={{ base: "lg", md: "3xl" }}
                      fontWeight="700"
                      letterSpacing="-0.02em"
                      noOfLines={1}
                      transition="color 0.3s"
                      _groupHover={{ color: GOLD_LIGHT }}
                    >
                      {s.label}
                    </Text>
                  </HStack>
                  <HStack spacing={{ base: 3, md: 6 }} flexShrink={0}>
                    <Text fontSize="sm" color="whiteAlpha.600" display={{ base: "none", sm: "block" }}>
                      {s.category}
                    </Text>
                    <Flex
                      w="40px"
                      h="40px"
                      rounded="full"
                      align="center"
                      justify="center"
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                      transition="all 0.4s cubic-bezier(0.16,1,0.3,1)"
                      transform="rotate(-45deg)"
                      _groupHover={{ bg: GOLD, borderColor: GOLD, color: INK, transform: "rotate(0deg)" }}
                    >
                      <FaArrowRight />
                    </Flex>
                  </HStack>
                </Flex>
              </MotionBox>
            ))}
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}

function Process() {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start 85%", "end 55%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Box as="section" id="process" bg={PAPER} py={{ base: 24, md: 36 }}>
      <Container maxW="6xl">
        <SectionHeader
          eyebrow="How we work"
          title="A proven path from"
          accent="idea to launch."
          sub="Our proven process ensures your project is delivered on time, on budget, and exceeds your expectations."
        />

        <Box ref={lineRef} position="relative" mt={20}>
          {/* Connecting line (desktop) */}
          <Box position="absolute" top="32px" left="12.5%" right="12.5%" h="2px" bg="blackAlpha.100" display={{ base: "none", md: "block" }}>
            <MotionBox h="full" bgImage={GOLD_GRADIENT} style={{ scaleX, transformOrigin: "0% 50%" }} />
          </Box>

          <MotionBox as={SimpleGrid} columns={{ base: 1, md: 4 }} spacing={{ base: 10, md: 6 }} variants={stagger} {...inViewProps}>
            {PROCESS.map((step, i) => (
              <MotionBox key={step.title} variants={rise}>
                <VStack spacing={5} textAlign="center" role="group">
                  <Flex
                    position="relative"
                    w="64px"
                    h="64px"
                    rounded="full"
                    bg={INK}
                    align="center"
                    justify="center"
                    border="4px solid"
                    borderColor={PAPER}
                    boxShadow={`0 0 0 1px ${GOLD}`}
                    transition="all 0.4s cubic-bezier(0.16,1,0.3,1)"
                    _groupHover={{ transform: "scale(1.1)", bg: GOLD }}
                  >
                    <Icon as={step.icon} color={GOLD} boxSize={5} transition="color 0.3s" _groupHover={{ color: INK }} />
                  </Flex>
                  <Text fontSize="xs" fontWeight="700" letterSpacing="0.25em" color="#9A7B22">
                    STEP 0{i + 1}
                  </Text>
                  <Heading as="h3" fontSize="2xl" fontWeight="800" letterSpacing="-0.03em" color={INK}>
                    {step.title}
                  </Heading>
                  <Text color="gray.600" maxW="260px">
                    {step.text}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}

function Pricing() {
  return (
    <Box as="section" id="pricing" bg={PAPER} pb={{ base: 24, md: 36 }}>
      <Container maxW="6xl">
        <SectionHeader
          eyebrow="Pricing"
          title="Transparent plans,"
          accent="premium results."
          sub="Every project is tailored — these starting points help you pick the right fit."
        />

        <MotionBox
          as={SimpleGrid}
          columns={{ base: 1, md: 3 }}
          spacing={6}
          mt={16}
          alignItems="stretch"
          variants={stagger}
          {...inViewProps}
        >
          {PLANS.map((plan) => {
            const featured = !!plan.featured;
            return (
              <MotionBox key={plan.name} variants={rise} h="full">
                <Box
                  position="relative"
                  h="full"
                  rounded="3xl"
                  p="1px"
                  bgImage={featured ? GOLD_GRADIENT : "none"}
                  bg={featured ? undefined : "blackAlpha.100"}
                  transform={{ md: featured ? "translateY(-16px)" : "none" }}
                  boxShadow={featured ? "0 40px 80px -30px rgba(212,175,55,0.55)" : "none"}
                  transition="all 0.5s cubic-bezier(0.16,1,0.3,1)"
                  _hover={{ transform: { base: "translateY(-6px)", md: featured ? "translateY(-24px)" : "translateY(-6px)" } }}
                >
                  <Flex
                    direction="column"
                    h="full"
                    rounded="calc(1.5rem - 1px)"
                    bg={featured ? INK : "white"}
                    color={featured ? "white" : INK}
                    p={{ base: 8, md: 10 }}
                    position="relative"
                    overflow="hidden"
                  >
                    {featured && (
                      <>
                        <Box position="absolute" top="-40%" right="-30%" w="80%" h="80%" rounded="full" bg="radial-gradient(circle, rgba(212,175,55,0.3), transparent 65%)" filter="blur(20px)" />
                        <HStack
                          position="absolute"
                          top={6}
                          right={6}
                          spacing={1.5}
                          px={3}
                          py={1}
                          rounded="full"
                          bg={GOLD}
                          color={INK}
                          fontSize="xs"
                          fontWeight="800"
                        >
                          <FaStar />
                          <Text>Most Popular</Text>
                        </HStack>
                      </>
                    )}
                    <Box position="relative">
                      <Text fontFamily={SERIF} fontStyle="italic" fontSize="3xl" fontWeight="600" color={featured ? GOLD_LIGHT : INK}>
                        {plan.name}
                      </Text>
                      <Text mt={2} fontSize="sm" color={featured ? "whiteAlpha.700" : "gray.600"} minH="40px">
                        {plan.blurb}
                      </Text>
                      <Text mt={8} fontSize="xs" fontWeight="700" letterSpacing="0.2em" color={featured ? "whiteAlpha.600" : "gray.500"}>
                        STARTING FROM
                      </Text>
                      <HStack align="baseline" spacing={2} mt={1}>
                        <Text fontSize="6xl" fontWeight="800" letterSpacing="-0.05em" lineHeight="1">
                          {plan.price}
                        </Text>
                        <Text color={featured ? "whiteAlpha.600" : "gray.500"}>/project</Text>
                      </HStack>
                    </Box>
                    <Box flex="1" />
                    {featured ? (
                      <PrimaryButton as={Link} to={plan.link} mt={10} w="full" position="relative">
                        See what's included
                      </PrimaryButton>
                    ) : (
                      <Button
                        as={Link}
                        to={plan.link}
                        mt={10}
                        w="full"
                        h="56px"
                        rounded="full"
                        bg={INK}
                        color="white"
                        fontWeight="700"
                        rightIcon={<FaArrowRight />}
                        _hover={{ bg: "#2A2A2E", transform: "translateY(-2px)" }}
                      >
                        See what's included
                      </Button>
                    )}
                  </Flex>
                </Box>
              </MotionBox>
            );
          })}
        </MotionBox>
      </Container>
    </Box>
  );
}

function Testimonials() {
  return (
    <Box as="section" id="testimonials" bg={INK} color="white" py={{ base: 24, md: 36 }} position="relative" overflow="hidden">
      <Box
        position="absolute"
        top="10%"
        left="50%"
        transform="translateX(-50%)"
        w="70vw"
        h="50vw"
        rounded="full"
        bg="radial-gradient(circle, rgba(212,175,55,0.14), transparent 60%)"
        filter="blur(40px)"
        pointerEvents="none"
      />
      <Container maxW="6xl" position="relative">
        <SectionHeader
          dark
          eyebrow="Testimonials"
          title="Words from the people"
          accent="we build for."
          sub="Don't just take our word for it. Here's what our satisfied clients have to say."
        />

        <MotionBox as={SimpleGrid} columns={{ base: 1, md: 3 }} spacing={6} mt={16} variants={stagger} {...inViewProps}>
          {TESTIMONIALS.map((t) => (
            <MotionBox key={t.name} variants={rise} h="full">
              <SpotlightCard h="full" p={8}>
                <Flex direction="column" h="full">
                  <Icon as={FaQuoteLeft} boxSize={8} color={GOLD} opacity={0.8} />
                  <Text mt={6} fontSize="lg" color="whiteAlpha.900" lineHeight="1.7" flex="1">
                    {t.content}
                  </Text>
                  <HStack spacing={1} mt={8} color={GOLD}>
                    {[0, 1, 2, 3, 4].map((i) => <FaStar key={i} />)}
                  </HStack>
                  <HStack mt={5} spacing={4}>
                    <Flex
                      w="48px"
                      h="48px"
                      rounded="full"
                      bgImage={GOLD_GRADIENT}
                      align="center"
                      justify="center"
                      color={INK}
                      fontWeight="800"
                    >
                      {t.name.split(" ").map((p) => p[0]).join("")}
                    </Flex>
                    <Box>
                      <Text fontWeight="700">{t.name}</Text>
                      <Text fontSize="sm" color="whiteAlpha.600">{t.role}, {t.company}</Text>
                    </Box>
                  </HStack>
                </Flex>
              </SpotlightCard>
            </MotionBox>
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
}

function FAQ() {
  return (
    <Box as="section" id="faq" bg={PAPER} py={{ base: 24, md: 36 }}>
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, lg: 5 }} spacing={{ base: 12, lg: 16 }}>
          <Box gridColumn={{ lg: "span 2" }}>
            <SectionHeader align="left" eyebrow="FAQ" title="Questions," accent="answered." />
            <Text mt={6} color="gray.600" fontSize="lg">
              Can't find what you're looking for?{" "}
              <Box as="a" href={`mailto:${EMAIL}`} color="#8A6B16" fontWeight="600" textDecoration="underline" textUnderlineOffset="4px">
                Email us
              </Box>{" "}
              — we reply within 24 hours.
            </Text>
          </Box>
          <Box gridColumn={{ lg: "span 3" }}>
            <Accordion allowToggle defaultIndex={[0]}>
              {FAQS.map((f) => (
                <AccordionItem key={f.q} border="none" mb={3}>
                  {({ isExpanded }) => (
                    <Box
                      rounded="2xl"
                      bg={isExpanded ? INK : "white"}
                      color={isExpanded ? "white" : INK}
                      border="1px solid"
                      borderColor={isExpanded ? INK : "blackAlpha.100"}
                      transition="all 0.35s cubic-bezier(0.16,1,0.3,1)"
                      overflow="hidden"
                    >
                      <h3>
                        <AccordionButton px={6} py={5} _hover={{ bg: "transparent" }}>
                          <Box as="span" flex="1" textAlign="left" fontWeight="700" fontSize={{ base: "md", md: "lg" }}>
                            {f.q}
                          </Box>
                          <Flex
                            w="32px"
                            h="32px"
                            rounded="full"
                            align="center"
                            justify="center"
                            bg={isExpanded ? GOLD : "blackAlpha.50"}
                            color={INK}
                            ml={4}
                          >
                            <AccordionIcon />
                          </Flex>
                        </AccordionButton>
                      </h3>
                      <AccordionPanel px={6} pb={6} pt={0} color="whiteAlpha.800">
                        {f.a}
                      </AccordionPanel>
                    </Box>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Contact() {
  const { hasCopied, onCopy } = useClipboard(EMAIL);

  return (
    <Box as="section" id="contact" bg={PAPER} pb={{ base: 20, md: 28 }}>
      <Container maxW="6xl">
        <MotionBox
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          position="relative"
          rounded={{ base: "3xl", md: "40px" }}
          bg={INK}
          color="white"
          overflow="hidden"
          px={{ base: 6, md: 16 }}
          py={{ base: 14, md: 20 }}
        >
          <Box position="absolute" bottom="-50%" left="50%" transform="translateX(-50%)" w="120%" h="100%" rounded="full" bg="radial-gradient(ellipse, rgba(212,175,55,0.35), transparent 60%)" filter="blur(30px)" pointerEvents="none" />
          <Box position="absolute" inset={0} pointerEvents="none" opacity={0.08} bgImage={GRAIN} mixBlendMode="overlay" />
          <HatMark
            size={{ base: "140px", md: "220px" }}
            color="rgba(212,175,55,0.12)"
            position="absolute"
            top={{ base: "-30px", md: "-40px" }}
            right={{ base: "-30px", md: "40px" }}
            animation={`${floatY} 6s ease-in-out infinite`}
          />

          <VStack spacing={8} position="relative" textAlign="center">
            <Eyebrow dark>Get in touch</Eyebrow>
            <Heading as="h2" fontSize={{ base: "4xl", md: "7xl" }} fontWeight="800" letterSpacing="-0.045em" lineHeight="1">
              Let's build something <GoldText>prime.</GoldText>
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="whiteAlpha.700" maxW="2xl">
              Have a project in mind? We're here to turn your vision into reality. Let's start a conversation!
            </Text>

            <Flex gap={4} direction={{ base: "column", sm: "row" }} w={{ base: "full", sm: "auto" }}>
              <PrimaryButton as={Link} to="/start-project">
                Start Your Project
              </PrimaryButton>
              <GhostButton as="a" href={`mailto:${EMAIL}`} leftIcon={<FaEnvelope />}>
                Send an Email
              </GhostButton>
            </Flex>

            <HStack
              spacing={0}
              rounded="full"
              border="1px solid"
              borderColor="whiteAlpha.200"
              bg="whiteAlpha.50"
              pl={5}
              pr={1.5}
              py={1.5}
              maxW="full"
            >
              <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.800" noOfLines={1} mr={3}>
                {EMAIL}
              </Text>
              <Button
                size="sm"
                rounded="full"
                onClick={onCopy}
                leftIcon={hasCopied ? <FaCheck /> : <FaCopy />}
                bg={hasCopied ? GOLD : "whiteAlpha.200"}
                color={hasCopied ? INK : "white"}
                _hover={{ bg: hasCopied ? GOLD : "whiteAlpha.300" }}
                flexShrink={0}
              >
                {hasCopied ? "Copied" : "Copy"}
              </Button>
            </HStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} w="full" maxW="4xl" pt={6}>
              {[
                { icon: FaBolt, label: "Response time", value: "Within 24 hours" },
                { icon: FaGlobeAmericas, label: "Availability", value: "Worldwide service, 24/7" },
                { icon: FaInstagram, label: "Instagram", value: "@ossca_prime", href: "https://www.instagram.com/ossca_prime" },
              ].map((c) => (
                <HStack
                  key={c.label}
                  as={c.href ? "a" : "div"}
                  href={c.href}
                  target={c.href ? "_blank" : undefined}
                  rel={c.href ? "noopener noreferrer" : undefined}
                  spacing={4}
                  p={4}
                  rounded="2xl"
                  bg="whiteAlpha.50"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  textAlign="left"
                  transition="all 0.3s"
                  _hover={c.href ? { borderColor: GOLD, bg: "whiteAlpha.100" } : undefined}
                >
                  <Flex w="44px" h="44px" rounded="xl" bg="rgba(212,175,55,0.15)" align="center" justify="center" flexShrink={0}>
                    <Icon as={c.icon} color={GOLD} boxSize={5} />
                  </Flex>
                  <Box>
                    <Text fontSize="xs" fontWeight="700" letterSpacing="0.15em" color="whiteAlpha.500" textTransform="uppercase">
                      {c.label}
                    </Text>
                    <Text fontWeight="600">{c.value}</Text>
                  </Box>
                </HStack>
              ))}
            </SimpleGrid>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}

function Footer({ onNavigate }) {
  const linkStyle = {
    color: "whiteAlpha.700",
    fontSize: "sm",
    _hover: { color: GOLD_LIGHT },
    transition: "color 0.2s",
  };
  return (
    <Box as="footer" bg={INK} color="white" pt={{ base: 16, md: 24 }} overflow="hidden" position="relative">
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10}>
          <VStack align="start" spacing={4}>
            <HStack spacing={2.5}>
              <HatMark size="30px" />
              <Text fontWeight="800" fontSize="lg" letterSpacing="-0.02em">
                OSSCA <Box as="span" fontFamily={SERIF} fontStyle="italic" color={GOLD_LIGHT} fontWeight="600">Prime</Box>
              </Text>
            </HStack>
            <Text color="whiteAlpha.600" fontSize="sm">
              Your prime partner for web, app and AI solutions. Transforming ideas into exceptional digital experiences.
            </Text>
            <HStack
              as="a"
              href="https://www.instagram.com/ossca_prime"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OSSCA Prime on Instagram"
              w="40px"
              h="40px"
              rounded="full"
              border="1px solid"
              borderColor="whiteAlpha.300"
              justify="center"
              transition="all 0.3s"
              _hover={{ bg: GOLD, borderColor: GOLD, color: INK }}
            >
              <FaInstagram />
            </HStack>
          </VStack>

          <VStack align="start" spacing={3}>
            <Text fontSize="xs" fontWeight="700" letterSpacing="0.2em" color={GOLD}>SERVICES</Text>
            {SERVICES.map((s) => (
              <Box key={s.link} as={Link} to={s.link} {...linkStyle}>{s.title}</Box>
            ))}
          </VStack>

          <VStack align="start" spacing={3}>
            <Text fontSize="xs" fontWeight="700" letterSpacing="0.2em" color={GOLD}>COMPANY</Text>
            <Box as="button" onClick={() => onNavigate("about")} {...linkStyle}>About Us</Box>
            <Box as="button" onClick={() => onNavigate("work")} {...linkStyle}>Portfolio</Box>
            <Box as="button" onClick={() => onNavigate("testimonials")} {...linkStyle}>Testimonials</Box>
            <Box as={Link} to="/start-project" {...linkStyle}>Start a Project</Box>
          </VStack>

          <VStack align="start" spacing={3}>
            <Text fontSize="xs" fontWeight="700" letterSpacing="0.2em" color={GOLD}>CONTACT</Text>
            <HStack spacing={2} color="whiteAlpha.700" fontSize="sm">
              <FaEnvelope />
              <Box as="a" href={`mailto:${EMAIL}`} _hover={{ color: GOLD_LIGHT }}>{EMAIL}</Box>
            </HStack>
            <HStack spacing={2} color="whiteAlpha.700" fontSize="sm">
              <FaBolt />
              <Text>Available 24/7 for support</Text>
            </HStack>
            <HStack spacing={2} color="whiteAlpha.700" fontSize="sm">
              <FaGlobeAmericas />
              <Text>Worldwide service</Text>
            </HStack>
          </VStack>
        </SimpleGrid>

        <Flex
          mt={16}
          py={6}
          borderTop="1px solid"
          borderColor="whiteAlpha.200"
          justify="space-between"
          align="center"
          direction={{ base: "column", md: "row" }}
          gap={4}
        >
          <Text fontSize="sm" color="whiteAlpha.500">
            © {new Date().getFullYear()} OSSCA Prime. All rights reserved.
          </Text>
          <HStack spacing={6}>
            <Box as={Link} to="/terms" {...linkStyle}>Terms & Conditions</Box>
            <Box as={Link} to="/privacy" {...linkStyle}>Privacy Policy</Box>
          </HStack>
        </Flex>
      </Container>

      {/* Oversized wordmark */}
      <Text
        aria-hidden
        textAlign="center"
        fontWeight="800"
        letterSpacing="-0.06em"
        lineHeight="0.8"
        fontSize={{ base: "22vw", md: "18vw" }}
        mb="-0.12em"
        bgGradient="linear(to-b, rgba(212,175,55,0.35), rgba(212,175,55,0))"
        bgClip="text"
        color="transparent"
        userSelect="none"
        whiteSpace="nowrap"
      >
        OSSCA
      </Text>
    </Box>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function App() {
  const { scrollYProgress } = useScroll();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <MotionConfig reducedMotion="user">
      <Box
        bg={PAPER}
        minH="100vh"
        overflowX="hidden"
        sx={{
          "::selection": { background: GOLD, color: INK },
          "section[id]": { scrollMarginTop: "90px" },
          "@media (prefers-reduced-motion: reduce)": {
            "*": { animation: "none !important" },
          },
        }}
      >
        {/* Scroll progress */}
        <MotionBox
          position="fixed"
          top={0}
          left={0}
          right={0}
          h="3px"
          bgImage={GOLD_GRADIENT}
          zIndex={1001}
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        />

        <Nav onNavigate={scrollToSection} />
        <Hero onNavigate={scrollToSection} />
        <Ticker />
        <Services />
        <About />
        <Work />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer onNavigate={scrollToSection} />
      </Box>
    </MotionConfig>
  );
}
