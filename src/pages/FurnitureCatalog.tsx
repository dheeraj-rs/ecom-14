import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid, List, X, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const catalogItems = [
  {
    id: 1,
    title: "Modern Sectional Sofa",
    category: "Living Room",
    price: 2899,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    rating: 4.8,
    inStock: true,
    material: "Leather",
    color: "Brown"
  },
  {
    id: 2,
    title: "Oak Dining Table",
    category: "Dining Room",
    price: 1599,
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
    rating: 4.9,
    inStock: true,
    material: "Wood",
    color: "Natural"
  },
  {
    id: 3,
    title: "King Bedroom Set",
    category: "Bedroom",
    price: 3299,
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    rating: 4.7,
    inStock: true,
    material: "Wood",
    color: "Dark Brown"
  },
  {
    id: 4,
    title: "Executive Desk",
    category: "Office",
    price: 899,
    image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
    rating: 4.6,
    inStock: false,
    material: "Wood",
    color: "Black"
  },
  {
    id: 5,
    title: "Vintage Armchair",
    category: "Living Room",
    price: 1199,
    image: "https://images.pexels.com/photos/586230/pexels-photo-586230.jpeg",
    rating: 4.8,
    inStock: true,
    material: "Leather",
    color: "Tan"
  },
  {
    id: 6,
    title: "Kitchen Island",
    category: "Kitchen",
    price: 2199,
    image: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg",
    rating: 4.9,
    inStock: true,
    material: "Wood",
    color: "White"
  }
];

const FurnitureCatalog = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    material: '',
    color: '',
    inStock: false
  });
  const [filteredItems, setFilteredItems] = useState(catalogItems);
  const [isFilterSticky, setIsFilterSticky] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsFilterSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let filtered = catalogItems;

    if (filters.category) {
      filtered = filtered.filter(item => item.category === filters.category);
    }
    if (filters.material) {
      filtered = filtered.filter(item => item.material === filters.material);
    }
    if (filters.color) {
      filtered = filtered.filter(item => item.color === filters.color);
    }
    if (filters.inStock) {
      filtered = filtered.filter(item => item.inStock);
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(item => item.price >= min && item.price <= max);
    }

    setFilteredItems(filtered);
  }, [filters]);

  const handleFilterChange = (filterType: string, value: string | boolean) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: '',
      material: '',
      color: '',
      inStock: false
    });
  };

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: 1
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-amber-600 hover:text-amber-700 font-medium">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Furniture Catalog</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>
          </div>

          {/* Filters Sidebar - Mobile Overlay / Desktop Sidebar */}
          <div className={`
            ${isFiltersOpen ? 'fixed inset-0 z-50 lg:relative lg:inset-auto' : 'hidden lg:block'}
            lg:w-64 lg:flex-shrink-0
          `}>
            {isFiltersOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsFiltersOpen(false)}></div>
            )}
            
            <div className={`
              ${isFilterSticky && !isFiltersOpen ? 'sticky top-6' : ''}
              ${isFiltersOpen ? 'fixed left-0 top-0 bottom-0 w-80 z-50 lg:relative lg:w-64 lg:z-auto' : ''}
              bg-white rounded-lg shadow-md h-fit
            `}>
              {/* Mobile Filter Header */}
              <div className="lg:hidden flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button onClick={() => setIsFiltersOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 lg:p-6 space-y-6">
                <div className="hidden lg:flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-amber-600 hover:text-amber-700"
                  >
                    Clear All
                  </button>
                </div>

                {/* Compact Mobile Filter Layout */}
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Category</label>
                    <select
                      value={filters.category}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                    >
                      <option value="">All</option>
                      <option value="Living Room">Living Room</option>
                      <option value="Dining Room">Dining Room</option>
                      <option value="Bedroom">Bedroom</option>
                      <option value="Office">Office</option>
                      <option value="Kitchen">Kitchen</option>
                    </select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Price</label>
                    <select
                      value={filters.priceRange}
                      onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                    >
                      <option value="">All Prices</option>
                      <option value="0-1000">Under $1,000</option>
                      <option value="1000-2000">$1,000 - $2,000</option>
                      <option value="2000-3000">$2,000 - $3,000</option>
                      <option value="3000-99999">Over $3,000</option>
                    </select>
                  </div>

                  {/* Material */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Material</label>
                    <select
                      value={filters.material}
                      onChange={(e) => handleFilterChange('material', e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                    >
                      <option value="">All Materials</option>
                      <option value="Wood">Wood</option>
                      <option value="Leather">Leather</option>
                      <option value="Metal">Metal</option>
                      <option value="Fabric">Fabric</option>
                    </select>
                  </div>

                  {/* Color */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Color</label>
                    <select
                      value={filters.color}
                      onChange={(e) => handleFilterChange('color', e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                    >
                      <option value="">All Colors</option>
                      <option value="Brown">Brown</option>
                      <option value="Black">Black</option>
                      <option value="White">White</option>
                      <option value="Natural">Natural</option>
                      <option value="Tan">Tan</option>
                      <option value="Dark Brown">Dark Brown</option>
                    </select>
                  </div>
                </div>

                {/* In Stock Toggle */}
                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="inStock"
                    checked={filters.inStock}
                    onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                    className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                  />
                  <label htmlFor="inStock" className="ml-2 text-sm text-gray-900">
                    In Stock Only
                  </label>
                </div>

                {/* Mobile Apply Button */}
                <div className="lg:hidden pt-4 border-t">
                  <button 
                    onClick={() => setIsFiltersOpen(false)}
                    className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div>
                <span className="text-gray-600">
                  Showing {filteredItems.length} of {catalogItems.length} products
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-amber-100 text-amber-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-amber-100 text-amber-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={`
              ${viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-4'
              }
            `}>
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className={`
                    bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group
                    ${viewMode === 'list' ? 'flex' : ''}
                  `}
                >
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                        viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                      }`}
                    />
                    {!item.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Out of Stock
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className={`p-4 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-4 h-4 rounded-full ${
                                i < Math.floor(item.rating) ? 'bg-yellow-400' : 'bg-gray-200'
                              }`}
                            ></div>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          ({item.rating})
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {item.material} • {item.color}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-amber-600">
                        ${item.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        disabled={!item.inStock}
                        className="flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed group"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your filters.</p>
                <button 
                  onClick={clearFilters}
                  className="mt-4 text-amber-600 hover:text-amber-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCatalog;

export default FurnitureCatalog