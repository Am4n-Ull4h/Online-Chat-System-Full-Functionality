import Crypto from 'crypto';

function encryptMessage(content, publicKey) {
    try {
        const encryptedData = Crypto.publicEncrypt(publicKey, Buffer.from(content));
        return encryptedData.toString('base64');
    } catch (error) {
       // console.logerror('Encryption error:', error);
        return null;
    }
}

// Function to decrypt message content using recipient's private key
function decryptMessage(encryptedMessage, privateKey, encryptedKey) {
    try {
        const decryptedData = Crypto.privateDecrypt(privateKey, Buffer.from(encryptedMessage, 'base64'));
        return decryptedData.toString();
    } catch (error) {
       // console.logerror('Decryption error:', error);
        return null;
    }
}

export { encryptMessage, decryptMessage };
