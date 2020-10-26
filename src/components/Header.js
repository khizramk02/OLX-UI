import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import style from './Header.module.css';
import SearchIcon from '@material-ui/icons/Search';
import sell from '../assets/sell.png';
import logo from '../assets/olx logo.png';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className={style.HeaderContainer}>
            <Grid
                container
                justify="center"
                spacing={1}
                alignItems="center"
            >
                <Grid
                    container
                    justify="center"
                    // spacing={1}
                    item xs={6} sm={4}
                    alignItems="center"
                >
                    <Grid item xs={12} sm={3}>
                        <div className={style.Heading}>
                            <Link to='/'>
                                <img src={logo} alt='logo' width='42px' height='24px' />
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <div className={style.Search1}>
                            <SearchIcon className={style.searchicon} />
                            <input type='text' placeholder='Search city, area or local' />
                            <ExpandMoreIcon className={style.arrowicon} />
                        </div>
                    </Grid>
                </Grid>

                <Grid
                    container
                    item xs={6} sm={8}
                    justify="center"
                    spacing={1}
                    alignItems="center"
                    className={style.secongrid}
                >
                    <Grid item xs={12} sm={9}>
                        <div className={style.Search2}>
                            <input type='text' placeholder='Find Cars, Mobile Phones and more...' />
                            <SearchIcon className={style.searchicon2} />
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={1}>
                        <div className={style.LoginHeading}>
                            <p className={style.LoginHeadingwrite}> Login </p>
                            <p className={style.LoginHeadingunderline}></p>

                        </div>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <div>
                            <div>
                                <a href='https://www.olx.com.pk/post'><img src={sell} /></a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )

}

export default Header