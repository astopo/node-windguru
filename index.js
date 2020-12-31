/*
 *
 * A class for the WindGuru API wrapper.
 *
 */

class WindGuru {
  constructor() {
    this.WINDGURU_USER = null
    this.WINDGURU_PASSWORD = null
  }

  init() {
    this.WINDGURU_USER = process.env.WINDGURU_USER
    this.WINDGURU_PASSWORD = process.env.WINDGURU_PASSWORD

    if (!this.WINDGURU_USER) throw new Error('WINDGURU_USER is required.')
    if (!this.WINDGURU_PASSWORD) throw new Error('WINDGURU_PASSWORD is required.')
  }
}

module.exports = WindGuru
