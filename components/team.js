"use client"

import { useState } from "react"

export default function Team() {
  const teamMembers = [
    // Board of Trustees
    {
      name: "Aditi Chauhan",
      role: "Board of Trustee",
      category: "trustee",
      image: "/aditi (1).jpg",
      bio: "Aditi Chauhan, the founder of Helping Hand Foundation, has embarked on a journey driven by purpose and compassion. With a passion for creating positive impact, she leverages her skills and experience to amplify meaningful causes. Starting with small gestures, Her's vision has grown into a larger mission, dedicated to providing essential support to those in hands. With extensive experience working with NGOs and communities, she has learned the value of ground-level impact and the power of collective efforts. Under her leadership, Helping Hand Foundation focuses on education, food, healthcare, and support for communities. 'Empowering others is the greatest legacy we can leave behind'.Through Helping Hand Foundation, aims to inspire a ripple effect of kindness and generosity, empowering individuals and communities to thrive. With every step forward, she remains committed to the foundation's core values of empathy, compassion, and service. 'Compassion is the bridge that connects us all.'-Aditi Chauhan",
    },
    {
      name: "Vaibhav Thakur",
      role: "Board of Trustee",
      category: "trustee",
      image: "/vaibhav (1).jpg",
      bio: "Vaibhav Thakur, the founder of Helping Hand Foundation, comes from a family with a strong background in construction and finance, with their own loan business running for the past 6 years. However, Vaibhav chose a different path—one rooted in creativity and purpose. Starting as a freelancer, he went on to establish his own creative agency, using design to amplify meaningful causes. His passion for helping others turned small gestures—like birthday donations—into a larger mission.With 3+ years of experience working with NGOs across India, he learned the value of ground-level impact and real stories. Under his leadership, Helping Hand Foundation is working towards education, food, healthcare, and essential support for those in need.The journey continues, but the vision remains clear: to reach more people, bring hope, and create lasting change. “Helping Hand is not just a foundation—it’s a promise.” – Vaibhav Thakur",
    },
    {
      name: "Manikant Thakur",
      role: "Board of Trustee",
      category: "trustee",
      image: "/manipal thakur (1).jpg",
      bio: "'Empowering innovation is the key to a brighter future'Manikant Kumar, the founder of Helping Hand Foundation, hails from a family with a strong entrepreneurial background, having their own successful business. However, Manikant chose a different path—one rooted in compassion and service Driven by a passion to help those in need, he founded Helping Hand Foundation,transforming his desire to make a difference into a larger mission. Under his leadership, the foundation is dedicated to providing essential support to the underprivileged, focusing on initiatives that bring hope and create lasting change.Helping Hand Foundation is not just an organization—it's a commitment to serve humanity. – Manikant Kumar.With a clear vision to reach more people and make a meaningful impact, Manikant continues to lead the foundation towards a brighter future for those in need.",
    },
    // Board of Directors
    {
      name: "Tiya Mittal",
      role: "Board of Director",
      category: "director",
      image: "/tiya mittle (1).jpg",
      bio: "'Every action, no matter how small, contributes to the larger tapestry of change we are weaving together. Let us continue to be inspired by the individuals we serve.'",
    },
    {
      name: "Ruchika Agarwal",
      role: "Cheif of Core (COC)",
      category: "director",
      image: "/ruchika agarwal (1).jpg",
      bio: "'We are not just partners; we are co-creators of a better world, each playing a vital role in this journey.'",
    },
  ]

  const [expandedTrustees, setExpandedTrustees] = useState({})

  const toggleTrusteeExpansion = (index) => {
    setExpandedTrustees((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <section id="team" className="py-20 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Leadership</h2>
          <p className="text-lg text-egg-nog max-w-3xl mx-auto">
            Meet our dedicated Board of Trustees and Board of Directors who guide our mission and ensure we make the
            greatest impact in the communities we serve.
          </p>
        </div>

        <div className="space-y-16">
          {/* Board of Trustees */}
          <div>
            <h3 className="text-3xl font-semibold text-center text-egg-nog mb-8">Board of Trustees</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers
                .filter((member) => member.category === "trustee")
                .map((member, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-white/20"
                  >
                    <div className="h-60 w-full overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className=" h-half w-full object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                      <p className="text-egg-nog font-medium mb-3">{member.role}</p>
                      <p className="text-egg-nog/80 leading-relaxed">
                        {expandedTrustees[index] ? member.bio : `${member.bio.substring(0, 150)}...`}
                      </p>
                      <button
                        onClick={() => toggleTrusteeExpansion(index)}
                        className="mt-3 text-egg-nog hover:text-white transition-colors duration-200 text-sm font-medium underline"
                      >
                        {expandedTrustees[index] ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Board of Directors */}
          <div>
            <h3 className="text-3xl font-semibold text-center text-egg-nog mb-8">Board Members</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers
                .filter((member) => member.category === "director")
                .map((member, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-white/20"
                  >
                    <div className="h-60 w-full overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="h-half w-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                      <p className="text-egg-nog font-medium mb-3">{member.role}</p>
                      <p className="text-egg-nog/80">{member.bio}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
