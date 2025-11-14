import Content from "./Content.mdx";
import { Container } from "@mantine/core";

export default function Page() {
  return (
    <Container p={0} fluid bg={"#f5f5dd"}>
      <Container size={"sm"} p={"sm"}>
        <Content />
      </Container>
    </Container>
  );
}
