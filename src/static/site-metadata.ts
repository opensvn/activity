interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '招财猫的运动记录',
  siteUrl: 'https://run.gitop.de',
  logo: 'https://s3.cn-north-1.amazonaws.com.cn/garmin-connect-prod/profile_images/3ca91a3c-5438-45c4-9bdc-9ba84fc6d698-prof.png',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: '📝 博客',
      url: 'https://blog.gitop.de',
    },
    {
      name: '🙏 感谢yihong',
      url: 'https://github.com/yihong0618/running_page',
    },
    {
      name: '🙏 感谢ben',
      url: 'https://github.com/ben-29/workouts_page',
    },
  ],
};

export default data;
