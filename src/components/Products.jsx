import Product from '../components/Product'
import img1 from '../sawiro/item2.png'
import img2 from '../sawiro/item3.png'
import img3 from '../sawiro/item4.png'
import img4 from '../sawiro/item7.png'
import img5 from '../sawiro/item8.png'
import img6 from '../sawiro/item9.png'

const products= [

    {
    id : 1,
    name : 'camera',
    urlImage: img1,
    price: 10
    
    },
    {
        id : 2,
        name : 'bottle',
        urlImage: img2,
        price: 90
        
        },
        {
            id : 3,
            name : 'bag',
            urlImage:  img3,
            price: 40
            
            },
            {
                id : 4,
                name : 'shoes',
                urlImage:  img4,
                price: 29
                
                },
                {
                    id : 5,
                    name : 'makeup',
                    urlImage:  img5,
                    price: 30
                    
                    },
                    {
                        id : 5,
                        name : 'makeup',
                        urlImage:  img6,
                        price: 30
                        
                        },
        
    
    
    ]

    
    
    const Products = () => {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
          
        </div>
      );
    };
    
    export default Products;
    
  