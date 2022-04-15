export function post(url, req) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(req),
    headers: {
        'Content-type': 'application/json'
    }
  }).then((res) => res.json());
}

export function get(url) {
  return fetch(url).then((res) => res.json());
}

export function put(url, req) {
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(req),
    headers: {
        'Content-type': 'application/json'
    }
  }).then((res) => res.json());
}

export function deleteReq(url) {
  return fetch(url, {
    method: "DELETE",
  }).then((res) => res.json());
}
