/*
 * @Date: 2023-12-25 17:48:08
 * @Description: Modify here please
 */
export type ImageProps = {
  /** 图片地址 */
  src: string;
  /** 图片备用文本描述 */
  alt?: string;
  /** 是否是a链接图片 */
  linkUrl?: string;
  /** 自定义图片样式 */
  imgClass?: string | string[] | Record<string, boolean>;
  /** 图片宽度 */
  width?: string | number;
  /** 图标高度  */
  height?: string | number;
  /** 是否需要懒加载功能， 如果开启了这个，我们建议你需要传递一个宽度，高度进来。因为占位节点需要 */
  lazy?: boolean;
  /** preview是否可以预览 */
  preview?: boolean;
};
