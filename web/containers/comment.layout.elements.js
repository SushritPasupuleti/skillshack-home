import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

export const LayoutContainer = styled(Grid)`
max-width: 1000px;
margin-right: auto;
margin-left: auto;
margin-top: 1rem;
  display: grid;
    gap: 20px;
    grid-template-columns: auto 1fr 1fr;
    grid-template-areas:
      "left-side-nav content content"
      "left-side-nav content content"
      "left-side-nav content content"
      "left-side-nav bottom bottom";
`

export const LayoutThread = styled(Grid)`
  grid-area: content;
`

export const LayoutLeftSideNav = styled(Grid)`
  grid-area: left-side-nav;
`

export const LayoutBottom = styled(Grid)`
  grid-area: bottom;
`