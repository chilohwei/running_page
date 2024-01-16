interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://run.chiloh.cn',
  logo: 'https://chilohdata.s3.bitiful.net/avatar.png',
  description: 'Record Chilohs Running',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://blog.chiloh.cn',
    },
    {
      name: 'About',
      url: 'https://blog.chiloh.cn/about',
    },
  ],
};

export default data;
