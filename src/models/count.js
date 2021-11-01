import { model } from '@modern-js/runtime/model';

export default model("count").define({
  state: {
    count: 1,
  },
  actions: {
    add(state) {
        state.count += 1
      }
  },
});
