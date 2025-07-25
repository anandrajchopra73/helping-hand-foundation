"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock } from "lucide-react"

export default function Events() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const events = [
    {
      date: "27-29 June 2025",
      title: "Canva Workshop for Beginners",
      location: "Online",
      time: "7:00 PM",
      description:
        "We are thrilled to announce that the Canva Workshop starts today! 🎉 This beginner-friendly session is being organized by the Helping Hand Foundation to empower students and creative minds through the power of design.",
      image: "/canva.jpg",
    },
    {
      date: "revealed soon",
      title: "Google Workspace Workshop",
      location: "Online",
      time: "revealed soon",
      description:
        "revealed soon.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, events.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="events" className="py-20 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Upcoming Events</h2>
          <p className="text-lg text-egg-nog max-w-3xl mx-auto">
            Join us at our upcoming events and be part of the movement to make education accessible for all.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-lg bg-white/20 backdrop-blur-sm border border-white/20">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {events.map((event, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Event Image */}
                    <div className="relative">
                      <div
                        className="h-64 md:h-80 bg-gradient-to-br from-egg-nog/30 to-mustard/30 rounded-lg bg-cover bg-center"
                        style={{ backgroundImage: `url(${event.image})` }}
                      ></div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className="text-copper" />
                          <span className="text-sm font-semibold text-garnet">{event.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{event.title}</h3>
                      <p className="text-egg-nog mb-6 leading-relaxed">{event.description}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3">
                          <MapPin size={18} className="text-egg-nog" />
                          <span className="text-egg-nog">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock size={18} className="text-egg-nog" />
                          <span className="text-egg-nog">{event.time}</span>
                        </div>
                      </div>

                      <button className="bg-white/30 hover:bg-white/40 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 border border-white/40 w-fit">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors duration-200 border border-white/30"
            aria-label="Previous event"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors duration-200 border border-white/30"
            aria-label="Next event"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-egg-nog hover:text-white transition-colors duration-200 text-sm"
          >
            {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
          </button>
        </div>
      </div>
    </section>
  )
}
