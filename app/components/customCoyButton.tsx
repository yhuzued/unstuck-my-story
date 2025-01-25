import { Button, CopyButton } from "@mantine/core";
import { useProcessStories } from "~/hooks/useProcessStories";

export function CustomCopyButton({
  copyStoriesToClipboard,
}: {
  copyStoriesToClipboard: ReturnType<
    typeof useProcessStories
  >["copyStoriesToClipboard"];
}) {
  return (
    <CopyButton value={copyStoriesToClipboard()}>
      {({ copied, copy }) => (
        <Button
          color={copied ? "teal" : "blue"}
          onClick={copy}
          size="compact-sm"
        >
          {copied ? "Copied text" : "Copy text"}
        </Button>
      )}
    </CopyButton>
  );
}
