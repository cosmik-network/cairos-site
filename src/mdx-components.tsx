import type { MDXComponents } from "mdx/types";
import { Title, Text, List, ListItem, Anchor } from "@mantine/core";

const components: MDXComponents = {
  h1: ({ children }) => (
    <Title fz={"3rem"} fw={400}>
      {children}
    </Title>
  ),
  h2: ({ children }) => (
    <Title order={2} fw={400}>
      {children}
    </Title>
  ),
  h3: ({ children }) => (
    <Title order={3} fw={500}>
      {children}
    </Title>
  ),
  p: ({ children }) => (
    <Text fw={400} fz={"lg"}>
      {children}
    </Text>
  ),
  a: ({ children, href }) => (
    <Anchor
      href={href}
      fw={500}
      fz={"lg"}
      bg={"dark"}
      c={"white"}
      px={"xs"}
      py={5}
      underline="never"
    >
      {children}
    </Anchor>
  ),
  ul: ({ children }) => <List type="unordered">{children}</List>,
  ol: ({ children }) => <List type="ordered">{children}</List>,
  li: ({ children }) => <ListItem fw={400}>{children}</ListItem>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
