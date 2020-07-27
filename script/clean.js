#!/usr/bin/env node
try {
  const rimraf = require('rimraf')

  rimraf.sync(`${__dirname}/../packages/*/dist`)
} catch (e) {
  console.error("Failed to clean up, perhaps rimraf isn't installed?")
  console.error(e)
}
