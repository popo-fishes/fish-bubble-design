/*
 * @Date: 2023-11-29 16:17:22
 * @Description: 样式命名空间， 这个在封装组件，遇到样式多时候，是非常好管理的
 */
const statePrefix = "is-";
const _bem = (namespace: string, block: string, blockSuffix: string, element: string, modifier: string) => {
  let cls = `${namespace}-${block}`;
  // 块后缀
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  // 修饰
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};

/**
 *
 * @param block 组件块名
 * @param defaultNamespace 默认前缀
 * @returns
 */
// !!! 封装组件样式 非常重要的方法！
export const useNamespace = (block: string, defaultNamespace: string) => {
  // 默认样式拼接
  const b = (blockSuffix = "") => _bem(defaultNamespace, block, blockSuffix, "", "");
  // 扩展样式拼接
  const m = (modifier?: string) => (modifier ? _bem(defaultNamespace, block, "", "", modifier) : "");
  const e = (element?: string) => (element ? _bem(defaultNamespace, block, "", element, "") : "");
  // 是否存在某个样式
  const is = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true;
    return name && state ? `${statePrefix}${name}` : "";
  };

  return {
    b,
    m,
    e,
    is
  };
};
