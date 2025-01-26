import { Button, TextInput } from "@mantine/core";
import { MessageSquare } from "lucide-react";
import { Checkboxes } from "./checkboxes";
import { Writing } from "~/routes/writing-mode";

export function WritingModeTextInput({
  setText,
  scrollToBottom,
}: {
  setText: React.Dispatch<React.SetStateAction<Writing>>;
  scrollToBottom: () => void;
}) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key >= "1" && event.key <= "5") {
      event.preventDefault();
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const text = formData.get("text");
        const p = formData.get("p") === "on" ? true : false;
        const e = formData.get("e") === "on" ? true : false;
        const r = formData.get("r") === "on" ? true : false;
        const a = formData.get("a") === "on" ? true : false;
        const d = formData.get("d") === "on" ? true : false;

        if (!text) {
          return;
        }

        setText((prev) => [...prev, { p, e, r, a, d, text: text.toString() }]);
        event.currentTarget.reset();
        scrollToBottom();
      }}
    >
      <TextInput
        minLength={3}
        pattern="[^1-5]*"
        onKeyDown={handleKeyDown}
        required
        size="md"
        name="text"
        rightSection={<MessageSquare size={14} />}
        placeholder="What happens next?"
        label="Writing Form"
        height={600}
        description="Write your text here"
      />
      <Checkboxes />
      <Button type="submit" style={{ display: "none" }}>
        Enter
      </Button>
    </form>
  );
}
