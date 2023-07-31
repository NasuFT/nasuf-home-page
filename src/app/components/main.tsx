"use client";

import { Container, Flex } from "@chakra-ui/react";
import { Project } from "../lib/projects";
import { AboutMe } from "./aboutme";
import { NavBar } from "./navbar";
import { Projects } from "./projects";

export function HomeComponent({ projects }: { projects: Project[] }) {
  return (
    <Flex bg="gray.100" direction="column" minH="100vh">
      <NavBar />
      <Flex mt={4} flexGrow={1} justifySelf="stretch">
        <Container maxW="container.lg">
          <AboutMe />
          <Projects projects={projects} className="mt-4"/>
        </Container>
      </Flex>
    </Flex>
  );
}
