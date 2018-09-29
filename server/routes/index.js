const getAllUser = "SELECT * from account";
const getCourseManage = "SELECT * FROM tbl_course, tbl_management_course,"+
" tbl_user WHERE tbl_course.idCourse = tbl_management_course.idCourse " +
" and tbl_user.idUser = tbl_management_course.idManage"+ 
" and tbl_user.idUser = ? ";
const getCourseLearn = "SELECT * FROM tbl_course, tbl_learner_course, tbl_user "+ 
" WHERE tbl_course.idCourse = tbl_learner_course.idCourse "+
" and tbl_user.idUser = tbl_learner_course.idLearner "+
" and tbl_user.idUser = ?";
const getCourseDetail = "SELECT * FROM tbl_course,tbl_management_course, "+
" tbl_lesson WHERE tbl_course.idCourse = "+
" tbl_management_course.idCourse "+ 
" and tbl_management_course.idManageCourse = "+
" tbl_lesson.idManageCourse "+
" and tbl_management_course.idManageCourse =? ";
const getLesson = "SELECT * FROM tbl_course,tbl_lesson_learner,"+
" tbl_learner_course, tbl_lesson, "+
" tbl_file "+ 
" WHERE tbl_lesson_learner.idCourseLearner =" +
" tbl_learner_course.idLearnerCourse " +
" and tbl_learner_course.idCourse = tbl_course.idCourse "+
" and tbl_lesson_learner.idFile = tbl_file.idFile "+
" and tbl_file.idLesson = tbl_lesson.idLesson" +
" and tbl_learner_course.idLearnerCourse = ?";
const getStatic = "SELECT *"+
" FROM tbl_course, tbl_learner_course"+
" WHERE  tbl_course.idCourse = tbl_learner_course.idCourse "+
" and tbl_course.idCourse =?";
const getStaticDetail = "SELECT * FROM tbl_course, tbl_learner_course, "+ 
" tbl_lesson_learner , tbl_lesson, tbl_file "+
" WHERE tbl_learner_course.idLearner = ?"+
" and tbl_course.idCourse = ?"+
" and tbl_learner_course.idLearnerCourse "+ 
"= tbl_lesson_learner.idCourseLearner"+
" and tbl_lesson_learner.idFile = tbl_file.idFile"+
" and tbl_lesson.idLesson = tbl_file.idLesson";

const port = "3001";

var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var sqlString = require('sqlstring');



var router = express.Router();
var app = express();
router.use(cors());
router.use(express.json());

var con =   mysql.createConnection ({
  host: "localhost",
  user: "root",
  password: "",
  database: "lmssystem"
});

function getData (sql,link) {
  router.get(link, function(req, res, next) {
    con.query(sql,(err,result,fields) => {
      if(err) throw err;
      res.json(result);
    });
  });
}

function getDataByOneId (sql,link) {
  router.get(link, function(req, res, next) {
    sql = sqlString.format(sql,[req.params.id])
    console.log(sql);
    con.query(sql,(err,result,fields) => {
      if(err) throw err;
      console.log(result);
      if(result===undefined) res.json({notification: "Data not found"})
      else res.json(result);
    });
  });
}

function getDataByTwoId (sql,link) {
  router.get(link, function(req, res, next) {
    sql = sqlString.format(sql,[req.params.id1,req.params.id2])
    console.log(sql);
    con.query(sql,(err,result,fields) => {
      if(err) throw err;
      console.log(result);
      if(result===undefined) res.json({notification: "Data not found"})
      else res.json(result);
    });
  });
}

function postDataLogin (link) {
  router.post(link, (req,res,next) => {
    const account = req.body;
    const sql = sqlString.format("SELECT * FROM tbl_user Where email = ? and pass = ?",
    [account.email,account.password]);
    con.query(sql,(err,result,fields) => {
      if(err) throw err;
      if (result[0]!==undefined){
      res.send(result[0]);
      console.log("Y");
      }
      else{
        res.send("false");
        console.log("N");
      }
    })
  });
}

function UpdateCourse (link) {
  router.post(link, (req,res,next) => {
    const account = req.body;
    const sql = sqlString.format("UPDATE tbl_course SET `title`=?,`description`=?"+
    " WHERE tbl_course.idCourse =?",
    [account.title,account.descript,req.params.id]);
    con.query(sql,(err,result,fields) => {
      if(err) throw err;
      res.send("Yes");
      }
    )
  });
}



con.connect (err => {
  if(err) throw err;
  getData(getAllUser,'/');
  postDataLogin("/login");
  getDataByOneId(getCourseManage,"/courseManage/:id")
  getDataByOneId(getCourseLearn,"/courseLearn/:id")
  getDataByOneId(getCourseDetail,"/course/:id")
  getDataByOneId(getStatic,"/static/:id")
  getDataByOneId(getLesson,"/lesson/:id")
  getDataByTwoId(getStaticDetail,"/staticDetail/:id1/:id2")
  UpdateCourse("/updateCourse/:id")
});

module.exports = router;
