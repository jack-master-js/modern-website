import res from "@api/utils/response";
import { User } from "@api/entity/User";

/**
 * @api {GET} /api/users 获取用户
 * @apiGroup Users
 * @apiQuery {String} id 用户ID
 */
export const GET = async (req) => {
  try {
    let users = await User.findOne(req.query.id);
    return res.content(users);
  } catch (error) {
    return res.error(error);
  }
};
/**
 * @api {POST} /api/users 新增用户
 * @apiGroup Users
 * @apiUse UserEntity
 */
export const POST = async (req) => {
  try {
    await User.save(req.data);
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
    await User.update(req.data.id, req.data);
    return res.success();
  } catch (error) {
    return res.error(error);
  }
};
/**
 * @api {DELETE} /api/users 删除用户
 * @apiGroup Users
 * @apiBody {String} id 用户ID
 */
export const DELETE = async (req) => {
  try {
    await User.delete(req.data.id);
    return res.success();
  } catch (error) {
    return res.error(error);
  }
};
