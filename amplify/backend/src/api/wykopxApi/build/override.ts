// This file is used to override the REST API resources configuration
import { AmplifyApiRestResourceStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyApiRestResourceStackTemplate) {
  const paths = resources.restApi.body.paths;
  Object.keys(paths).map((path) => {
    if (path.includes('{proxy+}')) {
      delete paths[path];
    }
  });
}
