import heroImg1 from '../assets/images/hero-img05.png'

const Home = () => {
  return <>
    <section className="hero__section pt-[80px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

          {/* Hero content */}
          <div>
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                Consultorios médicos. <br /> <span className="text-primaryColor">Tu salud, nuestra prioridad</span>
              </h1>
              <p className="text__para w-[90%]">
                Contamos con los mejores profesionales de la salud para brindarte la mejor atención y servicio.
              </p>

              <button className="btn"> Agendar un turno.</button>
            </div>

            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[50px]">
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">35+</h2>
                <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]" ></span>
                <p className="text__para">Profesionales</p>
              </div>
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">10+</h2>
                <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]" ></span>
                <p className="text__para">Especialidades</p>
              </div>
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]" ></span>
                <p className="text__para">Años de experiencia</p>
              </div>
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">5500+</h2>
                <span className="w-[100px] h-2 bg-primaryColor rounded-full block mt-[-14px]" ></span>
                <p className="text__para">Pacientes satisfechos</p>
              </div>

            </div>

          </div>

          {/* Hero image */}
          <div className="flex gap-[30px] justify-end">
            <div>
              <img src={heroImg1} alt="hero" />
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
}

export default Home