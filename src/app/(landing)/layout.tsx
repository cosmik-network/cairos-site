import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CAIROS | Collective Augmented Intelligence for Research & Open Science",
  description:
    "We're a cooperative federation of open science projects working towards collectively stewarded research commons.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
