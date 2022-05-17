let wrapper = findEl(".row");
let btn = findEl(".btn");
let n = 0;
let m = 7;

btn.addEventListener("click", watchMore);
function watchMore() {
  wrapper.innerHTML = null;
  for (let i = n; i <= m; i++) {
    // creating elements

    let elCard = createEl("div");
    let elCardImg = createEl("img");
    let elCardWrap = createEl("div");
    let elCardTitle = createEl("h3");
    let elCardText = createEl("p");
    let elCardList = createEl("ul");
    let elCardItem = createEl("li");
    let elCardItem2 = createEl("li");
    let elCardItem3 = createEl("li");
    let elCardLink = createEl("a");

    // appending elements

    wrapper.append(elCard);
    elCard.append(elCardImg);
    elCard.append(elCardWrap);
    elCardWrap.append(elCardTitle);
    elCardWrap.append(elCardText);
    elCard.append(elCardList);
    elCardList.append(elCardItem);
    elCardList.append(elCardItem2);
    elCardList.append(elCardItem3);
    elCard.append(elCardLink);

    //giving Classnames

    elCard.className = "card";
    elCardImg.className = "card-img-top";
    elCardWrap.className = "card-body";
    elCardTitle.className = "card-title";
    elCardText.className = "card-text";
    elCardList.className = "list-group list-group";
    elCardItem.className = "list-group-item";
    elCardItem2.className = "list-group-item";
    elCardItem3.className = "list-group-item";
    elCardLink.className =
      "btn btn-secondary my-2 text-light mx-auto card-link";

    //Rendering

    elCardImg.src = movies[i].smallPoster;
    elCardTitle.textContent = movies[i].title;
    elCardText.textContent = movies[i].summary;
    elCardItem.textContent = movies[i].language;
    elCardItem2.textContent = movies[i].imdbRating;
    elCardItem3.textContent = movies[i].runtime;
    elCardLink.textContent = "Trailer >>";

    // Style
    elCard.style.width = "17rem";
    elCardLink.href = movies[i].trailer;
    elCardLink.style.cursor = "pointer";
    elCardLink.style.color = "black";
    elCardLink.style.textDecoration = "none";
  }
  n += 8;
  m += 8;
}
