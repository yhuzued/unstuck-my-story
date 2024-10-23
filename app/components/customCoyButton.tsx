import { Button, CopyButton } from "@mantine/core";
import { Check, Copy } from "lucide-react";
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
          size="compact-md"
          variant="outline"
          color={copied ? "teal" : "blue"}
          onClick={copy}
        >
          {copied ? (
            <Check style={{ height: 16 }} />
          ) : (
            <Copy style={{ height: 16 }} />
          )}
        </Button>
      )}
    </CopyButton>
  );
}
