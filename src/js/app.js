import DataHandler from './dataHandler';
import ServiceWorkerManager from './serviceWorkerManager';

class App {
  initializeApp() {
    document.addEventListener('DOMContentLoaded', () => this.handleDOMLoaded());
    window.addEventListener('load', () => this.handleWindowLoad());
  }

  handleDOMLoaded() {
    this.dataHandler = new DataHandler('https://ahj-service-worker-server.onrender.com/api/news');
    this.dataHandler.fetchData();
  }

  async handleWindowLoad() {
    await ServiceWorkerManager.register('/service.worker.js');
  }
}

const app = new App();
app.initializeApp();
