"use strict";

const commonmark = require("markdown-it")("commonmark").use(
  require("markdown-it-replace-link"),
  {
    processHTML: true,
    replaceLink: function (link, env, token, htmlToken) {
      // https://github.com/11ty/eleventy/discussions/1973#discussioncomment-1344106
      return link.replace(/^([^/][^:]*)\.md(#[^#]+)?$/, "../$1/$2")
    },
  },
);

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary("md", commonmark);
};
