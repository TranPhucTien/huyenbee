const categoryOptions = [
    {
        name: 'All food',
        type: 'our-foods',
    },
    {
        name: 'Best food',
        type: 'best-foods',
    },
    {
        name: 'Burgers',
        type: 'burgers',
    },
    {
        name: 'Breads',
        type: 'breads',
    },
    {
        name: 'Sandwiches',
        type: 'sandwiches',
    },
    {
        name: 'Pizzas',
        type: 'pizzas',
    },
    {
        name: 'BBQ',
        type: 'bbqs',
    },
    {
        name: 'Fried Chicken',
        type: 'fried-chicken',
    },
    {
        name: 'Porks',
        type: 'porks',
    },
    {
        name: 'Sausage',
        type: 'sausages',
    },
];

const sortOptions = [
    { id: 3, value: 'Price: High to Low', sort: 'price', order: 'desc' },
    {
        id: 4,
        value: 'Price: Low to High',
        sort: 'price',
        order: 'asc',
    },
    { id: 1, value: 'Rate: High to Low', sort: 'rate', order: 'desc' },
    { id: 2, value: 'Rate: Low to High', sort: 'rate', order: 'asc' },
];

const priceOptions = [
    { content: 'Every price', range: {} },
    { content: 'Under $100', range: { price_lte: 100 } },
    { content: '$50 to $100', range: { price_gte: 50, price_lte: 100 } },
    { content: 'Under $50', range: { price_lte: 50 } },
    { content: 'Above $100', range: { price_gte: 100 } },
];

export { categoryOptions, sortOptions, priceOptions };
