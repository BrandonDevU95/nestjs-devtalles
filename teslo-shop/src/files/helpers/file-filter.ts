export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  if (!file) {
    return callback(new Error('File is empty'), false);
  }

  const fileExtension = file.mimetype.split('/')[1];
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

  if (allowedExtensions.includes(fileExtension)) {
    callback(null, true);
  } else {
    callback(new Error('Unsupported file type'), false);
  }
};
