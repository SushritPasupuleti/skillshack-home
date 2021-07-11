import Container from '@material-ui/core/Container';

export default function ContainerWrapper({ children }) {
    return <Container maxWidth="sm" style={{padding: '5px'}}>{children}</Container>
  }
  