import { BASE_URL, API_KEY, getListMethodName, sendDataMethodName } from "./constants";

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

export function sendData(formData, productData) {
    const url = new URL(BASE_URL);
    url.searchParams.append('MethodName', sendDataMethodName);
    url.searchParams.append('ApiKey', API_KEY);

    url.searchParams.append('Phone', formData.Phone);
    url.searchParams.append('ClientName', formData.ClientName);
    url.searchParams.append('Email', formData.Email);

    url.searchParams.append('Id', productData.ID);
    url.searchParams.append('TableName', productData.TABLENAME);
    url.searchParams.append('PrimaryKey', productData.PRIMARYKEY);
    url.searchParams.append('Price', productData.PRICE);
    url.searchParams.append('Summa', productData.SUMMA);
    url.searchParams.append('PaymentTypeId', "2");
    url.searchParams.append('UseDelivery', "0");
    url.searchParams.append('IsGift', "0");
    url.searchParams.append('MsgText', "");
    url.searchParams.append('PName', "");
    url.searchParams.append('PPhone', "");

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
        },
    })
};
