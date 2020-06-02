import { Op } from 'sequelize';
import db from '../database/models';
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
      if (filterBy !== undefined && order !== undefined) {
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

  /**
   *
   * This method will be used to get all tasks
   * @param {String} table the name of the table
   * @param {Object} limit which includes
   * @param {Object} offset number
   * @param {String} filterBy condition used to filter
   * @param {String} order of the returned data
   * @param {Integer} assignId user id
   * @param {String} status status of the task
   * @returns {object} messages retrieved
   */
  static async getTasks(table, limit, offset, filterBy, order, assignId, status) {
    try {
      const tasks = await table.findAndCountAll({
        where: {
          [Op.and]: [
            { assignId: { [Op.eq]: assignId } },
            { status: { [Op.eq]: status } },
          ]
        },
        order: [
          [`${filterBy}`, `${order}`]
        ],
        limit,
        offset
      });
      return tasks;
    } catch (error) {
      return error;
    }
  }
}
export default Queries;
