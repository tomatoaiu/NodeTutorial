const fs = require(`fs`); 

// const writeFile = async () => {
//     await fs.writeFile("a.txt", "aaaa");
// }

const main = () => {
    console.time("normal");
    readdir()
    .then(async(result) => {
        for (const path of result) {
            await readFile(path);
        }
    }).then(() => {
        console.log("-----------------------------");
        console.timeEnd("normal");
    });
}

const main2 = () => {
    console.time("para");
    readdir()
    .then(async(result) => {
        await Promise.all(result.map(async (path) => await readFile(path)))
        .then(() => {
            console.log("-----------------------------");
            console.timeEnd("para");
        });
    });
}

const readdir = (path = ".") => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, result) => {
            resolve(result);
        });
    });
}
const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, result) => {
            resolve(result);
        });
    }).then((txt) => {
        console.log(path);
        return path;
    });
}

const getStat = (path) => {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if(err) {
                reject(err);
            }
            resolve(stats);
        });
    })
}

const ignore = ["node_modules", ".git", ".DS_Store", ".gitignore", ".vscode"];

const reReadDir1 = async (filePath) => {
    const stat = await getStat(filePath);
    if(!stat.isDirectory()){
        await readFile(filePath);
    } else {
        const paths = await readdir(`${filePath}`);
        for (const path of paths) {
            if(ignore.includes(path)) continue;
            await reReadDir1(`${filePath}/${path}`);
        }
    }
}
const reReadDir2 = async (filePath) => {
    const stat = await getStat(filePath);
    if(!stat.isDirectory()){
        return await readFile(filePath);
    } else {
        const paths = await readdir(`${filePath}`);
        await Promise.all(paths.map(async (path) => {
            if(ignore.includes(path)) return;
            return await reReadDir1(`${filePath}/${path}`);
        }));
    }
}

const main3 = async () => {
    console.time("main3");
    const res = await reReadDir1(".");
    console.log(res);
    console.timeEnd("main3");
}


const main4 = async () => {
    console.time("main4");
    const res = await reReadDir2(".");
    console.log(res);
    console.timeEnd("main4");
}
main();
main2();

main3();
main4();