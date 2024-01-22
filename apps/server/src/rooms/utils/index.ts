import crypto from 'crypto';

export const getAllLetters = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  return letters;
};

export const generateUUID = () => {
  return crypto.randomBytes(16).toString('hex');
};
