import { getRepository } from "typeorm";
import { User } from "@api/entity/User";

/**
 * @api {GET} /api/user 获取所有用户
 * @apiGroup User
 *
 * @apiUse UserModel
 */
export const GET = async (req) => {
  let res = await getRepository(User).find();
  return { code: 0, data: res };
};
/**
 * @api {POST} /api/user 新增一个用户
 * @apiGroup User
 *
 * @apiUse UserModel
 */
export const POST = async (req) => {
  try {
    let user = new User();
    user.name = "test";
    user.age = 18;

    let res = await getRepository(User).save(user);

    return { code: 0, data: res };
  } catch (error) {
    return error;
  }
};
