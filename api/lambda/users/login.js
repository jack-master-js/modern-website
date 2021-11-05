import { useContext } from "@modern-js/runtime/server";

/**
 * @api {GET} /api/users/login 用户登陆
 * @apiGroup Users
 * @apiBody {String} userName 用户名
 * @apiBody {String} password 秘密
 * @apiBody {String} [code] 代码
 */
export default async (req) => {
  const ctx = useContext();
  ctx.res.cookie("sid", Math.random());
  return "ok";
};
