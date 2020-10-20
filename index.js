
//SampleButton
function OnSampleButtonClick() {
    const samplebutton = document.getElementById("samplebutton");

    // sampleButton-ngクラスが適用されているか確認
    if (!samplebutton.classList.contains('sampleButton-ng')) {
        //クラスの追加
        samplebutton.classList.add('sampleButton-ng');
        //テキストの書き換え
        samplebutton.textContent = "NG";
    } else {
        //クラスの削除
        samplebutton.classList.remove('sampleButton-ng');
        samplebutton.textContent = "OK";
    }
}


