import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {
    makeStyles,
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';

import { ColumnToRow, Item } from '@mui-treasury/components/flex';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import {
    EmailSubscribe,
    EmailTextInput,
    SubmitButton,
} from '@mui-treasury/components/EmailSubscribe';
import {
    CategoryProvider,
    CategoryTitle,
    CategoryItem,
} from '@mui-treasury/components/menu/category';
import {
    SocialProvider,
    SocialLink,
} from '@mui-treasury/components/socialLink';

import { useMagCategoryMenuStyles } from '@mui-treasury/styles/categoryMenu/mag';
import { usePoofSocialLinkStyles } from '@mui-treasury/styles/socialLink/poof';
import { useReadyEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/ready';
import { usePlainNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/plain';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import next from 'next';

const darkTheme = createMuiTheme({ palette: { type: 'dark' } });

const useStyles = makeStyles(({ palette, typography }) => ({
    top: {
        backgroundSize: 'cover',
        overflow: 'hidden',
    },
    middle: {
        backgroundColor: palette.type === 'dark' ? '#192D36' : palette.action.hover,
    },
    bottom: {
        backgroundColor:
            palette.type === 'dark' ? '#0F2128' : palette.action.selected,
    },
    newsletterText: {
        color: '#fff',
        // pSize: '0.875rem',
        textTransform: 'uppercase',
    },
    form: {
        margin: 0,
        minWidth: 343,
        pSize: '0.875rem',
    },
    legalLink: {
        textTransform: 'uppercase',
        pWeight: 'bold',
        pSize: '0.75rem',
        justifyContent: 'center',
        color: palette.text.hint,
        letterSpacing: '0.5px',
    },
    divider: {
        height: 2,
        margin: '-1px 0',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        filter: 'grayscale(80%)',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
    },
    info: {
        ...typography.body1,
        color: palette.text.hint,
        marginTop: 8,
    }
}));

export default function Footer(props) {
    const classes = useStyles();
    return (
        <Box width={'100%'}>
            <Box px={2} py={6} className={classes.top} position={'relative'}>
                <div className={classes.overlay}>
                    <img
                        src={
                            'https://images.unsplash.com/photo-1547954575-855750c57bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        alt={''}
                    />
                </div>
                <ThemeProvider theme={darkTheme}>
                    <ColumnToRow
                        at={'sm'}
                        cssPosition={'relative'}
                        columnStyle={{ alignItems: 'center', textAlign: 'center' }}
                        rowStyle={{ justifyContent: 'center' }}
                        gap={{ xs: 2, sm: 3, md: 4 }}
                        wrap
                    >
                        <Item>
                            <Typography className={classes.newsletterText}>
                                <a>Get Subscribed for Updates</a>
                            </Typography>
                        </Item>
                        <Item>
                            <Button variant="contained" color="primary" endIcon={<NavigateNextIcon/>}>Notify Me</Button>
                        </Item>
                    </ColumnToRow>
                </ThemeProvider>
            </Box>
            <Box px={2} py={10} className={classes.middle}>
                <Container disableGutters>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4} lg={3}>
                            <Box
                                component={'img'}
                                mt={-3}
                                width={200}
                                height={55}
                                src="/letterLogoClippedColored.png"
                                alt=""
                                borderRadius={12}
                            />
                            <Typography className={classes.info}>
                                <a index={1}>
                                    skillShack by Braggi Solutions
                  </a>
                            </Typography>

                            <Typography className={classes.info}>
                                <a href="mailto:info.braggi@gmail.com">
                                    info.braggi@gmail.com
                  </a>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={8} lg={6}>
                            <Grid container spacing={2}>
                                {/* <Grid item xs={6} sm={4}>
                                    <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                                        <CategoryTitle>
                                            <a>Products</a>
                                        </CategoryTitle>
                                        <CategoryItem>
                                            <a index={1}>Snowflake Free</a>
                                        </CategoryItem>
                                        <CategoryItem>
                                            <a index={1}>Coloristic</a>
                                        </CategoryItem>
                                        <CategoryItem>
                                            <a index={1}>Summer free</a>
                                        </CategoryItem>
                                        <CategoryItem>
                                            <a index={1}>Lucky store</a>
                                        </CategoryItem>
                                    </CategoryProvider>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                                        <CategoryTitle>
                                            <a>Information</a>
                                        </CategoryTitle>
                                        <CategoryItem>
                                            <a index={1}>License</a>
                                        </CategoryItem>
                                        <CategoryItem>
                                            <a index={1}>Privacy Policy</a>
                                        </CategoryItem>
                                        <CategoryItem>
                                            <a index={1}>Releases</a>
                                        </CategoryItem>
                                        <CategoryItem>
                                            <a index={1}>FAQ</a>
                                        </CategoryItem>
                                    </CategoryProvider>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                                        <CategoryTitle>
                                            <a>About</a>
                                        </CategoryTitle>
                                        <CategoryItem>
                                            <a index={1}>Contact</a>
                                        </CategoryItem>
                                        <CategoryItem>
                                            <a index={1}>Team</a>
                                        </CategoryItem>
                                        <CategoryItem>
                                            <a index={1}>Support</a>
                                        </CategoryItem>
                                    </CategoryProvider>
                                </Grid> */}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={8} lg={3} style={{ marginLeft: 'auto' }}>
                            <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                                <CategoryTitle>
                                    <a>Subscribe</a>
                                </CategoryTitle>
                            </CategoryProvider>
                            <SocialProvider useStyles={usePoofSocialLinkStyles}>
                                <SocialLink brand={'Twitter'} />
                                <SocialLink brand={'Instagram'} />
                                <SocialLink brand={'GithubCircle'} />
                            </SocialProvider>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container disableGutters>
                <Divider className={classes.divider} />
            </Container>
            <Box px={2} py={3} className={classes.bottom}>
                <Container disableGutters>
                    <ColumnToRow
                        at={'md'}
                        columnStyle={{ alignItems: 'center' }}
                        rowStyle={{ alignItems: 'unset' }}
                    >
                        <Item grow ml={-2} shrink={0}>
                            {/* <NavMenu useStyles={usePlainNavigationMenuStyles}>
                                <ColumnToRow at={'sm'}>
                                    <NavItem className={classes.legalLink}>
                                        <a>Terms & Conditions</a>
                                    </NavItem>
                                    <NavItem className={classes.legalLink}>
                                        <a>Privacy Policy</a>
                                    </NavItem>
                                    <NavItem className={classes.legalLink}>
                                        <a>Sitemap</a>
                                    </NavItem>
                                </ColumnToRow>
                            </NavMenu> */}
                        </Item>
                        <Item>
                            <Box py={1} textAlign={{ xs: 'center', md: 'right' }}>
                                <Typography
                                    component={'p'}
                                    variant={'caption'}
                                    color={'textSecondary'}
                                >
                                    <a index={1}>
                                        Designed by Braggi Solutions 2021 All right
                                        reserved
                    </a>
                                </Typography>
                            </Box>
                        </Item>
                    </ColumnToRow>
                </Container>
            </Box>
        </Box>
    );
};