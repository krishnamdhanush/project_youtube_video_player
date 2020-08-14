import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

export default ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [backColor, setBackColor] = useState("#eb7e31");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    event.target.value.length > 0
      ? setBackColor("#087596")
      : setBackColor("#eb7e31");
  };

  const onKeyPress = async (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  };
  const jewelStyle = () => {
    return {
      padding: "25px",
      background: backColor,
    };
  };
  return (
    <Paper elevation={6} style={jewelStyle()}>
      <TextField
        fullWidth
        placeholder='Search something'
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
};
