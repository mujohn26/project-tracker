
/**
 * class for responses
 */
class Queries {
  /**
 * creating user query
 * @param {string} table users table in database.
 * @param {string} data the data to be inputed in database.
 * @returns {array} data the data to be returned.
 */
  static async create(table, data) {
    try {
      const datas = await table.create(data);
      return datas;
    } catch (error) {
      return error;
    }
  }

  /** Query to find and count all the users
   *
   * @param {*} table to search into
   * @param {Object} limit which includes
   * @param {Object} offset number
   * @param {String} filterBy condition used to filter
   * @param {String} order of the returned data
   * @returns {Object} users data
   */
  static async getUsers(table, limit, offset, filterBy, order) {
    try {
      if (filterBy !== undefined || order !== undefined) {
        const returnedUsers = await table.findAndCountAll({
          order: [
            [`${filterBy}`, `${order}`]
          ],
          limit,
          offset
        });
        if (returnedUsers.count > offset) {
          return returnedUsers;
        }
      }
      const returnedUsers = await table.findAndCountAll({
        order: [
          ['name', 'DESC']
        ],
        limit,
        offset
      });

      if (returnedUsers.count > offset) {
        return returnedUsers;
      }
    } catch (error) {
      return error;
    }
  }
}
export default Queries;
