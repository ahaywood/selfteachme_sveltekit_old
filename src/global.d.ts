/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-use-before-define */
namespace SelfTeach {
  interface Blog {
    _id?: string;
    category: BlogCategory;
    category?: BlogCategory;
    content?: [];
    datePublished: Date;
    dateUpdated: Date;
    excerpt?: string;
    filepath?: string;
    hero?: string;
    hero?: string;
    meta?: Meta;
    nextPost?: Blog;
    originallyPosted?: string;
    postId?: string;
    previousPost?: Blog;
    published: boolean;
    published?: boolean;
    relatedPosts?: Blog[];
    relatedPosts?: Blog[];
    slug?: Slug;
    subtitle?: string;
    tags: string[];
    title?: string;
    titleWithinHero?: string;
    video?: string;
    videoId?: number;
  }

  interface BlogCategory {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
    name: string;
    published: boolean;
    slug: Slug;
  }

  interface Brands {
    name: string;
    logo: string;
  }

  interface Palette {
    _type: string;
    background: string;
    foreground: string;
    population: number;
    title: string;
  }

  interface Glossary {
    _id: string;
    name: string;
    description: [];
  }


  interface LeadMagnet {
    getForm?: string;
    heading?: string;
    content?: string;
  }

  interface Legal {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
    content: [];
    meta: Meta;
    name: string;
    slug: Slug;
  }

  interface Meta {
    seoTitle?: string;
    seoDescription?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    twitterImageAlt?: string;
  }

  interface Series {
    _id: string;
    name: string;
    slug: Slug;
    meta: Meta;
    leadMagnet: LeadMagnet;
    existingIntroVideo: Blog;
    customIntroVideo: {
      useCustomIntroVideo: boolean;
      introVideo: {
        url: string;
      };
      introContent: [];
    };
    postsAndVideos: Blog[];
  }

  interface Slug {
    _type: string;
    current: string;
  }

  interface Social {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    codepen: string;
    devTo?: string;
    dribbble: string;
    facebook?: string;
    hashnode?: string;
    github: string;
    instagram: string;
    linkedin: string;
    medium?: string;
    patreon?: string;
    pinterest: string;
    soundcloud?: string;
    twitch: string;
    twitter: string;
    vimeo?: string;
    youtube: string;
  }

  interface Snippet {
    _id: string;
    name: string;
    slug: Slug;
  }

  interface Subnav {
    _id: 'string';
    name: string;
    slug: Slug;
  }
}
