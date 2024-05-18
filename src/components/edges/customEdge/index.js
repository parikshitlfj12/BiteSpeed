import React from "react";
import {
  BezierEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "reactflow";

export default function Edge(props) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;

  const { setEdges } = useReactFlow();

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });
  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <p
          style={{
            position: "absolute",
            color: "red",
            background: "transparent",
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
          }}
        >
          x
        </p>
      </EdgeLabelRenderer>
    </>
  );
}
