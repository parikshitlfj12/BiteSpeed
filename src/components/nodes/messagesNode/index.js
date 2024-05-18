import { Box, Typography } from "@mui/material";
import React from "react";
import { Handle, Position } from "reactflow";

export default function MessagesNode({ data: { text } }) {
  return (
    <Box sx={{ backgroundColor: "white", border: "1px solid rgba(50, 115, 220, 0.3)" }}>
      <Box sx={{ p: 1, backgroundColor: "#8AFFFF" }}>
        <Typography variant="body2" fontWeight={"bold"}>Send Message</Typography>
      </Box>
      <Box sx={{ p: 1 }}>${text}</Box>
      <Handle type="source" position={Position.Right} />
    </Box>
  );
}
