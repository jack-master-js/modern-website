import { useContext } from '@modern-js/runtime/server';

export const GET = async () => {
  const ctx = useContext();
  ctx.res.cookie('sid', Math.random());

  return { code: 0, message: 'OK' };
};
