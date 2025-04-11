export default {
  server: {
    proxy: {
      '/react-tours-project': 'http://course-api.com',  // Proxying the API endpoint
    }
  }
};