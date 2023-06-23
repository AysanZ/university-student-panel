import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Resize,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
} from "@syncfusion/ej2-react-grids";
import { subjectData, subjectGrid, contextMenuItems } from "../data/dummy";
import { Header } from "../components";

const Subject = () => {
  const selectionsettings = { persistSelection: false };

  const toolbarOptions = ["Delete"];

  const editing = { allowDeleting: true, allowEditing: false };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Subjects" />

      <GridComponent
        dataSource={subjectData}
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >

        <ColumnsDirective>
          {subjectGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        
        <Inject
          services={[
            Page,
            Selection,
            Toolbar,
            Edit,
            Sort,
            Filter,
            Resize,
            ContextMenu,
            ExcelExport,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Subject;
