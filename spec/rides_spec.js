var rides = require('../lib/rides')

describe('Rides', function() {
  it('determines when a child is too short', function() {
    var child = {
      height: 3,
      name: "Julian",
      age: 3
    };
    var ride = {
      minHeight: 3,
      maxHeight: 7
    };
    expect(rides.isTallEnough(child, ride)).toEqual(true)
    child.height -= 1
    expect(rides.isTallEnough(child, ride)).toEqual(false)
  })
})
