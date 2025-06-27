import RNFS from 'react-native-fs';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const uploadToDrive = async (filePath: string, mimeType: string, fileName?: string) => {
  const tokens = await GoogleSignin.getTokens();
  const fileData = await RNFS.readFile(filePath, 'base64');

  const metadata = {
    name: fileName || filePath.split('/').pop(),
    mimeType,
  };

  const boundary = 'foo_bar_baz';
  const body =
    `--${boundary}\r\n` +
    'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
    JSON.stringify(metadata) + '\r\n' +
    `--${boundary}\r\n` +
    `Content-Type: ${mimeType}\r\n` +
    'Content-Transfer-Encoding: base64\r\n\r\n' +
    fileData + '\r\n' +
    `--${boundary}--`;

  const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${tokens.accessToken}`,
      'Content-Type': `multipart/related; boundary=${boundary}`,
    },
    body,
  });

  if (!response.ok) {
    throw new Error('Failed to upload to Google Drive');
  }
};
