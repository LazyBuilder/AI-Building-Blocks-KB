# Publish AI-Building-Blocks-KB

Official repository: https://github.com/LazyBuilder/AI-Building-Blocks-KB
Expected Pages URL: https://lazybuilder.github.io/AI-Building-Blocks-KB/

## 1. Copy the complete source

Extract `AI-Building-Blocks-KB-source.zip`. Copy its CONTENTS into the root of your existing repository checkout. Keep its existing `.git` folder.

Make sure `.github/workflows/pages.yml`, `.gitignore`, `.gitattributes`, and `.nvmrc` are copied too. In macOS Finder, Command–Shift–period shows hidden files. Do not place the source inside an extra `AI-Building-Blocks-KB` subfolder in the repository.

The source archive deliberately excludes `.git`, `node_modules`, `dist`, and deployment ZIP files. It includes all source files, generated paper entry pages, lockfile, build scripts, and illustrations. GitHub builds the website for you.

## 2. Enable GitHub Pages

Open https://github.com/LazyBuilder/AI-Building-Blocks-KB/settings/pages

Under **Build and deployment**, choose **Source → GitHub Actions**. No branch or `/docs` folder needs to be selected for this workflow.

If GitHub Actions is disabled by an organization policy, an administrator must allow the referenced actions. If the `github-pages` environment requires approval, approve the deployment when GitHub requests it.

## 3. Commit and push

Commit the copied files and push your repository's default branch. The workflow runs automatically for `main` and `master` and deploys only the repository's default branch. The default branch must be one of those two names; otherwise update both trigger branch lists in `.github/workflows/pages.yml`.

If files were pushed before enabling Pages, open the repository's **Actions** tab, choose **Deploy to GitHub Pages**, then **Run workflow** on the default branch.

Pull requests build and verify the website without publishing it. No custom secrets, API keys, or domain settings are needed.

## 4. Check the result

Wait for the build and deployment jobs to succeed. The deployment's `page_url` is the authoritative live address. With the repository name above and no custom domain, the expected URL is:

https://lazybuilder.github.io/AI-Building-Blocks-KB/

Check a nested page directly, including a refresh:

https://lazybuilder.github.io/AI-Building-Blocks-KB/papers/transformer/

The relative Vite base (`./`) is intentional: it keeps bundled assets and links valid at this repository subpath and on nested paper pages. No server rewrites are required.

## Local checks (optional)

Use Node.js 22 and pnpm 11.19.0:

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm verify
pnpm preview
```

## References

- GitHub Pages custom workflow guide: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- Workflow: `.github/workflows/pages.yml`
- Website configuration: `vite.config.js`

The source package does not change GitHub settings or push code. Those steps are completed by you in the official repository.
