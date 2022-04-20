'use strict'

/** 運勢配列 */
const FORTUNE_ARRAY = ['大吉', '吉', '末吉', '小吉', '凶'];

/** おみくじスタートボタン*/
let start_omikuji_btn = document.getElementById("btn")
/** おみくじ結果表示エリア */
let div_element = document.getElementById('disp')

/**
 * FORTUNE_ARRAYの中の運勢をランダムで返却する。
 * @returns 運勢
 */
function get_fortune() {
    let index = Math.floor(Math.random() * FORTUNE_ARRAY.length);
    return FORTUNE_ARRAY[index];
}

/**
 * おみくじスタートボタンクリック時のイベントリスナー。
 * おみくじの結果を画面に反映する。
 * おみくじの結果が凶の時のみ、ダイアログを表示する。
 */
start_omikuji_btn.addEventListener('click', () => {
    let omikuji_result = get_fortune();
    div_element.innerHTML = omikuji_result;
    if (omikuji_result == '大吉') {
        confetti();
    }
});
