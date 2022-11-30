import us from '../lang/us.json' assert {type: 'json'};
import hu from '../lang/hu.json' assert {type: 'json'};
let len = 20
document.getElementById("btn.lang.hu").onclick = function(){
    for(let i = 0; i < len;i++){
        document.getElementById(i).innerHTML = hu[i];
    }
}
document.getElementById("btn.lang.us").onclick = function(){
    for(let i = 0; i < len; i++){
        document.getElementById(i).innerHTML = us[i];
    }
}
