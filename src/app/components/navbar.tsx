import { Icon } from "@chakra-ui/icon";
import { Center, Flex } from "@chakra-ui/layout";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function NavBar() {
  return (
    <Flex direction="row" bg="gray.400" minH={16} pl={2}>
      <Center h={16} w={16}>
        <a href="https://github.com/NasuFT" target="_blank">
          <Icon color="gray.800" focusable boxSize={10} as={FaGithub} />
        </a>
      </Center>
      <Center h={16} w={16}>
        <a href="https://linkedin.com/in/josh-aleczi-merlin" target="_blank">
          <Icon color="gray.800" focusable boxSize={10} as={FaLinkedin} />
        </a>
      </Center>
    </Flex>
  );
}
