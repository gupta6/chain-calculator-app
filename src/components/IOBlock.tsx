import { useState, useEffect, useMemo, memo } from "react";
import { getElementCordinates, getElementHeightWidth } from "../utils";
import { Edge } from "./Edge";
import { Connector } from "./Connector";

type IOBlockProps = {
  id: string;
  label: string;
  value: number | string;
  onChange?: (value: number) => void;
  connectorCardId: number;
};

const calculateCoordinates = (isInput: boolean, connectorCardId: number, IOBlockMarginFromConnectorCard: number) => {
  const [cardWidth, cardHeight] = getElementHeightWidth(
    `card-${connectorCardId}`
  );
  const [cardX, cardY] = getElementCordinates(`card-${connectorCardId}`);

  if (isInput) {
    const [inputWidth, inputHeight] = getElementHeightWidth("input");
    return {
      x: cardX - inputWidth - IOBlockMarginFromConnectorCard, // Calculating x-cordinate for input node by subtracting input width and margin from card x-cordinate
      y: cardY + cardHeight - inputHeight,
    };
  } else {
    const [, outputHeight] = getElementHeightWidth("output");
    return {
      x: cardX + cardWidth + IOBlockMarginFromConnectorCard, // Calculating x-cordinate for output node by adding card width and margin to card x-cordinate
      y: cardY + cardHeight - outputHeight,
    };
  }
};

export const IOBlock = memo(({
  label,
  value,
  onChange,
  id,
  connectorCardId,
}: IOBlockProps) => {
  const isInput = id === "input";
  const [cords, setCords] = useState({ x: 0, y: 0 });
  const IOBlockMarginFromConnectorCard = 9;

  const styles = useMemo(() => {
    const borderColor = isInput ? "#FFC267" : "#2DD179";
    const bgColor = isInput ? "#E29A2D" : "#4CAF79";
    return { borderColor, bgColor };
  }, [isInput]);

  useEffect(() => {
    setCords(calculateCoordinates(isInput, connectorCardId, IOBlockMarginFromConnectorCard));
  }, [connectorCardId, isInput]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // Allow only x, numbers, and operators
    const regex = /^[0-9]*$/;

    if (regex.test(inputValue)) {
      onChange?.(+inputValue); // Update value if valid
    }
  };
  return (
    <>
      <div
        id={id}
        className="absolute flex w-[115px] flex-col gap-[6px] z-10 top-[]"
        style={{
          top: cords.y,
          left: cords.x,
        }}
      >
        <div
          className={`flex h-[22px] items-center justify-center rounded-[14px] font-semibold text-sm text-white leading-[14.52px]`}
          style={{ backgroundColor: styles.bgColor }}
        >
          {label}
        </div>
        <div
          className={`flex ${
            isInput ? "flex-row" : "flex-row-reverse"
          } h-[50px] items-center  border border-2 rounded-[15px]`}
          style={{ borderColor: styles.borderColor }}
        >
          <div className="px-4 w-[75px]">
            <input
              type="text"
              className="w-full font-bold text-large text-black"
              value={value}
              onChange={changeHandler}
            />
          </div>
          <div
            className={`flex h-full w-[40px] items-center justify-center ${
              isInput ? "border-l" : "border-r"
            } border-[#C5F2DA]`}
          >
            <Connector id={`${id}-connector`} />
          </div>
        </div>
      </div>
      {cords.x !== 0 && cords.y !== 0 && (
        <Edge
          source={`${id}-connector`}
          target={`card${connectorCardId}-${id}__connector`}
        />
      )}
    </>
  );
}, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value;
});
