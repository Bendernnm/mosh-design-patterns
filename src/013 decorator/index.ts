import { CloudStream } from './cloud-stream';
import { Stream } from './stream';
import { EncryptedCloudStream } from './encrypted-cloud-stream';
import { CompressCloudStream } from './compress-cloud-stream';

const cloudStream: Stream = new CloudStream();
const encryptedCloudStream: Stream = new EncryptedCloudStream(cloudStream);
const compressCloudStream: Stream = new CompressCloudStream(encryptedCloudStream);

compressCloudStream.write('my data');
