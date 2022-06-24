import React, { useMemo } from "react";
import { useTable } from "react-table";

function HelloTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="align-middle inline-block min-w-full shadow sm:rounded-lg border-b border-gray-200">
      <table
        {...getTableProps()}
        className="min-w-full divide-y divide-gray-200 m-2"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-3 bg-basecolor font-lato text-left text-xs leading-4 font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white divide-y divide-gray-200"
        >
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-sky-500"
                key={i}
              >
                {row.cells.map((cell, i) => {
                  return (
                    <td
                      className="px-6 py-4 whitespace-nowrap text-sm leading-5"
                      key={i}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HelloTable;
