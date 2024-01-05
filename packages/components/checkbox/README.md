<!--
 * @Date: 2023-12-25 17:13:43
 * @Description: Modify here please
-->

```
    // 示例1
    const checked1 = ref(false)
    <BBCheckbox v-model="checked1">Disabled</BBCheckbox>


    // 示例2
    const checkList = ref(["selected and disabled", "Option A"]);

    <BBCheckboxGroup v-model="checkList">
      <BBCheckbox label="Option A" />
      <BBCheckbox label="Option B" />
      <BBCheckbox label="Option C" />
      <BBCheckbox label="disabled" disabled />
      <BBCheckbox label="selected and disabled" disabled />
    </BBCheckboxGroup>
```
