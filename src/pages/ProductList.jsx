import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ApiContext } from "../contexts/ApiContext";

export default function ProductList() {
  const [products] = useContext(ApiContext);

  return (
    <div id="productList">
      <h4 className="heading">Product List</h4>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#F4F6F8" }}>
              <TableCell>Title</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Available Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <div className="title-col">
                    <Link
                      to="/product_details"
                      state={{ product }}
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          // behavior: "smooth",
                        });
                      }}
                    >
                      <img
                        width={"40px"}
                        height={"40px"}
                        src={product.image}
                        alt="product_img"
                        style={{ margin: "0 10px" }}
                      />
                      <p style={{ marginLeft: "10px" }}>{product.title}</p>
                    </Link>{" "}
                  </div>
                </TableCell>
                <TableCell className="category" align="left">
                  {product.category}
                </TableCell>
                <TableCell align="left">{product.price}</TableCell>
                <TableCell align="left">
                  {product?.rating?.count ?? 0}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
