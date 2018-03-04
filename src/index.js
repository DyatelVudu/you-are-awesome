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

const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
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
