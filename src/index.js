


const slugger = (...strings)=> {
    return strings.join(' ').split(' ').join('-')
}


module.exports = {slugger}