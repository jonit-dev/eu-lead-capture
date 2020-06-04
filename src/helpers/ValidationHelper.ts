import _ from 'lodash';

export interface IValidateKeyValueConfig {
  optionalFields: string[];
  fieldLabels: object;
}

export class ValidationHelper {
  public static validateKeyValue = (
    object: Object,
    config: IValidateKeyValueConfig
  ) => {
    let invalidFields = "";

    for (const key of Object.keys(object)) {
      // console.log(`Validating ... ${key}`);
      // loop through all key value pairs, except the optional ones
      if (!config.optionalFields.includes(key)) {
        if (!object[key] || object[key] === "default" || !object[key].length) {
          const fieldLabel = config.fieldLabels[key];
          invalidFields += `${_.capitalize(fieldLabel)}, `;
        }
      }
    }
    return invalidFields.slice(0, invalidFields.length - 2);
  };
}
