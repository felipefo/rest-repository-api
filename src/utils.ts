

let apiUrl = '';

export function configure(config: { apiUrl: string }) {
  apiUrl = config.apiUrl;
}

export function getApiUrl(): string {
  return apiUrl;
}
