import React, { useState, useCallback } from 'react';
import { SortableHandle, SortableElement, SortableContainer } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { DragHandle as DragHandleIcon } from '@material-ui/icons';
import { List, AppBar, Toolbar, Typography, Button, Hidden, IconButton, useTheme } from '@material-ui/core';
import { InfoListItem, ChannelValue, Spacer } from '@pxblue/react-components';
import { TOGGLE_DRAWER } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import { President, SortableListItemProps, SortableListEditProps, OnSortEndProps } from './types';

const presidentsList: President[] = [
    {
        firstName: 'George',
        lastName: 'Washington',
        year: 1789,
    },
    {
        firstName: 'John',
        lastName: 'Adams',
        year: 1796,
    },
    {
        firstName: 'Thomas',
        lastName: 'Jefferson',
        year: 1800,
    },
    {
        firstName: 'James',
        lastName: 'Madison',
        year: 1808,
    },
    {
        firstName: 'James',
        lastName: 'Monroe',
        year: 1812,
    },
];

// Sortable Components Definitions
const DragHandle = SortableHandle(() => <DragHandleIcon style={{ cursor: 'pointer' }} data-cy={'bar'} />);

const SortableListItem = SortableElement(({ president, ...other }: SortableListItemProps) => (
    <InfoListItem
        {...other}
        icon={<DragHandle />}
        title={`${president.firstName} ${president.lastName}`}
        rightComponent={<ChannelValue value={president.year}></ChannelValue>}
    ></InfoListItem>
));

export const SortableListEdit = SortableContainer(({ presidents }: SortableListEditProps) => (
    <List disablePadding component={'nav'}>
        {presidents.map((president: President, i: number) => (
            <SortableListItem key={`item-${i}`} id={`sortable-row-${i}`} index={i} president={president} />
        ))}
    </List>
));

export const SortableList = (): JSX.Element => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const [list, setList] = useState<President[]>(presidentsList);
    const [sortable, setSortable] = useState<boolean>(false);

    const onSortEnd = useCallback(
        ({ oldIndex, newIndex }: OnSortEndProps): void => {
            setList(arrayMove(list, oldIndex, newIndex));
        },
        [list, setList]
    );

    return (
        <div style={{ backgroundColor: theme.palette.background.paper, minHeight: '100vh' }}>
            <AppBar data-cy="pxb-toolbar" position={'sticky'}>
                <Toolbar>
                    <Hidden mdUp={true}>
                        <IconButton
                            data-cy="toolbar-menu"
                            color={'inherit'}
                            onClick={(): void => {
                                dispatch({ type: TOGGLE_DRAWER, payload: true });
                            }}
                            edge={'start'}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Typography variant={'h6'} color={'inherit'}>
                        Sortable List
                    </Typography>
                    <Spacer />
                    <Button
                        data-cy="edit-save"
                        style={{ color: 'white', borderColor: 'white' }}
                        onClick={(): void => setSortable(!sortable)}
                        variant={'outlined'}
                    >
                        {sortable ? 'Save' : 'Edit'}
                    </Button>
                </Toolbar>
            </AppBar>
            {sortable && <SortableListEdit presidents={list} onSortEnd={onSortEnd} useDragHandle={true} />}
            {!sortable && (
                <List className={'list'} data-cy={'list-of-list'} disablePadding component={'nav'}>
                    {list.map((president: President, i: number) => (
                        <InfoListItem
                            hidePadding
                            key={`president-${i}`}
                            title={`${president.firstName} ${president.lastName}`}
                            rightComponent={<ChannelValue value={president.year} />}
                        ></InfoListItem>
                    ))}
                </List>
            )}
        </div>
    );
};
