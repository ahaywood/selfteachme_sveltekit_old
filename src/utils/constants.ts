const Constants = {
  TWITCH: 'http://twitch.tv/selfteachme',
  INSTAGRAM: 'http://instagram.com/selfteachme',
  TWITTER: 'http://twitter.com/selfteachme',
  YOUTUBE: 'http://youtube.com/c/selfteachme',
  CODEPEN: 'https://codepen.io/ahaywood',
  GITHUB: 'http://github.com/ahaywood',
  PINTEREST: '',
  FACEBOOK: '',
  DRIBBBLE: '',
  LINKEDIN: '',
  VIMEO: '',
  PATREON: '',
  MEDIUM: '',
  HASHNODE: '',
  DEVTO: ''
}
Object.freeze(Constants);
export { Constants };

export const env = {
  SITE_URL: import.meta.env.VITE_SITE_URL
}