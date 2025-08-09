import { useState } from "react";

export type StoryPart = "statusQuo" | "and" | "but" | "therefore";

export interface Story {
  id: string;
  statusQuo: string;
  and: string;
  but: string;
  therefore: string;
}

export function useTextField() {
  const [currentPart, setCurrentPart] = useState<StoryPart>("statusQuo");
  const [inputValue, setInputValue] = useState("");
  const [currentStory, setCurrentStory] = useState<Partial<Story>>({});
  const [inputError, setInputError] = useState(false);

  const partLabels: Record<StoryPart, string> = {
    statusQuo: "Status Quo",
    and: "Want",
    but: "But",
    therefore: "Therefore",
  };

  const partDescriptions: Record<StoryPart, string> = {
    statusQuo: "Set up the initial situation or context",
    and: "What the PoV character want?",
    but: "Introduce the conflict or challenge that creates tension",
    therefore: "Provide the resolution or outcome",
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
