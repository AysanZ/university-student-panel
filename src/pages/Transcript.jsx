import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Inject } from '@syncfusion/ej2-react-grids';

import { transcriptData, contextMenuItems, transcriptGrid } from '../data/dummy';
import { Header } from '../components';

const Transcript = () => {
  const editing = { allowDeleting: false, allowEditing: false };
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Page" title="Transcript" />
      <GridComponent
        id="gridcomp"
        dataSource={transcriptData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {transcriptGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default Transcript