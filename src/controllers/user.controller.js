import UserServices from '../services/user.service';
import response from '../helpers/response.helper';
import Paginate from '../helpers/paginate.helper';

/**
 * Class for users related operations such creating users and getting users
 */
class userController {
/**
   * signup a user and saving user data in the database
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @returns {Object} A user object with selected fields
   */
  static async createUser(req, res) {
    try {
      const {
        name,
        surname,
        email
      } = req.body;
      const NewUser = {
        name,
        surname,
        email
      };
      await UserServices.CreateUser(NewUser);

      response.successMessage(
        res,
        'user was created successfully',
        201,
        NewUser
      );
    } catch (e) {
      return response.errorMessage(
        res,
        e.message,
        500,
      );
    }
  }

  /**
   * get user data from database
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @returns {Object} returns user datas
   */
  static async getUser(req, res) {
    try {
      const { page, filterBy, order } = req.query;
      const limit = req.query.limit || 10;
      const offset = Paginate(page, limit);
      const users = await UserServices.getUsers(limit, offset, filterBy, order);
      response.successMessage(
        res,
        'user returned successfully',
        200,
        users
      );
    } catch (e) {
      return response.errorMessage(
        res,
        e.message,
        500,
      );
    }
  }
}


export default userController;
