import createRequest from '../../lib/createRequest';

export const getUserRC = () => {
  console.log('getUserRC', 'GET', '/api/user');
  return createRequest({
    method: 'GET',
    url: '/api/user',
  });
};
