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
      <Flex my="md" justify="space-between" align="center">
        <Title order={4}>Write Your Story</Title>
        <CustomCopyButton copyStoriesToClipboard={() => copyText()} />
      </Flex>
      <Paper
        p="md"
        mt={12}
        pb="lg"
        shadow="sm"
        style={{ textAlign: "justify", fontSize: 15 }}
      >
        <b>Remember this when writing your story!</b>
        <br />
        In fiction, tension is the driving force that keeps readers engaged by
        creating a sense of <b>anticipation</b>, <b>uncertainty</b>, and{" "}
        <b>conflict</b>. It&apos;s the feeling of something hanging in the
        balance, whether it&apos;s the threat of a bad outcome or the excitement
        of a positive one. Essentially,{" "}
        <b>tension is the space between what is and what could be</b>, and
        it&apos;s what compels readers to turn the page and find out what
        happens next.
      </Paper>
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
