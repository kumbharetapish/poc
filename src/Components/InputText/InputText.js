import { Input, Label } from "@theme-ui/components";
import React, { useState } from "react";

const InputText = (props) => {
  const onChangeHandler = (value) => {
    if (props?.onChange) {
      props.onChange(value);
    }
  };
  return (
    <div style={{ marginTop: "1rem" }}>
      {props.labelName ? (
        <Label sx={{ fontSize: "0.75rem" }}>{props.labelName}</Label>
      ) : (
        <Label></Label>
      )}
      <Input
        // value={props?.value ?? ""}
        // onChange={(e) => onChangeHandler(e)}
        {...props?.register}
        {...props}
      />
    </div>
  );
};
export default InputText;
