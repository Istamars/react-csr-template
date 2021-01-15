import React, { useEffect } from 'react';

import apis from './apis';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import actionTypes from './constants/action-types';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function App() {
  const data = useSelector((state) => Object.values(state.data));
  const dispatch = useDispatch();
  const classes = useStyles();

  console.log(data);

  const renderList = (data) => {
    return (
      <TableRow key={data.id}>
        <TableCell component="th" scope="row">
          {data.name}
        </TableCell>
        <TableCell align="center">{data.stock}</TableCell>
      </TableRow>
    );
  };

  const fetchData = () => {
    return async (dispatch) => {
      await apis
        .get('/data')
        .then((response) => {
          dispatch({
            type: actionTypes.FETCH_DATAS,
            payload: response.data,
          });
        })
        .catch((err) => {
          console.log('error ', err);
        });
    };
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Book Name</TableCell>
              <TableCell align="center">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{data.map((d) => renderList(d))}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
