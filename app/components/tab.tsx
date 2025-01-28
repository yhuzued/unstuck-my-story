import { Tabs } from "@mantine/core";
import { useLocation, useNavigate } from "@remix-run/react";
import { NotebookPen, Sprout, TableOfContents } from "lucide-react";

export default function Tab() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Tabs
      variant="pills"
      radius="sm"
      color="blue"
      defaultValue="gallery"
      my="sm"
      value={location.pathname}
    >
      <Tabs.List>
        <Tabs.Tab
          onClick={() => navigate("ploting-mode")}
          value="/ploting-mode"
          leftSection={<TableOfContents size={12} />}
        >
          Ploting Mode
        </Tabs.Tab>
        <Tabs.Tab
          onClick={() => navigate("writing-mode")}
          value="/writing-mode"
          leftSection={<NotebookPen size={12} />}
        >
          Writing Mode
        </Tabs.Tab>
        <Tabs.Tab
          onClick={() => navigate("kishotenketsu")}
          value="/kishotenketsu"
          leftSection={<Sprout size={12} />}
        >
          Kishōtenketsu
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
