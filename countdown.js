function countdown(){
    dayjs.locale('ja');

    var xday = dayjs('2024-01-01');
    var today = dayjs();

    day = xday.diff(today, 'day');
    hour = xday.diff(today, 'hour') - day * 24;
    minute = xday.diff(today, 'minute') - day * 24 * 60 - hour * 60;
    second = xday.diff(today, 'second') - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;

    $('#day').html(day);
    $('#hr').html(hour);
    $('#min').html(minute);
    $('#sec').html(second);
}
setInterval(countdown,1000);