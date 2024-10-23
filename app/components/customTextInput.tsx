import { Button, TextInput } from "@mantine/core";
import { useTextField } from "~/hooks/useTextField";

export function CustomTextInput({
  textFieldData,
}: {
  textFieldData: ReturnType<typeof useTextField>;
}) {
  const { state, setter, partDescriptions, partLabels } = textFieldData;
  return (
    <>
      <TextInput
        error={
          state.inputError ? "Make sure the input field is not empty" : null
        }
        value={state.inputValue}
        onChange={(e) => {
          setter.setInputValue(e.target.value);

          if (!e.target.value.trim()) {
            setter.setInputError(true);
          } else {
            setter.setInputError(false);
          }

          if (
            e.target.value.length === 0 &&
            e.target.value.trim().length === 0
          ) {
            // check if the input is empty, if it's empty then it shouldn't show an error.
            setter.setInputError(false);
          }
        }}
        name="storyPart"
        label={partLabels[state.currentPart]}
        description={partDescriptions[state.currentPart]}
        placeholder={`Enter the ${partLabels[
          state.currentPart
        ].toLowerCase()} part of your story`}
      />
      <Button type="submit">
        {state.currentPart === "therefore" ? "Add to Story Chain" : "Next"}
      </Button>
    </>
  );
}
