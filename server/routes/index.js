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
  database: "react_app"
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
      // console.log(result);
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

con.connect (err => {
  if(err) throw err;
  getData(getAllUser,'/');
  postDataLogin("/login");
  getDataByOneId(getCourseManage,"/courseManage/:id")
  getDataByOneId(getCourseLearn,"/courseLearn/:id")
  getDataByOneId(getCourseDetail,"/course/:id")
});

module.exports = router;
