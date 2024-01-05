/*
 * @Date: 2023-12-31 13:28:27
 * @Description: Modify here please
 */
// For this project development
import "@vue/runtime-core";

declare module "@vue/runtime-core" {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    FbButton: (typeof import("../packages/fish-bubble-design"))["FbButton"];
    FbIcon: (typeof import("../packages/fish-bubble-design"))["FbIcon"];
    FbCheckbox: (typeof import("../packages/fish-bubble-design"))["FbCheckbox"];
    FbCheckboxGroup: (typeof import("../packages/fish-bubble-design"))["FbCheckboxGroup"];
    FbDialog: (typeof import("../packages/fish-bubble-design"))["FbDialog"];
  }

  interface ComponentCustomProperties {
    $message: (typeof import("../packages/fish-bubble-design"))["FbMessage"];
  }
}

export {};
