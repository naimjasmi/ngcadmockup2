import {
	Briefcase,
    ListTask,
    People,
    Bullseye
} from 'react-bootstrap-icons';

export const ProjectsStats = [
    {
       id:1,
       title : "Incident",
       value : 18,
       icon: <Briefcase size={18}/>,
       statInfo: '<span className="text-dark me-2">5</span> Completed' 
    },
    {
        id:2,
        title : "Active Incident",
        value : 8,
        icon: <ListTask size={18}/>,
        statInfo: '<span className="text-dark me-2">5</span> Completed' 
     },
     {
        id:3,
        title : "Units",
        value : 12,
        icon: <People size={18}/>,
        statInfo: '<span className="text-dark me-2">4</span> Assigned' 
     },
     {
        id:4,
        title : "Productivity",
        value : '76%',
        icon: <Bullseye size={18}/>,
        statInfo: '<span className="text-dark me-2">5%</span> Completed' 
     }
];
export default ProjectsStats;
