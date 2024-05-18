import { Box, Input, Typography } from "@mui/material";
import React from "react";

export default function SettingPanel({ node }) {
  if (!node) return null; // Ensure the component returns null if no node is selected

  switch (node.type) {
    case "messagesNode": {
      return (
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Message Node
          </Typography>
          <p>ID: {node.id}</p>
          <Input value={node?.data?.text} />
        </Box>
      );
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
