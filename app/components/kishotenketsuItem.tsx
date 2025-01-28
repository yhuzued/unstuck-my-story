import { Accordion, Flex, Paper, TextInput, Text, Button } from "@mantine/core";
import { X } from "lucide-react";

export function KishotenketsuItem({
  title,
  description,
  listItems,
  setListItems,
  accordionValue,
}: {
  title: string;
  description: string;
  listItems: string[];
  setListItems: React.Dispatch<React.SetStateAction<string[]>>;
  accordionValue: string;
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);
    const data = formdata.get(title)?.toString();

    if (!data) {
      return;
    }

    setListItems((prev) => [...prev, `+ ${data}`]);

    e.currentTarget.reset();
  };

  const deleteItem = (indexToRemove: number) => {
    setListItems(listItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <Accordion.Item key={title} value={accordionValue}>
      <Accordion.Control>{title}</Accordion.Control>
      <Accordion.Panel>
        <form onSubmit={handleSubmit}>
          <TextInput
            name={title}
            placeholder="Add another element of your story"
            required
            description={description}
          />
          <button type="submit" style={{ display: "none" }} />
        </form>

        {listItems.length > 0 && (
          <Paper withBorder my="xs">
            <Flex p="md" direction="column" wrap="wrap" mah={200}>
              {listItems.map((d, i) => (
                <Flex gap="sm" key={i}>
                  <Text size="sm" fw={400}>
                    {d}
                  </Text>
                  <Button
                    onClick={() => deleteItem(i)}
                    color="red"
                    variant="light"
                    size="compact-xs"
                  >
                    <X size={12} />
                  </Button>
                </Flex>
              ))}
            </Flex>
          </Paper>
        )}
      </Accordion.Panel>
    </Accordion.Item>
  );
}
