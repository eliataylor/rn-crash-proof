import test1 from './test1.json';
import test2 from './test2.json';
import test3 from './test3.json';
import test4 from './test4.json';

const allLists = {
    '/airport/list': {label: 'Airports', json:test1},
    '/waypoint/list': {label: 'Waypoints', json:test2},
    '/procedure/list': {label: 'Procedures', json:test3},
    '/navaid/list': {label: 'NavAid', json:test4}
};

export default function StaticData(l) {
    return allLists[l];
};
