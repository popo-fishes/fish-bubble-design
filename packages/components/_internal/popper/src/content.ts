/*
 * @Date: 2023-12-18 11:54:14
 * @Description: Modify here please
 */
import type { StyleValue } from "vue";
export type OffsetType = number | `${number}%`;

export interface AlignType {
  /**
   * move point of source node to align with point of target node.
   * Such as ['tr','cc'], align top right point of source node with center point of target node.
   * Point can be 't'(top), 'b'(bottom), 'c'(center), 'l'(left), 'r'(right) */
  points?: string[];
  /**
   * offset source node by offset[0] in x and offset[1] in y.
   * If offset contains percentage string value, it is relative to sourceNode region.
   */
  offset?: OffsetType[];
  /**
   * offset target node by offset[0] in x and offset[1] in y.
   * If targetOffset contains percentage string value, it is relative to targetNode region.
   */
  targetOffset?: OffsetType[];
  /**
   * If adjustX field is true, will adjust source node in x direction if source node is invisible.
   * If adjustY field is true, will adjust source node in y direction if source node is invisible.
   */
  overflow?: {
    adjustX?: boolean | number;
    adjustY?: boolean | number;
    shiftX?: boolean | number;
    shiftY?: boolean | number;
  };
  /** Auto adjust arrow position */
  autoArrow?: boolean;
  /**
   * Config visible region check of html node. Default `visible`:
   *  - `visible`:
   *    The visible region of user browser window.
   *    Use `clientHeight` for check.
   *    If `visible` region not satisfy, fallback to `scroll`.
   *  - `scroll`:
   *    The whole region of the html scroll area.
   *    Use `scrollHeight` for check.
   *  - `visibleFirst`:
   *    Similar to `visible`, but if `visible` region not satisfy, fallback to `scroll`.
   */
  htmlRegion?: "visible" | "scroll" | "visibleFirst";
  /**
   * Whether use css right instead of left to position
   */
  useCssRight?: boolean;
  /**
   * Whether use css bottom instead of top to position
   */
  useCssBottom?: boolean;
  /**
   * Whether use css transform instead of left/top/right/bottom to position if browser supports.
   * Defaults to false.
   */
  useCssTransform?: boolean;
  ignoreShake?: boolean;
}

type ClassType = string | Record<string, boolean> | ClassType[];

export type BuildInPlacements = Partial<Record<Placement, AlignType>>;

export type Placement = "bottom-end" | "bottom-start" | "bottom" | "top-end" | "top-start" | "top";

export interface IPopperContentProps {
  /** 弹出位置? 你可以控制下拉菜单在触发对象节点上的某个位置弹出 */
  popupPlacement?: Placement;
  /** 位置配置表 */
  builtinPlacements?: BuildInPlacements;
  /** 是否显示 */
  open?: boolean;
  /** 执行的动画 */
  transition?: string;
  /** 是否禁止  */
  disabled?: Boolean;
  /** 弹窗的自定义类名 */
  popperClass?: ClassType;
  /** 弹窗的style属性 */
  popperStyle?: StyleValue;
  /** 弹窗层级 */
  zIndex?: number;
  /**菜单渲染父节点。默认渲染到 body 上 */
  getPopupContainer?: (el: any) => HTMLElement;
}

export const popperContentEmits = {
  mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
  mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
  hide: (e: any) => e,
  show: (e: any) => e
};
