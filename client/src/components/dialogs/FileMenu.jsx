import { Menu } from "@mui/material";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu open={false} anchorEl={anchorE1}>
      <div
        style={{
          width: "10rem",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        sint, vel corporis omnis in ullam? Voluptate iste explicabo excepturi
        eveniet soluta hic odit temporibus tempora blanditiis pariatur nihil
        voluptatem, praesentium perspiciatis eos quaerat. Beatae impedit et
        numquam ea dolor aspernatur nulla, odit commodi asperiores? Nihil
        excepturi distinctio laudantium voluptas possimus.
      </div>
    </Menu>
  );
};

export default FileMenu;
