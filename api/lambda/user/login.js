import { useContext } from "@modern-js/runtime/server";

/**
 * @api {GET} /api/user/login 用户登陆
 * @apiGroup User
 * @apiBody {String} userName 用户名
 * @apiBody {String} password 秘密
 * @apiBody {String} [code] 代码
 */
export default async (req) => {
  const ctx = useContext();
  ctx.res.cookie("sid", Math.random());

  return { code: 0, message: "OK" };
};
