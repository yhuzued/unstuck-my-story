import { useState } from "react";
import {Story, StoryPart} from "./useProcessStories";



export function useTextField() {
  const [currentPart, setCurrentPart] = useState<StoryPart>("statusQuo");
  const [inputValue, setInputValue] = useState("");
  const [currentStory, setCurrentStory] = useState<Partial<Story>>({});
  const [inputError, setInputError] = useState(false);

  const partLabels: Record<StoryPart, string> = {
    statusQuo: "Status Quo",
    omen: "Omen",
    choice: "Choice",
    party: "Party",
    firstBlood: "First Blood",
    rebirth: "Rebirth",
    secondBlood: "Second Blood",
    finale: "Finale",
    end: "End",
  };

  const partDescriptions: Record<StoryPart, string> = {
    statusQuo: "The normal life of the characters before the story begins.",
    omen: "Ominous foreshadowing signals the oncoming danger.",
    choice: "The characters choose not to heed the warning.",
    party: "The cahracters explore the setting and story scenario, unaware of the peril to come.",
    firstBlood: "The monster attacks either literally or figuratively.",
    rebirth: "The players undergo an epiphany that allows them to move from reacting to acting. Reveals the true nature of the story.",
    secondBlood: "The monster attacks again.",
    finale: "The final sequence. No new information can be obtained. The players mount a final attack.",
    end: "Story over.",
  };

  const state = { currentPart, inputValue, currentStory, inputError };
  const setter = {
    setCurrentPart,
    setInputValue,
    setCurrentStory,
    setInputError,
  };

  return { state, setter, partLabels, partDescriptions };
}
