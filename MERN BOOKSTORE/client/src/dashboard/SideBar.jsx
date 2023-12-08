// import React from "react";
import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div>
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo
          as={Link}
          to="/"
          img="/favicon.svg"
          imgAlt="Flowbite logo"
        >
          Book Store
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item as={Link} to="/dashboard">
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/upload">
              Upload Sách
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/admin/dashboard/manage">
              Quản lý thông tin sách
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};
