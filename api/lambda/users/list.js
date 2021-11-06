import res from "@api/utils/response";
import { User } from "@api/entity/User";

/**
 * @api {GET} /api/users/list 获取用户列表
 * @apiGroup Users
 * @apiQuery {String} [name] 姓名
 * @apiQuery {Number} [age] 年龄
 */
export const GET = async (req) => {
  try {
    const { pageIndex, pageSize, ...where } = req.query;
    let [users, count] = await User.findAndCount({
      where,
      skip: pageIndex - 1,
      take: pageSize,
    });
    return res.content(users, count);
  } catch (error) {
    return res.error(error);
  }
};
/**
 * @api {DELETE} /api/users/list 批量删除用户
 * @apiGroup Users
 * @apiBody {Array} ids 用户ID
 */
export const DELETE = async (req) => {
  try {
    await User.delete(req.data.ids);
    return res.success();
  } catch (error) {
    return res.error(error);
  }
};
