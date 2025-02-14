export default class DataHandler {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;

    this.reloadButton = document.querySelector('.reload-button');
    this.reloadButtonOnClick = this.reloadButtonOnClick.bind(this);
    this.reloadButton.addEventListener('click', this.reloadButtonOnClick);

    this.contentList = document.querySelector('.content-list');
  }

  reloadButtonOnClick() {
    location.reload();
  }

  async fetchData() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      this.handleSuccess(data);
    } catch (error) {
      this.handleError(error);
    }
  }

  handleSuccess(data) {
    console.log('Received data:', data);
    this.contentList.innerHTML = '';

    data.news.forEach((news) => {
      const { title, description } = news;

      const newsItem = this.createNewsElem(title, description);
      this.contentList.insertAdjacentHTML('afterbegin', newsItem);
    });
  }

  createNewsElem(title, description) {
    const newsItem = `
    <li class="news-list-item">
      <h3 class="news-list-item-title">${title}</h3>
      <p class="news-list-item-text">${description}</p>
    </li>
    `;

    return newsItem;
  }

  handleError() {
    setTimeout(() => {
      const body = document.querySelector('body');
      body.classList.add('mask');
      const errorContainer = document.querySelector('.error-container');
      errorContainer.classList.remove('hidden');
    }, 4000);
  }
}
