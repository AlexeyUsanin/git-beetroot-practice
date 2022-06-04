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


document.addEventListener('DOMContentLoaded', function () {
  function renderNewsList(news) {
    const list = document.getElementById('news-list');

    for (let el of news) {
      const listItem = renderListItem(el);

      list.append(listItem);
    }
  }

  renderNewsList(newsFeed.news);

  function renderListItem(el) {
    const listItem = document.createElement('li');
    const title = document.createElement('h4');
    const text = document.createElement('p');
    const date = document.createElement('span');
    const tags = document.createElement('span');
    const button = document.createElement('button');
    const content = document.createElement('div');
    const post = document.getElementById('post');

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

      renderPost(postData);

      const isActive = post.classList.contains('active');

      this.innerText = isActive ? 'Hide Post' : 'Show Post';
      this.parentElement.classList.toggle('active');
    }

    content.append(date);
    content.append(tags);
    listItem.append(title);
    listItem.append(text);
    listItem.append(content);
    listItem.append(button);

    return listItem;
  }

  function renderPost(data) {
    const post = document.getElementById('post');
    post.classList.toggle('active');

    post.innerHTML = `
      <h2 class="post__title">${data.title}</h2>
      <p class="post__tags">${data.getTags()}</p>
      <p class="post__description">${data.description}</p>
      <p class="post__date">${data.getPublishDate()}</p>
    `;
  }

  const link = document.querySelector('.link');

  function addNews(el) {
    const list = document.querySelector('#news-list');

    list.append(el);
  }

  const btnShowForm = document.querySelector('#show-form');

  btnShowForm.addEventListener('click', function() {
    const formContent = document.querySelector('.form-content');

    formContent.classList.add('active');
  })

  const form = document.querySelector('#form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const data = new FormData(this);
    const heading = data.get('heading');
    const desc = data.get('description');
    const tags = data.getAll('tags');
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const news = new News(heading, desc, `${day}/${month}/${year}`, tags);
    const newListItem = renderListItem(news);

    console.log('news', news)
    addNews(newListItem);
    this.reset();
  })

  const inputFields = document.querySelectorAll('input[type="text"]');

  function trimWhiteSpace() {
    this.value = this.value.trim()
  }

  inputFields.forEach(function (el) {
    el.addEventListener('change', trimWhiteSpace);
  })

  window.addEventListener('scroll', function(event) {
    const btn = document.querySelector('.btn-top');

    btn.addEventListener('click', function () {
      window.scrollTo({top: 0, behavior: 'smooth'});
    })

    if (this.scrollY >= 200) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  })
})