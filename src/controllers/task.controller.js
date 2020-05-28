import TaskServices from '../services/task.service';
import response from '../helpers/response.helper';

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
}


export default taskController;
