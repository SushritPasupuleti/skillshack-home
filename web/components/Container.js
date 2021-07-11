import Container from '@material-ui/core/Container';

export default function ContainerWrapper({ children }) {
    return <Container style={{maxWidth: "1000px"}} maxWidth="md" style={{padding: '5px'}}>{children}</Container>
  }
  