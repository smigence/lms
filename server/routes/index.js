var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var sqlString = require('sqlstring');
var fs = require('fs');



var router = express.Router();
var app = express();
router.use(cors());
router.use(express.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react_app"
});

function getData(sql, link) {
  router.get(link, function (req, res, next) {
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  });
}

function getCourseLearnById (link) {  
  router.get(link, function(req, res, next) {
    sql = sqlString.format("SELECT * FROM tbl_course, tbl_learner_course, tbl_user " +
    " WHERE tbl_course.idCourse = tbl_learner_course.idCourse " +
    " and tbl_user.idUser = tbl_learner_course.idLearner " +
    " and tbl_user.idUser = ?",[req.params.id])
    con.query(sql,(err,result,fields) => {
      if(err) throw err;
      console.log(result);
      if(result[0]===undefined) res.json({notification: "Data not found"})
      else 
        res.json(result);
    });
  });
}

function getCourseManageById (link) {  
  router.get(link, function(req, res, next) {
    sql = sqlString.format("SELECT * FROM tbl_course, tbl_management_course," +
    " tbl_user WHERE tbl_course.idCourse = tbl_management_course.idCourse " +
    " and tbl_user.idUser = tbl_management_course.idManage" +
    " and tbl_user.idUser = ? ",[req.params.id])
    con.query(sql,(err,result,fields) => {
      if(err) throw err;
      console.log(result);
      if(result[0]===undefined) res.json({notification: "Data not found"})
      else 
        res.json(result);
    });
  });
}

function getCourseDetailById (link) {  
  router.get(link, function(req, res, next) {
    sql = sqlString.format("SELECT * FROM tbl_course,tbl_management_course, " +
    " tbl_lesson WHERE tbl_course.idCourse = " +
    " tbl_management_course.idCourse " +
    " and tbl_management_course.idManageCourse = " +
    " tbl_lesson.idManageCourse " +
    " and tbl_management_course.idManageCourse =? ",[req.params.id])
    con.query(sql,(err,result,fields) => {
      if(err) throw err;
      console.log(result);
      if(result[0]===undefined) res.json({notification: "Data not found"})
      else 
        res.json(result);
    });
  });
}

function getLessonById (link) {  
  router.get(link, function(req, res, next) {
    sql = sqlString.format("SELECT * FROM tbl_course,tbl_lesson_learner," +
    " tbl_learner_course, tbl_lesson, " +
    " tbl_file " +
    " WHERE tbl_lesson_learner.idCourseLearner =" +
    " tbl_learner_course.idLearnerCourse " +
    " and tbl_learner_course.idCourse = tbl_course.idCourse " +
    " and tbl_lesson_learner.idFile = tbl_file.idFile " +
    " and tbl_file.idLesson = tbl_lesson.idLesson" +
    " and tbl_learner_course.idLearnerCourse = ?",[req.params.id])
    con.query(sql,(err,result,fields) => {
      if(err) throw err;
      console.log(result);
      if(result[0]===undefined) res.json({notification: "Data not found"})
      else 
        res.json(result);
    });
  });
}

function getStaticById (link) {  
  router.get(link, function(req, res, next) {
    sql = sqlString.format("SELECT *" +
    " FROM tbl_course, tbl_learner_course" +
    " WHERE  tbl_course.idCourse = tbl_learner_course.idCourse " +
    " and tbl_course.idCourse =?",[req.params.id])
    con.query(sql,(err,result,fields) => {
      if(err) throw err;
      // console.log(result);
      if(result[0]===undefined) res.json({notification: "Data not found"})
      else 
        res.json(result);
    });
  });
}

function getDataByTwoId (sql,link) {
  router.get(link, function(req, res, next) {
    sql = sqlString.format(sql,[req.params.id1,req.params.id2])
    con.query(sql,(err,result,fields) => {
      if(err) throw err;
      // console.log(result);
      if(result[0]===undefined) res.json({notification: "Data not found"})
      else 
        res.json(result);
    });
  });
}

function postDataLogin(link) {
  router.post(link, (req, res, next) => {
    const account = req.body;
    const sql = sqlString.format("SELECT * FROM tbl_user Where email = ? and pass = ?",
      [account.email, account.password]);
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      if (result[0] !== undefined) {
        res.send(result[0]);
        // console.log("Y");
      }
      else {
        res.send("false");
        // console.log("N");
      }
    })
  });
}

function UpdateCourse(link) {
  router.post(link, (req, res, next) => {
    console.log(req.body, req.params);
    const account = req.body;
    const sql = sqlString.format("UPDATE tbl_course SET `title`=?,`description`=?  WHERE tbl_course.idCourse =?",
      [account.coursename, account.coursedescription, req.params.id]);
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.send("Yes");
    }
    )
  });
}

function UpdateUpload(link) {
  router.post('/', (req, res) => {
    // console.log(req.files.selectedfile);
    if (req.files.selectedfile) {
      var file = req.files.selectedfile.name,
        filename = file.name;
        req.files.selectedfile.mv("./upload/" + req.files.selectedfile.name, function (err) {
        if (err) {
          // console.log(err);
          res.json(err);
        }
        else {
          res.json('ok');
        }
      })
    }
  });
}



con.connect(err => {
  if (err) throw err;
  postDataLogin("/login");
  getCourseManageById("/courseManage/:id")
  getCourseLearnById("/courseLearn/:id")
  getCourseDetailById("/course/:id")
  getStaticById("/static/:id")
  getLessonById("/lesson/:id")
  //getDataByTwoId(getStaticDetail, "/staticDetail/:id1/:id2")
  UpdateCourse("/updateCourse/:id")
  UpdateUpload("/");
});

module.exports = router;
