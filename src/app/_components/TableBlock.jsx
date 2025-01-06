import React from "react";

const DynamicTable = ({ tableData }) => {
  const { textAlign, noCols, body } = tableData;
  const { columns, data } = body;

  return (
    <div className="overflow-x-auto rounded-lg font-lato mt-5 ">
      <div className="flex flex-col sm:hidden gap-5">
        {/* Render columns with their respective rows */}
        {columns.slice(0, noCols).map((column, colIndex) => (
          <div
            key={colIndex}
            style={{
              marginTop: colIndex === 0 ? "25px" : "0px",
              marginBottom: colIndex !== columns.length - 1 ? "27px" : "0px",
            }}
            className="flex flex-col"
          >
            {/* Column Header */}
            <div
              className={`px-4 py-2 bg-zinc-300/40 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border-b border-zinc-300 rounded-t-lg dark:border-zinc-600 text-${textAlign}`}
            >
              {column}
            </div>

            {/* Column Rows */}
            {data.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`px-4 py-2 border-t  border-zinc-300 dark:border-zinc-700 text-${textAlign}`}
              >
                {row[`col${colIndex + 1}`]}
              </div>
            ))}
          </div>
        ))}
      </div>

      <table className="min-w-full hidden sm:table   table-auto border-collapse rounded-lg dark:border-zinc-700 transition-all">
        <thead className="bg-zinc-300/40 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border-b border-zinc-500 dark:border-zinc-600">
          <tr>
            {columns.slice(0, noCols).map((column, index) => (
              <th
                key={index}
                className={`px-4 py-2 ${
                  index !== columns.length - 1 ? "border-r" : ""
                } border-zinc-300 dark:border-zinc-700 text-${textAlign}`}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-zinc-100/60 dark:bg-zinc-800/30 text-zinc-700 dark:text-zinc-300">
          {data.map((row, index) => (
            <tr key={index} className="table-row">
              {columns.slice(0, noCols).map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-4 py-2 border-t ${
                    colIndex !== columns.length - 1 ? "border-r" : ""
                  } border-zinc-300 dark:border-zinc-700 text-${textAlign} table-cell`}
                  dangerouslySetInnerHTML={{
                    __html: row[`col${colIndex + 1}`],
                  }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function TableBlock({ body }) {
  return <DynamicTable tableData={body} />;
}
