enum Month{
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    July,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}
function isItSummer(month: Month){
    let isSummer: boolean;
    switch(month){
        case Month.Jun:
        case Month.July:
        case Month.Aug:
            isSummer = true
            break;
            default: 
            isSummer = false
            break
    }
    return isSummer
}
