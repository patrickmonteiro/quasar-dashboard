
module.exports = [
  {
    name: 'Panel',
    label: 'teste',
    icon: 'dashboard',
    path: ''
  },
  {
    name: 'Menu item',
    icon: 'list',
    path: '#',
    children: [
      {
        name: 'sub item 1',
        path: '#',
        children: [
          {
            name: 'sub item 2',
            path: '#'
          }
        ]
      }
    ]
  }
]
