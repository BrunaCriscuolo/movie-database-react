import { Layout as L } from 'antd';

export const Layout = ({ children, hasSider, className }) => (
  <L hasSider={hasSider} className={className}>
    {children}
  </L>
)
