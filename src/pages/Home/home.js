import { Image } from '../../components/atoms/Image/image'
import { Title, Text, Link } from '../../components/atoms/Typography/typography'

export const Home = () => (
  <>
    <Image width={150} src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' alt='imagem de uma mulher feia' />
    <Title>
      Bruna Magalhães
    </Title>
    <Title level={2}>
      Sou linda!
    </Title>
    <Text> Isso é um teste</Text>
    <Link href='/'>Clique aqui!</Link>
  </>
);
