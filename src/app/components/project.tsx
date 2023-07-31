import { Box, Heading, Text, Link, Stack, Badge } from "@chakra-ui/react";
import NextLink from "next/link";
import { quattrocento } from "../fonts";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Image } from "../components/image";

export function Project({
  title,
  description,
  img,
  className,
  link,
  skills,
  id,
}: {
  title: string;
  description: string;
  link: string;
  img: string;
  className?: string;
  skills: string[];
  id: string;
}) {
  return (
    <Box overflow="hidden" className={className} bg="gray.200">
      <Image
        src={img}
        alt="Project"
        width={24}
        height={24}
        padding={2}
        float="left"
      />
      <Link as={NextLink} href={link} color="black">
        <Heading
          className={quattrocento.className}
          size="md"
          color="black"
          my={2}
        >
          {title}
        </Heading>
      </Link>
      <Stack direction="row">
        {skills.map((skill, i) => (
          <Badge
            key={[id, i].join("-")}
            colorScheme="messenger"
            rounded="md"
            py="0.5"
            px="1.5"
          >
            {skill}
          </Badge>
        ))}
      </Stack>
      <ReactMarkdown
        components={{
          p({ ...props }) {
            return (
              <Text
                size="xs"
                textAlign="justify"
                color="black"
                mt={1}
                mb={3}
                {...props}
              />
            );
          },
          a({ ...props }) {
            return <Link as={NextLink} color="facebook.900" {...props} />;
          },
        }}
      >
        {description}
      </ReactMarkdown>
    </Box>
  );
}
