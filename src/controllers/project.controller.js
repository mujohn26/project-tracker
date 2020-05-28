import ProjectServices from '../services/project.service';
import response from '../helpers/response.helper';

/**
 * Class for project related operations such creating projects and getting projects
 */
class userController {
/**
   * creating a project and saving project  data in the database
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @returns {Object} A user object with selected fields
   */
  static async createProject(req, res) {
    try {
      const {
        name,
        body,
        status
      } = req.body;
      const NewProject = {
        name,
        body,
        status
      };

      await ProjectServices.CreateProject(NewProject);

      response.successMessage(
        res,
        'Project  was created successfully',
        201,
        NewProject
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
