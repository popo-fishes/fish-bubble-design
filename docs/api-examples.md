<!--
 * @Date: 2024-01-02 09:35:21
 * @Description: Modify here please
-->

---

## hello: world

<script setup lang="ts">
import { ref } from 'vue'
import {FButton} from '../packages/components'

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<FButton :class="$style.button" @click="count++">Increment</FButton>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>
