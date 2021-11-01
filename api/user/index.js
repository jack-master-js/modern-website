import User from './_entity/user1'
/**
   * @api {GET} /api/user 用户
   * @apiGroup User
   *
   * @apiUse UserModel
   */
export const GET = async (req) => {
    return {code: 0, message: 'ok'}
}
export const POST = async (req) => {
    try {
        await User.create(req.data)
        return {code: 0, message: 'ok'}
    } catch (error) {
        return error
    }
}
// export const PUT = async (req) => {}
// export const DELETE = async (req) => {}
