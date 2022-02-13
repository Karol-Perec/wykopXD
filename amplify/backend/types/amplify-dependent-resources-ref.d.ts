export type AmplifyDependentResourcesAttributes = {
  function: {
    wykopxApiFunctionLayer: {
      Arn: 'string';
    };
    getPromotedLinks: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
    getLink: {
      Name: 'string';
      Arn: 'string';
      Region: 'string';
      LambdaExecutionRole: 'string';
    };
  };
  api: {
    wykopxApi: {
      RootUrl: 'string';
      ApiName: 'string';
      ApiId: 'string';
    };
  };
};
