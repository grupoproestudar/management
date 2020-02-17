const randomElement = (arr = []) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const kebab = (str) => {
    return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};


const onRefresh = () => {
    localStorage.clear();
};

const onReload = () => {
    location.reload();
}
const toggleFullScreen = () => {
    let doc = window.document;
    let docEl = doc.documentElement;

    let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    let cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    } else {
        cancelFullScreen.call(doc);
    }
};
const getPercent = (val, total) => {
    return (val * 100 / total).toFixed(2);
};

const groupBy = (list, item) => {
    if (item in list) {
        list[item]++
    } else {
        list[item] = 1
    }
    return list;
};
export default {
    groupBy,
    getPercent,
    randomElement,
    toggleFullScreen,
    kebab,
    onRefresh,
    onReload
};