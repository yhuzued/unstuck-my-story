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
      <Paper
        p="md"
        mt={12}
        pb="lg"
        shadow="sm"
        style={{ textAlign: "justify", fontSize: 12 }}
      >
        <b>Keep this in mind when writing your story!</b>
        <br />
        In fiction, tension is the driving force that engages readers by creating a sense of anticipation, uncertainty, and conflict. Tension is the feeling of something hanging in the balance, whether the threat of a negative outcome or the anticipation of a positive one. Tension is essentially the space between what is and what could be, and it compels readers to turn the page and find out what happens next.
        <br />
        <br />
        <b style={{ color: "red" }}>Plot first before you start writing!</b>
      </Paper>
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
