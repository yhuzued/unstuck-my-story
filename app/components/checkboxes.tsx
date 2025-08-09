import { Checkbox, Flex } from "@mantine/core";
import { useEffect } from "react";

export function Checkboxes() {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      const checkboxMapping: { [key: string]: string } = {
        1: "p",
        2: "e",
        3: "r",
        4: "a",
      };

      if (checkboxMapping[key]) {
        const checkboxElement = document.querySelector(
          `input[name="${checkboxMapping[key]}"]`
        ) as HTMLInputElement;

        if (checkboxElement) {
          checkboxElement.checked = !checkboxElement.checked;
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <Flex my="md" gap="sm" wrap="wrap">
      <Checkbox
        name="p"
        label="Physical movement with stimulus and response  (1)"
        size="md"
        color="green"
      />
      <Checkbox name="e" label="Emotion (2)" size="md" color="orange" />
      <Checkbox name="r" label="Reason (3)" size="md" color="blue" />
      <Checkbox name="a" label="Anticipation (4)" size="md" color="red" />
      {/* <Checkbox name="d" label="Decision (5)" size="xs" />  */}
    </Flex>
  );
}
