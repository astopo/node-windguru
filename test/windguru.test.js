const WindGuru = require('../index')

const { expect } = require('chai')

describe('WindGuru', function() {
  describe('#init', function() {
    it('should throw an error if the WINDGURU_USER environment variable does not exist', function() {
      const wg = new WindGuru()

      expect(wg.init.bind(wg)).to.throw(/WINDGURU_USER is required/)
    })

    it('should throw an error if the WINDGURU_PASSWORD environment variable does not exist', function() {
      process.env.WINDGURU_USER = 'someuser'
      
      const wg = new WindGuru()
      expect(wg.init.bind(wg)).to.throw(/WINDGURU_PASSWORD is required/)
    })

    it('should not throw an error if all required environment variables exist', function() {
      process.env.WINDGURU_PASSWORD = 'somepassword'

      const wg = new WindGuru()
      expect(wg.init.bind(wg)).to.not.throw()
    })
  })
})
