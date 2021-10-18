import { Layout } from '../../components/atoms/Layout';
import { Image } from '../../components/atoms/Image/image';
import { Link } from '../../components/atoms/Typography/typography';
import { Row, Col } from '../../components/atoms/Grid/grid';

import Logo from '../../assets/images/logo.jpeg'

import { Header } from './styles';

export const Home = () => (
  <Layout>
    <Header>
      <Row gutter='24'>
        <Col>
          <Image src={Logo} width={200} />
        </Col>
        <Col>
          <Link href='/'>Filmes</Link>
        </Col>
        <Col>
          <Link href='/'>Séries</Link>
        </Col>
        <Col>
          <Link href='/'>Pessoas</Link>
        </Col>
        <Col>
          <Link href='/'>Mais</Link>
        </Col>
      </Row>
    </Header>
  </Layout>
);
