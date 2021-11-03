import { model } from '@modern-js/runtime/model';
import {GET as users} from '@api/lambda/user';

export default model("user").define({
  state: {
    users: [],
    pending: false,
    error: null,
  },
  actions: {
    load: {
        pending(draft) {
          draft.pending = true;
        },
        rejected(draft, payload) {
          draft.pending = false;
          draft.error = payload;
        },
        fulfilled(draft, payload) {
          draft.users = payload;
        },
      },
  },
  effects: {
    async load() {
      const data = await users();
      return data;
    },
  },
});
