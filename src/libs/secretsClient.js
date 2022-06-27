/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/client-secrets-manager.html.

Purpose:
secretsClient.js is a helper function that creates an Amazon Secrets Manager service client.

Inputs (replace in code):
- REGION
*/
// snippet-start:[secrets.JavaScript.createclientv3]
import {SecretsManagerClient} from "@aws-sdk/client-secrets-manager";
import {fromIni} from "@aws-sdk/credential-provider-ini";
// Set the AWS Region.
const REGION = "ap-south-1";

const CREDENTIALS = fromIni({
    // Optional. The configuration profile to use. If not specified, the provider will use the value
    // in the `AWS_PROFILE` environment variable or a default of `default`.
    profile: "default",
    // Optional. The path to the shared credentials file. If not specified, the provider will use
    // the value in the `AWS_SHARED_CREDENTIALS_FILE` environment variable or a default of
    // `~/.aws/credentials`.
    // filepath: "~/.aws/credentials",
    // Optional. The path to the shared config file. If not specified, the provider will use the
    // value in the `AWS_CONFIG_FILE` environment variable or a default of `~/.aws/config`.
    // configFilepath: "~/.aws/config",
    // Optional. A function that returns a promise fulfilled with an MFA token code for the
    // provided MFA Serial code. If a profile requires an MFA code and `mfaCodeProvider` is not a
    // valid function, the credential provider promise will be rejected.
    // mfaCodeProvider: async (mfaSerial) => {
    //     return "token";
    // },
    // Optional. Custom STS client configurations overriding the default ones.
    // clientConfig: {region},
})
//Set the Secrets Manager Service Object
const secretsClient = new SecretsManagerClient({region: REGION, credentials: CREDENTIALS});
export {secretsClient};
// snippet-end:[secrets.JavaScript.createclientv3]
