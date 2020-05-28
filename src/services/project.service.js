import db from '../database/models';
import Queries from './Queries';


/**
 * This class contains functions for all project services.
 */
class ProjectServices {
  /**
 * creating project query
 * @param {string} NewProject project table in database.
 * @returns {array} data the data to be returned.
 */
  static async CreateProject(NewProject) {
    return Queries.create(db.project, NewProject);
  }
}
export default ProjectServices;
