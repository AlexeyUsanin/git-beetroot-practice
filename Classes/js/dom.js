// const title = document.getElementById('title');
// const title = document.querySelector('.title');
// title.innerText = 'HEllllloooo!';

// const h2 = document.createElement('h2');
// h2.innerHTML = '<span>Text</span>';

// const container = document.querySelector('.container');
// console.log('h2', h2);


// container.after(h2);
// container.before(h2);
// container.append(h2);
// container.prepend(h2);

// container.insertAdjacentHTML('afterbegin', '<span>Text <div></div></span>');
// container.insertAdjacentHTML('afterend', '<span>Text</span>');
// container.insertAdjacentHTML('beforebegin', '<span>Text</span>');
// container.insertAdjacentHTML('beforeend', '<span>Text</span>');

// console.log('container', container);

// h2.onclick = function () {
//   h2.innerText = 'Inner TExt';
// }

// h2.addEventListener(function () {

// })


function renderNewsList(news) {
  const list = document.getElementById('news-list');
  const post = document.getElementById('post');

  for (let el of news) {
    const listItem = document.createElement('li');
    const title = document.createElement('h4');
    const text = document.createElement('p');
    const date = document.createElement('span');
    const tags = document.createElement('span');
    const button = document.createElement('button');
    const content = document.createElement('div');

    listItem.classList.add('list__item');
    title.classList.add('list__item-title');
    date.classList.add('list__item-date');
    tags.classList.add('list__item-tags');
    button.classList.add('list__item-button');

    text.innerText = el.description;
    title.innerText = el.title;
    date.innerText = el.date;
    tags.innerText = el.getTags();
    button.innerText = 'Show Post';
    button.setAttribute('type', 'button');

    button.onclick = function () {
      const postData = new Post(el.title, el.description, el.date, el.tags);

      post.innerHTML = `<h2>${postData.title}</h2><p>${postData.getPublishDate()}</p>`;
    }

    content.append(date);
    content.append(tags);
    listItem.append(title);
    listItem.append(text);
    listItem.append(content);
    listItem.append(button);
    list.append(listItem);
  }
}

console.log('newsFeed', newsFeed);
renderNewsList(newsFeed.news);