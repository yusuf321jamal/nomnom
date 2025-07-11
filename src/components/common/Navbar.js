'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import NextLink from 'next/link';

import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Container,
    Divider,
    InputBase,
    Paper,
    ClickAwayListener,
    Slide,
    useScrollTrigger
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/constants/navItems';

function HideOnScroll({ children }) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:990px)');
    const pathname = usePathname();

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const searchBoxRef = useRef(null);

    useEffect(() => {
        if (showSearch) {
            searchBoxRef.current?.focus();
        }
    }, [showSearch]);

    useEffect(() => {
        if (!isMobile && drawerOpen) {
            setDrawerOpen(false);
        }
    }, [isMobile, drawerOpen]);

    return (
        <HideOnScroll>
            <AppBar position="sticky" sx={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(6px)', zIndex: 1201 }} elevation={4}>
                <Container maxWidth="lg" disableGutters>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 1, gap: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <Image
                                src="./logo-nom-nom2.webp"
                                alt="Nom Nom Logo"
                                width={80}
                                height={75}
                                style={{ transition: 'transform 0.3s ease' }}
                                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            />
                        </Box>

                        {isMobile ? (
                            <IconButton
                                edge="end"
                                onClick={() => setDrawerOpen(true)}
                                sx={{ color: 'white', marginLeft: 'auto' }}
                                aria-label="Open navigation menu"
                            >
                                <MenuIcon fontSize="large" />
                            </IconButton>
                        ) : (
                            <>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexGrow: 1, justifyContent: 'center' }}>
                                    {NAV_ITEMS.map((item, index) => (
                                        <Typography
                                            key={index}
                                            component={NextLink}
                                            href={item.href}
                                            sx={{
                                                color: pathname === item.href ? 'orange' : 'white',
                                                fontSize: '1rem',
                                                fontWeight: pathname === item.href ? 600 : 400,
                                                cursor: 'pointer',
                                                textDecoration: 'none',
                                                transition: 'color 0.3s',
                                                position: 'relative',
                                                '&:hover': { color: 'orange' },
                                                '&::after': pathname === item.href
                                                    ? {
                                                        content: '""',
                                                        position: 'absolute',
                                                        bottom: -6,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '2px',
                                                        backgroundColor: 'orange',
                                                    }
                                                    : {},
                                            }}
                                        >
                                            {item.label}
                                        </Typography>
                                    ))}
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, position: 'relative' }}>
                                    <IconButton
                                        sx={{ color: 'white', '&:hover': { color: 'orange' } }}
                                        aria-label="Search"
                                        onClick={() => setShowSearch(true)}
                                    >
                                        <SearchIcon />
                                    </IconButton>

                                    {showSearch && (
                                        <ClickAwayListener onClickAway={() => setShowSearch(false)}>
                                            <Paper
                                                elevation={4}
                                                sx={{
                                                    position: 'absolute',
                                                    top: '40px',
                                                    left: 0,
                                                    zIndex: 2000,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    px: 2,
                                                    py: 1,
                                                    borderRadius: '8px',
                                                    width: 300,
                                                }}
                                            >
                                                <InputBase
                                                    inputRef={searchBoxRef}
                                                    placeholder="Search..."
                                                    sx={{ width: '100%' }}
                                                />
                                            </Paper>
                                        </ClickAwayListener>
                                    )}

                                    <Typography color="orange" fontWeight="bold" sx={{ fontSize: '0.95rem' }}>
                                        +91 99168 69595
                                    </Typography>

                                    <IconButton
                                        sx={{ color: 'white', '&:hover': { color: 'orange' } }}
                                        aria-label="Instagram"
                                        component="a"
                                        href="https://www.instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <InstagramIcon />
                                    </IconButton>

                                    <Button
                                        variant="outlined"
                                        component={NextLink}
                                        href="/login"
                                        sx={{
                                            color: 'orange',
                                            borderColor: 'rgba(255, 165, 0, 0.2)',
                                            fontWeight: 'bold',
                                            borderRadius: '20px',
                                            textTransform: 'none',
                                            px: 2.5,
                                            py: 0.6,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                bgcolor: '#fff3e0',
                                                borderColor: '#ffa726',
                                            },
                                        }}
                                    >
                                        Sign in
                                    </Button>

                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: 'orange',
                                            color: 'black',
                                            fontWeight: 'bold',
                                            borderRadius: '20px',
                                            px: 3,
                                            textTransform: 'none',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                            '&:hover': {
                                                bgcolor: '#ffb84d',
                                            },
                                        }}
                                    >
                                        Contact Us
                                    </Button>
                                </Box>
                            </>
                        )}
                    </Toolbar>
                </Container>

                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    PaperProps={{
                        sx: {
                            width: { xs: 260, sm: 350 },
                            bgcolor: 'rgba(0, 0, 0, 0.6)',
                            backdropFilter: 'blur(4px)',
                            color: 'white',
                            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                            borderTopLeftRadius: '10px',
                            borderBottomLeftRadius: '10px',
                        },
                    }}
                    ModalProps={{ sx: { zIndex: 1300 } }}
                >
                    <Box sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box>
                            <Box display="flex" justifyContent="flex-end" mb={2}>
                                <IconButton
                                    onClick={() => setDrawerOpen(false)}
                                    sx={{
                                        bgcolor: 'rgba(255,255,255,0.08)',
                                        '&:hover': {
                                            bgcolor: 'rgba(255,255,255,0.15)',
                                        },
                                        color: 'white',
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </Box>

                            <Paper
                                elevation={2}
                                sx={{
                                    mb: 3,
                                    display: 'flex',
                                    alignItems: 'center',
                                    px: 2,
                                    py: 1,
                                    borderRadius: '20px',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                }}
                            >
                                <SearchIcon sx={{ color: 'white', mr: 1 }} />
                                <InputBase
                                    placeholder="Search..."
                                    inputProps={{ 'aria-label': 'search' }}
                                    sx={{ color: 'white', width: '100%', fontSize: '0.9rem' }}
                                />
                            </Paper>

                            <List>
                                {NAV_ITEMS.map((item, index) => (
                                    <ListItem
                                        key={index}
                                        component={NextLink}
                                        href={item.href}
                                        button
                                        onClick={() => setDrawerOpen(false)}
                                        sx={{
                                            borderRadius: 2,
                                            mb: 1,
                                            transition: 'all 0.3s ease',
                                            bgcolor: pathname === item.href ? 'rgba(255,165,0,0.2)' : 'transparent',
                                            '&:hover': {
                                                bgcolor: 'rgba(255,165,0,0.1)',
                                            },
                                        }}
                                    >
                                        <ListItemText
                                            primary={item.label}
                                            primaryTypographyProps={{
                                                sx: {
                                                    fontSize: '1rem',
                                                    fontWeight: pathname === item.href ? 600 : 500,
                                                    color: pathname === item.href ? 'orange' : 'white',
                                                },
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>

                        <Box>
                            <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />
                            <Box display="flex" alignItems="center" gap={1} sx={{ px: 1, mb: 2 }}>
                                <PhoneIcon sx={{ color: 'orange' }} />
                                <Typography color="orange" fontWeight="bold">
                                    +91 99168 69595
                                </Typography>
                            </Box>
                            <Button
                                fullWidth
                                variant="outlined"
                                component={NextLink}
                                href="/login"
                                sx={{
                                    mb: 1,
                                    color: 'orange',
                                    borderColor: 'orange',
                                    textTransform: 'none',
                                    borderRadius: 2,
                                    '&:hover': {
                                        bgcolor: 'rgba(255,165,0,0.1)',
                                        borderColor: 'orange',
                                    },
                                }}
                            >
                                Sign in
                            </Button>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    bgcolor: 'orange',
                                    color: '#1e1e1e',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    borderRadius: 2,
                                    '&:hover': {
                                        bgcolor: '#ffb84d',
                                    },
                                }}
                            >
                                Contact Us
                            </Button>
                        </Box>
                    </Box>
                </Drawer>
            </AppBar>
        </HideOnScroll>
    );
}
