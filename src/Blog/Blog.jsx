import React from 'react';

function Blog() {
  const blogPosts = [
    {
      title: "What is Renewable Energy?",
      content:
        "Renewable energy comes from natural sources that replenish themselves over time, such as wind, solar, and hydro power.",
      image: "/assets/images/renewable.jpg",
      link: "https://www.herofutureenergies.com/blog/renewable-energy/",
    },
    {
      title: "Benefits of Solar Energy",
      content:
        "Solar energy is one of the most accessible renewable energy sources. Learn how it can reduce electricity bills and carbon emissions.",
      image: "/assets/images/solar.jpg",
      link: "https://freyrenergy.com/solar-blog/",
    },
    {
      title: "How Wind Power is Transforming Energy Production",
      content:
        "Wind energy is a sustainable way to generate electricity. Discover how wind farms are making a difference.",
      image: "/assets/images/wind.jpg",
      link: "https://www.perchenergy.com/blog/energy/advantages-disadvantages-wind-energy",
    },
    {
      title: "Hydropower: The Future of Clean Energy?",
      content:
        "Hydropower has been a key energy source for decades. Learn about its advantages and challenges.",
      image: "/assets/images/hydro.jpg",
      link: "https://blog.energyelephant.com/hydropower-how-does-it-work/",
    },
    {
      title: "Geothermal Energy: Tapping into Earth's Heat",
      content:
        "Geothermal energy harnesses heat from the Earth’s core. Explore its potential as a reliable energy source.",
      image: "/assets/images/geothermal.jpg",
      link: "https://www.solarreviews.com/blog/geothermal-energy-pros-and-cons",
    },
    {
      title: "The Role of Biomass in Renewable Energy",
      content:
        "Biomass energy comes from organic materials. Find out how it contributes to a cleaner energy future.",
      image: "/assets/images/biomass.jpg",
      link: "https://www.tce.co.in/blogs/biomass-powering-indias-sustainable-energy-future/",
    }   
  ];

  return (
    <div className="container min-w-full !pt-20 !pb-10">
      <h1 className="text-3xl font-bold text-center !mb-6">Exploring Renewable Energy</h1>
      <div className="grid !px-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className='hover:scale-102 rounded-lg bg-blue-50 transition-all !p-6'>
            <img className='min-h-70 max-h-70 w-full min-w-full brightness-90 rounded-lg shadow-lg object-cover !mb-4' src={post.image} alt={post.title} />
            <h1 className='text-2xl overflow-hidden text-ellipsis line-clamp-2 !pb-1'>{post.title}</h1>
            <p className='text-lg overflow-hidden text-ellipsis line-clamp-3 !mb-8 whitespace-normal'>{post.content}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white rounded-sm border-none !py-3 !px-4 cursor-pointer hover:bg-gray-800"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
