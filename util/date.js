export function getFormattedDate(date) {
    let day = date.getDate().toString();
    if(day.length === 1){
        day = '0' + day;
    }
    let month = (date.getMonth()+1).toString();
    if(month.length === 1){
        month = '0' + month;
    }
    return date.getFullYear()+'/'+month+'/'+day;
}

export function getDateMinusDays(date, days){
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

export function createDate(s){
    const year = s.slice(0, 4);
    const month = s.slice(5,7);
    const day = s.slice(8,10);
    const date = year + '-' + month + '-' + day;
    const res = new Date(date);
    return res;
}