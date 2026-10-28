// Placeholder for future localization support.
// All user-facing text lives here so a localization library can be
// plugged in later without touching every screen.

const strings = {
  login: 'Login',
  signup: 'Sign Up',
  home: 'Home',
  goToSignup: "Don't have an account? Sign Up",
  goToLogin: 'Already have an account? Login',
  logout: 'Logout',
};

export type StringKey = keyof typeof strings;

export function t(key: StringKey): string {
  return strings[key];
}

export default strings;
