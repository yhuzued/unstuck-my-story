import { Flex, Paper, Title } from "@mantine/core";
import { MetaFunction } from "@remix-run/react";
import { useState, useRef, useEffect } from "react";
import { CustomCopyButton } from "~/components/customCoyButton";
import { WritingModeScrollArea } from "~/components/writingModeScrollArea";
import { WritingModeTextInput } from "~/components/writingModeTextInput";

export const meta: MetaFunction = () => {
  return [
    { title: "Writing Mode" },
    {
      name: "description",
      content: "Writing mode",
    },
  ];
};

export type Writing = {
  p: boolean;
  e: boolean;
  r: boolean;
  a: boolean;
  d: boolean;
  text: string;
}[];

export default function WritingMode() {
  const [text, setText] = useState<Writing>([]);

  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current!.scrollTo({
      top: viewport.current!.scrollHeight,
      behavior: "smooth",
    });

  const copyText = () => {
    let copy = "";

    text.forEach((t) => (copy = copy + t.text + "\n"));

    return copy;
  };

  const deleteItem = (indexToRemove: number) => {
    setText(text.filter((_, index) => index !== indexToRemove));
  };

  useEffect(() => {
    scrollToBottom();
  }, [text]);

  return (
    <>
      <Flex my="md" justify="space-between" align="center">
        <Title order={4}>Write Your Story</Title>
        <CustomCopyButton copyStoriesToClipboard={() => copyText()} />
      </Flex>
      <WritingModeScrollArea
        deleteItem={deleteItem}
        text={text}
        viewport={viewport}
      />
      <Paper
        withBorder
        p="md"
        mt={12}
        pb="lg"
        shadow="sm"
        style={{ position: "sticky", bottom: 0 }}
      >
        <WritingModeTextInput
          scrollToBottom={scrollToBottom}
          setText={setText}
        />
      </Paper>
    </>
  );
}
