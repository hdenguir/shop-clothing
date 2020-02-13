const initState = {
  sections: [
    {
      title: 'HATS',
      id: 1,
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      linkUrl: 'hats'
    },
    {
      title: 'JACKETS',
      id: 2,
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      linkUrl: 'jackets'
    },
    {
      title: 'SNEAKERS',
      id: 3,
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      linkUrl: 'sneakers'
    },
    {
      title: 'WOMENS',
      id: 4,
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      linkUrl: 'womens'
    },
    {
      title: 'MENS',
      id: 5,
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      linkUrl: 'mens'
    }
  ]
};

const directoryReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case '':
      return { ...state };
    default:
      return state;
  }
};

export default directoryReducer;
