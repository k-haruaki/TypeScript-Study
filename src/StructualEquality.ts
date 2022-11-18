type IdDisplay = {
    id: string,
    display: string
}

const list: IdDisplay[] = [
    {
        id: 'foo',
        display: 'Foo Select'
    },
    {
        id: 'bar',
        display: 'Bar Select'
    },
]

// listをそのまま表示
console.log(list);

// 格納されている全てのIDを表示
list.map(value => {
    console.log(value.id);
})

// 格納されている全てのDisplayを表示
list.map(value => {
    console.log(value.display);
})

// 格納されているIDの配列番号を表示
const fooIndex = list.map(i => i.id).indexOf('bar');
console.log(fooIndex);

