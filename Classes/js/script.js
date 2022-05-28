class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  getCarYear() {
    return this.year;
  }

  setCarYear(year) {
    this.year = year;
  }

  showCarInfo() {
    console.log(`Car model ${this.model}; Year - ${this.year}`);
  }
}


const honda = new Car('honda', 2019);
const bmw = new Car('bmw', 2020);


// console.log('honda', honda);
// console.log('bmw', bmw);

//////////////////////////////////////////////////////////////////////////////////////

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
const news = [];
const tags = ['tech', 'science', 'html', 'css', 'js', 'react', 'vue', 'angular'];

class News {
  constructor(title, description, date, tags = []) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.tags = tags;
  }

  addTag(tag) {
    this.tags.push(tag)
  }

  getTags() {
    return this.tags.join(', ');
  }
}

class Post extends News  {
  constructor(title, description, date, tags = [], author) {
    super(title, description, date, tags);
    this.author = author;
  }

  getPublishDate() {
    const day = +this.date.split('/')[0];
    const month = +this.date.split('/')[1];
    const today = new Date().getDate();
    const currentMonth =  new Date().getMonth() + 1;

    if (day === today && month === currentMonth) {
      return 'Today';
    } else if (day < today && month === currentMonth) {
      return `${today - day} days ago`;
    } else {
      return this.date;
    }
  }

  // addAuthor(author) {
  //   this.author = author;
  // }
}

const post = new Post('Lorem ipsum', 'Distinctio, quod?', '28/05/2022', ['html', 'css', 'js'], 'John Doe');

console.log('post', post)
const newOne = new News('Lorem ipsum', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, quod?', `12/5/2022`, ['html', 'css', 'js'])

console.log('newOne', newOne)

for (let i = 0; i < 10; i++) {
  const date = getRandomNumber(1, 31);
  const month = getRandomNumber(1, 12);
  const randomNumber = getRandomNumber(0, tags.length - 1)
  const randomTag = tags.slice(0, randomNumber);

  news.push(new News(`Title ${i + 1}`, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', `${date}/${month}/2022`, randomTag));
}

class NewsFeed {
  constructor(news) {
    this.news = news;
  }

  showNews() {
    for (let item of this.news) {
      console.log(`${item.title}, Publish date - ${item.date}; tags - ${item.getTags()}`);
    }
  }

  getNewsByTag(tag) {
    return this.news.filter(item => item.tags.includes(tag));
  }

  addNews(item) {
    this.news.push(item);
  }
}

const newTwo = new News('Lorem ipsum', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, quod?', `12/5/2022`, ['html', 'css', 'js'])

const newsFeed = new NewsFeed(news);
console.log('news', news);