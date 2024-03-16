import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {  egressVPC } from './vpc-constructs';

export class StagingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
     const vpc = egressVPC(this)
     

  }
}
