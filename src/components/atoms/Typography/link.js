import { Typography } from 'antd';

const { Link: Lnk } = Typography;

export const Link = ({ children, href, target }) => (
  <Lnk href={href} target={target}>
    {children}
  </Lnk>
)
