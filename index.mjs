import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const pollyClient = new PollyClient({});
const s3Client = new S3Client({});

export const handler = async (event) => {
    try {
        const text = event.text;
        const pollyParams = {
            Text: text,
            OutputFormat: 'mp3',
            VoiceId: 'Joanna'
        };

        const data = await pollyClient.send(new SynthesizeSpeechCommand(pollyParams));
        const key = `audio-${Date.now()}.mp3`;

        const s3Params = {
            Bucket: 'your-bucket-name', // Replace with your S3 bucket name
            Key: key,
            Body: data.AudioStream,
            ContentType: 'audio/mpeg'
        };

        await s3Client.send(new PutObjectCommand(s3Params));

        const outputMessage = `Audio file stored in S3 bucket as ${key}`;
        return {
            statusCode: 200,
            body: JSON.stringify({ message: outputMessage })
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        };
    }
};
