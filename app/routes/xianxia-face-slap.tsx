import { Flex, Paper, Title, Text, List } from "@mantine/core";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Xianxia Face Slap Formula" },
    {
      name: "description",
      content: "Xianxia Face Slap Formula",
    },
  ];
};

export default function XianxiaFaceSlap() {
  return (
    <>
      <Paper withBorder p="md" pb="lg" shadow="sm" mb="md">
        <Title order={3} mb="sm">
          Xianxia Face Slap Formula
        </Title>
        <Text>
          Follow this formula, and you&apos;ll be churning out addictive xianxia
          slop that readers will devour, complain about, yet keep coming back
          for more. Good luck, and may your MC&apos;s face-slaps echo through
          the nine heavens!
        </Text>
      </Paper>
      <Flex my="md" justify="space-between" align="center">
        <Title order={4}>The Repetitive Slap Cycle</Title>
      </Flex>
      <Paper withBorder my="lg" py="lg" pr="lg" shadow="sm">
        <List type="ordered" withPadding pr="lg" spacing="xs">
          <List.Item>
            <strong>Encounter:</strong> MC arrives in a new place or meets new
            people.
          </List.Item>
          <List.Item>
            <strong>Provocation:</strong> Arrogant Young Master or other
            antagonist is offended by MC&apos;s existence/low
            cultivation/possession of a pretty girl/breathing the same air.
          </List.Item>
          <List.Item>
            <strong>Underestimation:</strong> &quot;Hmph, a mere Qi Refining ant
            dares to...&quot;
          </List.Item>
          <List.Item>
            <strong>Escalation:</strong> Taunts, threats, perhaps a weak attack
            from a lackey.
          </List.Item>
          <List.Item>
            <strong>The Reveal (Mini-Slap):</strong> MC shows a glimpse of their
            true power (which is still underestimated).
          </List.Item>
          <List.Item>
            <strong>Shock & Disbelief:</strong> &quot;Impossible! How can a
            piece of trash like you...?!&quot;
          </List.Item>
          <List.Item>
            <strong>THE FACE SLAP:</strong> MC utterly demolishes the
            antagonist(s), often in one move, with maximum collateral damage to
            their ego and face. Bonus points for public settings.
          </List.Item>
          <List.Item>
            <strong>Loot & Rewards:</strong> MC takes spirit stones, pills,
            techniques, or the Arrogant Young Master&apos;s &quot;fiancee&quot;
            who is now impressed.
          </List.Item>
          <List.Item>
            <strong>Consequences & New Threats:</strong> Slapped Arrogant Young
            Master&apos;s family/sect vows revenge, sending stronger slappees.
          </List.Item>
          <List.Item>
            <strong>MC Powers Up:</strong> Uses loot, cultivates, has a
            breakthrough, learns new technique from their cheat.
          </List.Item>
          <List.Item>
            <strong>
              Repeat in a new location or with a stronger antagonist.
            </strong>
          </List.Item>
        </List>
      </Paper>
    </>
  );
}
