import { Title, Text, Flex, Paper } from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { useTextField } from "~/hooks/useTextField";
import { CustomTextInput } from "~/components/customTextInput";
import { useProcessStories } from "~/hooks/useProcessStories";
import { CustomCopyButton } from "~/components/customCoyButton";
import { Stories } from "~/components/stories";

export const meta: MetaFunction = () => {
  return [
    { title: "ABT Story Structure App" },
    {
      name: "description",
      content: "Create stories using the And, But, Therefore structure",
    },
  ];
};

export default function PlotingMode() {
  const textField = useTextField();
  const { handleSubmit, copyStoriesToClipboard, stories, setStories } =
    useProcessStories(textField);

  return (
    <>
      <Paper withBorder p="md" pb="lg" shadow="sm">
        <Title>ABT Story Structure</Title>
        <Text>
          Create a chain of stories using the And, But, Therefore framework{" "}
        </Text>
        <Form method="post" onSubmit={handleSubmit}>
          <Flex direction="column" gap="sm">
            <CustomTextInput textFieldData={textField} />
          </Flex>
        </Form>
      </Paper>
      {stories.length > 0 && (
        <>
          <Flex justify="space-between" mt="lg" mb="sm" align="center">
            <Title order={4}>Your Story Chain</Title>
            <CustomCopyButton copyStoriesToClipboard={copyStoriesToClipboard} />
          </Flex>
          <Stories stories={stories} setStories={setStories} />
        </>
      )}
    </>
  );
}
