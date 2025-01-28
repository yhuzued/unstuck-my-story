import { Paper, Title, Text, Flex, Box, Accordion } from "@mantine/core";
import { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { CustomCopyButton } from "~/components/customCoyButton";
import { KishotenketsuItem } from "~/components/kishotenketsuItem";

export const meta: MetaFunction = () => {
  return [
    { title: "Kishōtenketsu" },
    {
      name: "description",
      content: "Kishōtenketsu",
    },
  ];
};

export default function Kishotenketsu() {
  const [listIntro, setListIntro] = useState<string[]>([]);
  const [listDev, setListDev] = useState<string[]>([]);
  const [listTwist, setListTwist] = useState<string[]>([]);
  const [listConclusion, setListConclusion] = useState<string[]>([]);

  function normalizeData(data: string[]): string {
    let result = "\n";

    data.forEach((d) => {
      result = result + d + "\n";
    });

    return result + "\n";
  }

  const copyData = () => {
    const intro = `Introductions\n ${normalizeData(listIntro)}`;
    const dev = `Development\n ${normalizeData(listDev)}`;
    const twist = `Twist\n ${normalizeData(listTwist)}`;
    const conclusion = `Conclusion \n ${normalizeData(listConclusion)}`;

    return intro + dev + twist + conclusion;
  };

  return (
    <Box my="lg">
      <Paper withBorder p="md" pb="lg" shadow="sm" mb="md">
        <Title>Kishōtenketsu</Title>
        <Text>
          Create an engaging outline using four-part narrative structure
        </Text>
      </Paper>
      <Flex align="center" my="md" justify="space-between">
        <Title order={3}>Outline</Title>
        <CustomCopyButton copyStoriesToClipboard={() => copyData()} />
      </Flex>
      <Paper>
        <Accordion defaultValue={"1"}>
          <KishotenketsuItem
            accordionValue="1"
            title="Introduction (Ki)"
            description="Introduce the setting, characters, and basic premise."
            listItems={listIntro}
            setListItems={setListIntro}
          />
          <KishotenketsuItem
            accordionValue="2"
            title="Development (Shō)"
            description="Develop the main story and character motivations."
            listItems={listDev}
            setListItems={setListDev}
          />
          <KishotenketsuItem
            accordionValue="3"
            title="Twist (Ten)"
            description="Introduces a surprising twist."
            listItems={listTwist}
            setListItems={setListTwist}
          />
          <KishotenketsuItem
            accordionValue="4"
            title="Conclusion (Ketsu)"
            description="Wraps up the story."
            listItems={listConclusion}
            setListItems={setListConclusion}
          />
        </Accordion>
      </Paper>
    </Box>
  );
}
