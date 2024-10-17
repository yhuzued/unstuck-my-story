import {
  Container,
  Title,
  Text,
  TextInput,
  Button,
  Flex,
  Paper,
  Divider,
} from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

import { Fragment, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "ABT Story Structure App" },
    {
      name: "description",
      content: "Create stories using the And, But, Therefore structure",
    },
  ];
};

type StoryPart = "statusQuo" | "and" | "but" | "therefore";

interface Story {
  statusQuo: string;
  and: string;
  but: string;
  therefore: string;
}

export default function Index() {
  const [currentPart, setCurrentPart] = useState<StoryPart>("statusQuo");
  const [inputValue, setInputValue] = useState("");
  const [currentStory, setCurrentStory] = useState<Partial<Story>>({});
  const [stories, setStories] = useState<Story[]>([]);

  const partLabels: Record<StoryPart, string> = {
    statusQuo: "Status Quo",
    and: "And",
    but: "But",
    therefore: "Therefore",
  };

  const partDescriptions: Record<StoryPart, string> = {
    statusQuo: "Set up the initial situation or context",
    and: "Provide additional context or background information",
    but: "Introduce the conflict or challenge that creates tension",
    therefore: "Provide the resolution or outcome",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStory((prev) => ({ ...prev, [currentPart]: inputValue }));
    setInputValue("");

    if (currentPart === "therefore") {
      setStories((prev) => [
        ...prev,
        { ...currentStory, therefore: inputValue } as Story,
      ]);
      setCurrentStory({});
      setCurrentPart("statusQuo");
    } else {
      setCurrentPart(
        currentPart === "statusQuo"
          ? "and"
          : currentPart === "and"
          ? "but"
          : "therefore"
      );
    }
  };

  return (
    <Container size="md" mt="md">
      <Paper withBorder p="md" pb="lg" shadow="sm">
        <Title>ABT Story Structure</Title>
        <Text>
          Create a chain of stories using the And, But, Therefore framework{" "}
        </Text>
        <Form method="post" onSubmit={handleSubmit}>
          <Flex direction="column" gap="sm">
            <TextInput
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              name="storyPart"
              label={partLabels[currentPart]}
              description={partDescriptions[currentPart]}
              placeholder={`Enter the ${partLabels[
                currentPart
              ].toLowerCase()} part of your story`}
            />
            <Button type="submit">
              {currentPart === "therefore" ? "Add to Story Chain" : "Next"}
            </Button>
          </Flex>
        </Form>
      </Paper>
      {stories.length > 0 && (
        <>
          <Title order={4} mt="lg" mb="sm">
            Your Story Chain
          </Title>
          <Paper withBorder p="md" pb="lg" mb="sm" shadow="sm">
            {stories.map((story, index) => (
              <Fragment key={index}>
                {story.statusQuo} AND {story.and} BUT {story.but} THEREFORE{" "}
                {story.therefore}
                {index + 1 === stories.length ? null : <Divider my="md" />}
              </Fragment>
            ))}
          </Paper>
        </>
      )}
    </Container>
  );
}
