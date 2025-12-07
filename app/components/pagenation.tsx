import React, { useState, type ChangeEvent } from 'react';
import Table from './table';
import Button from './button';
import { GrNext, GrPrevious } from 'react-icons/gr';
import type { PageProps } from './types';





function MyPaginationComponent({ datas, func }: PageProps) {

  const [itemsPerPage, setItemsPerPage] = useState(10)

  const headers = [
    { name: 'Name' },
    { name: 'Model' },
    { name: 'MAC' },
    { name: 'SN' },
    { name: 'bought' },
    { name: 'status' },
    { name: 'device type' },
    { name: 'manufacture' },
    { name: 'manufacture' },
    { name: 'ip' },
    { name: 'Date' },
    { name: 'action' },
  ]
  const [currentPage, setCurrentPage] = useState(1);


  const totalPages = Math.ceil(datas.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datas.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    console.log("The button is working")
    setCurrentPage(pageNumber);
  };
  const handleItemPerPage = (event: ChangeEvent<HTMLSelectElement>) => {
    const num: any = event.target.value
    setItemsPerPage(num);
  };

  return (
    <div>

      {
        datas ? <div className="overflow-auto w-fit hidden md:block">
          <Table datas={currentItems} headers={headers} func={func} link="" />
        </div> : ''
      }


      <div className="flex justify-center items-center gap-2  mt-10">
        <select name="" id="" className=" p-2 rounded-xl w-15 h-10 text-gray-700 border-gray-200 border-2" onChange={handleItemPerPage}>
          {Array.from({ length: 10 }, (_, i) => i * 5).map((number, index) => (
            <option key={index} value={number}>{number}</option>
          ))}


        </select>
        {totalPages > 1 && <nav className='flex justify-center gap-2 '>
          <Button handlePageChange={handlePageChange} currentPage={currentPage - 1} icon={<GrPrevious />} disabled={currentPage === 1} />


          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber, index) => (
            <Button
              key={index}
              handlePageChange={handlePageChange}
              currentPage={pageNumber}
              disabled={currentPage === pageNumber}
              title={pageNumber}
            />


          ))}
          <Button icon={<GrNext />} currentPage={currentPage + 1} handlePageChange={handlePageChange} disabled={currentPage === totalPages} />


        </nav>}


      </div>



    </div>
  );
}

export default MyPaginationComponent;