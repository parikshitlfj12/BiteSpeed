import React from "react";
import { Box, Typography } from "@mui/material";
import { Message } from "@mui/icons-material";

export default function NodesPanel() {
  // Initiate drag start with node type
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight={"bold"}>
        Nodes Panel
      </Typography>
      {/* You can also add other node type to add into the flow */}
      <Box
        onDragStart={(event) => onDragStart(event, "messagesNode")}
        draggable
        sx={{
          mt: 2,
          width: "fit-content",
          padding: "8px 30px",
          border: "1px solid #3457D5",
          borderRadius: "10%",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#3457D5",
        }}
      >
        <Message />
        <Typography variant="body2">Message</Typography>
      </Box>
    </Box>
  );
}
