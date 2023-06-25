import React from 'react'

const About = () => {
  return (
    <>
    <main className="h-screen container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">About Us</h1>
    <p className="mb-6">We are a research repository website that aims to make research papers accessible to
      everyone. Our platform takes PDFs of research papers, analyzes them, and puts them online for easy access.</p>
    <p className=" mb-6">We use state-of-the-art technology and algorithms to extract key information from
      research papers and make them searchable. Our platform categorizes papers based on different topics and provides
      advanced search capabilities to find relevant research.</p>
    <p className=" mb-6">We are committed to fostering collaboration and knowledge sharing in the academic
      community. Researchers, students, and anyone interested in academic research can benefit from our platform.</p>
    <p className="mb-6">Join our growing community and explore a vast collection of research papers across
      various disciplines.</p>
  </main>

  <footer className="bg-black text-white py-4">
    <div className="container mx-auto px-4">
      <p className="text-center text-gray-400">© 2023 Research Repository. All rights reserved.</p>
    </div>
  </footer>
    </>
  )
}

export default About