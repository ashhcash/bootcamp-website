//desc   get all bootcamps
// @route  GET /api/v1/bootcamps

exports.getBootcamps = (req, res, next) => {
     res.status(200).json({ success: true, msg: 'Show all bootcamps' });
}