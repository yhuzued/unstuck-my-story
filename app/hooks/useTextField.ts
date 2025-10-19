import { useState } from "react";

export type StoryPart = "statusQuo" | "so" | "want" | "but" | "therefore";

export interface Story {
  id: string;
  statusQuo: string;
  want: string;
  so: string;
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
    want: "Want",
    so: "So",
    but: "But",
    therefore: "Therefore",
  };

  const partDescriptions: Record<StoryPart, string> = {
    statusQuo: "Set up the initial situation or context",
    want: "What does the PoV character want? Include the reward and punishment of this desire so the character can anticipate the result and worry about it. This creates tension.",
    so: "Explain the action the character takes to get what they want",
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
