import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Docs",
  tagline: "",
  favicon: "img/logo_v2_icon_green_white.ico",

  // Set the production url of your site here
  url: "https://docs.theadaptivenetwork.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "adaptive-network", // Usually your GitHub org/user name.
  projectName: "documentation-site", // Usually your repo name.

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
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Docs",
      logo: {
        alt: "adaptive-network_logo_v2",
        src: "img/logo_v2_icon_green_small.svg",
        srcDark: "img/logo_v2_icon_white_small.svg",
        width: 32,
        height: 32,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Getting Started",
        },
        {
          href: "https://github.com/Adaptive-Network",
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
              label: "Getting Started",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/xPrxDBxw",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/the-adaptive-network",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Adaptive-Network",
            },
          ],
        },
      ],
      logo: {
        alt: "Adaptive Network Logo",
        src: "img/logo_v2_icon_green_small.svg",
        srcDark: "img/logo_v2_icon_white_small.svg",
        width: 64,
        height: 64,
      },
      copyright: `Copyright © ${new Date().getFullYear()} The Adaptive Network`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    customFields: {
      subtitle: "Docs",
      company: "Adaptive Network",
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
