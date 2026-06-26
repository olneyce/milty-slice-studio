# Milty Slice Studio

Milty Slice Studio is a lightweight browser tool for building Milty-style
Twilight Imperium map slices. It is intended for GMs, tournament hosts, and
community organizers who want a focused slice-building workspace rather than a
full galaxy map editor.

## Features

- Build standard Milty slices with a blank home-system position.
- Search and filter system tiles by set, red/blue tile type, planet traits,
  anomalies, wormholes, and tech skips.
- Drag or click tiles into slice slots.
- Track resources, influence, planet count, tech skips, traits, wormholes, and
  warnings.
- Auto-generate random slices using Milty-style value constraints.
- Export and import slice JSON.

## Hosting

This app is static and has no build step. To host it with GitHub Pages:

1. Create a public GitHub repository.
2. Commit `index.html`, `styles.css`, `app.js`, `README.md`, `.gitignore`, and
   `.nojekyll` at the repository root.
3. In GitHub, open **Settings -> Pages**.
4. Set the source to deploy from the main branch root.
5. Open the published GitHub Pages URL once deployment finishes.

## Assets and Credits

Tile images are loaded from the public
[AsyncTI4/TI4_map_generator_bot](https://github.com/AsyncTI4/TI4_map_generator_bot)
repository. This app does not bundle those images by default.

Twilight Imperium and related art/assets belong to their respective owners.
This is a non-commercial community tool and is not affiliated with or endorsed
by Fantasy Flight Games, Asmodee, or the AsyncTI4 project.

If the AsyncTI4 maintainers prefer a different attribution or asset-loading
approach, this project should follow their preference.

## Local Use

Open `index.html` directly in a browser, or serve the folder with any static
file server.
