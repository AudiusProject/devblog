import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Audius Engineering Blog",
  tagline: "Audius Engineering Blog",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://engineering.audius.co",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "audius", // Usually your GitHub org/user name.
  projectName: "devblog", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        pages: false,
        blog: {
          routeBasePath: "/", // Serve the blog at the site's root
          showReadingTime: true,
          sortPosts: "descending",
          blogTitle: "Audius Engineering Blog",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card.jpg",
    navbar: {
      title: "| Engineering Blog",
      logo: {
        alt: "Audius Engineering Logo",
        // src: 'img/logo.svg',
        src: "img/logo.png",
      },
      items: [
        {
          href: "https://docs.audius.org",
          label: "Read the Docs",
          position: "right",
        },
        {
          href: "https://github.com/AudiusProject",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Read the Docs",
              href: "https://docs.audius.org",
            },
            {
              label: "Explore the SDK",
              href: "https://docs.audius.org/sdk",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.com/invite/audius",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/audius",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Listen",
              href: "https://audius.com",
            },
            {
              label: "GitHub",
              href: "https://github.com/AudiusProject",
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
