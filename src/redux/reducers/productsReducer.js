const initialState={
    items:[
        {
            id: 1,
            name: 'Nike Shoes',
            price: 12000,
            description: 'Comfortable running shoes',
            image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg'
        },
        {
            id: 2,
            name: 'Adidas T-Shirt',
            price: 2500,
            description: 'Premium quality cotton t-shirt',
            image: 'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/U71919s.jpg?im=Resize,width=750'
        },
        {
            id: 3,
            name: 'Puma Shorts',
            price: 1800,
            description: 'Lightweight sports shorts',
            image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/525056/01/mod01/fnd/SEA/fmt/png/RUN-VELOCITY-ULTRAWEAVE-5-Men\'s-Running-Shorts'
        },
        {
            id: 4,
            name: 'Reebok Cap',
            price: 1500,
            description: 'Stylish baseball cap',
            image: 'https://m.media-amazon.com/images/I/61jC7crHpgL._AC_SL1500_.jpg'
        }
    ]
};
const productsReducer=(state = initialState, action) =>{
    switch(action.type) {
        default:
            return state;
    }
};
export default productsReducer;