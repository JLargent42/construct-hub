// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export interface IngestionProps extends lambda.FunctionOptions {
}

export class Ingestion extends lambda.Function {
  constructor(scope: Construct, id: string, props?: IngestionProps) {
    super(scope, id, {
      description: 'backend/ingestion/ingestion.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '/ingestion.lambda.bundle')),
    });
  }
}