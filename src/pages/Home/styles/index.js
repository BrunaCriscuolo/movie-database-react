import styled from 'styled-components';

import { Header as H } from '../../../components/atoms/Layout';

import { Colors, Shadows } from '../../../variables'

const { white } = Colors
const { shadowDark12 } = Shadows

export const Header = styled(H)`
  &.ant-layout-header{
    box-shadow: ${shadowDark12};
    a{
      &.ant-typography{
        color: ${white};
        font-size: 1rem;
      }
    }
  }
`
