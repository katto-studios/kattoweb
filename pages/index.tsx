import { useRouter } from 'next/router';
import {
  Alert,
  Badge,
  Button,
  Carousel,
  Col,
  Container,
  Image,
  Row,
  Stack,
} from 'react-bootstrap';
import { articlesList } from '../articles';
import Profile from '../components/Profile';
import Service from '../components/Service';
import ServiceIcon from '../components/ServiceIcon';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Container
        style={{
          paddingTop: 70,
          background: `url("/5bg.jpg") no-repeat center center`,
          backgroundSize: 'cover',
          height: '100vh',
          textAlign: 'center',
          color: 'var(--bs-light)',
        }}
        fluid>
        <h1 style={{ marginTop: '30vh' }}>Artisans of the digital age</h1>
        <p>
          We create hand-crafted interactive digital solutions that stand out.
        </p>
        <ServiceIcon url="/service-icons/icons8-react.svg" />
        <ServiceIcon url="/service-icons/icons8-typescript.svg" />
        <ServiceIcon url="/service-icons/icons8-unity.svg" />
        <ServiceIcon url="/service-icons/icons8-amazon-web-services.svg" />
        <ServiceIcon url="/service-icons/icons8-postgresql.svg" />
        <ServiceIcon url="/service-icons/icons8-3ds-max.svg" />
        <ServiceIcon url="/service-icons/Threejs-logo.svg" />
      </Container>
      <Container className="pt-5 pb-5 bg-dark text-light" fluid>
        <Container fluid="sm">
          <p className="text-secondary">Our services</p>
          <Row>
            <Col sm>
              <Service
                header="🎮 Interactive Media/Game Development Services"
                content="Specialising in, but not limited to, Unity3d and Web, we dedicate ourselves to building Web and Native applications available across all modern platforms*. From 'Edu-tech' to your dream game, bring your dream projects to life with us."
              />
            </Col>
            <Col sm>
              <Service
                header="💻 Cutting Edge Web Solutions"
                content="Reinvigorate your website with custom built web experiences - from unique responsive web applications to engaging 3D experiences powered by ThreeJS. Deployment, web hosting and maintenance services are also provided."
              />
            </Col>
            <Col sm>
              <Service
                header="🏗️ Rapid Prototyping"
                content="For projects in its preliminary phase, we can model affordable and quick MVPs to validate your ideas at a low cost. These projects will be built on open source and in-house boilerplates and templates to bring the product to life as quickly as possible."
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid style={{ height: '80vh', padding: 0 }}>
        <Carousel fade>
          {articlesList.map((article) => (
            <Carousel.Item>
              <div
                className="d-block w-100"
                style={{
                  background: `url("${article.thumbnailUrl}") no-repeat center center`,
                  boxShadow: '0 -150px 150px rgba(0,0,0,0.8) inset',
                  backgroundSize: 'cover',
                  height: '80vh',
                  textAlign: 'center',
                  color: 'var(--bs-light)',
                }}></div>
              <Carousel.Caption>
                <Container
                  className="pt-4 pb-4"
                  fluid="sm"
                  // style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                >
                  <h3>{article.title}</h3>
                  {article.tags.map((tag, i) => (
                    <Badge className="mx-1" bg="secondary" key={i}>
                      {tag}
                    </Badge>
                  ))}
                  <p className="mt-3">{article.summary}</p>
                  <Button
                    className="mx-1"
                    onClick={() => router.push(`gallery`)}
                    variant="outline-primary">
                    Gallery
                  </Button>
                  <Button
                    className="mx-1"
                    onClick={() => router.push(`article/${article.id}`)}>
                    Read more about {article.title}
                  </Button>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      <Container className="mt-5" fluid="sm">
        <h2 className="mt-5 mb-5" style={{ textAlign: 'center' }}>
          💡 Meet the team 💡
        </h2>
        <Row>
          <Col sm>
            <Profile
              url="/peeps/ryan.png"
              name="Ryan Tan"
              role="Founder, Frontend Engineer"
              content="Web Application Development, UI/UX design, Game Programming"
              color="#EFBBCF"
            />
          </Col>
          <Col sm>
            <Profile
              url="/peeps/tiong.png"
              name="Tan Tiong Guan"
              role="Co-Founder, Backend Engineer"
              content="Game Server Development, Cloud Deployment, Database Management, Game Programming"
              color="#A3D2CA"
            />
          </Col>
          <Col sm>
            <Profile
              url="/peeps/park.png"
              name="Daniel Park"
              role="Co-Founder, Creative Director"
              content="3D Modelling and Texturing, 2D Art and Illustration, Game Design and Programming"
              color="#99F3F5"
            />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 pt-5 pb-5 mb-5 bg-dark text-light" fluid>
        <Container>
          <h1>Get in touch!</h1>
          <p>
            We would love to hear about your projects and ideas, and help to
            bring them to life.
          </p>
          <Stack direction="horizontal" gap={3}>
            <Button
              onClick={() =>
                (document.location = 'mailto:contact@katto.studio')
              }>
              Email contact@katto.studio
            </Button>
          </Stack>
        </Container>
      </Container>
    </>
  );
}
