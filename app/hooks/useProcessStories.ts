import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTextField } from "./useTextField";

export type StoryPart = "statusQuo" | "omen" | "choice" | "party"| "firstBlood" | "rebirth" | "secondBlood" | "finale" | "end";

export interface Story {
  id: string;
  statusQuo: string;
  omen: string;
  choice: string;
  party: string
  firstBlood: string;
  rebirth: string;
  secondBlood: string;
  finale: string;
  end: string;
}

type Data = ReturnType<typeof useTextField>;

export function useProcessStories(data: Data) {
  const { state, setter } = data;
  const [stories, setStories] = useState<Story[]>([]);

  const copyStoriesToClipboard = () => {
    let teksData = "";

    stories.forEach((data) => {
      teksData =
        teksData +
        `Status Quo: ${data.statusQuo}\nOmen: ${data.omen}\nChoice: ${data.choice}\nParty: ${data.party}\nFirst Blood: ${data.firstBlood}\nRebirth: ${data.rebirth}\nSecond Blood: ${data.secondBlood}\nFinale: ${data.finale}\nEnd: ${data.end}`;
    });

    return teksData;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // check if input is valid
    if (!state.inputValue) {
      setter.setInputError(true);
      return;
    }

    // process the input
    setter.setCurrentStory((prev) => ({
      ...prev,
      [state.currentPart]: state.inputValue,
    }));
    setter.setInputValue("");

    // if current text field is "therefore", create new chain of stories
    // otherwise go to next part
    if (state.currentPart === "end") {
      setStories((prev) => [
        ...prev,
        {
          ...state.currentStory,
          end: state.inputValue,
          id: uuidv4(),
        } as Story,
      ]);
      setter.setCurrentStory({});
      setter.setCurrentPart("statusQuo");
    } else {
      let nextPart: StoryPart = "statusQuo";

      if (state.currentPart === "statusQuo") {
        nextPart = "omen";
      } else if (state.currentPart === "omen") {
        nextPart = "choice";
      } else if (state.currentPart === "choice") {
        nextPart = "party";
      } else if (state.currentPart === "party") {
        nextPart = "firstBlood"; // Corrected logic
      } else if (state.currentPart === "firstBlood") {
        nextPart = "rebirth";
      } else if (state.currentPart === "rebirth") {
        nextPart = "secondBlood";
      } else if (state.currentPart === "secondBlood") {
        nextPart = "finale";
      } else if (state.currentPart === "finale") {
        nextPart = "end";
      }

      setter.setCurrentPart(nextPart);
    }
  };

  return { handleSubmit, copyStoriesToClipboard, stories, setStories };
}
