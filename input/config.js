const fs = require("fs");

const dir = __dirname;
const width = 1000;
const height = 1000;
const rarity = [
    {key: '', val: 'original'},
    {key: '_r', val: 'rare'},
    {key: '_sr', val: 'super rare'},
]


const addRarity = (_str) => {
    let itemRarity;
    rarity.forEach(r => {
        if(_str.includes(r.key)) {
            itemRarity = r.val;
        }
    });
    return itemRarity;
}

const cleanName = (_str) => {
    let name = _str.slice(0, -4);
    rarity.forEach(r => {
        name = name.replace(r.key, "");
    });
    return name;
}

const getElements = (path) => {
    return fs
        .readdirSync(path)
        .filter((item) => !/(^|\/)\.[^\/|.]/g.test(item))
        .map((i, idx) => {
            return {
                id: idx +1,
                name: cleanName(i),
                fileName: i,
                rarity: addRarity(i)
            }
        })
}

const layers = [
    {
        id: 1,
        name: "background",
        location: `${dir}/background/`,
        elements: getElements(`${dir}/background/`),
        position: { x:0, y:0 },
        size: { width, height },
    },
    {
        id: 2,
        name: "arms",
        location: `${dir}/arms/`,
        elements: getElements(`${dir}/arms/`),
        position: { x:0, y:0 },
        size: { width, height },
    },
    {
        id: 3,
        name: "head",
        location: `${dir}/head/`,
        elements: getElements(`${dir}/head/`),
        position: { x:0, y:0 },
        size: { width, height },
    },
    {
        id: 4,
        name: "legs",
        location: `${dir}/legs/`,
        elements: getElements(`${dir}/legs/`),
        position: { x:0, y:0 },
        size: { width, height },
    },
    {
        id: 5,
        name: "body",
        location: `${dir}/body/`,
        elements: getElements(`${dir}/body/`),
        position: { x:0, y:0 },
        size: { width, height },
    },
];

module.exports = { layers, width, height };