import React, { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  ControlButton,
  Controls,
  MiniMap,
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
import { generateRandomCoordinates } from "./utils";

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
    const edge = {
      ...connection,
      animated: true,
      id: `${edges.length + 1}`,
      type: "customEdge",
    };
    setEdges((prevEdges) => addEdge(edge, prevEdges));
  };

  // Callback to handle node selection
  const onNodeClick = (event, node) => {
    setSelectedNode(node);
  };

  // Function to add an empty node
  const addEmptyNode = () => {
    const newNode = {
      id: `${nodes.length + 1}`,
      data: { label: "New Node" },
      position: generateRandomCoordinates(),
      type: "messagesNode",
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}>
      {/* Flow Section */}
      <Box
        sx={{ width: "60%", height: "100vh", borderRight: "1px solid grey" }}
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
        {!!selectedNode ? <SettingPanel node={selectedNode} /> : <NodesPanel />}
      </Box>
      <Button variant="contained" color="primary" onClick={addEmptyNode}>
        Add Empty Node
      </Button>
    </Box>
  );
}

export default App;
