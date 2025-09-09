import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Heading, useToast } from "@chakra-ui/react";
import { send } from "@emailjs/browser";

export default function StartProject() {
  const [form, setForm] = useState({ from_name: "", from_email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  console.log("Submitting form with:", form); // 👈 log form data
  try {
    const response = await send(
      "service_egtaixl",        // Your Service ID
      "template_l97vlat",       // Your Template ID
      form,
      "9bFVuNz0SuH0xpeD1"        // Your latest Public Key
    );

    console.log("EmailJS response:", response); // 👈 log response

    toast({
      title: "Message sent!",
      description: "We’ve received your request and will contact you shortly.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });

    setForm({ from_name: "", from_email: "", message: "" });
  } catch (error) {
    console.error("EmailJS Error:", error); // 👈 log error
    toast({
      title: "Error",
      description: "Something went wrong. Please try again later.",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  } finally {
    setLoading(false); // ✅ this ensures button stops loading
  }
};

  return (
    <Container maxW="2xl" py={20}>
      <VStack spacing={8} align="stretch">
        <Heading as="h2" size="xl" textAlign="center">
          Start a Project 🚀
        </Heading>
        <Box as="form" onSubmit={handleSubmit} bg="white" p={8} rounded="2xl" shadow="lg">
          <FormControl id="from_name" isRequired mb={4}>
            <FormLabel>Name</FormLabel>
            <Input name="from_name" value={form.from_name} onChange={handleChange} placeholder="Your Name" />
          </FormControl>

          <FormControl id="from_email" isRequired mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="from_email" value={form.from_email} onChange={handleChange} placeholder="Your Email" />
          </FormControl>

          <FormControl id="message" isRequired mb={6}>
            <FormLabel>Requirements</FormLabel>
            <Textarea name="message" value={form.message} onChange={handleChange} placeholder="Describe your project requirements..." />
          </FormControl>

          <Button type="submit" colorScheme="yellow" isLoading={loading} w="full" rounded="xl">
            Send Request
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}
