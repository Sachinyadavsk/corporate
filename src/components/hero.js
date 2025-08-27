import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpg'),
    title: 'The perfect design for your website',
    description: 'The perfect design for your website—clean, responsive, fast, and tailored to convert visitors into customers.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../assets/images/img-hero2.jpg'),
    title: 'Start Your Future Financial Plan',
    description: 'Start your future financial plan today—set clear goals, save consistently, invest wisely, and secure long-term stability for lasting financial freedom.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpg'),
    title: 'Enjoy the Difference',
    description: 'Enjoy the difference—experience smarter choices, greater opportunities, and a lifestyle upgrade that brings confidence, comfort, and lasting satisfaction daily.',
    link: 'https://www.twitter.com'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {
          heroData.map(hero => {
            return (
              <Carousel.Item key={hero.id}>
                <img
                  className="d-block w-100"
                  src={hero.image}
                  alt={"slide " + hero.id}
                />
                <Carousel.Caption>
                  <h2>{hero.title}</h2>
                  <p>{hero.description}</p>
                  <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        }
      </Carousel>
    </section>
  );
}

export default AppHero;