"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiUrl = exports.configure = void 0;
let apiUrl = '';
function configure(config) {
    apiUrl = config.apiUrl;
}
exports.configure = configure;
function getApiUrl() {
    return apiUrl;
}
exports.getApiUrl = getApiUrl;
