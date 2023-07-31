// Bug https://github.com/chakra-ui/chakra-ui/issues/7827 due to Next.js v13.4.8+
// Workaround is to manually create component

import { chakra, ChakraComponent } from "@chakra-ui/react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

export const Image: ChakraComponent<"img", NextImageProps> = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "src",
      "alt",
      "width",
      "height",
      "fill",
      "loader",
      "quality",
      "priority",
      "loading",
      "placeholder",
      "blurDataURL",
      "unoptimized",
      "onLoadingComplete",
    ].includes(prop),
});