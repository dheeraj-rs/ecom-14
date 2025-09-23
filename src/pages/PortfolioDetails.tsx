import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Truck, Shield, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const portfolioItems = [
  {
    id: 1,
    title: "Modern Living Room Set",
    category: "Living Room",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    description: "Contemporary sectional sofa with premium leather upholstery. This stunning piece combines modern design with exceptional comfort, featuring high-quality materials and expert craftsmanship.",
    price: 2899,
    rating: 4.8,
    reviews: 24,
    dimensions: "120\" W x 85\" D x 36\" H",
    material: "Top-grain leather, hardwood frame",
    warranty: "25 years",
    inStock: true,
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
      "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg"
    ],
    features: [
      "Premium top-grain leather upholstery",
      "Kiln-dried hardwood frame construction",
      "High-density foam cushions",
      "Reversible seat cushions",
      "Professional delivery and setup included"
    ]
  },
  {
    id: 2,
    title: "Elegant Dining Table",
    category: "Dining Room",
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
    description: "Solid oak dining table with matching chairs. Perfect for family gatherings and entertaining guests with its timeless design and durable construction.",
    price: 1599,
    rating: 4.9,
    reviews: 18,
    dimensions: "72\" L x 36\" W x 30\" H",
    material: "Solid oak wood",
    warranty: "25 years",
    inStock: true,
    images: [
      "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
      "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg",
      "https://images.pexels.com/photos/1395965/pexels-photo-1395965.jpeg"
    ],
    features: [
      "Solid oak wood construction",
      "Hand-finished with natural oils",
      "Seats up to 6 people comfortably",
      "Matching chairs available separately",
      "Eco-friendly materials"
    ]
  }
];

const PortfolioDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const item = portfolioItems.find(item => item.id === parseInt(id || ''));

  if (!item) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Item not found</h1>
          <Link to="/portfolio" className="text-amber-600 hover:text-amber-700 font-medium">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: quantity
    });
  };

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="p-6">
              <div className="mb-4">
                <img 
                  src={item.images[selectedImage]} 
                  alt={item.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-md ${
                      selectedImage === index ? 'ring-2 ring-amber-600' : ''
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${item.title} ${index + 1}`}
                      className="w-full h-24 object-cover hover:scale-105 transition-transform"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="p-6">
              <div className="mb-4">
                <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {item.title}
              </h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {item.rating} ({item.reviews} reviews)
                </span>
              </div>

              <div className="text-3xl font-bold text-amber-600 mb-6">
                ${item.price.toLocaleString()}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-900">Dimensions:</span>
                  <p className="text-gray-600">{item.dimensions}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Material:</span>
                  <p className="text-gray-600">{item.material}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Warranty:</span>
                  <p className="text-gray-600">{item.warranty}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Stock:</span>
                  <p className={`font-medium ${item.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {item.inStock ? 'In Stock' : 'Out of Stock'}
                  </p>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center border rounded-lg">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                    disabled={!item.inStock}
                  >
                    Add to Cart
                  </button>
                  <button className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                    <Heart className="w-5 h-5 mx-auto" />
                  </button>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Truck className="w-4 h-4 mr-2" />
                  Free white-glove delivery and setup
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2" />
                  25-year comprehensive warranty
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;