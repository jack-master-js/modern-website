import { useContext } from "@modern-js/runtime/server";

/**
 * @api {GET} /api/users/login 用户登陆
 * @apiGroup Users
 * @apiQuery {String} userName 用户名
 * @apiQuery {String} password 秘密
 * @apiQuery {String} [code] 代码
 */
export default async (req) => {
  const ctx = useContext();
  ctx.res.cookie("sid", Math.random());
  return "ok";
};
