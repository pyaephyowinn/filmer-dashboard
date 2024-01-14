import CryptoJS from 'crypto-js';

export function encrypt(data: string, secret: string) {
  const cipherText = CryptoJS.AES.encrypt(JSON.stringify(data), secret);
  return cipherText.toString();
}

export function decrypt(data: string, secret: string) {
  const bytes = CryptoJS.AES.decrypt(data, secret);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}
