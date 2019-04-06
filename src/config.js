// берём переменную из window, она объявлена у нас в myscripts/config, а файл подключен как скрипт в index.html
export default window.__APP_CONGIG__ || { isShow: false };
