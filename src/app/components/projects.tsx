import { Box, Heading, Stack } from "@chakra-ui/react";
import { Project } from "./project";
import { quattrocento } from "../fonts";
import { Project as ProjectData } from "../lib/projects";

export function Projects({
  className,
  projects,
}: {
  className?: string;
  projects: ProjectData[];
}) {
  return (
    <Box>
      <Heading
        size="lg"
        className={`${quattrocento.className} ${className}`}
        fontWeight="medium"
        color="gray.800"
      >
        PROJECTS
      </Heading>
      <Stack>
        {projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            img={project.img}
            title={project.title}
            description={project.description}
            link={project.link}
            skills={project.skills}
          />
        ))}
      </Stack>
    </Box>
  );
}
