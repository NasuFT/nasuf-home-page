import { Avatar, Box, Heading, Text } from "@chakra-ui/react";
import { quattrocento } from "../fonts";

export function AboutMe({ className }: { className?: string }) {
  return (
    <Box className={className} h="min-content" overflow="hidden">
      <Avatar
        src=""
        m={4}
        size="xl"
        className="float-left"
        name="Josh Aleczi Merlin"
      />
      <Heading className={quattrocento.className} color="black" size="2xl">
        Josh Aleczi Merlin
      </Heading>
      <Text mt={2} align="justify" color="black">
        Hi! I am Josh Aleczi Merlin, a <Text as="b">magna cum laude</Text>{" "}
        graduate, holder of a{" "}
        <Text as="b">Bachelor&#39;s degree in Computer Science</Text>, from the{" "}
        <Text as="b">University of the Philippines Diliman.</Text>
        <br />I enjoy programming and tinkering things related but not limited
        to web development using JavaScript, React, and Vue.JS, graphics
        programming in OpenGL and Vulkan and low-level programming in C/C++. I
        also enjoy solving logic and mathematical problems.
        <br />I also play video games of all kinds of genres. I have played Doom
        Eternal, Legend of Zelda: Breath of the Wild, Celeste, and Final Fantasy
        XIV to name a few.
      </Text>
    </Box>
  );
}
