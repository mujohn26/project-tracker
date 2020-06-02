import db from '../database/models';
import Queries from './Queries';


/**
 * This class contains functions for all task services.
 */
class TaskServices {
  /**
 * creating project query
 * @param {string} NewTask project table in database.
 * @returns {array} data the data to be returned.
 */
  static async CreateTask(NewTask) {
    return Queries.create(db.task, NewTask);
  }

  /**
   *
   * @param {Object} limit which includes
   * @param {Object} offset number
   * @param {String} filterBy condition used to filter
   * @param {String} order of the returned data
   * @param {Integer} assignId user id
   * @param {String} status status of the task
   * @returns {Object} users data
   */
  static async getTasks(limit, offset, filterBy, order, assignId, status) {
    try {
      const users = await Queries.getTasks(db.task, limit, offset, filterBy, order, assignId, status);
      return users;
    } catch (error) {
      return error;
    }
  }
}
export default TaskServices;
