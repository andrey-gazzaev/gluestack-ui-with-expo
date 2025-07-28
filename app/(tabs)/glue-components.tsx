import { FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorIcon, FormControlErrorText } from "@/components/ui/form-control";

import React, { useState } from "react";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

const AlertCircleIcon = () => {
  return <Text>AlertCircleIcon</Text>;
};

export default function GlueComponents() {
  const [isInvalid, setIsInvalid] = useState(true);
  const [inputValue, setInputValue] = useState("");
  return (
    <VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4">
    <FormControl
      isInvalid={isInvalid}
      size="md"
      isDisabled={false}
      isReadOnly={false}
      isRequired={false}
    >
      <FormControlLabel>
        <FormControlLabelText>Password</FormControlLabelText>
      </FormControlLabel>
      <Input className="my-1" size={'sm'}>
        <InputField
          type="password"
          placeholder="password"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
      </Input>
      <FormControlHelper>
        <FormControlHelperText>
          Must be atleast 6 characters.
        </FormControlHelperText>
      </FormControlHelper>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>
          Atleast 6 characters are required.
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
    <Button className="w-fit self-end mt-4" size="sm" onPress={() => {}}>
      <ButtonText>Submit</ButtonText>
    </Button>
  </VStack>
  );
}