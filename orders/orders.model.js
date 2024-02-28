const orders = [
  {
    date: '2024-02-05',
    subtotal: 90.22,
    items: [
      {
        product: {
          id: 'redshoe',
          description: 'Red Shoe',
          price: 45.11,
        },
        quantity: 2,
      }
    ]
  }
]

function getAllOrders() {
  return orders
}

module.exports = {
  getAllOrders,
}
