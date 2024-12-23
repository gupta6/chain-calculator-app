import { useCallback, useEffect, useState, memo } from "react";
import { createPortal } from "react-dom";
import { getElementCordinates, calculateBezierPath } from "../utils";

type EdgeProps = {
  source: string;
  target: string;
};

export const Edge = memo(({ source, target }: EdgeProps) => {
  const [path, setPath] = useState("");

  const calculatePath = useCallback(() => {
    let [sourceX, sourceY] = getElementCordinates(source);
    let [targetX, targetY] = getElementCordinates(target);

    const connectorWidth = 15;
    const connectorHeight = 15;

    // Move the source and target to the center of the connector
    sourceX = sourceX + connectorWidth / 2;
    sourceY = sourceY + connectorHeight / 2;
    targetX = targetX + connectorWidth / 2;
    targetY = targetY + connectorHeight / 2;

    // Use the helper function for Bezier path calculation
    return calculateBezierPath(sourceX, sourceY, targetX, targetY);
  }, [source, target]);

  useEffect(() => {
    const path = calculatePath();
    setPath(path);
  }, [calculatePath]);

  return createPortal(
    <svg
      style={{
        overflow: "visible",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 5,
      }}
    >
      <path d={path} fill="none" stroke="#0066FF4F" strokeWidth="7" />
    </svg>,
    document.body
  );
});
