


export default function StringToDate(str: string) {
    
    let splited = str.split("-")
    let splitedInt = splited.map(el => {return parseInt(el)})
    let date:Date
    if (splited[0].length === 4) date = new Date(splitedInt[0], splitedInt[1] - 1, splitedInt[2])
    else date = new Date(splitedInt[2], splitedInt[1] - 1 , splitedInt[0])
    return date
}
