import res from "@api/utils/response";
import { User } from "@api/entity/User";

/**
 * @api {GET} /api/users 获取用户
 * @apiGroup Users
 */
export const GET = async (req) => {
  try {
    let users = await User.find(req.body);
    return res.data(users);
  } catch (error) {
    return res.error(error);
  }
};
/**
 * @api {POST} /api/users 新增/更新用户
 * @apiGroup Users
 * @apiUse UserEntity
 */
export const POST = async (req) => {
  try {
    let user = new User();
    user.name = "test";
    user.age = 18;
    await user.save();

    // await User.save(req.body);
    return res.success();
  } catch (error) {
    return res.error(error);
  }
};
/**
 * @api {PATCH} /api/users 更新用户
 * @apiGroup Users
 * @apiBody {String} id 用户ID
 */
export const PATCH = async (req) => {
  try {
    await User.update(req.body.id, req.body);
    return res.success();
  } catch (error) {
    return res.error(error);
  }
};
/**
 * @api {DELETE} /api/users 删除用户
 * @apiGroup Users
 * @apiBody {Array} ids 用户IDs
 */
export const DELETE = async (req) => {
  try {
    await User.delete(req.body.ids);
    return res.success();
  } catch (error) {
    return res.error(error);
  }
};
