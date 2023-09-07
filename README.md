This file's audience is myself or folks contributing. Probably just me.

This project uses submodules. Use `git clone --recursive` to clone. To update
to the latest version of the submodule use `git submodule update`.

- In PowerShell, `docker build --tag 'wowee2' .`
- `docker run --rm -it -v .:/workdir wowee2 github-pages build`
- `docker run --rm -it -v .:/workdir -p 4000:4000 wowee2 jekyll serve --skip-initial-build`


- `docker run --rm -it -p 4000:4000 -v .\_site:/src/site gh-pages` Maybe???

Alright I'm done with this for the night. What's going on?

1. We are fiddling with the github pages dockerfile from the action [here][1].
   This one is sort of working but I cannot navigate between generated pages
   locally when opening the files in Firefox. I'm unsure if something is wrong
   or it's just a quirk of the local file generation.
2. We are fiddling with the pages-gem dockerfile but having less luck, [here][2].

[1]: https://github.com/actions/jekyll-build-pages/blob/main/Dockerfile
[2]: https://github.com/github/pages-gem/blob/master/Dockerfile
