import { Typography } from 'antd';

const { Text: Txt } = Typography;

export const Text = ({ children, ellipsis }) => (
  <Txt ellipsis={ellipsis}>
    {children}
  </Txt>
)

