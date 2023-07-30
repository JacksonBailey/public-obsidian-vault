---
---
This file's audience is myself or folks contributing. Probably just me.

This uses Jekyll. It uses the `actions/jekyll-build-pages` GitHub Action to
build in production and the [jekyll-docker][1] project to build locally. There may
be some differences between the two but hopefully they are minor enough to not
be a problem.

## Current problems

- Serving locally is not working (even with the `--no-watch` flag).
- The original `Gemfile.lock` created by the `jekyll new ...` command had gems
  that were not part of the `jekyll/jekyll` image or at least versions that were
  not. The gems are installed in `/usr/gem/gems/`. The documentation does not
  mention using this as a volume to enable caching, only
  `./vendor/bundle:/usr/local/bundle:Z`. The gems that are not in the base image
  are not being installed in that location though, only some auto generated
  files from Bundler. This leads to installing some (not all) dependencies each
  time. There may be some easy fix I'm missing since I am a novice with Ruby.
  I have specifically specified `4.2.2` in the docker compose file so it does
  not cause this problem when a new version is released.

## Commands

Many of the commands below list `jekyll` twice in a row. This is not a typo. The
first is the entry in `docker-compose.yml`. Everything following that is the
command to run in the container.

To build the site:

```
docker compose run jekyll jekyll build
```

To serve the site locally:

```
docker compose run jekyll jekyll serve --no-watch
```

To update the `Gemfile.lock` if you want new versions or changed the `Gemfile`:

```
docker compose run jekyll bundle update
```

To troubleshoot the image by just dropping into a bash prompt:

```
docker compose run jekyll bash
```

[1]: https://github.com/envygeeks/jekyll-docker
