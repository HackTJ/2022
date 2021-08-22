#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const jimp = require("jimp");

const tintColor = "#ffd24a";

const walkAndTint = async (rootImageDir) => {
  const normalDir = await fs.promises.opendir(
    path.resolve(rootImageDir, "./normal/")
  );
  const tintDir = await fs.promises.opendir(
    path.resolve(rootImageDir, "./tint/")
  );

  for await (const dirent of normalDir) {
    if (dirent.isFile() && !dirent.name.startsWith(".")) {
      const untintedPath = path.resolve(normalDir.path, dirent.name);
      const tintedPath = path.resolve(tintDir.path, dirent.name);
      // await fs.rm(tintedPath); // only in Node.js v14.14.0 and later
      // await fs.unlink(tintedPath);

      const image = await jimp.read(untintedPath);
      image.color([{ apply: "mix", params: [tintColor, 90] }]);
      image.write(tintedPath);

      // TODO: same output format as Prettier
      console.log(`tinted ${dirent.name}`);
    }
  }
};
walkAndTint("./src/images/sponsors/").catch(console.error);
