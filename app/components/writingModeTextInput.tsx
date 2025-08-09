import { Button, Textarea } from "@mantine/core";
import { Checkboxes } from "./checkboxes";
import { Writing } from "~/routes/writing-mode";
import { useState } from "react";

export function WritingModeTextInput({
  setText,
  scrollToBottom,
}: {
  setText: React.Dispatch<React.SetStateAction<Writing>>;
  scrollToBottom: () => void;
}) {
  const [atleastOneChecked, setAtleatsOneChekced] = useState(false);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key >= "1" && event.key <= "4") {
      event.preventDefault();
    }

    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
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
        // const d = formData.get("d") === "on" ? true : false;

        // If even one is false, the text cannot be posted
        if (!(p || e || r || a)) {
          setAtleatsOneChekced(true);
          return;
        }

        if (!text) {
          return;
        }

        setText((prev) => [...prev, { p, e, r, a, text: text.toString() }]);
        setAtleatsOneChekced(false);
        event.currentTarget.reset();
        scrollToBottom();
      }}
    >
      <Textarea
        minLength={3}
        onKeyDown={handleKeyDown}
        required
        size="md"
        name="text"
        placeholder="What happens next?"
        label="Writing Form"
        minRows={1}
        maxRows={7}
        autosize
        description="Write your text here"
        error={
          atleastOneChecked
            ? "At least one of the checkboxes must be selected"
            : null
        }
      />
      <Checkboxes />
      <Button type="submit" style={{ display: "none" }}>
        Enter
      </Button>
    </form>
  );
}
