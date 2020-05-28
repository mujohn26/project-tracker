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
}
export default TaskServices;
