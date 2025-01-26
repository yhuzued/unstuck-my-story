import {
  Button,
  Flex,
  Paper,
  ScrollArea,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { MetaFunction } from "@remix-run/react";
import { MessageSquare, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { CustomCopyButton } from "~/components/customCoyButton";

export const meta: MetaFunction = () => {
  return [
    { title: "Writing Mode" },
    {
      name: "description",
      content: "Writing mode",
    },
  ];
};

export default function WritingMode() {
  const [text, setText] = useState<string[]>([]);

  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current!.scrollTo({
      top: viewport.current!.scrollHeight,
      behavior: "smooth",
    });

  const copyText = () => {
    let copy = "";

    text.forEach((t) => (copy = copy + t + "\n"));

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
      <ScrollArea.Autosize mah={340} viewportRef={viewport} type="always">
        {text.map((t, i) => (
          <Paper key={t + i} px="lg" py="sm" my={2}>
            <Flex justify="space-between" gap="sm">
              <Text size="md" fw={350}>
                {t}
              </Text>
              <Button
                color="red"
                variant="light"
                radius="md"
                style={{ minWidth: 30, padding: "0" }}
                onClick={() => deleteItem(i)}
              >
                <X size={12} />
              </Button>
            </Flex>
          </Paper>
        ))}
      </ScrollArea.Autosize>
      <Paper
        withBorder
        p="md"
        mt={12}
        pb="lg"
        shadow="sm"
        style={{ position: "sticky", bottom: 0 }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const text = (e.target as HTMLFormElement).text.value;
            setText((prev) => [...prev, text]);
            e.currentTarget.reset();
            scrollToBottom();
          }}
        >
          <TextInput
            minLength={3}
            required
            size="md"
            name="text"
            rightSection={<MessageSquare size={14} />}
            placeholder="What happens next?"
            label="Writing Form"
            height={600}
            description="Write your text here"
          />
          <Button type="submit" style={{ display: "none" }}>
            Enter
          </Button>
        </form>
      </Paper>
    </>
  );
}
