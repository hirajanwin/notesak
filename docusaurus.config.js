// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Akshat Chauhan\'s Notes',
  tagline: 'lil bro becoming better at software engineering and life',
  url: 'https://akormous.github.io',
  baseUrl: '/notes/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'akormous', // Usually your GitHub org/user name.
  projectName: 'notes', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // enable mermaid diagrams
  markdown: {
    mermaid: true
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/akormous/notes/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/akormous/notes/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Akshat\'s Notes',
        logo: {
          alt: 'Akshat Chauhan\'s Notes',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Index',
            position: 'right',
            label: 'Get Started',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/akormous/notes',
            label: 'Contribute',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'DSA',
                to: '/docs/dsa',
              },
              {
                label: 'Design Patterns',
                to: '/docs/design-patterns',
              },
              {
                label: 'Docker and K8s',
                to: '/docs/docker-kubernetes',
              },
              {
                label: 'Psychology of Money',
                to: '/docs/condensed-books/psychology-of-money',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/akormous',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/akormous',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Akshat's Notes`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: {
          light: 'neutral',
          dark: 'dark'
        }
      }
    }),
};

module.exports = config;
