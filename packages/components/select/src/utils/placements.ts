/*
 * @Date: 2023-12-20 14:22:09
 * @Description: Modify here please
 */
import type { BuildInPlacements } from "@fish-bubble-design/components/_internal/popper";

export const getBuiltInPlacements = (): BuildInPlacements => {
  const autoAdjustOverflow = {
    adjustX: 1,
    adjustY: 1
  };

  const targetOffset = [0, 0];

  return {
    "bottom-start": {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: autoAdjustOverflow,
      targetOffset
    },
    bottom: {
      points: ["tc", "bc"],
      offset: [0, 4],
      overflow: autoAdjustOverflow,
      targetOffset
    },
    "bottom-end": {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: autoAdjustOverflow,
      targetOffset
    },
    "top-start": {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: autoAdjustOverflow,
      targetOffset
    },
    "top-end": {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: autoAdjustOverflow,
      targetOffset
    }
  };
};
