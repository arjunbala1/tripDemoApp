import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const MIN_PASSWORD_LENGTH = 8;

// Returns true if the value looks like a valid email address.
export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

// Returns true if the password has at least MIN_PASSWORD_LENGTH characters,
// one letter and one number.
export function isValidPassword(password: string): boolean {
  return (
    password.length >= MIN_PASSWORD_LENGTH &&
    /[A-Za-z]/.test(password) &&
    /\d/.test(password)
  );
}

export const widthInPercent = (widthPercent: number) => {
  return (SCREEN_WIDTH * widthPercent) / 100;
};


export const heightInPercent = (heightPercent: number) => {
  return (SCREEN_HEIGHT * heightPercent) / 100;
};
