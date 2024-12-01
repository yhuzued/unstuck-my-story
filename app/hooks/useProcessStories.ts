import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTextField } from "./useTextField";

export type StoryPart = "statusQuo" | "and" | "but" | "therefore";

export interface Story {
  id: string;
  statusQuo: string;
  and: string;
  but: string;
  therefore: string;
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
        `${data.statusQuo} AND ${data.and} BUT ${data.but} THEREFORE ${data.therefore}\n`;
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
    if (state.currentPart === "therefore") {
      setStories((prev) => [
        ...prev,
        {
          ...state.currentStory,
          therefore: state.inputValue,
          id: uuidv4(),
        } as Story,
      ]);
      setter.setCurrentStory({});
      setter.setCurrentPart("statusQuo");
    } else {
      setter.setCurrentPart(
        state.currentPart === "statusQuo"
          ? "and"
          : state.currentPart === "and"
          ? "but"
          : "therefore"
      );
    }
  };

  return { handleSubmit, copyStoriesToClipboard, stories, setStories };
}
