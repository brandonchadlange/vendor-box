import type { NextPage } from "next";
import { AppShell, Button, Header, Navbar } from "@mantine/core";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  console.log(session?.user?.name);

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          Some Other Kak
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          Some Header Kak
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <div>
        <>{status}</>
      </div>
    </AppShell>
  );
};

export default Home;
