const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)


const date = new Date();

module.exports = () => dayjs.utc(date).startOf("day")
