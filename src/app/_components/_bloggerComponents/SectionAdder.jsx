import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ArrowUp, ArrowDown, Trash2, PencilIcon, XIcon } from "lucide-react";

const SectionAdder = ({
  title,
  blocks,
  setBlocks,
  articleFacility,
  setArticleFacility,
}) => {
  const handleInputChange = (event) => {
    setArticleFacility(event); // Update the state
  };

  const addSection = (type) => {
    switch (type) {
      case "heading":
        setBlocks((prevBlocks) => [
          ...prevBlocks,
          { blockType: "heading", body: { content: "" } },
        ]);
        break;
      case "paragraph":
        setBlocks((prevBlocks) => [
          ...prevBlocks,
          { blockType: "paragraph", body: { content: "" } },
        ]);
        break;
      case "ul":
        setBlocks((prevBlocks) => [
          ...prevBlocks,
          { blockType: "list", body: { type: "ul", elements: [] } },
        ]);
        break;
      case "codeblock":
        setBlocks((prevBlocks) => [
          ...prevBlocks,
          { blockType: "codeblock", body: { code: "", language: "" } },
        ]);
        break;
      case "ol":
        setBlocks((prevBlocks) => [
          ...prevBlocks,
          { blockType: "list", body: { type: "ol", elements: [] } },
        ]);
        break;

      case "table":
        setBlocks((prevBlocks) => [
          ...prevBlocks,
          {
            blockType: "table",
            textAlign: "center",
            noCols: 1,
            body: {
              columns: ["col1"],
              data: [
                {
                  col1: "Row 1, Col 1",
                },
              ],
            },
          },
        ]);
        break;

      case "image":
        setBlocks((prevBlocks) => [
          ...prevBlocks,
          {
            blockType: "image",
            body: {
              src: "",
              alt: title,
            },
          },
        ]);
        break;
      default:
        break;
    }
  };

  const [isLocked, setIsLocked] = useState(true);

  const handleAddListItem = (block, newItem) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((item) =>
        item === block
          ? {
              ...item,
              body: {
                ...item.body,
                elements: [...item.body.elements, newItem],
              },
            }
          : item
      )
    );
  };

  const handleUpdateListItem = (block, index, newItem) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((item) =>
        item === block
          ? {
              ...item,
              body: {
                ...item.body,
                elements: item.body.elements.map((el, i) =>
                  i === index ? newItem : el
                ),
              },
            }
          : item
      )
    );
  };

  const moveBlock = (index, direction) => {
    const newBlocks = [...blocks];
    const targetIndex = direction === "up" ? index - 1 : index + 1;

    if (targetIndex >= 0 && targetIndex < blocks.length) {
      [newBlocks[index], newBlocks[targetIndex]] = [
        newBlocks[targetIndex],
        newBlocks[index],
      ];
      setBlocks(newBlocks);
    }
  };

  const deleteBlock = (index) => {
    setBlocks((prevBlocks) => prevBlocks.filter((_, i) => i !== index));
  };

  const renderBlock = (block, index) => {
    switch (block.blockType) {
      case "heading":
        return (
          <div className="flex flex-col w-full">
            <input
              type="text"
              value={block?.body?.content}
              onChange={(e) => {
                const newContent = e.target.value;
                setBlocks((prevBlocks) =>
                  prevBlocks.map((item, i) =>
                    i === index
                      ? { ...item, body: { ...item.body, content: newContent } }
                      : item
                  )
                );
              }}
              placeholder="Enter heading"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
            />
            <div className="mt-2 flex items-center">
              <input
                type="checkbox"
                checked={block?.body?.isSub || false}
                onChange={(e) => {
                  const newIsSub = e.target.checked;
                  setBlocks((prevBlocks) =>
                    prevBlocks.map((item, i) =>
                      i === index
                        ? { ...item, body: { ...item.body, isSub: newIsSub } }
                        : item
                    )
                  );
                }}
                className="mr-2"
              />
              <label>Is Sub</label>
            </div>
          </div>
        );
      case "paragraph":
        return (
          <div className="flex flex-row  gap-2 h-full w-full">
            <textarea
              value={block.body.content}
              onChange={(e) => {
                const newContent = e.target.value;
                setBlocks((prevBlocks) =>
                  prevBlocks.map((item, i) =>
                    i === index
                      ? { ...item, body: { content: newContent } }
                      : item
                  )
                );
              }}
              placeholder="Enter paragraph"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500 min-h-[100px]"
            />

            <button
              onClick={async () => {
                setBlocks((prevBlocks) =>
                  prevBlocks.map((item, i) =>
                    i === index ? { ...item, loading: true } : item
                  )
                );
                try {
                  const response = await fetch("/api/html-maker", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ content: block?.body?.content }),
                  });

                  if (!response.ok) {
                    throw new Error("Failed to format paragraph");
                  }

                  const data = await response.json();
                  const formattedContent = data.html;

                  setBlocks((prevBlocks) =>
                    prevBlocks.map((item, i) =>
                      i === index
                        ? {
                            ...item,
                            body: { content: formattedContent },
                          }
                        : item
                    )
                  );
                } catch (error) {
                  console.error("Error formatting paragraph:", error);
                  alert("Failed to format the paragraph. Please try again.");
                  setBlocks((prevBlocks) =>
                    prevBlocks.map((item, i) =>
                      i === index ? { ...item, loading: false } : item
                    )
                  );
                }
              }}
              className={`mt-2 px-4 py-2 h-full ${
                block.loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              } rounded`}
              disabled={block.loading}
            >
              {block?.loading ? "Formatting..." : "Format"}
            </button>
          </div>
        );
      case "list":
        return (
          <div className="flex flex-col w-full">
            <ul>
              {block.body.elements.map((item, i) => (
                <li className="flex flex-row gap-2" key={i}>
                  <input
                    type="text"
                    value={item}
                    onChange={(e) =>
                      handleUpdateListItem(block, i, e.target.value)
                    }
                    placeholder={`Item ${i + 1}`}
                    className="w-full p-2 mt-2 border rounded focus:outline-none focus:border-p1"
                  />

                  <button
                    onClick={async () => {
                      try {
                        const response = await fetch("/api/html-maker", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({ content: item }), // Send the individual item for formatting
                        });

                        if (!response.ok) {
                          throw new Error("Failed to format paragraph");
                        }

                        const data = await response.json();
                        const formattedContent = data.html;

                        console.log(
                          "The Formatted Content: ",
                          formattedContent
                        );

                        handleUpdateListItem(block, i, formattedContent);
                      } catch (error) {
                        console.error("Error formatting paragraph:", error);
                        alert(
                          "Failed to format the paragraph. Please try again."
                        );
                      }
                    }}
                    className="mt-2 px-4 py-2 bg-p1 text-white hover:bg-orange-600 rounded"
                  >
                    Format
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleAddListItem(block, "")}
              className="mt-2 px-4 py-2 bg-p1 hover:bg-orange-500 text-white rounded"
            >
              Add Item
            </button>
          </div>
        );

      case "table":
        return (
          <div className="flex flex-col w-full">
            <div className="overflow-auto">
              <input
                type="number"
                value={block?.noCols}
                onChange={(e) => {
                  const newContent = e.target.value;
                  setBlocks((prevBlocks) =>
                    prevBlocks.map((item, i) =>
                      i === index ? { ...item, noCols: newContent } : item
                    )
                  );
                }}
                placeholder="Enter heading"
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                value={block?.textAlign}
                onChange={(e) => {
                  const newContent = e.target.value;
                  setBlocks((prevBlocks) =>
                    prevBlocks.map((item, i) =>
                      i === index ? { ...item, textAlign: newContent } : item
                    )
                  );
                }}
                placeholder="Enter heading"
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
              />
              <table className="w-full border border-gray-300">
                <thead>
                  <tr>
                    {block.body.columns.map((column, colIndex) => (
                      <th key={colIndex} className="border border-gray-300 p-2">
                        <input
                          type="text"
                          value={column}
                          onChange={(e) => {
                            const newColumn = e.target.value;
                            setBlocks((prevBlocks) =>
                              prevBlocks.map((item, i) =>
                                i === index
                                  ? {
                                      ...item,
                                      body: {
                                        ...item.body,
                                        columns: item.body.columns.map(
                                          (col, j) =>
                                            j === colIndex ? newColumn : col
                                        ),
                                      },
                                    }
                                  : item
                              )
                            );
                          }}
                          placeholder={`Column ${colIndex + 1}`}
                          className="w-full p-1 border rounded focus:outline-none focus:border-blue-500"
                        />
                      </th>
                    ))}
                    <th>
                      <button
                        onClick={() => {
                          setBlocks((prevBlocks) =>
                            prevBlocks.map((item, i) =>
                              i === index
                                ? {
                                    ...item,
                                    body: {
                                      ...item.body,
                                      columns: [
                                        ...item.body.columns,
                                        `Column ${
                                          item.body.columns.length + 1
                                        }`,
                                      ],
                                      data: item.body.data.map((row) => ({
                                        ...row,
                                        [`col${item.body.columns.length + 1}`]:
                                          "",
                                      })),
                                    },
                                  }
                                : item
                            )
                          );
                        }}
                        className="px-2 py-1 bg-green-500 text-white rounded"
                      >
                        + Add Column
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {block.body.data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {block.body.columns.map((column, colIndex) => (
                        <td
                          key={colIndex}
                          className="border border-gray-300 p-2"
                        >
                          <input
                            type="text"
                            value={row[`col${colIndex + 1}`] || ""}
                            onChange={(e) => {
                              const newValue = e.target.value;
                              setBlocks((prevBlocks) =>
                                prevBlocks.map((item, i) =>
                                  i === index
                                    ? {
                                        ...item,
                                        body: {
                                          ...item.body,
                                          data: item.body.data.map((r, j) =>
                                            j === rowIndex
                                              ? {
                                                  ...r,
                                                  [`col${colIndex + 1}`]:
                                                    newValue,
                                                }
                                              : r
                                          ),
                                        },
                                      }
                                    : item
                                )
                              );
                            }}
                            placeholder="Cell Value"
                            className="w-full p-1 border rounded focus:outline-none focus:border-blue-500"
                          />
                        </td>
                      ))}
                      <td>
                        <button
                          onClick={() => {
                            setBlocks((prevBlocks) =>
                              prevBlocks.map((item, i) =>
                                i === index
                                  ? {
                                      ...item,
                                      body: {
                                        ...item.body,
                                        data: item.body.data.filter(
                                          (_, j) => j !== rowIndex
                                        ),
                                      },
                                    }
                                  : item
                              )
                            );
                          }}
                          className="px-2 py-1 bg-red-500 text-white rounded"
                        >
                          Delete Row
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={() => {
                const newRow = block.body.columns.reduce((acc, col, i) => {
                  acc[`col${i + 1}`] = "";
                  return acc;
                }, {});
                setBlocks((prevBlocks) =>
                  prevBlocks.map((item, i) =>
                    i === index
                      ? {
                          ...item,
                          body: {
                            ...item.body,
                            data: [...item.body.data, newRow],
                          },
                        }
                      : item
                  )
                );
              }}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              + Add Row
            </button>
          </div>
        );

      case "codeblock":
        return (
          <div className="flex flex-col w-full">
            <textarea
              value={block.body.code}
              onChange={(e) => {
                const newContent = e.target.value;
                setBlocks((prevBlocks) =>
                  prevBlocks.map((item, i) =>
                    i === index
                      ? { ...item, body: { ...item.body, code: newContent } }
                      : item
                  )
                );
              }}
              placeholder="Enter code"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1 min-h-[250px]"
            />
            <input
              type="text"
              value={block.body.language}
              onChange={(e) => {
                const newContent = e.target.value;
                setBlocks((prevBlocks) =>
                  prevBlocks.map((item, i) =>
                    i === index
                      ? {
                          ...item,
                          body: { ...item.body, language: newContent },
                        }
                      : item
                  )
                );
              }}
              placeholder="Enter Language"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1"
            />
          </div>
        );

      case "image":
        return (
          <div className="flex flex-col w-full">
            <input
              type="text"
              value={block.body.src}
              onChange={(e) => {
                const newContent = e.target.value;
                setBlocks((prevBlocks) =>
                  prevBlocks.map((item, i) =>
                    i === index
                      ? { ...item, body: { ...item.body, src: newContent } }
                      : item
                  )
                );
              }}
              placeholder="Enter Image Link"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              value={block.body.alt}
              onChange={(e) => {
                const newContent = e.target.value;
                setBlocks((prevBlocks) =>
                  prevBlocks.map((item, i) =>
                    i === index
                      ? { ...item, body: { ...item.body, alt: newContent } }
                      : item
                  )
                );
              }}
              placeholder="Enter Image Link"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="flex flex-row gap-5 h-full w-full ">
        <div className="w-full h-full flex flex-col gap-2">
          <h1 className="text-lg font-semibold">Sections</h1>
          {blocks.map((block, index) => (
            <div key={index} className="p-4 border rounded shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => moveBlock(index, "up")}
                    disabled={index === 0}
                    className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    <ArrowUp size={16} />
                  </button>
                  <button
                    onClick={() => moveBlock(index, "down")}
                    disabled={index === blocks.length - 1}
                    className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    <ArrowDown size={16} />
                  </button>
                </div>
                <button
                  onClick={() => deleteBlock(index)}
                  className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              {renderBlock(block, index)}
            </div>
          ))}
        </div>
        <div className="flex sticky self-start top-24 w-[650px] flex-col h-auto ">
          <div className="flex flex-row items-center justify-between w-full">
            <h1 className="text-lg font-semibold">Article Facility</h1>
            <button
              onClick={() => {
                setIsLocked(!isLocked);
              }}
              className="w-[40px] h-[40px] rounded-full bg-p1 flex items-center justify-center"
            >
              {isLocked ? (
                <PencilIcon className="w-4 h-4 text-zinc-200" />
              ) : (
                <XIcon className="w-4 h-4 text-zinc-200" />
              )}
            </button>
          </div>

          {!isLocked ? (
            <textarea
              placeholder="Enter GPT Generated Article"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1 resize-none min-h-[800px]"
              value={articleFacility}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          ) : (
            <textarea
              placeholder="Enter GPT Generated Article"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-p1 resize-none min-h-[800px]"
              value={articleFacility}
            />
          )}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-6 gap-2">
        <button
          onClick={() => addSection("heading")}
          className="px-3 py-2 bg-gray-100 border rounded text-gray-900 hover:bg-gray-200"
        >
          Heading
        </button>
        <button
          onClick={() => addSection("paragraph")}
          className="px-3 py-2 bg-gray-100 border rounded text-gray-900 hover:bg-gray-200"
        >
          Paragraph
        </button>
        <button
          onClick={() => addSection("ul")}
          className="px-3 py-2 bg-gray-100 border rounded text-gray-900 hover:bg-gray-200"
        >
          List UL
        </button>
        <button
          onClick={() => addSection("ol")}
          className="px-3 py-2 bg-gray-100 border rounded text-gray-900 hover:bg-gray-200"
        >
          List OL
        </button>
        <button
          onClick={() => addSection("image")}
          className="px-3 py-2 bg-gray-100 border rounded text-gray-900 hover:bg-gray-200"
        >
          Image
        </button>

        <button
          onClick={() => addSection("codeblock")}
          className="px-3 py-2 bg-gray-100 border rounded text-gray-900 hover:bg-gray-200"
        >
          Code Block
        </button>

        <button
          onClick={() => addSection("table")}
          className="px-3 py-2 bg-gray-100 border rounded text-gray-900 hover:bg-gray-200"
        >
          Table Block
        </button>
      </div>

      {!isLocked && (
        <div className="mt-4 w-full">
          <pre className="bg-gray-800 text-white p-2 rounded">
            <SyntaxHighlighter language="json" style={monokai}>
              {JSON.stringify(blocks, null, 2)}
            </SyntaxHighlighter>
          </pre>
        </div>
      )}
    </div>
  );
};

export default SectionAdder;
