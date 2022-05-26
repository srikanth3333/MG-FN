import {useState} from 'react';
import {useDispatch} from 'react-redux';
import MUIDataTable from 'mui-datatables'

const Table = (props) => {
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")
    const [page,setPage] = useState(0)
    let dispatch = useDispatch()

    const columns = props.columns;
    const data = props.data;

    let options = {};
    if(props.paginationData == true) {
      options = {
        filterType: 'checkbox',
        filter: false,
        download: false,
        print: false,
        filterArrayFullMatch: true,
        selectableRows:false,
        responsive: "stacked",
        search: false,
        serverSide: true,
        count: page * 20 + props.lengthOfData + 1,
        page: page,
        rowsPerPage: 20,
        rowsPerPageOptions: [20],
        responsive: "scroll",
        fixedHeader: true,
        textLabels: {
          body: {
              noMatch: props.loadingState ?
                  'loading....':
                  'Sorry, there is no matching data to display',
          },
        },
        onTableChange: (action, tableState) => {
          switch (action) {
            case "changePage":
              setPage(tableState.page)
              dispatch(props.paginateApi({...props.currentData,page:tableState.page,startDate:props.currentData.startDate,endDate:props.currentData.endDate}))
              break;
          }
        },
      };
    }else {
      options = {
        filterType: 'checkbox',
        selectableRows:false,
        responsive: "scroll",
        fixedHeader: true,
        textLabels: {
          body: {
              noMatch: props.loadingState ?
                  'loading....':
                  'Sorry, there is no matching data to display',
          },
        }
      };
    }

  return (  
    <>
    <MUIDataTable
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default Table;
