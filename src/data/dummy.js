import React from 'react';
import { AiFillEdit, AiFillBook} from 'react-icons/ai';
import { BsKanban, BsFilePerson } from 'react-icons/bs';
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdSpaceDashboard, MdGrade,MdClass } from "react-icons/md";
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';

export const gridGradeStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

const gridteacherProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.teacherImage}
      alt="teacher"
    />
    <p>{props.Name}</p>
  </div>
);

export const EditorData = () => (
  <div>
    <h3>
      Try React
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

      Online Playgrounds
      If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.

      If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.

      Add React to a Website
      You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.

      Create a New React App
      When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!

      As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.

      Learn React
      People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.

      If you prefer to learn by doing, start with our practical tutorial.
      If you prefer to learn concepts step by step, start with our guide to main concepts.
      Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.

      First Examples
      The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.

      React for Beginners
      If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out this overview of React by Tania Rascia. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done, give the documentation another try!

      React for Designers
      If you’re coming from a design background, these resources are a great place to get started.

      JavaScript Resources
      The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.

      We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.
    </h3>
  </div>
);

const subjectGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.tImage}
      alt="teacher"
    />
    <div>
      <p>{props.tName}</p>
      <p>{props.tEmail}</p>
    </div>
  </div>
);

export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};

export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};

export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  rangePadding: 'None',
  minimum: 12,
  maximum: 20,
  interval: 2,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const subjectGrid = [
  { type: 'checkbox', width: '50' },
  { field: 'id',
  headerText: 'ID',
  width: '150',
  textAlign: 'Center' },
  {
    field: 'subject',
    headerText: 'Subject',
    width: '150',
    textAlign: 'Center' },
    { field: 'credit',
    headerText: 'Credit',
    width: '100',
    textAlign: 'Center' },
    { field: 'tId',
    headerText: 'Teacher ID',
    width: '150',
    textAlign: 'Center', },
  { headerText: 'Teacher',
    width: '150',
    template: subjectGridImage,
    textAlign: 'Center' },
];

export const teacherGrid = [
  { headerText: 'Teacher',
    width: '150',
    template: gridteacherProfile,
    textAlign: 'Center' },
    { field: 'teacherID',
    headerText: 'Teacher ID',
    width: '125',
    textAlign: 'Center' },
  { field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  { field: 'HireDate',
  headerText: 'Gender',
  width: '135',
  format: 'yMd',
  textAlign: 'Center' },
  { field: 'ReportsTo',
    headerText: 'Subject',
    width: '120',
    textAlign: 'Center' }, 
    { field: 'Title',
    headerText: 'Mobile Number',
    width: '170',
    textAlign: 'Center',
  },
  
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <MdSpaceDashboard size={20}/>,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'Teachers',
        icon: <FaChalkboardTeacher size={20}/>,
      },
      {
        name: 'Subjects',
        icon: <AiFillBook size={20}/>,
      },
      {
        name: 'Transcript',
        icon: <MdGrade size={20}/>,
      },
      {
        name: 'Courses',
        icon: <MdClass size={20}/>,
      },
      {
        name: 'Profile',
        icon: <BsFilePerson size={20}/>,
      },
      
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'Calendar',
        icon: <BsFillCalendarEventFill size={20} />,
      },
      {
        name: 'kanban',
        icon: <BsKanban size={20}/>,
      },
      {
        name: 'editor',
        icon: <AiFillEdit size={20}/>,
      },
      
    ],
  },
];

export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#23A9F2',
  },
  {
    name: 'green-theme',
    color: '#1CD150',
  },
  {
    name: 'purple-theme',
    color: '#9185DF',
  },
  {
    name: 'red-theme',
    color: '#E74134',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FF9501',
    name: 'orange-theme',
  },
];

export const transcriptGrid = [
  {
    field: 'id',
    headerText: 'ID',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'name',
    headerText: 'Subject',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  { field: 'credit',
    headerText: 'Credit',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'grade',
    headerText: 'Grade',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Status',
    template: gridGradeStatus,
    field: 'status',
    textAlign: 'Center',
    width: '150',
  },
  {
    field: 'examDate',
    headerText: 'Exam Date',
    width: '120',
    textAlign: 'Center',
  },

  {
    field: 'examTime',
    headerText: 'Exam Time',
    width: '150',
    textAlign: 'Center',
  },
];

export const TeacherData = [
  {
    teacherID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    teacherImage:
    avatar3,
  },
  {
    teacherID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    teacherImage:
      avatar3,
  },
  {
    teacherID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    teacherImage:
      avatar4,
  },
  {
    teacherID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    teacherImage:
      avatar2,
  },
  {
    teacherID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    teacherImage:
      avatar,
  },
  {
    teacherID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    teacherImage:
      avatar,
  },
  {
    teacherID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    teacherImage:
      avatar2,
  },
  {
    teacherID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    teacherImage:
    avatar,
  },
]

export const subjectData = [
  { 
    id: 10248,
    subject: 'PHP',
    credit: 3,
    tEmail: 'daisy@gmail.com',
    tId: 'E74134',
    tName: "Tanha",
    tImage:
      avatar2,
  },
  { 
    id: 10248,
    subject: 'PHP',
    credit: 3,
    tEmail: 'daisy@gmail.com',
    tId: 'E74134',
    tName: "Tanha",
    tImage:
      avatar3,
  },
  { 
    id: 10248,
    subject: 'PHP',
    credit: 3,
    tEmail: 'daisy@gmail.com',
    tId: 'E74134',
    tName: "Tanha",
    tImage:
      avatar3,
  },
  { 
    id: 10248,
    subject: 'PHP',
    credit: 3,
    tEmail: 'daisy@gmail.com',
    tId: 'E74134',
    tName: "Tanha",
    tImage:
      avatar3,
  },
  { 
    id: 10248,
    subject: 'PHP',
    credit: 3,
    tEmail: 'daisy@gmail.com',
    tId: 'E74134',
    tName: "Tanha",
    tImage:
      avatar3,
  },
  { 
    id: 10248,
    subject: 'PHP',
    credit: 3,
    tEmail: 'daisy@gmail.com',
    tId: 'E74134',
    tName: "Tanha",
    tImage:
      avatar3,
  },


];

export const transcriptData = [
  {
    id: 10248,
    name: 'Vinet',
    credit: 3,
    Status: 'not reported',
    StatusBg: '#E74134',
    grade: "",
    examDate: "1402/03/23",
    examTime: "08:30",
  },
  {
    id: 10248,
    name: 'Vinet',
    credit: 3,
    Status: 'not reported',
    StatusBg: '#E74134',
    grade: "",
    examDate: "1402/03/23",
    examTime: "08:30",
  },
  {
    id: 10248,
    name: 'Vinet',
    credit: 3,
    Status: 'not reported',
    StatusBg: '#E74134',
    grade: "",
    examDate: "1402/03/23",
    examTime: "08:30",
  },
  {
    id: 10248,
    name: 'Vinet',
    credit: 3,
    Status: 'not reported',
    StatusBg: '#E74134',
    grade: "",
    examDate: "1402/03/23",
    examTime: "08:30",
  },
  {
    id: 10248,
    name: 'Vinet',
    credit: 3,
    Status: 'not reported',
    StatusBg: '#E74134',
    grade: "",
    examDate: "1402/03/23",
    examTime: "08:30",
  },
  {
    id: 10248,
    name: 'Vinet',
    credit: 3,
    Status: 'pass',
    StatusBg: '#41E734',
    grade: "",
    examDate: "1402/03/23",
    examTime: "08:30",
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Space Center USA',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-18T05:30:00.000Z',
    EndTime: '2021-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    Location: 'Africa',
    StartTime: '2021-01-20T05:30:00.000Z',
    EndTime: '2021-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Best Photography 2021',
    Location: 'London',
    StartTime: '2021-01-21T04:00:00.000Z',
    EndTime: '2021-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: 'Smarter Puppies',
    Location: 'Sweden',
    StartTime: '2021-01-08T04:30:00.000Z',
    EndTime: '2021-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    Location: 'Space Center USA',
    StartTime: '2021-01-06T05:00:00.000Z',
    EndTime: '2021-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Aliens vs Humans',
    Location: 'Research Center of USA',
    StartTime: '2021-01-05T04:30:00.000Z',
    EndTime: '2021-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-19T04:00:00.000Z',
    EndTime: '2021-01-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    Subject: 'Sky Gazers',
    Location: 'Alaska',
    StartTime: '2021-01-22T05:30:00.000Z',
    EndTime: '2021-01-22T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-11T00:00:00.000Z',
    EndTime: '2021-01-11T02:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    Location: 'Space Center USA',
    StartTime: '2021-01-11T11:30:00.000Z',
    EndTime: '2021-01-11T13:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    Location: 'San Fransisco',
    StartTime: '2021-01-14T00:30:00.000Z',
    EndTime: '2021-01-14T02:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T10:30:00.000Z',
    EndTime: '2021-01-14T12:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T08:30:00.000Z',
    EndTime: '2021-01-10T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-12T09:00:00.000Z',
    EndTime: '2021-01-12T10:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    Subject: 'Sky Gazers',
    Location: 'Greenland',
    StartTime: '2021-01-15T09:00:00.000Z',
    EndTime: '2021-01-15T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-16T07:00:00.000Z',
    EndTime: '2021-01-16T09:00:00.000Z',
    CategoryColor: '#7fa900',
  },
];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 12 },
    { x: new Date(2006, 0, 1), y: 14 },
    { x: new Date(2007, 0, 1), y: 17 },
    { x: new Date(2008, 0, 1), y: 14 },
    { x: new Date(2009, 0, 1), y: 15 },
    { x: new Date(2010, 0, 1), y: 18 },
    { x: new Date(2011, 0, 1), y: 18 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 14 },
    { x: new Date(2006, 0, 1), y: 14.5 },
    { x: new Date(2007, 0, 1), y: 16 },
    { x: new Date(2008, 0, 1), y: 15 },
    { x: new Date(2009, 0, 1), y: 15.5 },
    { x: new Date(2010, 0, 1), y: 16 },
    { x: new Date(2011, 0, 1), y: 16 },
  ],

];

export const lineCustomSeries = [
  { dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Student GPA',
    width: '2',
    marker: { visible: true, width: 10, height: 10},
    type: 'Line' },

  { dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'University',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];


