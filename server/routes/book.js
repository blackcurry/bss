import express from 'express';
import request from 'request';
import Book from '../models/book';

const router = express.Router();


/*
    SEARCH BOOK: GET /api/book/searchExAPI/:bookname
*/
router.get('/searchExAPI/:bookname', (req, res) => {
  console.log('start search bookname parma :::' + req.params.bookname);
    var query = encodeURIComponent(req.params.bookname);
    var options = {
      url: 'https://openapi.naver.com/v1/search/book.json?query=' + query ,
      headers: {
        'Content-Type': 'application/json',
        'X-Naver-Client-Id' : '9qgAw2cxhO7a_P_s_X4o',
        'X-Naver-Client-Secret' : 'Gi2MzaPHGa'
      },
      method: 'GET'
    };

    function callback(error, response, body) {
      console.log('receive external api data');
      console.log('response.statusCode=' + response.statusCode);
      if (!error && response.statusCode == 200) {
        var apidata = JSON.parse(body);
        return res.json({
          status: 'SUCCESS',
          bookinfo: apidata.items
        });
      } else {
        console.log(response);
        return res.json({
          status: 'FAIL',
          error: response.statusCode
        });
      }
    }
    console.log(options.url);
    request(options, callback);
});

router.get('/search', (req, res) => {
    Book.find()
    .sort({"_id": -1})
    .limit(10)
    .exec((err, bookinfo) => {
        if(err) throw err;
        res.json({
          status: 'SUCCESS',
          bookinfo: bookinfo
        });
    });
});

router.get('/search/:bookname', (req, res) => {
  Book.find({title: new RegExp(req.params.bookname, 'i')})
    .limit(10)
    .exec((err, bookinfo) => {
      if(err) throw err;
      res.json({
        status: 'SUCCESS',
        bookinfo: bookinfo
      });
    });
});

router.post('/register', (req, res) => {
  console.log('api book register:::'+req.body.title);
  let book = new Book({
    title: req.body.bookinfo.title,
    link: req.body.bookinfo.link,
    image: req.body.bookinfo.image,
    author: req.body.bookinfo.author,
    price: req.body.bookinfo.price,
    discount: req.body.bookinfo.discount,
    publisher: req.body.bookinfo.publisher,
    pubdate: req.body.bookinfo.pubdate,
    isbn: req.body.bookinfo.isbn,
    description: req.body.bookinfo.pubdate,
    subscriber: req.body.bookinfo.pubdate,
    created: req.body.bookinfo.pubdate
  });

  book.save(err=>{
    if(err) throw err;
    return res.json({ success: true });
  })
});


export default router;
