import TaskServices from '../services/task.service';
import response from '../helpers/response.helper';
import Paginate from '../helpers/paginate.helper';


/**
 * Class for tasks related operations such creating tasks and getting taskss
 */
class taskController {
/**
   * signup a user and saving user data in the database
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @returns {Object} A user object with selected fields
   */
  static async createTask(req, res) {
    try {
      const {
        name,
        description,
        score,
        status,
        assignId,
        projectId
      } = req.body;
      const NewTask = {
        name,
        description,
        score,
        status,
        assignId,
        projectId
      };
      await TaskServices.CreateTask(NewTask);

      response.successMessage(
        res,
        'task was created successfully',
        201,
        NewTask
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
  static async getTasks(req, res) {
    try {
      const {
        page, filterBy, order, assigns
      } = req.query;
      const { status, score } = req.body;
      const limit = req.query.limit || 10;
      const offset = Paginate(page, limit);
      if (assigns !== undefined) {
        const m = [];
        const assignedusers = assigns.split(',');
        const tasks = await assignedusers.map(async (users, index) => {
          const assignId = assignedusers[index];

          const task = await TaskServices.getTasks(limit, offset, filterBy, order, assignId, status);
          const row = task.rows;
          return 'John';
        });
        response.successMessage(
          res,
          'task returned successfully',
          200,
          tasks
        );
      }
    } catch (e) {
      return response.errorMessage(
        res,
        e.message,
        500,
      );
    }
  }
}


export default taskController;
