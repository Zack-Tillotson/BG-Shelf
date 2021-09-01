/*
 * Ownership data structure
 * 
 * item
 * favorite
 * note
 * acquisitions[]
 *   date - date added auto
 *   price
 *   datePurchased
 */

export const ownership1 = {
  item: null,
  favorite: true,
  note: 'I bought this on a whim but actually love it!',
  acquisitions: [{
    date: '2021-10-01',
    price: "$40",
  }, {
    date: '2015-02-10',
    price: "$60",
  }],
}

export const ownership2 = {
  item: null,
  favorite: false,
  note: '',
  acquisitions: [],
}

export default ownership1
