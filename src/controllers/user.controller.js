import UserServices from '../services/user.service';
import response from '../helpers/response.helper';

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
        username,
        email
      } = req.body;
      const NewUser = {
        name,
        username,
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
}


export default userController;
