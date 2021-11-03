import { useContext } from "@modern-js/runtime/server";

export const POST = () => {
  const ctx = useContext();
  ctx.res.send("ok");
};
