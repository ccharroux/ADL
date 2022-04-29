using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace ADLAPICore.Library.utilities
{
    public class AesEncryption
    {
        private static readonly string _EncryptKey = "zS0niwDeKcCfHt/RZ2EzjMfbECarHBm6";
        private static readonly string _EncryptIV = "Hn+4UHF1riaCPN4F";
        private static readonly string _Salt = ConfigurationManager.AppSettings["Salt"]; //"S@ltyPepperc0rn$";

        public static string Encrypt(string plainText)
        {

            try
            {
                //text to be encrypted will be loaded here as a byte array
                byte[] bEncryptedText;
                //convert key to byte array
                byte[] bKey = Encoding.ASCII.GetBytes(_EncryptKey);
                //convert iv to byte array
                byte[] bIV = Encoding.ASCII.GetBytes(_EncryptIV);

                //checking if the input string is null or not
                if (string.IsNullOrWhiteSpace(plainText))
                {
                    throw new ArgumentNullException(nameof(plainText));
                }

                //adding salt value to the string to be encrypted
                //for now just adding at the front
                var sEncryptionValue = _Salt + plainText;

                //creating the AES object to use
                using (Aes aesAlg = Aes.Create())
                {

                    if (aesAlg == null)
                    {
                        throw new ArgumentNullException();
                    }

                    //these fields wore already byte arrays 
                    //but decided to assign to the aes variable to make
                    //sure there were no issues.
                    aesAlg.Key = bKey;
                    aesAlg.IV = bIV;

                    ICryptoTransform encryptor = aesAlg.CreateEncryptor(aesAlg.Key, aesAlg.IV);

                    // Create MemoryStream    
                    using (MemoryStream msEncrypt = new MemoryStream())
                    {
                        // Create crypto stream using the CryptoStream class. This class is the key to encryption    
                        // and encrypts and decrypts data from any given stream. In this case, we will pass a memory stream    
                        // to encrypt    
                        using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
                        {
                            // Create StreamWriter and write data to a stream    
                            using (StreamWriter swEncrypt = new StreamWriter(csEncrypt))
                            {
                                swEncrypt.Write(sEncryptionValue);
                            }

                            bEncryptedText = msEncrypt.ToArray();
                        }

                    }

                }

                //calls this function to convert the byte array to a hex string.
                //This string is what will be sent to front end, etc.
                var sEncryptedText = ConvertBytesToHex(bEncryptedText);

                return sEncryptedText;

            }
            catch (Exception )
            {
                //Console.WriteLine(e);
                return "";
            }

        }

        private static string ConvertBytesToHex(byte[] inSource)
        {
            try
            {
                //Converts the byte array to a hex string automatically with this method.
                //However, this method sends the results as 7F-2C-4A-00. Need to remove the dashes.
                return BitConverter.ToString(inSource).Replace("-", "");
            }
            catch (Exception )
            {
                //Console.WriteLine(e);
                return "";
            }

        }

        public static string Decrypt(string inEncrypted)
        {
            try
            {
                //convert key to byte array
                byte[] bKey = Encoding.ASCII.GetBytes(_EncryptKey);
                //convert iv to byte array
                byte[] bIV = Encoding.ASCII.GetBytes(_EncryptIV);

                byte[] encryptedBytes = ConvertHexToBytes(inEncrypted);

                var sDecryptedText = "";


                using (Aes aesAlg = Aes.Create())
                {

                    if (aesAlg == null)
                    {
                        throw new ArgumentNullException();
                    }

                    //these fields wore already byte arrays 
                    //but decided to assign to the aes variable to make
                    //sure there were no issues.
                    aesAlg.Key = bKey;
                    aesAlg.IV = bIV;

                    ICryptoTransform decryptor = aesAlg.CreateDecryptor(aesAlg.Key, aesAlg.IV);
                    // Create the streams used for decryption.    
                    using (MemoryStream msDecrypt = new MemoryStream(encryptedBytes))
                    {
                        // Create crypto stream    
                        using (CryptoStream csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
                        {
                            // Read crypto stream    
                            using (StreamReader srDecrypt = new StreamReader(csDecrypt))
                                sDecryptedText = srDecrypt.ReadToEnd();
                        }
                    }
                }

                sDecryptedText = sDecryptedText.Replace(_Salt, "");

                return sDecryptedText;
            }
            catch (Exception )
            {
                //Console.WriteLine(e);
                return "";
            }

        }

        private static byte[] ConvertHexToBytes(string inHex)
        {
            try
            {
                //check if the string converted is in the right HEX format
                //expecting that each hex value is 2 characters
                int iLength = inHex.Length;

                if (iLength % 2 != 0)
                {
                    //This will cause the decryption to fail but should be graceful
                    //versus failure that the format is wrong
                    inHex = "0" + inHex;
                    iLength += 1;
                }

                byte[] bytes = new byte[iLength / 2];

                for (int i = 0; i < iLength; i += 2)
                {
                    bytes[i / 2] = System.Convert.ToByte(inHex.Substring(i, 2), 16);

                }//end for

                return bytes;

            }
            catch (Exception )
            {
                return null;
            }

        }
    }
}