import { Typography as T } from 'antd';

const { Title: Ti } = T;

export const Title = ({ children, level, ellipsis }) => (
  <Ti level={level} ellipsis={ellipsis}>
    {children}
  </Ti>
)
