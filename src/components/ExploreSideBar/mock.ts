export default [
  {
    title: 'Price',
    name: 'price',
    type: 'checkbox',
    fields: [
      {
        label: 'Under $50',
        name: 'under50'
      },
      {
        label: 'Under $100',
        name: 'under-100'
      },
      {
        label: 'Under $150',
        name: 'under-150'
      },
      {
        label: 'Under $200',
        name: 'under-200'
      },
      {
        label: 'Free',
        name: 'free'
      },
      {
        label: 'Discounted',
        name: 'discounted'
      }
    ]
  },
  {
    title: 'Sort by',
    name: 'sort_by',
    type: 'radio',
    fields: [
      {
        label: 'High to low',
        name: 'high-to-low'
      },
      {
        label: 'Low to high',
        name: 'low-to-high'
      }
    ]
  },
  {
    title: 'Categorias',
    name: 'categorias',
    type: 'checkbox',
    fields: [
      {
        label: 'Brinco',
        name: 'brinco'
      },
      {
        label: 'Pulseira',
        name: 'pulseira'
      },
      {
        label: 'Anéis',
        name: 'anel'
      },
      {
        label: 'Piercings',
        name: 'piercing'
      },
      {
        label: 'Colar',
        name: 'colar'
      }
    ]
  }
]
