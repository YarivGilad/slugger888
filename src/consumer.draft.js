const log = require('@ajar/marker')
const {slugger} = require('./index');


log.verbose(slugger('the pretty fox ','jumpde over', 'the fence'));