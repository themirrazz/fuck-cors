(function (fetch) {
    window.fetch = function (url, options) {
        options = options || {};
        if(url instanceof URL) {
            url = url.href;
        };
        if(url instanceof Request) {
            options = url;
            url = url.url;
            options.url = undefined;
            delete options.url;
        }
        if([
            'fuck-cors',
            'remove-cors',
            'rm-cors',
            'screw-cors',
            'damn-cors',
            'bypass-cors',
            'bypass',
            'direct'
        ].includes(options.mode) && !(url.startsWith('/'))) {
            url = "https://corsproxy.io/?url=" + encodeURIComponent(url);
        }
        return fetch(url, options);
    };
})(fetch);
