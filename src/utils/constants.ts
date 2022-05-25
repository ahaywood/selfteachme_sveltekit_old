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
  DEVTO: '',
  PER_PAGE: 10 as number,
  ISAACS_BDAY: '2014-6-28' as string,
  ADELES_BDAY: '2015-12-9' as string,
  EMMAS_BDAY: '2017-8-8' as string,
}
Object.freeze(Constants);
export { Constants };

export const env = {
  SITE_URL: import.meta.env.VITE_SITE_URL
}