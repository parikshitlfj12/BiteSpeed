import { Close } from "@mui/icons-material";
import { Box, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const MessageNode = ({ node, onClose, setNodes, nodes }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(node?.data?.text || "");
  }, [node]);

  const updateNodes = (updatedMessage) => {
    const updatedNode = {
      ...node,
      data: { ...node.data, text: updatedMessage },
    };
    const updatedNodes = nodes.map((n) => (n.id === node.id ? updatedNode : n));
    setNodes(updatedNodes);
  };

  const handleChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    updateNodes(newMessage);
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
      <Typography>ID: {node.id}</Typography>
      <Input
        placeholder="Enter your message!"
        fullWidth
        value={message}
        onChange={handleChange}
      />
    </Box>
  );
};

const NodeRenderer = ({ node, onClose, nodes, setNodes }) => {
  switch (node?.type) {
    case "messagesNode":
      return (
        <MessageNode
          node={node}
          onClose={onClose}
          nodes={nodes}
          setNodes={setNodes}
        />
      );
    default:
      return (
        <Typography variant="h6" fontWeight="bold">
          Node type not present
        </Typography>
      );
  }
};

const SettingPanel = ({ node, onClose, nodes, setNodes }) => {
  if (!node) return null;

  return (
    <NodeRenderer
      node={node}
      onClose={onClose}
      nodes={nodes}
      setNodes={setNodes}
    />
  );
};

export default SettingPanel;
