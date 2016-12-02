function CMD(el){
  var tpl = '<div id="cmdO"><div id="cmdH"></div><div id="inp"><span id="prompt"></span><input type="text" id="cmdI" /></div></div>';
  el.innerHTML=tpl;
  var cmdI = document.getElementById("cmdI");
  var cmdO = document.getElementById("cmdO");
  var cmdH = document.getElementById("cmdH");
  var prompt = document.getElementById("prompt");
  var PREFIX = "geeky";
  var PREFIX_ = ">>hxlee.github.io:"
  var cmd_list = [];
  var cmd_his_list = [];
  // cmd evirenment initalize
  function cmdIInit(){
    hisRender(cmdH,["DO SOMETHING OR PRESS 'geeky -help' FOR HELP"],false,false);
    cmdI.focus();
    prompt.innerHTML=PREFIX_;
    var cmdOWidth = cmdO.clientWidth;
    var promptWidth = prompt.clientWidth;
    var promptHeight = prompt.clientHeight;
    cmdI.style.width = (cmdOWidth - promptWidth - 30) + "px";
    cmdI.style.paddingLeft = (5 + promptWidth)+"px";
    cmdI.style.marginTop = -(promptHeight)+"px";
    cmdO.onclick = function(){
      cmdI.focus();
    };
    cmdI.onkeydown = function(event){
      var keyCode = event.keyCode || event.which;
      if(13===keyCode){
        var cmdVal = cmdI.value;
        cmd_list.push(cmdVal);
        cmd_his_list.push(cmdVal);
        if(hasPrefix(cmdVal,PREFIX)){
          var len = PREFIX.length;
          var cmd_list_temp = [cmd_list[0].substring(len,cmd_list[0].length)];
          cmdDealing(cmdH,cmd_list_temp,cmd_his_list);
          __help(cmdVal);
        }else if(""===cmdVal){
          hisRender(cmdH,[""],false,true);
        }else{
          var tip = "ERROR: " + cmdVal + " is not geeky command.";
          hisRender(cmdH,[tip],false,true);
        }
        cmdI.value = "";
        cmd_list = [];
      }
    };
  }
  // 将记录展示在界面上
  function hisRender(el,list,showPrefix,showTime){
    if(0===list.length){
      return false;
    }
    for(var i=0; i<list.length; i++){
      var child = document.createElement("p");
      var time = getTime("h:m:s");
      child.innerHTML = (showTime ? time : "") + " " + (showPrefix ? PREFIX : "") + list[i];
      el.appendChild(child);
    }
  }
  // 判断前缀
  function hasPrefix(sentence,prefix){
    var len = prefix.length;
    return prefix===sentence.substring(0,len);
  }
  // 判断是否为指令
  function isCmd(word){
    var cmdList = ["-help","-v","-version"];
    return (-1!==cmdList.indexOf(word));
  }
  // 处理指令
  function cmdDealing(cmdH,cmd_list,cmd_his_list){
    hisRender(cmdH,cmd_list,true);
  }
  // 获取时间
  function getTime(type){
    var t = new Date();
    var Y = t.getFullYear();
    var M = (t.getMonth() + 1)<10 ? "0"+(t.getMonth() + 1) : (t.getMonth() + 1);
    var D = t.getDate()<10 ? "0"+t.getDate() : t.getDate();
    var h = t.getHours()<10 ? "0"+t.getHours() : t.getHours();
    var m = t.getMinutes()<10 ? "0"+t.getMinutes() : t.getMinutes();
    var s = t.getSeconds()<10 ? "0"+t.getSeconds() : t.getSeconds();
    var res;
    switch(type){
      case "h:m:s":
        res = "["+h+":"+m+":"+s+"]";
      break;
      case "Y-M-D h:m:s":
        res = "["+Y+"-"+M+"-"+D+" "+h+":"+m+":"+s+"]";
      break;
    }
    return res;
  }
  function isHelp(cmd){
    var cmd_split = cmd.split(" ");
    return PREFIX === cmd_split[0] && "-help" === cmd_split[1];
  }
  function __help(cmd){
    var cmd_split = cmd.split(" ");
    if (isHelp(cmd)) {
      if(undefined === cmd_split[2]) {
        printIndexHelp();
      } 
      else {
        cmd_split.length > 3 && printError("syntax");
        helpKeyword(cmd_split[2]);
      }

    } 
    else {
      if (cmd_split.length > 1 && PREFIX === cmd_split[0] && isCmd(cmd_split[1])) {
        ["__"+cmd_split[1]]();
      }
      else {
        printError("syntax");
      }
    }
  }
  function printIndexHelp(){
    var helpIndex = HELP.index.split("FUCK");
    console.log(helpIndex);
    hisRender(cmdH,helpIndex,false,false);
  }
cmdIInit();
}
var cmd_box = document.getElementById("cmd_box");
CMD(cmd_box);