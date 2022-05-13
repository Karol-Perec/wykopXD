import { APIGatewayProxyResult } from 'aws-lambda';

export const createResponse = (body: unknown, statusCode: number): APIGatewayProxyResult => ({
  statusCode,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  },
  body: JSON.stringify(body),
});
