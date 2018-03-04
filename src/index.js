const createEnumerableProperty = (property) => {
     return property;
};

const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property, {
        enumerable: false,
        value: 'value'
    });
    return property;
};

const createProtoMagicObject = () => {
    let a = () => {};
    a.prototype = a.__proto__;
    return a;
};

let count1 = 0;
Function.prototype.valueOf = function(){
    return count1;
}
const incrementor = () => {
    count1 ++;
    return incrementor
};

let count2 = 0;
const asyncIncrementor = () => {
    return new Promise((resolve) => {
        count2++;
        return resolve(count2);
    })
};
const createIncrementer = () => {};
const returnBackInSecond = (arg) => {};
const getDeepPropertiesCount = (obj) => {};
const createSerializedObject = () => {
    return Object(1);
};
const toBuffer = () => {};

const sortByProto = (array) => {
    return array.map( (item) => { return item.__proto__; }).sort( (x,y) => { return x - y; });
};


exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
