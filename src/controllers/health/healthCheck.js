import { successResponse, errorResponse, uniqueId } from '../../helpers';

export const ping = async (req, res) => {
  try {
    return successResponse(req, res, { message:"Happy hacking ...." });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
