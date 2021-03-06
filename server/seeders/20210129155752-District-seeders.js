'use strict'
const data = require('../data/city-and-district-data.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const districts = []
    for (let i = 0; i < data.length; i++) {
      for (let a = 0; a < data[i].AreaList.length; a++) {
        districts.push({
          CityId: i * 10 + 1,
          name: data[i].AreaList[a].AreaName,
          picture: data[i].AreaList[a].icon
        })
      }
    }
    await queryInterface.bulkInsert('Districts',
      districts.map((item, index) => ({
        id: index * 10 + 1,
        name: item.name,
        CityId: item.CityId,
        picture: item.picture,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
      , {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Districts', null, {})
  }
}
