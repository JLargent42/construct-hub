// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export interface ReleaseNotesTriggerProps extends lambda.FunctionOptions {
}

export class ReleaseNotesTrigger extends lambda.Function {
  constructor(scope: Construct, id: string, props?: ReleaseNotesTriggerProps) {
    super(scope, id, {
      description: 'backend/release-notes/release-notes-trigger.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '/release-notes-trigger.lambda.bundle')),
    });
  }
}