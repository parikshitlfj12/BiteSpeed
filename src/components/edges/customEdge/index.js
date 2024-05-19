import React from "react";
import {
  BezierEdge,
  EdgeLabelRenderer,
  getBezierPath,
} from "reactflow";

export default function Edge(props) {
  const {
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;

  console.log(props)

  const [labelX, labelY] = getBezierPath({
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
