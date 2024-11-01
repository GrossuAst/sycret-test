import { BASE_URL, API_KEY, getListMethodName } from "./constants";

function checkResponse(res) {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

export function getData() {
    const url = new URL(BASE_URL);
    url.searchParams.append('MethodName', getListMethodName);
    url.searchParams.append('ApiKey', API_KEY);

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
        },
    })
        .then((res) => {
            return checkResponse(res);
        })
};

export function sendData() {

};
