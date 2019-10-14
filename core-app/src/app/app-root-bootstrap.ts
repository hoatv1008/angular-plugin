export class AppPreBootstrap {

    static getApplicationConfig(configUrl: string, callback: (result: any) => void, resolve: any, reject: any) {
        let type = 'GET';
        let customHeaders = [
            {
                name: 'HeaderName',
                value: 'HeaderValue'
            }
        ];

        this.getRemoteResource(type, configUrl, customHeaders, null, (r: any) => { callback(r) });
    }

    static getRemoteResource(type: string, url: string, customHeaders: any, data: any, success: any) {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    let result = JSON.parse(xhr.responseText);
                    success(result);
                } else if (xhr.status !== 0) {
                    alert('InternalServerError');
                }
            }
        };

        url += (url.indexOf('?') >= 0 ? '&' : '?') + 'd=' + new Date().getTime();
        xhr.open(type, url, true);

        for (let property in customHeaders) {
            if (customHeaders.hasOwnProperty(property)) {
                xhr.setRequestHeader(property, customHeaders[property]);
            }
        }

        xhr.setRequestHeader('Content-type', 'application/json');
        if (data) {
            xhr.send(data);
        } else {
            xhr.send();
        }
    }
}