import React, { useEffect, useState } from "react";
import axios from "axios";

function Table() {
  let url = "https://mocki.io/v1/5c49d641-bda3-4419-9a83-41a9fcbfe294";

  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setdata(res.data);
    });
  }, [url]);
  let names = [];
  for (const item of data) {
    names.push(item.name);
  }
  let uniquename = [...new Set(names)];
  let counters = [];
 
  for (const items of uniquename) {
      let cnt=0;
      let namescnt = {
        name: "",
        dupli: 0,
      };

      for (const it of names) {
          if(items===it){
              cnt++
          }

      }
     namescnt.name=items;
     namescnt.dupli=cnt;
      counters.push(namescnt)

  }
let red={
    backgroundColor:"red"
}
let yellow={
    backgroundColor:"yellow"
}
let green={
    backgroundColor:"green"
}
  return (
    <div style={{display:"inline-block"}}>
      <table style={{ border: "1px solid" }}>
        <thead>
        <tr>
          <th>Names</th>

          <th>No. of Duplicaates</th>
        </tr>
        </thead>
        <tbody>
        {counters.map((item,index) => {

          return (
            <tr key={index} style={(item.dupli>0 && item.dupli<3)?red:(item.dupli>2 && item.dupli<10)?yellow:item.dupli>10 ? green:null }>
              <td>{item.name}</td>
              <td>{item.dupli}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
