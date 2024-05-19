import { Message } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Handle, Position } from "reactflow";

export default function MessagesNode({ data: { text } }) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        border: "1px solid rgba(50, 115, 220, 0.3)",
        maxWidth: "20vw",
      }}
    >
      <Box
        sx={{
          py: 1,
          px: 5,
          backgroundColor: "#8AFFFF",
          display: "flex",
          alignItems: "center",
          columnGap: "4px",
        }}
      >
        <Message fontSize="small" />
        <Typography variant="h6" fontWeight={"bold"}>
          Send Message
        </Typography>
      </Box>
      <Box sx={{ px: 5, py: 1 }}>{text}</Box>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </Box>
  );
}
