import { Col as Cl } from 'antd';

export const Col = ({ children, flex, span, xs, sm, md, lg, xl, xxl }) => (
  <Cl flex={flex} span={span} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
    {children}
  </Cl>
)
