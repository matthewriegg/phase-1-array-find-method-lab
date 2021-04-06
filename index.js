


let superbowlWin = (record) =>{
    let win = record.find(object => object.result === "W")

    return !!win ? win.year : undefined;
}


