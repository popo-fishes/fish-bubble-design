/*
 * @Date: 2023-12-18 20:44:46
 * @Description: Modify here please
 */
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);

export const isArray = Array.isArray;
export const isMap = (val) => toTypeString(val) === "[object Map]";
export const isSet = (val) => toTypeString(val) === "[object Set]";
export const isFunction = (val) => typeof val === "function";
export const isString = (val) => typeof val === "string";
export const isSymbol = (val) => typeof val === "symbol";
export const isObject = (val) => val !== null && typeof val === "object";
export const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
export const isNil = (value: any): value is null | undefined => {
  return value == null;
};

export const isUndefined = (val: any): val is undefined => val === undefined;
export const isBoolean = (val: any): val is boolean => typeof val === "boolean";
export const isNumber = (val: any): val is number => typeof val === "number";

export const isEmpty = (val: unknown) => (!val && val !== 0) || (isArray(val) && val.length === 0) || (isObject(val) && !Object.keys(val).length);

export const isElement = (e: unknown): e is Element => {
  if (typeof Element === "undefined") return false;
  return e instanceof Element;
};

// 判断客户端，给组件封装用的，不是业务的判断
export const isClient = typeof window !== "undefined" && typeof document !== "undefined";

export const NOOP = () => {};

export const isIOS = /* #__PURE__ */ getIsIOS();

function getIsIOS() {
  return (
    isClient &&
    window?.navigator?.userAgent &&
    (/iP(ad|hone|od)/.test(window.navigator.userAgent) || (window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent)))
  );
}
