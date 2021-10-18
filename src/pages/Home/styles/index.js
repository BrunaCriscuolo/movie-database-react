import styled from 'styled-components';

import { Header as H } from '../../../components/atoms/Layout';

import { Colors } from '../../../variables'

const { white } = Colors

export const Header = styled(H)`
  &.ant-layout-header{
    a{
      &.ant-typography{
        color: ${white};
        font-size: 1rem;
      }
    }
  }
`
