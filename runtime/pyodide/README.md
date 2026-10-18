# Pyodide runtime 0.27.7

The core runtime is served from this site's own origin so that lesson checking can start without downloading the engine from a third-party CDN.

Upstream release: https://github.com/pyodide/pyodide/releases/tag/0.27.7

Archive: https://github.com/pyodide/pyodide/releases/download/0.27.7/pyodide-core-0.27.7.tar.bz2

Verified upstream SHA-256: `9bc8f127db6c590b191b9aee754022cb41b1a36c7bac233776c11c5ecb541be8`

Runtime files are extracted unchanged from the official core distribution. LICENSE is the upstream license for this release. A first run downloads approximately 14 MB; browsers may cache these files for later runs.

Deployment guidance: https://pyodide.org/en/0.27.7/usage/downloading-and-deploying.html

The advanced Python path additionally bundles the official sqlite3 wheel. Its SHA-256 is verified against pyodide-lock.json. See ../../backend/PYTHON_ADVANCED.md.
