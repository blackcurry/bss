import express from 'express';
import account from './account';
import book from './book';
// import memo from './memo';

const router = express.Router();
router.use('/account', account);
router.use('/book', book);
// router.use('/memo', memo);

export default router;
