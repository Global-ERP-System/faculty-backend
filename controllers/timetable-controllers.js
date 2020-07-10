// const HttpError = require('../models/http-error');
// const timetableSchema = require('../models/academics/timetableSchema');

// const getTimetableById = async (req,res,next)=>{
//      const timetableId = req.params.ttid;
//      let timetable;
//      try {
//          timetable = await timetableSchema.find(t=> t.date === timetableId);
//      } catch (err) {
//           const  error = new HttpError(
//                'getting timtable failed,please try again',500
//           );
//           return next(error);
//      }
//     res.status(200).json({timetable});
// }

// module.exports = getTimetableById;