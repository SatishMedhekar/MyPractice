const monthDetail = {
    month: 'November',
    firstDayOfMonth: 'MONDAY',
    birthDays: [{ dayOfMonth: 10 },],
    totalDaysInThisMonth: 30
}


class calender {
    getcalenderMonth() {
        return monthDetail;
    }
}

module.exports = calender;