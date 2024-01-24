import moment from "moment";

export function dateTimeFormat(date: string) {
    if (!date) {
        return
    }
    let result = moment(date).format('YYYY-MM-DD HH:mm')
    return result;
}


export function getWesternAge(birthday: string) {
    if (!birthday) {
        return
    }
    let today = new Date();
    let birthDay = new Date(birthday);
    let age = today.getFullYear() - birthDay.getFullYear();

    let todayMonth = today.getMonth() + 1;
    let birthMonth = birthDay.getMonth() + 1;

    if (birthMonth > todayMonth || (birthMonth === todayMonth && birthDay.getDate() >= today.getDate())) {
        age--;
    }
    return age;
}

export function getCareerCalc(startday: string) {
    if (!startday) return;

    const today = moment()
    const basicDate = moment(startday, 'YYYY-MM-DD')

    const result = (moment.duration(today.diff(basicDate)).asMonths() / 12).toFixed(0)

    return result;
}

