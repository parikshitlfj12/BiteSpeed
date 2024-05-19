import React, { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import "./App.css";
import { Box, Button } from "@mui/material";
import { initialEdges, initialNodes } from "./data";
import MessagesNode from "./components/nodes/messagesNode";
import CustomEdge from "./components/edges/customEdge";
import SettingPanel from "./components/panel/settingPanel";
import NodesPanel from "./components/panel/nodesPanel";

// You can add custom Nodes in components file and add them to this list
const nodeTypes = {
  messagesNode: MessagesNode,
};

// Custom edge to introduce removing edge feature.
const edgeTypes = {
  customEdge: CustomEdge,
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);

  // Creating an edge between nodes
  const onConnect = (connection) => {
    // Check if the source handle already has an edge connected
    const existingEdge = edges.some(
      (edge) => edge.source === connection.source
    );

    if (!existingEdge) {
      const edge = {
        ...connection,
        animated: true,
        id: `${edges.length + 1}`,
        type: "customEdge",
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    } else {
      console.log("Source handle already has an edge connected");
    }
  };

  // Callback to handle node selection
  const onNodeClick = (event, node) => {
    setSelectedNode(node);
  };

  // Function to add a new node at a specific position
  const addNodeAtPosition = (position, type) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      data: { label: "New Node" },
      position,
      type,
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  // Handle drop event
  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = event.target.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    if (typeof type === "undefined" || !type) {
      return;
    }

    const position = {
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    };

    addNodeAtPosition(position, type);
  };

  // Allow drag over
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}>
      {/* Flow Section */}
      <Box
        sx={{ width: "60%", height: "100vh", borderRight: "1px solid grey" }}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </Box>

      {/* Panel's Section */}
      <Box sx={{ width: "40%", p: 2, height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            borderBottom: "1px solid grey",
            pb: 2,
          }}
        >
          <Button variant="contained">Save Changes</Button>
        </Box>
        <Box sx={{ mt: 2 }}>
          {!!selectedNode ? (
            <SettingPanel
              node={selectedNode}
              onClose={() => {
                setSelectedNode(null);
              }}
            />
          ) : (
            <NodesPanel />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
