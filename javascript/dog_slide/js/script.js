'use strict'
import YOUTUBE_API_KEY from "./config.js"

/** IFrame Player API の初期化処理。
 * https://developers.google.com/youtube/iframe_api_reference?hl=ja
 */
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/** setInterval用ID。*/
let intervalId;
/** setTimeout用ID。*/
let timeoutId;


/**
 * DogAPIから取得した犬種一覧セレクトボックスを作成し、画面に表示する。
 * 1. DogAPIから犬種一覧をfetch
 * 2. 取得した犬種一覧をもとに、セレクトボックスを作成し、画面に表示する。
 */
(async function () {
  let response = await fetch("https://dog.ceo/api/breeds/list/all");
  let data = await response.json();
  let breedList = data.message;

  let breedSelectBox = document.getElementById("breedSelectBox");
  Object.keys(breedList).forEach(function (breed) {
    let dogBreedOption = document.createElement('option');
    dogBreedOption.innerText = breed;
    breedSelectBox.appendChild(dogBreedOption);
  });
  document.getElementById("breedArea").appendChild(breedSelectBox);
})();

/**
 * 犬種一覧セレクトボックスのイベント設定。
 * 選択した犬種の画像をDogAPIから取得し、スライドショーで画面に表示する。
 */
document.getElementById('breedSelectBox').addEventListener('change', async (e) => {
  let selectBreed = e.target.value;
  if (selectBreed == 'Choose a dog breed') {
    return;
  }

  let response = await fetch(`https://dog.ceo/api/breed/${selectBreed}/images`);
  let data = await response.json();

  let dogImageArray = data.message;
  createSlideshow(dogImageArray);

  createMovieList(selectBreed);
});

/**
 * スライドショーを作成し、実行する。
 * @param {Array} dogImageArray 犬画像URL配列。
 */
function createSlideshow(dogImageArray) {
  clearInterval(intervalId)
  clearTimeout(timeoutId)

  if (dogImageArray.length < 1) {
    document.getElementById("slideshow").innerHTML = `
    <div class="slide" style="background-image: url('${dogImageArray[0]}')"></div>
    <div class="slide"></div>`
    return;
  }

  document.getElementById("slideshow").innerHTML = `
  <div class="slide" style="background-image: url('${dogImageArray[0]}')"></div>
  <div class="slide" style="background-image: url('${dogImageArray[1]}')"></div>`;
  let currentImagesIndex = 0;
  if (dogImageArray.length == 2) {
    currentImagesIndex = 2;
    intervalId = setInterval(nextSlide, 3000, currentImagesIndex, dogImageArray);
  } else {
    intervalId = setInterval(nextSlide, 3000, currentImagesIndex, dogImageArray);
  }

}

/**
 * 次のスライドを表示する。
 * @param {int} currentImagesIndex 画像配列の現在のインデックス。
 * @param {Array} dogImageArray  犬画像配列。
 */
function nextSlide(currentImagesIndex, dogImageArray) {
  document.getElementById("slideshow").insertAdjacentHTML("beforeend", `<div class="slide" style="background-image: url('${dogImageArray[currentImagesIndex]}')"></div>`);

  timeoutId = setTimeout(function () {
    document.querySelector(".slide").remove()
  }, 1000);

  if (currentImagesIndex + 1 >= dogImageArray.length) {
    currentImagesIndex = 0;
  } else {
    currentImagesIndex++;
  }
}



/**
 * 選択したい犬種の動画を一覧を作成する。
 * @param {*} selectBreed 選択した犬種。
 */
async function createMovieList(selectBreed) {
  let result = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&q=${selectBreed}`)
  let data = await result.json();

  let movieList = document.getElementById('movieList');
  while (movieList.firstChild) {
    movieList.removeChild(movieList.firstChild);
  }

  data.items.forEach(item => {
    let div = document.createElement('div');
    div.id = `player_${item.id.videoId}`;
    movieList.appendChild(div);

    new YT.Player(div.id, {
      height: '200',
      width: '20%',
      videoId: item.id.videoId,
      playerVars: {
        rel: 0,
        autoplay: 0,
        showinfo: 0,
        controls: 0
      },
    });
  })
}
