import { Container } from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import { Outlet, redirect } from "@remix-run/react";

export const clientLoader = () => {
  return redirect("ploting-mode");
};

export const meta: MetaFunction = () => {
  return [
    { title: "ABT Story Structure App" },
    {
      name: "description",
      content: "Create stories using the And, But, Therefore structure",
    },
  ];
};

export default function Index() {
  return (
    <Container size="sm" mt="md">
      <Outlet />
    </Container>
  );
}
