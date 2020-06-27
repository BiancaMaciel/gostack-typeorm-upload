import path from 'path';
import multer from 'multer';
import crypto from 'crypto';

const folderTmp = path.resolve(__dirname, '..', '..', 'tmp');
export default {
  directory: folderTmp,
  storage: multer.diskStorage({
    destination: folderTmp,
    filename: (request, file, callback) => {
      const hash = crypto.randomBytes(10).toString('HEX');
      const newName = `${hash}-${file.originalname}`;

      return callback(null, newName);
    },
  }),
};
