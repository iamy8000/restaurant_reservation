module.exports = {
  publicPath: '/mealfinder',
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/api': {
        target: 'https://mealfinder2021.herokuapp.com'
      }
    }
  }
}
