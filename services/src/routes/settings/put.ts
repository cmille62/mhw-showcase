import { Settings } from "../../db";
import { Static, invalidParameters } from "../../utils";

export async function putSettings(request: any, response: any) {
    const _id = request.params.id;
    const config = request.body;
  
    if (!_id) {
      response.status(400).send(invalidParameters("id"));
      return;
    }
  
    try {
      await Settings.findByIdAndUpdate(
        { _id },
        config
      ).exec();
  
      response.status(200).send(Static.SETTINGS_UPDATED_MESSAGE);
    } catch (error) {
      response.status(400).send();
    }
  }