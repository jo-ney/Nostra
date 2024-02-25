
import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Trainingtable } from "@/component/TrainingTable";
import tableData from '../mock/sampledata.json';

export default function Intialpage(){
    const [searchTerm,setsearchTerm] = useState('')
    const [listData,setListData] = useState(tableData)

    const handlesearch = () =>{
        let searchedData = tableData.filter((filterData:any) => (filterData.Department.includes(searchTerm)))
        setListData(searchedData)
    }
    useEffect(()=>{
        if(searchTerm === ''){
            setListData(tableData)
        }
    },[searchTerm])
    console.log("Dataaa",searchTerm);
    
    return(
    <>
    JoneY VickY
    <Grid container>
        <TextField type='search' size='small' fullWidth label={'search'} placeholder="search departments" value={searchTerm} onChange={(e:any)=> {setsearchTerm(e.target.value)}} onKeyPress={(e:any)=> {if(e.key === 'Enter'){
            e?.preventDefault()
            handlesearch()
        }}}  />
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} ><Trainingtable inputData={{listData}} /></Grid>

    </Grid>
    </>
    )
}
