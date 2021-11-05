import res from "@api/utils/response";
import { User } from "@api/entity/User";

/**
 * @api {GET} /api/user 获取用户
 * @apiGroup User
 * @apiQuery {String} id 用户ID
 */
export const GET = async (req) => {
  try {
    let rst = await User.find();
    return res.data(rst);
  } catch (error) {
    return res.error(error);
  }
};
/**
 * @api {POST} /api/user 新增用户
 * @apiGroup User
 * @apiUse UserEntity
 */
export const POST = async (req) => {
  try {
    let user = new User();
    user.name = "test";
    user.age = 18;

    let rst = await user.save();
    return res.data(rst);
  } catch (error) {
    return res.error(error);
  }
};
/**
 * @api {PUT} /api/user 更新用户
 * @apiGroup User
 * @apiBody {String} id 用户ID
 */
export const PUT = async (req) => {
  return "ok";
};
/**
 * @api {DELETE} /api/user 删除用户
 * @apiGroup User
 * @apiBody {String} id 用户ID
 */
export const DELETE = async (req) => {
  return "ok";
};
