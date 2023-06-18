


export default function StringToDate(str: string) {
    let splited = str.split("-")
    let splitedInt = splited.map(el => {return parseInt(el)})
    let date = new Date(splitedInt[2], splitedInt[1], splitedInt[0]) 
    return date
}
