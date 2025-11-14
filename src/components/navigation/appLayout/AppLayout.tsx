"use client";

import { AppShell } from "@mantine/core";

interface Props {
  children: React.ReactNode;
}

export default function AppLayout(props: Props) {
  return (
    <AppShell>
      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  );
}
