

const TestimonalComp = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-brand-black mb-12">
          What Parents & Students Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-brand-red">
                  ★
                </span>
              ))}
            </div>
            <p className="text-brand-grey mb-4">
              "C'est Joli has transformed my child's educational journey. The
              teachers are dedicated and the curriculum is comprehensive. Highly
              recommended!"
            </p>
            <div>
              <h4 className="font-bold text-brand-black">Mrs. Amina Okafor</h4>
              <p className="text-sm text-brand-grey">Parent, Primary School</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-brand-red">
                  ★
                </span>
              ))}
            </div>
            <p className="text-brand-grey mb-4">
              "The multilingual environment and focus on character development
              have made such a difference in my life. I've grown academically
              and personally."
            </p>
            <div>
              <h4 className="font-bold text-brand-black">Chisom Mgbemena</h4>
              <p className="text-sm text-brand-grey">
                Student, Secondary School
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-brand-red">
                  ★
                </span>
              ))}
            </div>
            <p className="text-brand-grey mb-4">
              "Excellent facilities, passionate educators, and a welcoming
              community. My daughter loves coming to school every day!"
            </p>
            <div>
              <h4 className="font-bold text-brand-black">Engr. John Obi</h4>
              <p className="text-sm text-brand-grey">Parent, Primary School</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonalComp
