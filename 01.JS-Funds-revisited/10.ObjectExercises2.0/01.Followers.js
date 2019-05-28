function solve(arr) {
    let obj = arr
        .reduce((acc, cur) => {
            if (cur.startsWith('Welcome')) {
                let line = cur.split(', ');
                let user = line[1];
                if (!acc[user]) {
                    acc[user] = {
                        following: [],
                        followers: [],
                    };
                }
            } else {
                let line = cur.split(' ');
                let activeUser = line[0];
                let followedUser = line[2];

                if ((acc[activeUser] && acc[followedUser]) && activeUser !== followedUser) {
                    if (!acc[followedUser]['followers'].includes(activeUser)) {
                        acc[followedUser]['followers'].push(activeUser);
                    }
                    if (!acc[activeUser]['following'].includes(followedUser)) {
                        acc[activeUser]['following'].push(followedUser);
                    }
                }
            }
            return acc;
        }, {});

    let sorted = Object.entries(obj).sort((a, b) => b[1].followers.length - a[1].followers.length || b[0].localeCompare(a[0]));
    let mostFollowed = sorted[0];
    console.log(`Total users registered: ${sorted.length}`);
    console.log(`1. ${mostFollowed[0]} : ${mostFollowed[1].following.length} following, ${mostFollowed[1].followers.length} followers`);
    let followers =( mostFollowed[1].followers).sort((a, b) => a.localeCompare(b));
    followers.forEach(f => console.log(`*  ${f}`));
    let others = Object.entries(sorted.slice(1));
    others.forEach(([e1, e2]) => console.log(`${+e1 + 2}. ${e2[0]} : ${e2[1].following.length} following, ${e2[1].followers.length} followers`))
}

solve([
    'Welcome, EmilConrad',
    'Welcome, VenomTheDoctor',
    'Welcome, Saffrona',
    'Saffrona followed EmilConrad',
    'Saffrona followed VenomTheDoctor',
    'EmilConrad followed VenomTheDoctor',
    'VenomTheDoctor followed VenomTheDoctor',
    'Saffrona followed EmilConrad',
]);