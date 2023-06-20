import './InsomniaDeprescribing.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useState, useEffect} from 'react';
import SearchBar from "../../searchBar/searchBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Navigation from '../../Navigation/navigation';
import Footer from '../../Footer/Footer';
import Data from "../../searchBar/Data.json";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color:theme.palette.common.white,
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'underline',
    
  
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function InsomniaDeprescribing() {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8887/api/insomniadeprescribing')
        .then(response => {
          setData(response.data)
          console.log(response.data[0]);
        })
        .catch(error => {
          console.log(error);
        });
  }, []);

  if(data.length > 0)
  {
  return (
    <>
      <Navigation />
      <SearchBar placeholder="Search" data={Data} />
      <br></br>
    <div id="deprescrbing">
      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" id="topicHeader">Deprescribing Benzodiazepine-like Sedatives</Typography>
      </Box>
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 700 }} aria-label="customized table" id="deprescribingTable" >
            <TableHead >
              <TableRow >
                <StyledTableCell style={{ backgroundColor: '#96d2b0' }} >Duration of BZRA use (months)</StyledTableCell>
                <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Dose Reduction Schedule Duration (weeks)</StyledTableCell>
                <StyledTableCell style={{ backgroundColor: '#96d2b0' }}>Interval Between Dose Reductions (weeks)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((dataObj, index) => (
                <StyledTableRow key={index} >
                  <StyledTableCell component="th" scope="row">
                    {dataObj.Duration}
                  </StyledTableCell>
                  <StyledTableCell >{dataObj[`Dose Reduction Schedule Duration (weeks)`]}</StyledTableCell>
                  <StyledTableCell >{dataObj[`Interval Between Dose Reductions (weeks)`]}</StyledTableCell>
                  
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer><br></br>
      <p><b>Key:</b> BZRA: benzodiazepine and z-drugs (benzodiazepine agonists) </p>
    </div>
    <Footer />
    </>
  );
}
};