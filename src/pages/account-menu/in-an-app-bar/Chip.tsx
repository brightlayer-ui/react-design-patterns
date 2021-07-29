import React from 'react';
import { Chip as MuiChip, ChipProps as MuiChipProps, Typography, makeStyles, Theme, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    userMenuChip: {
        height: `${theme.spacing(4)}px`,
        cursor: 'pointer',
    },
    chipIcon: {
        height: `${theme.spacing(3)}px`,
        width: `${theme.spacing(3)}px`,
    },
    chipLabelIcon: {
        height: 16,
        width: 16,
    },
    chipLabelContainer: {
        display: 'flex',
        alignItems: 'center',
        marginRight: `-${theme.spacing(1)}px`,
    },
    chipLabelText: {
        marginRight: `${theme.spacing(1)}px`,
    },
}));

type ChipProps = MuiChipProps & {
    label: string;
    rightIcon: React.ReactElement;
};

export const Chip = (props: ChipProps): JSX.Element => {
    const { label, rightIcon, ...chipProps } = props;
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <MuiChip
            {...chipProps}
            classes={{ root: classes.userMenuChip, icon: classes.chipIcon }}
            label={
                <div className={classes.chipLabelContainer}>
                    <Typography variant={'body2'} className={classes.chipLabelText}>
                        {label}
                    </Typography>
                    {rightIcon}
                </div>
            }
            clickable={false}
        />
    );
};
