import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
  {
    id: 1,
    name: 'John Wills',
    description: 'Our client testimonials reflect the trust and satisfaction we’ve built through dedication, quality, and results. Each review highlights our commitment to excellence, timely delivery, and personalized solutions. Their positive experiences inspire us to keep improving and delivering value. Happy clients are the true measure of our success and growth',
    designation: 'Manager'
  },
  {
    id: 2,
    name: 'Jasmine Perry',
    description: 'Our client testimonials reflect the trust and satisfaction we’ve built through dedication, quality, and results. Each review highlights our commitment to excellence, timely delivery, and personalized solutions. Their positive experiences inspire us to keep improving and delivering value. Happy clients are the true measure of our success and growth',
    designation: 'Accountant'
  },
  {
    id: 3,
    name: 'Rocky Johnson',
    description: 'Our client testimonials reflect the trust and satisfaction we’ve built through dedication, quality, and results. Each review highlights our commitment to excellence, timely delivery, and personalized solutions. Their positive experiences inspire us to keep improving and delivering value. Happy clients are the true measure of our success and growth.',
    designation: 'CEO'
  }
]

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;