//{ items: [], headings: string}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
//type annotation

import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
// import { MouseEvent } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0] //variable (selected Index)
  //   arr[1] //updater function
  //   let items = ["New York", "Tokyo", "Texas", "New Orleans", "Orlando"];
  //   items = [];

  //const message = items.length === 0 ? <p>No Item Found</p> : null;

  //   const getMessage = () => {
  //     return ;
  //   };
  //Event Handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No Item Found</p> : null} */}
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log(item , index)}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
