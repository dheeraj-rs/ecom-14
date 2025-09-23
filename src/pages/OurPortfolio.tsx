import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Heart, Star } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: "Modern Living Room Set",
    category: "Living Room",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    description: "Contemporary sectional sofa with premium leather upholstery",
    price: "$2,899",
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
      "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg"
    ]
  },
  {
    id: 2,
    title: "Elegant Dining Table",
    category: "Dining Room",
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
    description: "Solid oak dining table with matching chairs",
    price: "$1,599",
    images: [
      "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
      "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg",
      "https://images.pexels.com/photos/1395965/pexels-photo-1395965.jpeg"
    ]
  },
  {
    id: 3,
    title: "Luxury Bedroom Suite",
    category: "Bedroom",
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    description: "King-size bed with matching nightstands and dresser",
    price: "$3,299",
    images: [
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg"
    ]
  },
  {
    id: 4,
    title: "Executive Office Desk",
    category: "Office",
    image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
    description: "Professional workspace solution with storage",
    price: "$899",
    images: [
      "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg",
      "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg"
    ]
  },
  {
    id: 5,
    title: "Vintage Armchair",
    category: "Living Room",
    image: "https://images.pexels.com/photos/586230/pexels-photo-586230.jpeg",
    description: "Classic leather armchair with brass accents",
    price: "$1,199",
    images: [
      "https://images.pexels.com/photos/586230/pexels-photo-586230.jpeg",
      "https://images.pexels.com/photos/567467/pexels-photo-567467.jpeg",
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
    ]
  },
  {
    id: 6,
    title: "Kitchen Island",
    category: "Kitchen",
    image: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg",
    description: "Multi-functional kitchen island with storage",
    price: "$2,199",
    images: [
      "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg",
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
      "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
    ]
  }
];

const OurPortfolio = () => {
  const categories = [...new Set(portfolioItems.map(item => item.category))];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
      </div>

      {/* Header Section */}
      <section className="relative z-10 pt-20 sm:pt-24 lg:pt-28 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto">
              Explore our curated collection of premium furniture pieces, each designed and crafted 
              to bring elegance and comfort to your living spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Hover Actions */}
                  <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors">
                      <Eye className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  
                  {/* Quick View Button */}
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Link 
                      to={`/portfolio/${item.id}`}
                      className="block w-full bg-white/20 backdrop-blur-md text-white text-center py-2 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium"
                    >
                      Quick View
                    </Link>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${
                            i < 4 ? 'text-yellow-400 fill-current' : 'text-white/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-white/60 text-xs sm:text-sm">4.8 (24 reviews)</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {item.price}
                    </span>
                    <Link 
                      to={`/portfolio/${item.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group/link text-sm sm:text-base"
                    >
                      View Details
                      <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPortfolio;