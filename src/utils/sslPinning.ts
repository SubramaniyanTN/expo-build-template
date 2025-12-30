import { initializeSslPinning } from "react-native-ssl-public-key-pinning";

export async function setupSslPinning() {
    try {
      await initializeSslPinning({
        "qa-server.bublly.com": {
          includeSubdomains: false,
          publicKeyHashes: [
            // Primary key
            "-------"
            // "vFchZcBw22OObdElOlFSk/x8Mm7f6coVBmGh9D52bfI=",
            // "abchZcBw22OObdElOlFSk/x8Mm7f6coVBmGh9D52bfI=", // Dummy key please remove this before production
  
            // 🔴 REQUIRED on iOS — ask DevOps for backup key
            // "BACKUP_PUBLIC_KEY_HASH_HERE"
          ],
        },
      });
    } catch (error) {
        console.error('Error initializing SSL pinning:', error);
    }
  }