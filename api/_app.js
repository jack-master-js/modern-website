import { hook } from '@modern-js/runtime/server';
import auth from './_middleware/auth'

export default hook(({ addMiddleware }) => {
    addMiddleware(auth);
});
