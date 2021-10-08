import test1 from './test1.json';

const allLists = {
    '/airport/list': {label: 'Airports', json:test1},
    '/waypoint/list': {label: 'Waypoints', json:test1},
    '/procedure/list': {label: 'Procedures', json:test1},
    '/navaid/list': {label: 'NavAid', json:test1}
};

export default function StaticData(l) {
    return allLists[l];
};
