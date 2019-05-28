function solve(objectData, arrData) {
    let obj = Object.keys(objectData)
        .reduce((acc, cur) => {
            let line = cur;
            if (line === 'Browser Name') {
                acc[line] = objectData[line];
            } else {
                acc[line] = [];
                objectData[line].forEach(tab => acc[line].push(tab));
            }
            return acc;
        }, {});
    arrData.forEach(command => {
        if (command.startsWith('Open')) {
            let site = command.split(' ')[1];
            obj['Open Tabs'].push(site);
            obj['Browser Logs'].push(command);
        } else if (command.startsWith('Close')) {
            let site = command.split(' ')[1];
            let index = obj['Open Tabs'].indexOf(site);
            if (index > -1) {
                obj['Open Tabs'].splice(index, 1);
                obj['Recently Closed'].push(site);
                obj['Browser Logs'].push(command);
            }
        } else if (command.startsWith('Clear')) {
            obj['Open Tabs'] = [];
            obj['Recently Closed'] = [];
            obj['Browser Logs'] = [];
        }
    });
    // console.log(obj)
    let openTabs = obj['Open Tabs'];
    let closedTabs = obj['Recently Closed'];
    let logs = obj['Browser Logs'];
    console.log(obj['Browser Name']);
    console.log(`Open Tabs: ${openTabs.join(', ')}`);
    console.log(`Recently Closed: ${closedTabs.join(', ')}`);
    console.log(`Browser Logs: ${logs.join(', ')}`);
}

// solve(
//     {
//         "Browser Name": "Google Chrome",
//         "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//         "Recently Closed": ["Yahoo", "Gmail"],
//         "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
//     },
//     ['Close Facebook', 'Open StackOverFlow', 'Open Google']
// );

solve(
    {
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);