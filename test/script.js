function check() {
    let str = [];
    //ラジオボタンの中身を取得
    const q = [document.shitsumon.q0, document.shitsumon.q1, document.shitsumon.q2];
    //A・B・Cそれぞれの合計点数を入れるための変数
    var aaa = 0;
    var bbb = 0;
    var ccc = 0;
    //どのラジオボタンが選択されたか判定し、点数を加算
    for (let n = 0; n < q.length; n++) {
        for (let i = 0; i < q[n].length; i++) {
            if (q[n][i].checked) {
                str[n] = q[n][i].value;
                if (str[n] == "A") {
                    aaa++;
                } else if (str[n] == "B") {
                    bbb++;
                } else if (str[n] == "C") {
                    ccc++;
                }
                break;
            }
        }
    }
    //コメントの条件分岐
    var message = "";
    if (aaa > bbb && aaa > ccc) {
        message = "卵好きだね！";
    } else if (bbb > aaa && bbb > ccc) {
        message = "乳製品好きだね！";
    } else if (ccc > aaa && ccc > bbb) {
        message = "もしかして豆好き？";
    } else {
        message = "バランスの良いチョイスだね！";
    }
    //HTMLへ出力
    var html = '<div>';
    html += 'A=' + aaa + '個<br>';
    html += 'B=' + bbb + '個<br>';
    html += 'C=' + ccc + '個<br><br>';
    html += '' + message + '';
    html += '</div>';
    document.getElementById("kekka").innerHTML = html;
}