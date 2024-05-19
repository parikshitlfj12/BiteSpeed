import { Close } from "@mui/icons-material";
import { Box, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const MessageNode = ({ node, onClose }) => {
  const [message, setMessage] = useState("");

  //   To update data for selected Node
  useEffect(() => {
    setMessage(node?.data?.text);
  }, [node]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Message Node
        </Typography>
        <Close sx={{ cursor: "pointer" }} onClick={onClose} />
      </Box>
      <p>ID: {node.id}</p>
      <Input
        fullWidth
        value={!!message ? message : ""}
        onChange={handleChange}
      />
    </Box>
  );
};

export default function SettingPanel({ node, onClose }) {
  if (!node) return null; // Ensure the component returns null if no node is selected

  switch (node.type) {
    case "messagesNode": {
      return <MessageNode node={node} onClose={onClose} />;
    }
    // Add more cases for different node types if needed
    default:
      return (
        <Typography variant="h6" fontWeight="bold">
          Node type not present
        </Typography>
      );
  }
}
