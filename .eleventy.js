"use strict";

const commonmark = require("markdown-it")("commonmark").use(
  require("markdown-it-replace-link"),
  {
    processHTML: true,
    replaceLink: function (link, env, token, htmlToken) {
      const markdownExtension = ".MD";
      // The irony that I am using Obsidian.md which uses md as its top level
      // domain and the code below breaks links to md top level domains is not
      // lost on me.
      if (link.slice(-3).toUpperCase() === markdownExtension) {
        return link.slice(0, -3);
      }
    },
  },
);

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary("md", commonmark);
};
