export default class ServiceWorkerManager {
  static async register(swPath) {
    if (!navigator.serviceWorker) return false;

    try {
      const registration = await navigator.serviceWorker.register(swPath);
      console.log('ServiceWorker registered:', registration);
      return true;
    } catch (error) {
      console.error('ServiceWorker registration failed:', error);
      return false;
    }
  }
}
