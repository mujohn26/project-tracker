import db from '../database/models';
import Queries from './Queries';


/**
 * This class contains functions for all user services.
 */
class UserServices {
  /**
 * creating user query
 * @param {string} NewUser users table in database.
 * @returns {array} data the data to be returned.
 */
  static async CreateUser(NewUser) {
    return Queries.create(db.user, NewUser);
  }

  /**
   *
   * @param {Object} limit which includes
   * @param {Object} offset number
   * @param {String} filterBy condition used to filter
   * @param {String} order of the returned data
   * @returns {Object} users data
   */
  static async getUsers(limit, offset, filterBy, order) {
    try {
      const users = await Queries.getUsers(db.user, limit, offset, filterBy, order);
      return users;
    } catch (error) {
      return error;
    }
  }
}
export default UserServices;
