module.exports = function check(str, bracketsConfig) {
  var o_config = [];
  var config_c= [];
  for(var i = 0; i < bracketsConfig.length; i++)
  {
    o_config.push(bracketsConfig[i][0]);
  }

  for(var i = 0; i < bracketsConfig.length; i++)
  {
    config_c.push(bracketsConfig[i][1]);
  }
  function isOpen(str){
    return o_config.includes(str);
  }
  function isClose(str) {
    return config_c.includes(str);
  }
  function areFriends(str,str2) {
    var f = o_config.indexOf(str);
    var s = config_c.indexOf(str2);
    if(f==s) return true;
    return false;
  }
  for(var i=0; i<str.length-1; i++){
    if(isOpen(str[i])&&isClose(str[i+1])&&areFriends(str[i],str[i+1])){
      str = str.replace(str[i]+str[i+1],"");
      i=-1;
    }
  }
  //console.log(str);
  if(str.length==0) return true;
  return false;
}
