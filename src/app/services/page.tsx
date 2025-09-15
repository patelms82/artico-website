export default function Services() {
  const services = [
    'Logos',
    'Brand Development',
    'Print Identity',
    'Resin Flooring',
    'Product Photography',
    'Fashion Photography',
    'Corporate Video/Shoot',
    'Advertising Film Production',
    'Short Film',
    'Brochures',
    'Catalogues',
    'Digital Identity',
    'Digital Marketing',
    '3D Visualization',
    'Photoshop Visual Creations',
    'Poster Design',
    'Brand Campaign Design',
    'Exhibition Stand Design',
    'Interior Designing',
    'Art (Painting)',
    'The Art Consultant',
    'And Many More',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Comprehensive creative solutions for your brand and business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:scale-105"
            >
              <div className="text-lg font-semibold text-gray-800 text-center">
                {service}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}