import React from "react";

function Stories() {
  return (
    <section className="bg-gray-200 py-16 px-16">
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <div key="item-1" className="bg-gray-400 col-start-1 row-start-1 col-span-2 row-span-2">
          1
        </div>
        <div key="item-2" className="bg-gray-400 col-start-3 row-start-1 col-span-1 row-span-2">
          2
        </div>
        <div key="item-3" className="bg-gray-400 col-start-3 row-start-3 col-span-1 row-span-1">
          3
        </div>
        <div key="item-4" className="bg-gray-400 col-start-1 row-start-3 col-span-1 row-span-1">
          4
        </div>
        <div key="item-5" className="bg-gray-400 col-start-2 row-start-3 col-span-1 row-span-1">
          5
        </div>
      </div>
    </section>
  );
}

export default Stories;
