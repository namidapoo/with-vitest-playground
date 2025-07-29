import * as cdk from "aws-cdk-lib";
import type { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkBuildTestStack extends cdk.Stack {
	// biome-ignore lint/complexity/noUselessConstructor: <Provisional Measures>
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		// The code that defines your stack goes here

		// example resource
		// const queue = new sqs.Queue(this, 'CdkBuildTestQueue', {
		//   visibilityTimeout: cdk.Duration.seconds(300)
		// });
	}
}
