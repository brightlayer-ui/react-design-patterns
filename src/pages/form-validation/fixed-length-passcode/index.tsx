import React, { useCallback, useEffect, useState } from 'react';
import {
    AppBar,
    Button,
    CircularProgress,
    Divider,
    Hidden,
    IconButton,
    InputAdornment,
    InputProps,
    TextField,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { Done, Menu, Refresh } from '@material-ui/icons';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { TOGGLE_DRAWER } from '../../../redux/actions';
import * as Colors from '@pxblue/colors';

type OnChangeHandler = InputProps['onChange'];

const useStyles = makeStyles((theme: Theme) => ({
    appbarRoot: {
        padding: 0,
    },
    toolbarGutters: {
        padding: '0 16px',
    },
    containerWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flex: '1 1 0',
        backgroundColor: 'white',
        height: 'calc(100vh - 64px)',
    },
    container: {
        width: '100%',
        maxWidth: 480,
        margin: theme.spacing(4),
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(2),
            maxWidth: '100%',
        },
    },
    submitButton: {
        marginTop: theme.spacing(4),
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    details: {
        marginTop: theme.spacing(1),
    },
}));

export const FixedLengthPasscodeValidation = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const dispatch = useDispatch();
    const [passcode, setPasscode] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [blurredDuringEntry, setBlurredDuringEntry] = useState(false);
    const [incorrectPasscode, setIncorrectPasscode] = useState(false);
    const maxLength = 6;
    const inputId = 'passcode-input';

    useEffect(() => {
        const input = document.getElementById(inputId);
        if (input) {
            input.focus();
        }
    }, []);

    const onSubmit = (currPasscode: string): void => {
        setLoading(true);
        setBlurredDuringEntry(false);
        setSuccess(false);
        setTimeout(() => {
            setLoading(false);
            if (String(currPasscode) === '123456') {
                setSuccess(true);
                setBlurredDuringEntry(false);
            } else {
                setBlurredDuringEntry(false);
                setIncorrectPasscode(true);
                const input = document.getElementById(inputId) as HTMLInputElement;
                if (input) {
                    input.focus();
                    input.select();
                }
            }
        }, 2000);
    };

    const onPasscodeChange: OnChangeHandler = useCallback((event) => {
        const currPasscode = event.target.value;
        if (isNaN(currPasscode)) {
            return;
        }
        setIncorrectPasscode(false);
        setPasscode(currPasscode);
        if (currPasscode.length === maxLength) {
            onSubmit(currPasscode);
        }
    }, []);

    const getErrorText = useCallback(() => {
        if (incorrectPasscode) {
            return 'Incorrect Passcode';
        }
        if (success) {
            return '';
        }
        if (blurredDuringEntry && passcode.length < maxLength) {
            return 'Please enter a six-digit passcode.';
        }
    }, [blurredDuringEntry, success, passcode, incorrectPasscode]);

    const resetForm = (): void => {
        setBlurredDuringEntry(false);
        setLoading(false);
        setSuccess(false);
        setPasscode('');
        setIncorrectPasscode(false);
        setTimeout(() => {
            const input = document.getElementById(inputId) as HTMLInputElement;
            if (input) {
                input.focus();
            }
        });
    };

    return (
        <>
            <AppBar data-cy="pxb-toolbar" position={'sticky'} classes={{ root: classes.appbarRoot }}>
                <Toolbar classes={{ gutters: classes.toolbarGutters }}>
                    <Hidden mdUp>
                        <IconButton
                            data-cy="toolbar-menu"
                            color={'inherit'}
                            onClick={(): void => {
                                dispatch({ type: TOGGLE_DRAWER, payload: true });
                            }}
                            edge={'start'}
                            style={{ marginRight: 20 }}
                        >
                            <Menu />
                        </IconButton>
                    </Hidden>
                    <Typography variant={'h6'} color={'inherit'}>
                        Fixed Length Passcode
                    </Typography>
                </Toolbar>
            </AppBar>

            <div className={classes.containerWrapper}>
                <div className={classes.container}>
                    <Typography variant={'body1'}>
                        Please enter the <strong>six-digit passcode</strong> we just send to you. The passcode is valid
                        for 15 minutes.
                    </Typography>
                    <Typography variant={'body1'} className={classes.details}>
                        For the purpose of this demonstration, passcode <strong>123456</strong> will pass. Any other
                        6-digit passcode will fail.
                    </Typography>
                    <Divider
                        style={{
                            marginTop: theme.spacing(5),
                            marginBottom: theme.spacing(4),
                            marginLeft: -theme.spacing(2),
                            marginRight: -theme.spacing(2),
                        }}
                    />
                    <TextField
                        style={{ width: '100%', height: 72 }}
                        id={inputId}
                        label={'Passcode'}
                        value={passcode}
                        onChange={onPasscodeChange}
                        variant="filled"
                        inputProps={{
                            inputMode: 'numeric',
                            maxLength,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    {loading && <CircularProgress style={{ height: 24, width: 24 }} />}
                                    {success && <Done style={{ color: Colors.green[500] }} />}
                                </InputAdornment>
                            ),
                        }}
                        onBlur={(): void => {
                            setBlurredDuringEntry(true);
                        }}
                        helperText={getErrorText()}
                        error={blurredDuringEntry || incorrectPasscode}
                        disabled={loading || success}
                    />
                    <Button
                        className={classes.submitButton}
                        color={'primary'}
                        variant={'outlined'}
                        onClick={resetForm}
                        disabled={loading}
                        startIcon={<Refresh />}
                    >
                        Reset Form
                    </Button>
                </div>
            </div>
        </>
    );
};