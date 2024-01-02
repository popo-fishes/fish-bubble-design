/*
 * @Date: 2023-12-31 13:28:27
 * @Description: Modify here please
 */
// For this project development
import "@vue/runtime-core";

declare module "@vue/runtime-core" {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    FButton: (typeof import("../packages/fish-bubble-design"))["FButton"];
    FIcon: (typeof import("../packages/fish-bubble-design"))["FIcon"];
  }

  interface ComponentCustomProperties {}
}

export {};
