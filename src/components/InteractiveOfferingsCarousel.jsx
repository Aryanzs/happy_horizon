import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart, Brain, Briefcase, GraduationCap, Users, Sparkles, Target, TrendingUp, Baby } from 'lucide-react';

const offeringsData = [
  {
    id: 'physical',
    icon: Heart,
    question: "What if you could overcome the impossible?",
    answer: "Did you know that nearly 80% of individuals diagnosed with severe physical limitations never regain independence? Yet, we've guided people, even those once told they'd never move again, to reclaim their lives and thrive.",
    questionImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    answerImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    accent: 'bg-rose-500',
    category: 'Physical Healing'
  },
  {
    id: 'fertility',
    icon: Baby,
    question: "What if failed treatments weren't the end?",
    answer: "Statistics reveal that one in four couples faces fertility challenges, often turning to IVF. But what if natural solutions existed? We've helped women conceive naturally within six months—even after multiple failed IVFs and miscarriages.",
    questionImage: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    answerImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    accent: 'bg-pink-500',
    category: 'Fertility & Family'
  },
  {
    id: 'chronic',
    icon: Target,
    question: "What if lifelong conditions could disappear?",
    answer: "From allergies to migraines, insomnia to chronic pain—these conditions affect millions globally. Through innovative techniques, we've helped thousands break free permanently, regaining control over their health and happiness.",
    questionImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    answerImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    accent: 'bg-purple-500',
    category: 'Chronic Conditions'
  },
  {
    id: 'business',
    icon: TrendingUp,
    question: "What if your business could double its revenue in record time?",
    answer: "Many businesses plateau, stuck in the same cycle year after year. Did you know that 70% of small businesses struggle to grow beyond their initial success? We've helped businesses stuck at the same revenue for many years achieve extensive growth in just one year.",
    questionImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    answerImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    accent: 'bg-indigo-500',
    category: 'Business Growth'
  },
  {
    id: 'children',
    icon: Users,
    question: "What if every child could succeed?",
    answer: "Children with learning difficulties or conditions like ADHD and dyslexia often face years of struggle. But what if the solution was simpler? We helped a child achieve above average pass rate for the first time in his 16-year history, transforming outcomes completely.",
    questionImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80',
    answerImage: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    accent: 'bg-blue-500',
    category: 'Child Development'
  },
  {
    id: 'trauma',
    icon: Brain,
    question: "What if healing didn't take years?",
    answer: "Trauma, anxiety, panic attacks—these can take a lifetime to overcome. But what if you could move forward in minutes? Our methods have helped individuals leave behind decades of pain and trauma, rebuilding their lives within months.",
    questionImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    answerImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    accent: 'bg-teal-500',
    category: 'Mental Health'
  },
  {
    id: 'wellness',
    icon: Heart,
    question: "What if wellness was about more than diet and exercise?",
    answer: "One in three adults struggles with weight or chronic health issues like thyroid imbalances and PCOD. Through sustainable methods, we've helped hundreds achieve long-lasting fitness and health while breaking unhealthy patterns.",
    questionImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    answerImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    accent: 'bg-green-500',
    category: 'Holistic Wellness'
  },
  {
    id: 'growth',
    icon: GraduationCap,
    question: "What if personal growth could replace a degree?",
    answer: "Ivy League MBAs can teach strategy, but can they teach you? Senior professionals often say, 'Your methods changed me—not just my resume.' Whether it's mastering influence or elevating artistry, we've helped individuals grow in ways traditional education never could.",
    questionImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80',
    answerImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    accent: 'bg-emerald-500',
    category: 'Personal Growth'
  },
  {
    id: 'legacy',
    icon: Sparkles,
    question: "What if legacy wasn't just a word?",
    answer: "Every person has a story, a unique ability to leave an impact. Through strategic hypnosis and transformation, we empower people to create a life filled with meaning, depth, and happiness. It's about compressing time, unlocking potential, and crafting a trajectory that transforms not just your life but the lives of those around you.",
    questionImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    answerImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    accent: 'bg-violet-500',
    category: 'Legacy Building'
  }
];

const InteractiveOfferingsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(3);

  // Responsive card count
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => 
          prev >= offeringsData.length - visibleCards ? 0 : prev + 1
        );
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlay, visibleCards]);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= offeringsData.length - visibleCards ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev <= 0 ? offeringsData.length - visibleCards : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100 via-transparent to-gray-100"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600 text-sm font-medium px-4 py-2 rounded-full shadow-sm mb-8">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Transformative Solutions</span>
          </div>
          
          <h2 className="text-gray-900 text-4xl md:text-5xl font-light mb-6 leading-tight">
            Redefining What's
            <span className="block font-semibold text-gray-800">
              Possible
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Discover gentle yet powerful approaches to transformation that honor your journey 
            while creating lasting change.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm text-gray-600 border border-gray-200 p-3 rounded-full shadow-lg hover:bg-white hover:text-gray-800 transition-all duration-300 hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm text-gray-600 border border-gray-200 p-3 rounded-full shadow-lg hover:bg-white hover:text-gray-800 transition-all duration-300 hover:scale-105"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` 
              }}
            >
              {offeringsData.map((item, index) => {
                const Icon = item.icon;
                const isHovered = hoveredCard === item.id;
                
                return (
                  <div
                    key={item.id}
                    className={`flex-shrink-0 px-4`}
                    style={{ width: `${100 / visibleCards}%` }}
                  >
                    <div
                      className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-500"
                      onMouseEnter={() => {
                        setHoveredCard(item.id);
                        setIsAutoPlay(false);
                      }}
                      onMouseLeave={() => {
                        setHoveredCard(null);
                        setIsAutoPlay(true);
                      }}
                    >
                      {/* Question Background Image */}
                      <div 
                        className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${isHovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}
                        style={{ 
                          backgroundImage: `url(${item.questionImage})`,
                        }}
                      />
                      
                      {/* Answer Background Image */}
                      <div 
                        className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                        style={{ 
                          backgroundImage: `url(${item.answerImage})`,
                        }}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 transition-opacity duration-500" />

                      {/* Content Container */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        
                        {/* Question Content */}
                        <div className={`transition-all duration-500 ${isHovered ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                          <div className="mb-4">
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${item.accent} shadow-lg mb-4`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          
                          <div className="text-white/80 text-xs font-medium uppercase tracking-wider mb-3">
                            {item.category}
                          </div>
                          
                          <h3 className="text-white font-medium text-xl mb-4 leading-tight">
                            {item.question}
                          </h3>
                          
                          <div className="text-white/70 text-sm">
                            Hover to explore
                          </div>
                        </div>

                        {/* Answer Content */}
                        <div className={`absolute inset-8 flex flex-col justify-center transition-all duration-500 ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                          <div className="mb-4">
                            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${item.accent} shadow-lg mb-4`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          
                          <div className="text-white/80 text-xs font-medium uppercase tracking-wider mb-3">
                            {item.category}
                          </div>
                          
                          <p className="text-white/95 text-sm leading-relaxed font-light">
                            {item.answer}
                          </p>
                        </div>
                      </div>

                      {/* Subtle border accent */}
                      <div className={`absolute bottom-0 left-0 w-full h-1 ${item.accent} opacity-60 transition-opacity duration-500`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 gap-2">
            {Array.from({ length: Math.ceil(offeringsData.length / visibleCards) }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / visibleCards) === index
                    ? 'bg-gray-700 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-medium text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 mx-auto group">
            <span>Begin Your Journey</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveOfferingsCarousel;