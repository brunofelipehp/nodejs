function getFlagsValue(flag){
 if (process.argv.indexOf(flag) !== -1) {
  const index = process.argv.indexOf(flag) + 1;
  return process.argv[index];
 }else {
  console.log("Flag não encontrada");
 }
}
module.exports = getFlagsValue;