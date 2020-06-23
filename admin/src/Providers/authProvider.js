const authProvider = {
  login: ({ email, password }) => {
    const request = new Request('http://localhost:4000/api/v1/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token }) => {
        localStorage.setItem('token', token);
      });
  },
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  checkAuth: () => (localStorage.getItem('token') ? Promise.resolve() : Promise.reject()),
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getPermissions: () => {
    const role = localStorage.getItem('permissions');
    return role ? Promise.resolve(role) : Promise.reject();
  },
};

export default authProvider;
