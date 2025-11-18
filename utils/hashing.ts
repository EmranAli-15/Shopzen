import bcrypt from 'bcryptjs';

export const makeHash = (password: string) => {
  return bcrypt.hashSync(password, 10); // synchronous version works more reliably in Expo
};

export const decryptHash = (plain: string, hash: string) => {
  return bcrypt.compareSync(plain, hash); // synchronous
};
