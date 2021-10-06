import { Row as Rw } from 'antd';

export const Row = ({ align, gutter, justify, wrap, children }) => (
  <Rw align={align} gutter={gutter} justify={justify} wrap={wrap}>
    {children}
  </Rw>
)
