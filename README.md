This file's audience is myself or folks contributing. Probably just me.

## Building

To install dependencies run `npm install`. There shouldn't be too many since
this project is mostly for hosting textual information. Eleventy (11ty) is used
to build the site. The documentation can be found [here][11ty-docs].

To build the site run `npm run build` *(not `npm build` which is deprecated and
totally unrelated)*. The generated site will be be output to `_site`.

To do that and also serve the site locally run `npm start`. To stop it use `^C`.
You may need to do it twice. This will automatically update the site files as
you modify things.

To run a test use `npm test`. This does a dry run of the build without actually
outputting any files.

[11ty-docs]: https://www.11ty.dev/docs/usage/
