import { AmplifyApiRestResourceStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyApiRestResourceStackTemplate) {
  const { paths } = resources.restApi.body;
  Object.keys(paths).forEach((path) => {
    if (path.includes('{proxy+}')) {
      delete paths[path];
    }
  });
}