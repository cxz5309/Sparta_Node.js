import multer from 'multer';


const storage  = multer.diskStorage({ // 2
  destination(req, file, cb) {
    cb(null, 'public/image/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}__${file.originalname}`);
  },
});

export const uploadWithOriginalFilename = multer({ storage: storage }); // 3-2

export const upload = multer({ dest: 'public/image', limits: { fileSize: 3000000,}   });
