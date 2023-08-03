import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { TreeItem, TreeView } from "@mui/lab";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import RateReviewIcon from "@mui/icons-material/RateReview";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link>
        <TreeView
          defaultCollapseIcon={<GridExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Products">
            <Link to="/admin/products">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </Link>
            <Link to="/admin/kidproducts">
              <TreeItem nodeId="2" label="AllKid" icon={<PostAddIcon />} />
            </Link>
            <Link to="/admin/newproducts">
              <TreeItem nodeId="2" label="AllMen" icon={<PostAddIcon />} />
            </Link>
            <Link to="/admin/womenproducts">
              <TreeItem nodeId="2" label="AllWomen" icon={<PostAddIcon />} />
            </Link>
            <Link to="/admin/bagproducts">
              <TreeItem nodeId="2" label="AllBag" icon={<PostAddIcon />} />
            </Link>
            <Link to="/admin/mobileproducts">
              <TreeItem nodeId="2" label="AllMobile" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
            <Link to="/admin/productt">
              <TreeItem nodeId="3" label="CreateMen" icon={<AddIcon />} />
            </Link>
            <Link to="/admin/womenProduct">
              <TreeItem nodeId="3" label="CreateWomen" icon={<AddIcon />} />
            </Link>
            <Link to="/admin/kidProduct">
              <TreeItem nodeId="3" label="CreateKid" icon={<AddIcon />} />
            </Link>
            <Link to="/admin/bagProduct">
              <TreeItem nodeId="3" label="CreateBag" icon={<AddIcon />} />
            </Link>
            <Link to="/admin/mobileProduct">
              <TreeItem nodeId="3" label="CreateMobile" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
