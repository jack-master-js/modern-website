import { useContext } from "@modern-js/runtime/server";

/**
 * @api {GET} /api/user/login 用户登陆
 * @apiGroup User
 *
 * @apiUse UserModel
 */
export default async (req) => {
  const ctx = useContext();
  ctx.res.cookie("sid", Math.random());

  return { code: 0, message: "OK" };
};
