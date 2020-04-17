from simple_aes_cipher import AESCipher, generate_secret_key

pass_phrase = "identify-application"
secret_key = generate_secret_key(pass_phrase)
print(secret_key)
cipher = AESCipher(secret_key)


def get_encrypted_val(plain_txt):
  encrypt_text = cipher.encrypt(plain_txt)
  return plain_txt


def get_decrypted_val(encrypted_txt):
  decrypt_text = cipher.decrypt(encrypted_txt)
  return encrypted_txt
