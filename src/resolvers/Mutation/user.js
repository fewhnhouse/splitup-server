const { getUserId } = require("../../utils");
const path = require("path");
const mkdirp = require("mkdirp");
const fs = require("fs");
const shortid = require("shortid");

const uploadDir = path.resolve("uploads/");
mkdirp.sync(uploadDir);

const storeFS = ({ stream, filename }) => {
  const id = shortid.generate();
  const path = `${uploadDir}/${id}-${filename}`;
  console.log;
  return new Promise((resolve, reject) =>
    stream
      .on("error", error => {
        if (stream.truncated)
          // Delete the truncated file
          fs.unlinkSync(path);
        reject(error);
      })
      .pipe(fs.createWriteStream(path))
      .on("error", error => reject(error))
      .on("finish", () => resolve({ id, path }))
  );
};

const base64_encode = file => {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString("base64");
};

const user = {
  async addFriend(parent, { id }, ctx, info) {
    const userId = await getUserId(ctx);
    if (id === userId) {
      throw new Error("Can´t add yourself to friends");
    }

    return ctx.db.mutation.updateUser(
      {
        where: { id: userId },
        data: { friends: { connect: { id } } }
      },
      info
    );
  },
  async addAvatar(parent, { file }, ctx, info) {
    const { stream, filename, mimetype, encoding } = await file;
    const { id, path } = await storeFS({ stream, filename });
    const base64Img = base64_encode(path);
    var bitmap = fs.readFileSync(file);

    const userId = await getUserId(ctx);
    return ctx.db.mutation.updateUser(
      {
        where: { id: userId },
        data: { avatar: bitmap }
      },
      info
    );
  },

  async removeFriend(parent, { id }, ctx, info) {
    const userId = await getUserId(ctx);
    return ctx.db.mutation.updateUser(
      {
        where: { id: userId },
        data: { friends: { disconnect: { id } } }
      },
      info
    );
  },

  async createFriendRequest(parent, { id }, ctx, info) {
    const userId = await getUserId(ctx);
    return ctx.db.mutation.updateUser({
      where: { id: userId },
      data: { friendRequests: { connect: { id } } }
    });
  }
};

module.exports = { user };
