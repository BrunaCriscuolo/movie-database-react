import { Typography } from 'antd';

const { Title: Tlt } = Typography;

export const Title = ({ children, level, ellipsis }) => (
  <Tlt level={level} ellipsis={ellipsis}>
    {children}
  </Tlt>
)
