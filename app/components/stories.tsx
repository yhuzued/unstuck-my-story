import { Box, Button, Divider, Flex, Paper } from "@mantine/core";
import { X } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { useProcessStories } from "~/hooks/useProcessStories";

export function Stories({
  stories,
  setStories,
}: {
  stories: ReturnType<typeof useProcessStories>["stories"];
  setStories: ReturnType<typeof useProcessStories>["setStories"];
}) {
  return (
    <Paper withBorder p="lg" mb="sm" shadow="sm">
      {stories.map((story, index) => (
        <Fragment key={index}>
          <Flex justify="space-between" gap="md" align="center">
            <Box>
              {story.statusQuo} <strong>AND</strong> {story.and}{" "}
              <strong>BUT</strong> {story.but} <strong>THEREFORE</strong>{" "}
              {story.therefore}.
            </Box>
            <Divider my="md" orientation="vertical" />
            <Button
              style={{ minWidth: 30, padding: "0" }}
              size="compact-lg"
              color="red"
              variant="light"
              onClick={() => {
                const deleteStory = stories.filter(
                  (data) => data.id !== story.id
                );

                setStories(deleteStory);
              }}
            >
              <X style={{ height: 14 }} />
            </Button>
          </Flex>
          {index + 1 === stories.length ? null : <Divider my="md" />}
        </Fragment>
      ))}
    </Paper>
  );
}
