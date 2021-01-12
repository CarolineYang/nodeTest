let  a= '2 apple cost 30$45';
let reg = /\d(?=)\d+/;
console.log(reg.exec(a),a.match(reg))