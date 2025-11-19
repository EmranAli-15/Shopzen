import BcryptReactNative from 'bcrypt-react-native';
import bcrypt from 'bcryptjs';

export const dd = async (password: string) => {
  console.log("dadada")
  const hs = await bcrypt.hash(password, 10); // synchronous version works more reliably in Expo
  console.log("da", hs)
};


export const makeHash = async (plainTextPassword: string) => {
  console.log(plainTextPassword)
  try {
    const saltRounds = 10; // Adjust salt rounds for desired security/performance balance
    const salt = await BcryptReactNative.getSalt(10);
    const hash = await BcryptReactNative.hash(salt, plainTextPassword);
    return hash;
  } catch (e) {
    console.error("Error hashing password:", e);
    return null;
  }
}


export const decryptHash = (plain: string, hash: string) => {
  return bcrypt.compareSync(plain, hash); // synchronous
};
