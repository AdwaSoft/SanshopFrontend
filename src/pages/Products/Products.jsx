import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Dialog,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useDeleteProductMutation, useGetProductsQuery } from "services/api";

import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import {
  DataGrid,
  GridActionsCellItem,
  GridRowParams,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

import CustomToolBar from "./CustomToolBar";
import { Link } from "react-router-dom";
import ListHeader from "pages/ListHeader";
import ProductListSkeleton from "./skeleton/ProductListSkeleton";

/////////////////searching/////////////////////////////

///////////////Search End////////////////////////////////////

const Products = () => {
  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeleteId] = useState("");

  const handleClickOpen = (params) => {
    setDeleteId(params.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const theme = useTheme();

  const { data, error, isLoading, isFetching, isSuccess } =
    useGetProductsQuery();

  const [
    deleteProduct,
    { isSuccess: isDeleteSuccess, isLoading: isDeleting, error: isDeleteError },
  ] = useDeleteProductMutation();

  const onDeleteDeleteClicked = async () => {
    await deleteProduct({ id: deleteId })
      .then(() => setOpen(false))
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   if (isDeleteSuccess) {

  //   }
  // }, [isDeleteSuccess, navigate]);
  function renderChip(params) {
    const publishedMode = params.value;
    {
      return publishedMode ? (
        <Chip
          label="Published"
          size="small"
          sx={{
            backgroundColor: `${theme.palette.secondary[100]}`,
          }}
        />
      ) : (
        <Chip
          label="Draft"
          size="small"
          sx={{
            backgroundColor: `${theme.palette.background[500]}`,
          }}
        />
      );
    }
  }
  function renderImages(params) {
    return (
      <Box>
        <img
          style={{
            border: `1px solid ${theme.palette.primary[100]}`,
            borderRadius: "15px",

            padding: "4px",
          }}
          width="65px"
          height="60px"
          src={params.value[0]}
        />
      </Box>
    );
  }
  function renderStock(params) {
    const stock = params.value;
    if (stock > 10) {
      return (
        <Box>
          <Box
            sx={{
              width: "90px",
              backgroundColor: `${theme.palette.green[100]}`,
              borderRadius: "12px",
              height: "0.5rem",
            }}
          >
            <Box
              sx={{
                width: `${stock}%`,
                height: "100%",
                backgroundColor: `${theme.palette.green[500]}`,
                borderRadius: "12px",
              }}
            />
            <Typography sx={{ pt: 1 }}>{`${stock} in stock`}</Typography>
          </Box>
        </Box>
      );
    } else if (stock < 10 && stock !== 0) {
      return (
        <Box>
          <Box
            sx={{
              width: "90px",
              backgroundColor: `${theme.palette.yellow[100]}`,
              borderRadius: "12px",
              height: "0.5rem",
            }}
          >
            <Box
              sx={{
                width: `${stock}%`,
                height: "100%",
                backgroundColor: `${theme.palette.yellow[500]}`,
                borderRadius: "12px",
              }}
            />
            <Typography>{`${stock} low stock`}</Typography>
          </Box>
        </Box>
      );
    } else if (stock === 0) {
      return (
        <Box>
          <Box
            sx={{
              width: "90px",
              backgroundColor: `${theme.palette.red[100]}`,
              borderRadius: "12px",
              height: "0.5rem",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: `${theme.palette.red[500]}`,
                borderRadius: "12px",
              }}
            />
            <Typography sx={{ pt: 1 }}>Out of stock</Typography>
          </Box>
        </Box>
      );
    }
  }
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const birrPrice = {
    type: "number",
    width: 60,
    valueFormatter: ({ value }) => currencyFormatter.format(value),
    cellClassName: "font-tabular-nums",
  };
  const columns = [
    {
      field: "images",
      headerName: "picture",
      renderCell: renderImages,
      flex: 0.3,
    },
    {
      field: "brand",
      headerName: "Manufacturer",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Product Name",

      hideable: false,
      flex: 0.5,
    },
    {
      field: "regularPrice",
      headerName: "Price",
      ...birrPrice,
      flex: 0.5,
    },
    {
      field: "amount",
      headerName: "Stock",
      renderCell: renderStock,
      flex: 0.5,
    },
    {
      field: "code",
      headerName: "Code",
      flex: 0.5,
    },
    {
      field: "sku",
      headerName: "SKU",
      flex: 0.5,
    },

    {
      field: "checked",
      headerName: "Publish",
      renderCell: renderChip,
      flex: 0.5,
    },

    {
      field: "actions",
      type: "actions",
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<VisibilityIcon />}
          label="View"
          component={Link}
          to={`/managment/productsdetail/${params.id}`}
          // onClick={toggleAdmin(params.id)}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<ModeEditIcon />}
          label="Edit"
          component={Link}
          to={`/managment/products/${params.id}`}
          showInMenu
        />,
        <GridActionsCellItem
          sx={{
            color: `${theme.palette.red[500]}`,
            fontWeight: "bold",
          }}
          icon={
            <DeleteIcon
              sx={{
                color: `${theme.palette.red[500]}`,
              }}
            />
          }
          label="Delete"
          showInMenu
          onClick={() => handleClickOpen(params)}
        />,
      ],
    },
  ];

  const [searchText, setSearchText] = useState("");
  const requestSearch = (searchValue) => {
    const searchRegex = new RegExp(`.*${searchValue}.*`, "ig");
    const filteredRows = DATASET.filter((o) => {
      return Object.keys(o).some((k) => {
        return searchRegex.test(o[k].toString());
      });
    });
    setTableData(filteredRows);
  };

  const cancelSearch = () => {
    setSearchText("");
    requestSearch(searchText);
  };
  return (
    <Box
      sx={{
        p: { xs: 1, sm: 4 },
      }}
      borderRadius="10px"
      backgroundColor={`${theme.palette.background[100]}`}
    >
      {/* top main box */}

      <ListHeader
        title={"Product"}
        route={"managment"}
        role={"list"}
        owner={"Product"}
      />

      {/* Table */}
      <Box
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: `${theme.palette.background[500]}`,
            mt: "20px",
            fontSize: "14px",
            fontWeight: 700,
          },
          "& .MuiDataGrid-root": {
            borderRadius: "10px",
            boxShadow: `10px 10px 10px  ${theme.palette.background[500]}`,
          },
          "& .MuiDataGrid-root": {
            fontSize: "15px",
            fontWeight: 300,
          },
          width: { xs: "90%", sm: "99%" },
          height: "70vh",
        }}
      >
        {/* <ProductListSkeleton /> */}
        {isLoading && <ProductListSkeleton />}
        {/* {isFetching && <Typography>Loanding But Not First time</Typography>} */}
        {isSuccess && (
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={data || []}
            columns={columns}
            rowHeight={85}
            components={{ Toolbar: CustomToolBar }}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10, page: 0 },
              },
            }}
            checkboxSelection
            pageSizeOptions={[5, 10, 25, 50, 100]}
          />
        )}
      </Box>
      <Box>
        <Dialog
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "16px",
              minHeight: "160px",
              width: "450px",
              p: "10px",
            },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            sx={{
              fontWeight: "bold",
            }}
            id="alert-dialog-title"
          >
            Delete Confirmation{" "}
            {isDeleting && (
              <Typography
                sx={{
                  color: `${theme.palette.red[700]}`,
                }}
              >
                Removing Product ....
              </Typography>
            )}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{
                fontSize: "14px",
                fontWeight: 500,
              }}
              id="alert-dialog-description"
            >
              Are you sure you want to completlly remove this product from your
              store?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              variant="contained"
              color="info"
              size="madium"
              sx={{
                borderRadius: "7px",
                border: "1px solid gray",
                textTransform: "capitalize",

                backgroundColor: `${theme.palette.white[300]}`,
                color: `${theme.palette.text[500]}`,
                "&:hover": {
                  border: "1px solid black",
                  backgroundColor: `${theme.palette.white[300]}`,
                },
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={onDeleteDeleteClicked}
              autoFocus
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: `${theme.palette.red[400]}`,
                borderRadius: "7px",
                textTransform: "capitalize",
                fontWeight: 700,
                fontSize: "14px",
                "&:hover": {
                  backgroundColor: `${theme.palette.red[700]}`,
                },
              }}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Products;
