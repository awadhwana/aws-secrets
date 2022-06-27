import {GetSecretValueCommand,} from "@aws-sdk/client-secrets-manager";
import {secretsClient} from "./libs/secretsClient.js";

//Inputs
const params = {
    SecretId: "wallet", //e.g. arn:aws:secretsmanager:REGION:XXXXXXXXXXXX:secret:mysecret-XXXXXX
};

const run = async () => {
    let data;
    try {
        data = await secretsClient.send(new GetSecretValueCommand(params));
        console.log("data", data);
    } catch (err) {
        console.log("err", err);
    }
    let secret;
    if ("SecretString" in data) {
        secret = data.SecretString;
    } else {
        console.log("else:", data);

        // Create a buffer
        const buff = new Buffer(data.SecretBinary, "base64");
        secret = buff.toString("ascii");
    }
    console.log(`secret------------------>`)
    console.log(secret)
    return secret;
};
run();
//module.exports = {run, params}
