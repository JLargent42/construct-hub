// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export interface HttpGetFunctionProps extends lambda.FunctionOptions {
}

export class HttpGetFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: HttpGetFunctionProps) {
    super(scope, id, {
      description: 'monitoring/http-get-function.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '/http-get-function.lambda.bundle')),
    });
  }
}