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
}
export default UserServices;
