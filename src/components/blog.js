import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
  {
    id: 1,
    image: require('../assets/images/blog1.jpg'),
    time: '15 Nov 2016',
    title: 'Coffee Lovers',
    description: 'Coffee lovers are passionate about rich flavors, comforting aromas, and the energizing boost every cup brings. They cherish the ritual of brewing, whether it’s a quick espresso, creamy latte, or slow-brewed pour-over. For coffee enthusiasts, each sip is more than a drink—it’s an experience, a lifestyle, and a daily joy.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../assets/images/blog2.jpg'),
    time: '10 Nov 2016',
    title: 'Tips for UI Design',
    description: 'Effective UI design focuses on simplicity, consistency, and usability. Keep layouts clean, ensure responsive adaptability across devices, and use a clear visual hierarchy to guide users. Provide feedback through interactions, maintain accessibility for all, and test regularly. A user-friendly interface enhances',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/blog3.jpg'),
    time: '07 Nov 2016',
    title: 'Beautiful Day',
    description: 'A beautiful day is filled with positivity, warmth, and inspiration. It brings clear skies, gentle breezes, and moments that uplift the soul. Whether spent outdoors enjoying nature or indoors creating memories, a beautiful day reminds us to appreciate life’s simple joys, spread happiness, and embrace every',
    link: 'https://www.twitter.com'
  }
]

function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest from blog</h2>
          <div className="subtitle">get our latest news from blog</div>
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={4} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                        <a href={blog.link} className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppBlog;