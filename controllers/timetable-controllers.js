const HttpError = require('../models/http-error'),
Timetable = require('../models/timetableSchema');

const getTimetableById = async (req,res,next)=>{
    const timetableId = req.body.ttid;
    let timetable;
    try {
         timetable = await Timetable.find(t=> t.date === timetableId);
    } catch (error) {
        const error = new HttpError(
            'getting timtable failed,please try again',
            500
          );
          return next(error);
    }
    res.status(200).json({timetable});

}

module.exports = getTimetableById;