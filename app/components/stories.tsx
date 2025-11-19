import { Box, Button, Divider, Flex, List, Paper } from "@mantine/core";
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
            <List>
              <List.Item style={{ flex: 1 }}>
                <strong>Status Quo</strong>: {story.statusQuo}
              </List.Item>
              <List.Item style={{ flex: 1 }}>
                <strong>Omen</strong>: {story.omen}
              </List.Item>
              <List.Item style={{ flex: 1 }}>
                <strong>Choice</strong>: {story.choice}
              </List.Item>
              <List.Item style={{ flex: 1 }}>
                <strong>First Blood:</strong> {story.firstBlood}
              </List.Item>
              <List.Item style={{ flex: 1 }}>
                <strong>Rebirth</strong>: {story.rebirth}
              </List.Item>
              <List.Item style={{ flex: 1 }}>
                <strong>Second Blood</strong>: {story.secondBlood}
              </List.Item>
              <List.Item style={{ flex: 1 }}>
                <strong>Finale</strong>: {story.finale}
              </List.Item>
              <List.Item style={{ flex: 1 }}>
                <strong>End</strong>: {story.end}
              </List.Item>
            </List>
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
