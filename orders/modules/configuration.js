export class Configuration {
  static setPaginationConfiguration(config) {
    window.freddysApp = config;
  }

  static getPaginationConfiguration() {
    return window.freddysApp;
  }
}
