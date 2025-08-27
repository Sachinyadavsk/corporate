import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Responsive Design',
    description: 'Responsive design makes websites adapt to all devices—desktop, tablet, and mobile—ensuring smooth navigation, readable text, and clear visuals. It uses flexible layouts, images, and CSS media queries to adjust automatically. This improves user experience, boosts SEO, increases engagement, and delivers a consistent brand presence across different screen sizes seamlessly.'
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Creative Design',
    description: 'Creative design blends imagination, strategy, and visual storytelling to craft engaging experiences that capture attention and inspire action. It goes beyond aesthetics, combining colors, typography, layouts, and concepts to communicate messages effectively. Whether in branding, advertising, or digital platforms, creative design transforms ideas into powerful visuals that leave lasting impressions.'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'SEO Optimized',
    description: 'SEO optimized content is crafted to rank higher on search engines by using strategic keywords, clear structure, and relevant information. It ensures websites gain visibility, attract organic traffic, and engage the right audience. With optimized titles, meta descriptions, headings, and quality content, SEO enhances reach, credibility, and long-term online growth.'
  },
  {
    id: 4,
    icon: 'fas fa-desktop',
    title: 'Retina Ready',
    description: 'Retina Ready design ensures visuals appear crisp, sharp, and high-quality on high-resolution screens like Apple’s Retina displays. It uses scalable graphics, optimized images, and responsive elements to prevent blurriness or pixelation. A Retina Ready website enhances user experience, professionalism, and brand appeal by delivering clear visuals across all modern devices.'
  },
  {
    id: 5,
    icon: 'fas fa-trophy',
    title: 'Brower Compatibility',
    description: 'Browser compatibility ensures a website functions and displays correctly across all major web browsers, including Chrome, Firefox, Safari, and Edge. It involves using standardized coding practices, responsive layouts, and thorough testing to avoid errors or inconsistencies. With strong browser compatibility, users enjoy a seamless experience regardless of their preferred browser.'
  },
  {
    id: 6,
    icon: 'fas fa-life-ring',
    title: 'Customer Support',
    description: 'Customer support is the service provided to assist users before, during, and after their experience with a product or service. It ensures quick resolutions, answers queries, and builds trust through effective communication. Quality customer support—via chat, email, or phone—enhances satisfaction, loyalty, and strengthens long-term relationships between businesses and their customers.'
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">services we provide</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;