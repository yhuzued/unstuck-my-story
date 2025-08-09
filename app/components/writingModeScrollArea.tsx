import {
  Button,
  DefaultMantineColor,
  Flex,
  Paper,
  ScrollArea,
  StyleProp,
  Text,
} from "@mantine/core";
import { X } from "lucide-react";
import { Writing } from "~/routes/writing-mode";

type Props = {
  viewport: React.RefObject<HTMLDivElement>;
  text: Writing;
  deleteItem: (indexToRemove: number) => void;
};

function PeradType({
  type,
  bg,
  text,
}: {
  type: boolean;
  bg: StyleProp<DefaultMantineColor>;
  text: string;
}) {
  if (type) {
    return (
      <Paper shadow="bg" c="white" bg={bg} px={12} py={2} radius={0} withBorder>
        <Text style={{ fontSize: 9 }} fw={700}>
          {text}
        </Text>
      </Paper>
    );
  }
}

export function WritingModeScrollArea({ viewport, text, deleteItem }: Props) {
  return (
    <ScrollArea.Autosize mah={340} viewportRef={viewport} type="always">
      {text.map((t, i) => (
        <Paper key={t.text + i} px="lg" p="sm" my={2}>
          <Flex my={8}>
            <PeradType type={t.p} bg="green" text="Physical Movement" />
            <PeradType type={t.e} bg="orange" text="Emotion" />
            <PeradType type={t.r} bg="blue" text="Reason" />
            <PeradType type={t.a} bg="red" text="Anticipation" />
            {/* <PeradType type={t.d} bg="lime" text="Decision" /> */}
          </Flex>
          <Flex justify="space-between" gap="sm">
            <Text size="md" fw={350}>
              {t.text}
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
  );
}
