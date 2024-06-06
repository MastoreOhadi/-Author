// import {map} from "rxjs";
// import {style} from "@angular/animations";
//
// interface TableProps<T> extends React.HTMLProps<HTMLTableElement> {
//     tableData: T[];
//     columnDefinitions: ColumnDefinition<T>[];
// }
//
// export type ColumnDefinition<T> = {
//     title: string;
//     dataIndex: keyof T;
//     render?: (currentData: T[keyof T], rowData?: T) => React.ReactNode;
// };
//
// interface TableRowProps<T> {
//     rowData: T;
//     columnDefinitions: ColumnDefinition<T>[];
// }
//
// function TableRow<T>({rowData, columnDefinitions}: TableRowProps<T>) {
//     const getValue = (key: keyof T) => {
//         return rowData[key];
//     };
//
//     return (
//             <tr>
//               {
//                 columnDefinitions.map((column, colIndex) => (
//                     <td key = {colIndex} style = {{border: "solid black 1px", padding:"3px"}}>
//                         {column.render ? column.render(getValue(column.dataIndex), rowData) : JSON.stringify(getValue(column.dataIndex))}
//                     </td>
//                 ))
//               }
//             </tr>
//             );
// }