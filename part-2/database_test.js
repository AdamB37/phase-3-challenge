var expect = require('chai').expect
var db = require('./database.js')

const resultArr = [
  {id: 16, name: 'Flour'},
  {id: 33, name: 'Pasta'},
  {id: 36, name: 'Rice'}
]

describe('grocery_store', () => {
  it('itemsInSection(bulk) returns flour, pasta, rice', () => {
    return db.itemsInSection({section: 'bulk'}).then(items => {
      items.forEach((item,i) => {
        expect(item).to.deep.equal(resultArr[i])
      })
    })
  })

  it('cheapItems() returns fish as first item and honey as last item', () => {
    return db.cheapItems().then(items => {
      expect(items[0].name).to.deep.equal('Fish')
      expect(items[items.length-1].name).to.deep.equal('Honey')
    })
  })

  it('countItemsInSection("packaged") returns count of 5', () => {
    return db.countItemsInSection({section: "packaged"}).then(result => {
      expect(result.count).to.deep.equal('5')
    })
  })
})
