import request from 'superagent';

function nullsToEmptyStrings(value) {
  return value === null ? '' : value;
}

const addTimeout = (req, timeout) => (timeout ? req.timeout(timeout) : req);
const addType = (req, type) => (type ? req.type(type) : req);
const addHeaders = (req, headers) => (headers ? req.set(headers) : req);
const addData = (method, req, data, fields) => {
  if (data && method === 'GET') {
    return req.query(data);
  }

  if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
    if (fields) {
      Object.keys(data).forEach((key) => {
        req.field(key, nullsToEmptyStrings(data[key]));
      });
      return req;
    }

    return req.send(data);
  }

  return req;
};

const createRequest = ({
  method = 'GET',
  url = '/',
  type,
  headers,
  data,
  fields,
  timeout,
}) => {
  let req;
  switch (method) {
    case 'GET':
      req = request.get(url);
      addData('GET', req, data);
      break;
    case 'POST':
      req = request.post(url);
      addData('POST', req, data, fields);
      break;
    case 'PUT':
      req = request.put(url);
      addData('PUT', req, data, fields);
      break;
    case 'PATCH':
      req = request.patch(url);
      addData('PATCH', req, data, fields);
      break;
    case 'DELETE':
      req = request.delete(url);
      break;
    default:
      req = request.get(url);
      break;
  }

  addType(req, type);
  addHeaders(req, headers);
  addTimeout(req, timeout);

  return req.then(res => res.body);
};

export default createRequest;
