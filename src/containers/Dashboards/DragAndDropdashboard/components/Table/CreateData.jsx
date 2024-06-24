const CreateTableData = (data) => {
  const columns = data
    ? Object.keys(data[0]).map((item) => ({
        Header: item,
        accessor: item,
        disableGlobalFilter: true,
      }))
    : [];

  const reactTableData = {
    tableHeaderData: columns,
    tableRowData: data,
  };
  return reactTableData;
};

export default CreateTableData;
