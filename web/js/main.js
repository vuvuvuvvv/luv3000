let words = $(".word");
let delayArr = [2500, 700, 800, 200, 300, 200, 400, 400, 300, 500, 700, 900, 300, 400, 800, 300, 300, 300, 300, 300, 500, 600, 350, 600];

function randomHeart() {
    let randDuration = Math.floor(Math.random() * 2) + 3;
    let top = Math.floor(Math.random() * 100) + 1;
    let left = Math.floor(Math.random() * 100) + 1;
    let size = Math.floor(Math.random() * 51) + 50;
    let heart = $(`<span class="heart" style="font-size: ${size}px;top: calc(${top}% - 70px);left: calc(${left}% - 70px);animation: blink ${randDuration}s linear">💗</span>`);
    $("#cover-bg").append(heart);
    setTimeout(() => {
        heart.remove();
        randomHeart();
    }, randDuration * 1000);
}

function printLyric(i) {
    if (i < delayArr.length) {
        setTimeout(() => {
            $(words[i]).removeClass('visible-hidden').find("span").addClass("hi");
            let heart = $("<span class='icon'>♡</span>");
            $(words[i]).append(heart);
            setTimeout(() => {
                heart.remove();
            }, 1000)
            i += 1;
            printLyric(i);
        }, delayArr[i]);
    }
}

$(document).ready(function () {
    for (i = 0; i < 8; i++) {
        randomHeart()
    }

    $("#startBtn").click(function () {
        var audio = document.getElementById("audioPlayer");
        audio.play();
        $(this).hide(500);
        setTimeout(() => {
            $("#hello").removeClass("d-none");
            $(".word").each((i, ev) => {
                $(ev).width($(ev).find("span").width());
            });
            printLyric(0);
        }, 500);
    });
});
