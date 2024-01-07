/*
 * @Date: 2024-01-06 10:46:05
 * @Description: Modify here please
 */
export interface IconProps {
  icon: string;
  // 默认不传递size，size为继承。如果传递了size使用传递的
  size?: number | string;
  // 默认不传递color，color为继承。如果传递了color使用传递的
  color?: string;
  // 可点击--手指
  isPointer?: boolean;
}
